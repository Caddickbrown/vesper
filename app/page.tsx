import { BriefForm } from "./BriefForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/[0.04] bg-[#090909]/80 backdrop-blur-md">
        <span className="text-sm font-semibold tracking-widest uppercase text-white/80">Vesper</span>
        <a
          href="#brief"
          className="text-sm px-4 py-2 rounded-md border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-150"
        >
          Start a project
        </a>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-8 max-w-4xl mx-auto">
        <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-8">Web tools, built to order</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white mb-8">
          From brief<br />to live in<br />
          <span className="text-white/30">48 hours.</span>
        </h1>
        <p className="text-lg text-white/40 max-w-md leading-relaxed mb-12">
          Custom web tools, dashboards, and applications — properly built and shipped fast. No agencies, no sprints, no drag.
        </p>
        <a
          href="#brief"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-white/90 transition-all duration-150"
        >
          Tell us what you need
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* How it works */}
      <section className="px-8 py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-16">How it works</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", title: "Brief us", body: "Tell us what you need in a few sentences. No decks, no calls, no discovery phases." },
              { n: "02", title: "We build", body: "We design and build your tool. Most projects are done in under 48 hours." },
              { n: "03", title: "You get the keys", body: "Your tool goes live. We hand over the repo and stay on for support if you need it." },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-xs font-mono text-white/20 mb-4">{s.n}</p>
                <h3 className="text-lg font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-8 py-24 border-t border-white/[0.04]" id="pricing">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-16">Pricing</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-xl p-6 border ${
                  p.highlight
                    ? "border-white/20 bg-white/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-base font-medium">{p.name}</h3>
                  {p.highlight && (
                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Popular</span>
                  )}
                </div>
                <p className="text-3xl font-semibold mb-1">{p.price}</p>
                <p className="text-xs font-mono text-white/30 mb-4">{p.delivery}</p>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#brief"
                  className={`block text-center text-sm py-2.5 rounded-md font-medium transition-all duration-150 ${
                    p.highlight
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief form */}
      <section className="px-8 py-24 border-t border-white/[0.04]" id="brief">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-4">Start a project</p>
          <h2 className="text-3xl font-semibold mb-3">Tell us what you need</h2>
          <p className="text-sm text-white/40 mb-10">A few sentences is enough. We'll reply within a few hours.</p>
          <BriefForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xs font-mono text-white/20 tracking-widest uppercase">Vesper</span>
          <span className="text-xs text-white/20">Built fast. Shipped properly.</span>
        </div>
      </footer>
    </main>
  );
}
