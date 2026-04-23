// Core42 — Mobile detail templates (Blog article, Whitepaper, Webinar upcoming, Webinar on-demand, Case study)
// 402px viewport, iPhone-friendly. Reuses window.BLOG_ARTICLES / RES_WHITEPAPERS / RES_WEBINARS / RES_CASE_STUDIES.

// ── Shared mobile shell ────────────────────────────────────────────────
const MTopBar = () => (
  <div style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--c42-paper)", borderBottom: "1px solid var(--c42-paper-edge)", paddingTop: 60 }}>
    <div style={{ padding: "10px 16px", background: "var(--c42-paper-2)", fontSize: 11, color: "var(--c42-forest-ink)", textAlign: "center", lineHeight: "16px" }}>
      New AI & cloud capabilities <a href="#" style={{ color: "var(--c42-orange)", textDecoration: "none", fontWeight: 500 }}>View →</a>
    </div>
    <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--c42-forest)" }}>
      <Wordmark variant="light" size={24} />
      <button style={{ background: "transparent", border: 0, padding: 8, cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}>
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#fff" }} />
      </button>
    </div>
  </div>
);

const MFooter = () => (
  <footer style={{ background: "var(--c42-forest)", color: "#fff", padding: "40px 20px 60px" }}>
    <Wordmark variant="light" size={28} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 24px", marginTop: 32, fontSize: 12 }}>
      {[
        ["Products", ["AI Cloud", "Compass", "HPC"]],
        ["Resources", ["Blog", "Docs", "Papers"]],
        ["Company", ["About", "Careers", "Contact"]],
        ["Connect", ["Twitter", "LinkedIn", "Github"]],
      ].map(([h, items]) => (
        <div key={h}>
          <h4 style={{ margin: "0 0 10px", fontSize: 10, fontWeight: 700, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</h4>
          {items.map(i => (
            <a key={i} href="#" style={{ display: "block", color: "rgba(241,237,232,0.8)", textDecoration: "none", padding: "3px 0", fontSize: 13 }}>{i}</a>
          ))}
        </div>
      ))}
    </div>
    <hr style={{ border: 0, borderTop: "1px solid rgba(241,237,232,0.2)", margin: "28px 0 14px" }} />
    <div style={{ fontSize: 10, color: "rgba(241,237,232,0.6)" }}>© Core42 · 2026</div>
  </footer>
);

const MShell = ({ children }) => (
  <div className="c42-scope" style={{ background: "var(--c42-paper)", width: "100%", fontSize: 15 }}>
    <MTopBar />
    {children}
    <MFooter />
  </div>
);

const MEyebrow = ({ children, color = "var(--c42-orange)" }) => (
  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color, textTransform: "uppercase", borderTop: `1px solid ${color}`, paddingTop: 8, marginBottom: 14, display: "inline-block" }}>{children}</div>
);

