"use client";

import { useState } from "react";

export function BriefForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", package: "", brief: "" });

  const inputClass = "bg-white/[0.03] border border-white/[0.08] rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors w-full";

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
      <div className="py-16 text-center">
        <p className="text-2xl font-semibold mb-3">Brief received.</p>
        <p className="text-sm text-white/40">We'll be in touch within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <select
        value={form.package}
        onChange={e => setForm(f => ({ ...f, package: e.target.value }))}
        className={`${inputClass} text-white/60 appearance-none`}
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
        className={`${inputClass} resize-none`}
      />
      {state === "error" && (
        <p className="text-sm text-red-400">Something went wrong — try emailing us directly.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-white text-black text-sm font-medium py-3 rounded-md hover:bg-white/90 transition-all duration-150 disabled:opacity-50"
      >
        {state === "sending" ? "Sending…" : "Send brief"}
      </button>
    </form>
  );
}
