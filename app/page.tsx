import { BriefForm } from "./BriefForm";

const check = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const arrow = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const plans = [
  {
    name: "Page",
    price: "£299",
    delivery: "Live in 24 hours",
    desc: "A landing page that does its job. Clear, fast, and professional.",
    features: ["Custom design", "Mobile-first", "Deployed to your domain", "Source code included"],
  },
  {
    name: "Tool",
    price: "£999",
    delivery: "Live in 48 hours",
    desc: "A working web application. Form to function, with real data behind it.",
    features: ["Full-stack application", "Admin or user interface", "Deployed and live", "Source code included"],
    highlight: true,
  },
  {
    name: "Retainer",
    price: "£249/mo",
    delivery: "Ongoing, month to month",
    desc: "Monthly development time on demand. Changes, features, fixes — just ask.",
    features: ["Up to 20hrs/month", "Priority turnaround", "Covers any project", "Cancel any time"],
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 2rem",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(9,9,9,0.85)", backdropFilter: "blur(12px)",
      }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
          Vesper
        </span>
        <a href="#brief" style={{
          fontSize: "0.875rem", padding: "0.5rem 1rem", borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)",
          textDecoration: "none", transition: "all 0.15s",
        }}>
          Start a project
        </a>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div className="container">
          <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem" }}>
            Web tools, built to order
          </p>
          <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#fff", marginBottom: "2rem" }}>
            From brief<br />to live in<br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>48 hours.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", maxWidth: "32rem", lineHeight: 1.7, marginBottom: "3rem" }}>
            Custom web tools, dashboards, and applications — properly built and shipped fast. No agencies, no sprints, no drag.
          </p>
          <a href="#brief" className="btn-primary">
            Tell us what you need {arrow}
          </a>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4rem" }}>
            How it works
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
            {[
              { n: "01", title: "Brief us", body: "Tell us what you need in a few sentences. No decks, no calls, no discovery phases." },
              { n: "02", title: "We build", body: "We design and build your tool. Most projects are done in under 48 hours." },
              { n: "03", title: "You get the keys", body: "Your tool goes live. We hand over the repo and stay on for support if you need it." },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.2)", marginBottom: "1.25rem" }}>{s.n}</p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }} id="pricing">
        <div className="container">
          <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4rem" }}>
            Pricing
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", alignItems: "start" }}>
            {plans.map((p) => (
              <div key={p.name} style={{
                borderRadius: "12px", padding: "1.75rem",
                border: p.highlight ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
                background: p.highlight ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 500 }}>{p.name}</h3>
                  {p.highlight && <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Popular</span>}
                </div>
                <p style={{ fontSize: "2.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>{p.price}</p>
                <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>{p.delivery}</p>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem", flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                      {check} {f}
                    </li>
                  ))}
                </ul>
                <a href="#brief" style={{
                  display: "block", textAlign: "center", fontSize: "0.875rem",
                  padding: "0.75rem", borderRadius: "6px", fontWeight: 500,
                  textDecoration: "none", transition: "opacity 0.15s",
                  ...(p.highlight
                    ? { background: "#fff", color: "#000" }
                    : { border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }
                  ),
                }}>
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }} id="brief">
        <div className="container">
          <div style={{ maxWidth: "36rem" }}>
            <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Start a project
            </p>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>Tell us what you need</h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "2.5rem" }}>
              A few sentences is enough. We'll reply within a few hours.
            </p>
            <BriefForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "3rem 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Vesper</span>
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>Built fast. Shipped properly.</span>
        </div>
      </footer>
    </main>
  );
}