// Gated form (mobile) — compact stacked fields
const MGateForm = ({ title, subtitle, cta = "Download", variant = "dark", includeConsent = false }) => {
  const dark = variant === "dark";
  const fieldBg = dark ? "rgba(0,0,0,0.25)" : "#fff";
  const fieldBorder = dark ? "1px solid rgba(241,237,232,0.18)" : "1px solid rgba(25,28,26,0.15)";
  const fieldColor = dark ? "#fff" : "var(--c42-forest-ink)";
  const labelColor = dark ? "rgba(241,237,232,0.55)" : "rgba(25,28,26,0.55)";
  const subColor = dark ? "rgba(241,237,232,0.7)" : "rgba(25,28,26,0.7)";
  return (
    <div style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: dark ? "1px solid rgba(241,237,232,0.15)" : "1px solid var(--c42-paper-edge)", padding: 22, color: dark ? "#fff" : "var(--c42-forest-ink)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 10 }}>Register</div>
      <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 8px" }}>{title}</h3>
      {subtitle && <p style={{ fontSize: 13, lineHeight: "20px", color: subColor, margin: "0 0 20px" }}>{subtitle}</p>}
      <div style={{ display: "grid", gap: 10 }}>
        {[["Work email", "you@company.com"], ["Full name", "Your name"], ["Company", "Company name"], ["Role", "Your role"]].map(([l, ph]) => (
          <div key={l}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 9, color: labelColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{l}</label>
            <input placeholder={ph} style={{ width: "100%", padding: "11px 12px", background: fieldBg, border: fieldBorder, color: fieldColor, fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
        ))}
      </div>
      {includeConsent && (
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 14, cursor: "pointer" }}>
          <input type="checkbox" style={{ marginTop: 2, width: 14, height: 14, accentColor: "var(--c42-orange)", flexShrink: 0 }} />
          <span style={{ fontSize: 10, lineHeight: "16px", color: subColor }}>
            I agree to the <a href="#" style={{ color: "var(--c42-orange)", textDecoration: "underline" }}>Privacy Policy</a> and consent to Core42 processing my information.
          </span>
        </label>
      )}
      <button style={{ width: "100%", marginTop: 16, padding: "14px 16px", background: "var(--c42-orange)", color: "#fff", border: "none", fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>{cta} →</button>
    </div>
  );
};

// ═══ Mobile Blog article ═══════════════════════════════════════════════
const MobileBlogArticlePage = () => {
  const article = (window.BLOG_ARTICLES || []).find(a => a.id === 1);
  if (!article) return null;
  const related = (window.BLOG_ARTICLES || []).filter(a => a.id !== article.id).slice(0, 3);

  return (
    <MShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "32px 20px 28px" }}>
        <MEyebrow>Blog / {article.category}</MEyebrow>
        <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: "34px", letterSpacing: "-0.015em", margin: "0 0 16px" }}>{article.title}</h1>
        <p style={{ fontSize: 15, lineHeight: "22px", color: "rgba(241,237,232,0.85)", margin: "0 0 20px" }}>{article.excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(241,237,232,0.2)" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--c42-mint)", color: "var(--c42-forest-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>{article.author.split(" ").map(x => x[0]).slice(0, 2).join("")}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{article.author}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(241,237,232,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{article.date} · {article.readTime}</div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div style={{ aspectRatio: "16/10", background: `url(${article.img}) center/cover` }} />

      {/* Body */}
      <article style={{ background: "#fff", padding: "32px 20px" }}>
        <p style={{ fontSize: 17, lineHeight: "27px", fontWeight: 500, color: "var(--c42-forest-ink)", margin: "0 0 20px" }}>
          A new developer layer sits atop the Core42 AI Cloud — giving teams in regulated industries a governed runtime to deploy language models without surrendering data residency or control.
        </p>
        {[
          "For three years, we've watched enterprises in banking, health, and the public sector fight the same two-front war: adopt generative AI fast enough to matter, but don't let a single byte of regulated data cross a border that shouldn't be crossed.",
          "Compass 2.0 is our answer. It sits as a governed application layer on top of the AI Cloud, with region pinning enforced per-request, a policy object that every inference carries, and audit logs that are designed for — not retrofitted to — regulators.",
          "What's different in 2.0 is the degree of control we now hand to engineering teams: bring-your-own model, bring-your-own embedding, and a policy interface that maps cleanly to the controls your CISO already uses."
        ].map((p, i) => (
          <p key={i} style={{ fontSize: 15, lineHeight: "25px", color: "rgba(25,28,26,0.85)", margin: "0 0 18px" }}>{p}</p>
        ))}

        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: "32px 0 16px", color: "var(--c42-forest-ink)" }}>What's in the 2.0 release</h2>
        <ul style={{ margin: "0 0 20px", paddingLeft: 20, fontSize: 15, lineHeight: "25px", color: "rgba(25,28,26,0.85)" }}>
          <li style={{ marginBottom: 8 }}>Region-pinned model access across UAE, EU, and US-regulated zones</li>
          <li style={{ marginBottom: 8 }}>Policy-bound agents with human-in-the-loop checkpoints</li>
          <li style={{ marginBottom: 8 }}>Audit logs that map 1:1 to ISO, NIST, and local frameworks</li>
          <li style={{ marginBottom: 8 }}>Bring-your-own model support for on-prem and partner weights</li>
        </ul>

        {/* Pull quote */}
        <blockquote style={{ margin: "32px 0", padding: "20px 0", borderTop: "2px solid var(--c42-orange)", borderBottom: "1px solid var(--c42-paper-edge)", fontSize: 20, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>
          "The architecture holds up under scrutiny from the people who actually audit it — not just the people who buy it."
        </blockquote>
      </article>

      {/* Product CTA */}
      <section style={{ background: "var(--c42-paper)", padding: "28px 20px" }}>
        <div style={{ background: "#fff", border: "1px solid var(--c42-paper-edge)", padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 110, height: 110, borderRadius: "50%", background: "var(--c42-mint)", opacity: 0.35 }} />
          <div style={{ position: "relative" }}>
            <MEyebrow>Try Compass</MEyebrow>
            <h4 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", lineHeight: "26px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>Ship governed AI in your region.</h4>
            <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.72)", margin: "0 0 16px" }}>
              Region-pinned model access, policy-bound agents, and audit-ready logs. See Compass on your data in 30 minutes.
            </p>
            <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>BOOK A DEMO →</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "var(--c42-forest-ink)", color: "#fff", padding: "36px 20px" }}>
        <MEyebrow>Newsletter</MEyebrow>
        <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 10px", lineHeight: "28px" }}>The sovereign stack, every Friday.</h4>
        <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.75)", margin: "0 0 16px" }}>Weekly digest on what's shipping in governed AI for public sector and regulated enterprise.</p>
        <input placeholder="you@company.com" style={{ width: "100%", boxSizing: "border-box", height: 44, padding: "0 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 14, marginBottom: 10 }} />
        <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>SUBSCRIBE →</a>
      </section>

      {/* Related */}
      <section style={{ background: "var(--c42-paper-2)", padding: "36px 20px 40px" }}>
        <MEyebrow>Keep reading</MEyebrow>
        <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.015em", margin: "0 0 20px", color: "var(--c42-forest-ink)" }}>Related from the blog</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {related.map(a => (
            <a key={a.id} href="#" style={{ textDecoration: "none", color: "inherit", background: "#fff", display: "block" }}>
              <div style={{ aspectRatio: "16/10", background: `url(${a.img}) center/cover` }} />
              <div style={{ padding: "18px 18px 20px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-orange)", marginBottom: 8 }}>{a.category}</div>
                <h4 style={{ fontSize: 17, fontWeight: 700, lineHeight: "22px", margin: "0 0 8px", letterSpacing: "-0.005em", color: "var(--c42-forest-ink)" }}>{a.title}</h4>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{a.date} · {a.readTime}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </MShell>
  );
};

