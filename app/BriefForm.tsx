"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "6px",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  color: "#fff",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.15s",
};

export function BriefForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", package: "", brief: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div style={{ padding: "4rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>Brief received.</p>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)" }}>We'll be in touch within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={inputStyle}
        />
      </div>
      <select
        value={form.package}
        onChange={e => setForm(f => ({ ...f, package: e.target.value }))}
        style={{ ...inputStyle, color: form.package ? "#fff" : "rgba(255,255,255,0.3)", appearance: "none" }}
      >
        <option value="">Which package? (optional)</option>
        <option value="Page — £299">Page — £299</option>
        <option value="Tool — £999">Tool — £999</option>
        <option value="Retainer — £249/mo">Retainer — £249/mo</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>
      <textarea
        placeholder="What do you need built? The more specific, the better."
        rows={5}
        required
        value={form.brief}
        onChange={e => setForm(f => ({ ...f, brief: e.target.value }))}
        style={{ ...inputStyle, resize: "none" }}
      />
      {state === "error" && (
        <p style={{ fontSize: "0.875rem", color: "#f87171" }}>Something went wrong — try emailing us directly.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        style={{
          width: "100%",
          background: "#fff",
          color: "#000",
          fontSize: "0.875rem",
          fontWeight: 500,
          padding: "0.875rem",
          borderRadius: "6px",
          border: "none",
          cursor: state === "sending" ? "not-allowed" : "pointer",
          opacity: state === "sending" ? 0.5 : 1,
          transition: "opacity 0.15s",
          fontFamily: "inherit",
        }}
      >
        {state === "sending" ? "Sending…" : "Send brief"}
      </button>
    </form>
  );
}