// ═══ Mobile Whitepaper ═════════════════════════════════════════════════
const MobileWhitepaperDetailPage = () => {
  const wp = (window.RES_WHITEPAPERS || [])[0] || {
    title: "Architecting sovereign AI: a reference model",
    topic: "Infrastructure", pages: 48, date: "Apr 2026",
    img: "assets/intelligence-grid.png",
    excerpt: "A technical reference for government and regulated enterprise architects."
  };
  const toc = [
    "Executive summary",
    "The sovereignty imperative in 2026",
    "Reference architecture overview",
    "Compute layer: regional compute fabrics",
    "Data layer: residency, classification, access",
    "Application layer: governed developer tools",
    "Control plane and audit surface",
    "Appendix: Control mappings (ISO / NIST / GDPR)",
  ];

  return (
    <MShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "32px 20px 28px" }}>
        <MEyebrow>Whitepaper / {wp.topic}</MEyebrow>
        <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: "34px", letterSpacing: "-0.02em", margin: "0 0 16px" }}>{wp.title}</h1>
        <p style={{ fontSize: 15, lineHeight: "22px", color: "rgba(241,237,232,0.85)", margin: "0 0 24px" }}>
          {wp.excerpt} A complete reference across the compute, data, and application layers.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px 20px", paddingTop: 18, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          {[["Published", wp.date], ["Length", `${wp.pages} pages`], ["Format", "PDF · ENG"], ["Audience", "Architects"]].map(([l, v]) => (
            <div key={l}>
              <div style={{ color: "rgba(241,237,232,0.55)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
              <div style={{ color: "#fff" }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gated form */}
      <section style={{ background: "var(--c42-forest)", padding: "0 20px 36px" }}>
        <MGateForm title="Download the whitepaper" subtitle="48 pages · PDF · Instant download. We'll also email a copy." cta="Download PDF" variant="dark" includeConsent />
      </section>

      {/* Body */}
      <section style={{ background: "var(--c42-paper)", padding: "36px 20px" }}>
        <MEyebrow color="var(--c42-orange)">Inside this report</MEyebrow>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.015em", margin: "0 0 16px", color: "var(--c42-forest-ink)" }}>
          A complete architectural reference for teams deploying sovereign AI.
        </h2>
        <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.75)", margin: "0 0 28px" }}>
          Drawn from three years of deployments across ministries, national health systems, and tier-one banks — control mappings, sample policies, and deployment diagrams included.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32, padding: "20px 0", borderTop: "1px solid var(--c42-paper-edge)", borderBottom: "1px solid var(--c42-paper-edge)" }}>
          {[["48pp", "Chapters"], ["12", "Patterns"], ["6", "Frameworks"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c42-forest-ink)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c42-gray-60)", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 14px" }}>Table of contents</h3>
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {toc.map((t, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "baseline", padding: "11px 0", borderBottom: "1px solid var(--c42-paper-edge)", fontSize: 14, color: "var(--c42-forest-ink)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ flex: 1 }}>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Inside the PDF */}
      <section style={{ background: "var(--c42-forest-ink)", color: "#fff", padding: "28px 20px" }}>
        <MEyebrow>Inside the PDF</MEyebrow>
        {[
          "Executive summary (4 pages)",
          "Reference architecture (12 pages)",
          "Control mappings: ISO / NIST / GDPR",
          "Six deployment patterns",
          "Sample policy YAML",
        ].map(t => (
          <div key={t} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(241,237,232,0.15)", fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.85)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c42-mint)" strokeWidth="2.2" style={{ flexShrink: 0, marginTop: 3 }}><path d="M5 12l5 5 9-11"/></svg>
            {t}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "var(--c42-paper-2)", padding: "28px 20px 40px" }}>
        <div style={{ background: "#fff", border: "1px solid var(--c42-paper-edge)", padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 130, height: 130, borderRadius: "50%", background: "var(--c42-mint)", opacity: 0.4 }} />
          <div style={{ position: "relative" }}>
            <MEyebrow>See it live</MEyebrow>
            <h4 style={{ fontSize: 20, fontWeight: 700, lineHeight: "26px", margin: "0 0 10px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>Put this reference into production.</h4>
            <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.72)", margin: "0 0 16px" }}>
              Book a 30-minute working session. We'll map the architecture to your compliance requirements.
            </p>
            <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>BOOK A SESSION →</a>
          </div>
        </div>
      </section>
    </MShell>
  );
};

// ═══ Mobile Webinar — Upcoming ═════════════════════════════════════════
const MobileWebinarUpcomingPage = () => {
  const w = (window.RES_WEBINARS || []).find(x => x.status === "Upcoming") || {
    title: "Inside Compass 2.0: governed model access for enterprise teams",
    speaker: "Core42 Product Team", date: "02 May 2026", duration: "45 min",
    img: "assets/mission-brand.jpg"
  };
  const agenda = [
    ["00:00", "Welcome & context"],
    ["05:00", "Live demo: region-pinned model access"],
    ["15:00", "Policy objects in practice"],
    ["28:00", "Human checkpoints for agent runs"],
    ["38:00", "Q&A"],
  ];
  const speakers = [
    { name: "Maya Al-Farsi", role: "VP Product, Compass", initials: "MA" },
    { name: "Devon Walker", role: "Solutions Architect", initials: "DW" },
  ];

  return (
    <MShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "28px 20px 24px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "5px 12px", background: "var(--c42-mint)", color: "var(--c42-forest-ink)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)", borderRadius: 28 }}>Upcoming</span>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase" }}>Webinar / Live</div>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: "32px", letterSpacing: "-0.02em", margin: "0 0 14px" }}>{w.title}</h1>
        <p style={{ fontSize: 14, lineHeight: "21px", color: "rgba(241,237,232,0.85)", margin: "0 0 22px" }}>
          A 45-minute working session with the team building Compass. Live demo of region-pinned model access + Q&A.
        </p>

        {/* Countdown */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 10 }}>Starts in</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {[["08", "Days"], ["14", "Hrs"], ["32", "Min"], ["09", "Sec"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center", padding: "12px 4px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(241,237,232,0.12)" }}>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(241,237,232,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px 20px", paddingTop: 18, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          {[["When", w.date], ["Time", "15:00 GST"], ["Duration", w.duration], ["Format", "Live + Q&A"]].map(([l, v]) => (
            <div key={l}>
              <div style={{ color: "rgba(241,237,232,0.55)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
              <div style={{ color: "#fff", letterSpacing: "0.04em" }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gated form */}
      <section style={{ background: "var(--c42-forest)", padding: "0 20px 36px" }}>
        <MGateForm title="Save your seat" subtitle="Register once and we'll send a calendar invite, pre-reads, and the recording." cta="Register now" variant="dark" includeConsent />
      </section>

      {/* What you'll learn */}
      <section style={{ background: "var(--c42-paper)", padding: "36px 20px" }}>
        <MEyebrow>What you'll learn</MEyebrow>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.015em", margin: "0 0 16px", color: "var(--c42-forest-ink)" }}>
          Run foundation models where the regulators can see them.
        </h2>
        <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.75)", margin: "0 0 24px" }}>
          Hear directly from the team that built Compass about the architectural choices behind governed model access.
        </p>

        {[
          ["Region pinning in practice", "Enforce residency per model and per call."],
          ["The policy object", "What every inference request carries."],
          ["Human checkpoints", "Approval gates without the bureaucracy."],
          ["Observability for AI", "What to log, what to redact, what to explain."],
        ].map(([t, d]) => (
          <div key={t} style={{ padding: 16, background: "#fff", border: "1px solid var(--c42-paper-edge)", marginBottom: 10 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--c42-forest-ink)", letterSpacing: "-0.005em", marginBottom: 6 }}>{t}</div>
            <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.7)", margin: 0 }}>{d}</p>
          </div>
        ))}
      </section>

      {/* Agenda */}
      <section style={{ background: "var(--c42-paper-2)", padding: "32px 20px" }}>
        <MEyebrow>Agenda</MEyebrow>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 16px" }}>Session structure</h3>
        <div style={{ borderTop: "1px solid var(--c42-paper-edge)" }}>
          {agenda.map(([t, label], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--c42-paper-edge)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: "20px", color: "var(--c42-forest-ink)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section style={{ background: "var(--c42-paper)", padding: "32px 20px 40px" }}>
        <MEyebrow>Speakers</MEyebrow>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 16px" }}>Who's presenting</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {speakers.map(s => (
            <div key={s.name} style={{ padding: 16, background: "#fff", border: "1px solid var(--c42-paper-edge)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{s.initials}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--c42-forest-ink)" }}>{s.name}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MShell>
  );
};

// ═══ Mobile Webinar — On-demand ════════════════════════════════════════
const MobileWebinarOnDemandPage = () => {
  const w = (window.RES_WEBINARS || []).find(x => x.status === "On-demand") || (window.RES_WEBINARS || [])[2] || {
    title: "Running sovereign AI at national scale",
    speaker: "CTO, Core42", date: "24 Mar 2026", duration: "60 min",
    img: "assets/about-hero.jpg"
  };
  const [unlocked, setUnlocked] = React.useState(false);
  const chapters = [
    ["00:00", "Intro & scope of 'sovereign'"],
    ["04:12", "The ten-region operator"],
    ["12:48", "Data residency architecture"],
    ["22:30", "Identity & jurisdictional control"],
    ["34:05", "Operating across boundaries"],
    ["42:18", "Cost, capacity, the three-year plan"],
    ["51:40", "Q&A"],
  ];

  return (
    <MShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "28px 20px 24px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "5px 12px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(241,237,232,0.3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)", borderRadius: 28 }}>On-demand</span>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase" }}>Webinar / Recording</div>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: "32px", letterSpacing: "-0.02em", margin: "0 0 14px" }}>{w.title}</h1>
        <p style={{ fontSize: 14, lineHeight: "21px", color: "rgba(241,237,232,0.85)", margin: "0 0 20px" }}>
          A candid 60-minute conversation with Core42's CTO on what breaks — and what holds — when sovereign AI reaches national scale.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "8px 28px", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          {[["Recorded", w.date], ["Runtime", w.duration], ["Format", "Captions"]].map(([l, v]) => (
            <div key={l}>
              <div style={{ color: "rgba(241,237,232,0.55)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>{l}</div>
              <div style={{ color: "#fff" }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Player with gate */}
      <section style={{ background: "var(--c42-forest)", padding: "0 20px 28px" }}>
        <div style={{ position: "relative", aspectRatio: "16/9", background: "#000", overflow: "hidden" }}>
          <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: unlocked ? 1 : 0.55, filter: unlocked ? "none" : "blur(6px)" }} />
          {unlocked ? (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                <svg width="22" height="22" viewBox="0 0 30 30"><path d="M10 6 L24 15 L10 24 Z" fill="var(--c42-forest-ink)" /></svg>
              </div>
            </div>
          ) : (
            <div style={{ position: "absolute", inset: 0, background: "rgba(24,45,33,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
              </div>
            </div>
          )}
          {unlocked && (
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 14px 10px", background: "linear-gradient(transparent, rgba(0,0,0,0.85))", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ letterSpacing: "0.06em" }}>12:04 / {w.duration}</div>
                <div style={{ flex: 1, height: 3, background: "rgba(255,255,255,0.2)", borderRadius: 2, position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "20%", background: "var(--c42-orange)", borderRadius: 2 }} />
                </div>
              </div>
            </div>
          )}
        </div>
        {!unlocked && (
          <div style={{ marginTop: 14 }}>
            <button onClick={() => setUnlocked(true)} style={{ width: "100%", padding: "14px 16px", background: "var(--c42-orange)", color: "#fff", border: "none", fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>Unlock the recording →</button>
            <p style={{ fontSize: 11, lineHeight: "17px", color: "rgba(241,237,232,0.6)", margin: "10px 0 0", textAlign: "center" }}>Enter your work email below to watch the full 60-minute recording.</p>
          </div>
        )}
      </section>

      {/* Gate form — only when locked */}
      {!unlocked && (
        <section style={{ background: "var(--c42-forest)", padding: "0 20px 36px" }}>
          <MGateForm title="Watch the full recording" subtitle="60 min · On-demand. We'll also email the slides." cta="Unlock recording" variant="dark" includeConsent />
        </section>
      )}

      {/* Chapters */}
      <section style={{ background: "var(--c42-paper)", padding: "32px 20px" }}>
        <MEyebrow>Chapters</MEyebrow>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 16px" }}>Jump to a moment</h3>
        <div style={{ borderTop: "1px solid var(--c42-paper-edge)" }}>
          {chapters.map(([t, label], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--c42-paper-edge)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: "20px", color: "var(--c42-forest-ink)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section style={{ background: "var(--c42-paper-2)", padding: "32px 20px 40px" }}>
        <MEyebrow>Resources</MEyebrow>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 16px" }}>Download with the recording</h3>
        {[
          ["Slides (PDF)", "1.2 MB"],
          ["Architecture diagram (SVG)", "340 KB"],
          ["Policy YAML samples", "12 KB"],
          ["Transcript (Markdown)", "86 KB"],
        ].map(([name, size]) => (
          <a key={name} href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "#fff", border: "1px solid var(--c42-paper-edge)", marginBottom: 8, textDecoration: "none", color: "var(--c42-forest-ink)" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{size}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c42-orange)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        ))}
      </section>
    </MShell>
  );
};

// ═══ Mobile Case Study ═════════════════════════════════════════════════
const MobileCaseStudyDetailPage = () => {
  const c = {
    industry: "Public Sector",
    customer: "Ministry of Digital Affairs",
    title: "A 40M-citizen services modernization, on sovereign infrastructure",
    logo: "MDA",
    hero: "assets/case-government.png",
    metrics: [
      ["40M+", "Citizens served"],
      ["4", "Ministries unified"],
      ["62%", "Lower cost-to-serve"],
      ["99.99%", "Platform uptime"],
    ],
    summary: "Over 18 months, the Ministry consolidated four parallel services platforms onto Core42 AI Cloud — modernizing citizen-facing workflows without relocating a byte of sovereign data.",
    region: "National",
    duration: "18 months",
    launched: "Q4 2025",
  };
  const quote = {
    text: "We didn't move our data. We moved our capability. That distinction is the entire point of sovereign AI.",
    name: "Hassan Al-Rashid",
    role: "Chief Digital Officer, MDA",
    initials: "HR"
  };

  return (
    <MShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest-ink)", color: "#fff", padding: "28px 20px 28px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
          <div style={{ width: 44, height: 44, background: "var(--c42-orange)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 12 }}>{c.logo}</div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase" }}>Case Study / {c.industry}</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{c.customer}</div>
          </div>
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: "34px", letterSpacing: "-0.02em", margin: "0 0 16px" }}>{c.title}</h1>
        <p style={{ fontSize: 15, lineHeight: "22px", color: "rgba(241,237,232,0.85)", margin: "0 0 24px" }}>{c.summary}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px 20px", paddingTop: 18, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
          {[["Industry", c.industry], ["Region", c.region], ["Duration", c.duration], ["Launched", c.launched]].map(([l, v]) => (
            <div key={l}>
              <div style={{ color: "rgba(241,237,232,0.55)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
              <div style={{ color: "#fff" }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cover */}
      <div style={{ aspectRatio: "3/2", background: `url(${c.hero}) center/cover` }} />

      {/* Metrics */}
      <section style={{ background: "var(--c42-mint)", color: "var(--c42-forest-ink)", padding: "32px 20px" }}>
        <MEyebrow color="var(--c42-forest-ink)">Outcomes</MEyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px 16px", marginTop: 16 }}>
          {c.metrics.map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c42-forest-ink)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c42-forest)", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <article style={{ background: "#fff", padding: "36px 20px" }}>
        <MEyebrow>The challenge</MEyebrow>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--c42-forest-ink)" }}>Four platforms, one citizen.</h2>
        <p style={{ fontSize: 15, lineHeight: "24px", color: "rgba(25,28,26,0.8)", margin: "0 0 28px" }}>
          Four ministries were running parallel citizen services, each with its own identity stack, authorization model, and data gravity. Onboarding a single service meant six weeks of integration and a legal review. The Ministry needed consolidation — without touching where any of that data lived.
        </p>

        <MEyebrow>The approach</MEyebrow>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--c42-forest-ink)" }}>Capability in, data stays.</h2>
        <p style={{ fontSize: 15, lineHeight: "24px", color: "rgba(25,28,26,0.8)", margin: "0 0 20px" }}>
          Core42 deployed a governed AI Cloud region pinned inside the Ministry's own jurisdiction. Compass sat above it as the application layer — pulling identity and data from each ministry through policy-bound adapters, without any cross-ministry data movement.
        </p>

        {/* Pull quote */}
        <blockquote style={{ margin: "28px 0", padding: "20px 0", borderTop: "2px solid var(--c42-orange)", borderBottom: "1px solid var(--c42-paper-edge)" }}>
          <p style={{ fontSize: 18, fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 14px" }}>"{quote.text}"</p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>{quote.initials}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--c42-forest-ink)" }}>{quote.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{quote.role}</div>
            </div>
          </div>
        </blockquote>
      </article>

      {/* CTA */}
      <section style={{ background: "var(--c42-paper-2)", padding: "32px 20px 40px" }}>
        <div style={{ background: "var(--c42-forest-ink)", color: "#fff", padding: 24 }}>
          <MEyebrow>Build your case</MEyebrow>
          <h4 style={{ fontSize: 22, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.01em", margin: "0 0 10px" }}>Run the same playbook in your region.</h4>
          <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.75)", margin: "0 0 16px" }}>
            Book a working session with the Core42 public sector team. We'll map this reference to your jurisdiction and constraints.
          </p>
          <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>BOOK A WORKING SESSION →</a>
        </div>
      </section>
    </MShell>
  );
};

Object.assign(window, {
  MobileBlogArticlePage,
  MobileWhitepaperDetailPage,
  MobileWebinarUpcomingPage,
  MobileWebinarOnDemandPage,
  MobileCaseStudyDetailPage,
});
