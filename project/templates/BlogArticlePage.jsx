// Core42 — Resource detail templates (Blog article / Whitepaper / Webinar upcoming / Webinar on-demand / Case study)
// Each page mirrors the layout of DirectoryPage: SideRail + TopBar + hero/body + CareerCTA + Footer.

// ── Shared helpers ────────────────────────────────────────────────────────────
const PageShell = ({ children, active = "Resources" }) => (
  <div className="c42-scope" style={{ position: "relative", background: "var(--c42-paper)", width: 1920, minHeight: 2400 }}>
    <TopBar />
    <div style={{ paddingTop: 50 }}>
      {children}
    </div>
    <CareerCTA />
    <Footer />
  </div>
);

const Crumbs = ({ trail }) => null;

const GateForm = ({ title, subtitle, cta = "Download", compact = false, variant = "paper", onSubmit }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const dark = variant === "dark";
  const fieldStyle = {
    height: 48, padding: "0 16px", width: "100%", boxSizing: "border-box",
    background: dark ? "rgba(255,255,255,0.08)" : "#fff",
    border: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(25,28,26,0.15)",
    color: dark ? "#fff" : "var(--c42-forest-ink)",
    fontSize: 14, fontFamily: "var(--font-sans)", outline: "none"
  };
  const labelStyle = { display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: dark ? "rgba(241,237,232,0.7)" : "var(--c42-gray-60)", marginBottom: 8 };

  if (submitted) {
    return (
      <div style={{ padding: compact ? 32 : 48, background: dark ? "var(--c42-forest)" : "#fff", border: dark ? 0 : "1px solid var(--c42-paper-edge)", color: dark ? "#fff" : "var(--c42-forest-ink)", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--c42-mint)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c42-forest-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
        </div>
        <h4 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.01em" }}>You're all set.</h4>
        <p style={{ fontSize: 14, lineHeight: "22px", margin: 0, color: dark ? "rgba(241,237,232,0.75)" : "rgba(25,28,26,0.7)" }}>
          We've sent a confirmation to your inbox. You'll also find the link below.
        </p>
        <a href="#" className="c42-btn c42-btn--primary" style={{ marginTop: 24, display: "inline-block" }}>{cta} →</a>
      </div>
    );
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); onSubmit?.(); }}
      style={{ padding: compact ? 32 : 44, background: dark ? "var(--c42-forest)" : "#fff", border: dark ? 0 : "1px solid var(--c42-paper-edge)", color: dark ? "#fff" : "var(--c42-forest-ink)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 20, display: "inline-block" }}>
        Gated resource
      </div>
      <h3 style={{ fontSize: compact ? 22 : 28, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.015em", lineHeight: 1.15 }}>{title}</h3>
      {subtitle && <p style={{ fontSize: 14, lineHeight: "22px", margin: "0 0 28px", color: dark ? "rgba(241,237,232,0.75)" : "rgba(25,28,26,0.65)" }}>{subtitle}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>First name</label>
          <input required style={fieldStyle} defaultValue="" placeholder="Alex" />
        </div>
        <div>
          <label style={labelStyle}>Last name</label>
          <input required style={fieldStyle} defaultValue="" placeholder="Morgan" />
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Work email</label>
        <input required type="email" style={fieldStyle} placeholder="alex@company.com" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Company</label>
          <input required style={fieldStyle} placeholder="Core Industries" />
        </div>
        <div>
          <label style={labelStyle}>Role</label>
          <select style={fieldStyle} defaultValue="">
            <option value="" disabled>Select</option>
            <option>Engineering</option>
            <option>Product</option>
            <option>Executive</option>
            <option>Public Sector</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <label style={{ display: "flex", gap: 10, fontSize: 12, lineHeight: "18px", color: dark ? "rgba(241,237,232,0.7)" : "rgba(25,28,26,0.7)", marginBottom: 24, alignItems: "flex-start" }}>
        <input type="checkbox" defaultChecked style={{ marginTop: 2 }} />
        <span>I agree to receive communications from Core42. Unsubscribe at any time. See our <a href="#" style={{ color: "var(--c42-orange)" }}>privacy policy</a>.</span>
      </label>

      <button type="submit" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center", padding: "16px 24px", fontSize: 13 }}>
        {cta.toUpperCase()} →
      </button>
    </form>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// 1) Blog article template
// ═════════════════════════════════════════════════════════════════════════════
const BlogArticlePage = () => {
  const article = (window.BLOG_ARTICLES || []).find(a => a.id === 1);
  if (!article) return null;
  const related = (window.BLOG_ARTICLES || []).filter(a => a.id !== article.id).slice(0, 3);

  return (
    <PageShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "64px 120px 0" }}>
        <div style={{ marginBottom: 40 }}>
          <Crumbs trail={["Resources", "Blog", article.category]} />
        </div>
        <div style={{ maxWidth: 1200, display: "flex", flexDirection: "column", gap: 36, paddingBottom: 60 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 12, display: "inline-block", alignSelf: "flex-start" }}>
            Blog / {article.category}
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 700, lineHeight: "1.05", letterSpacing: "-0.02em", margin: 0, maxWidth: 1100 }}>
            {article.title}
          </h1>
          <p style={{ fontSize: 22, lineHeight: "32px", color: "rgba(241,237,232,0.85)", margin: 0, maxWidth: 900 }}>
            {article.excerpt}
          </p>
          <div style={{ display: "flex", gap: 60, alignItems: "center", paddingTop: 20, borderTop: "1px solid rgba(241,237,232,0.2)" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--c42-mint)", color: "var(--c42-forest-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>CP</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{article.author}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(241,237,232,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>Core42 Team</div>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(241,237,232,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {article.date} · {article.readTime}
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
              {["Share", "Twitter", "LinkedIn", "Copy link"].map(a => (
                <a key={a} href="#" style={{ padding: "8px 14px", border: "1px solid rgba(241,237,232,0.3)", color: "#fff", textDecoration: "none", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{a}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero image — spans below */}
      <div style={{ padding: "0 120px", background: "var(--c42-forest)" }}>
        <img src={article.img} style={{ width: "100%", display: "block", aspectRatio: "16/7", objectFit: "cover" }} />
      </div>

      {/* Body */}
      <section style={{ background: "var(--c42-paper)", padding: "100px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 280px", gap: 80, maxWidth: 1500 }}>
          {/* Sticky meta column */}
          <aside style={{ position: "sticky", top: 80, alignSelf: "flex-start" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-gray-60)", marginBottom: 16 }}>Contents</div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, counterReset: "toc", fontSize: 14, lineHeight: "22px" }}>
              {["The problem with ungoverned models", "What Compass 2.0 introduces", "How sovereignty stays intact", "Reference architecture", "Getting started"].map((t, i) => (
                <li key={i} style={{ counterIncrement: "toc" }}>
                  <a href="#" style={{ color: i === 1 ? "var(--c42-forest-ink)" : "var(--c42-gray-60)", textDecoration: "none", fontWeight: i === 1 ? 600 : 400, borderLeft: i === 1 ? "2px solid var(--c42-orange)" : "2px solid transparent", paddingLeft: 12, display: "block" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", marginRight: 10 }}>0{i + 1}</span>{t}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Prose */}
          <article style={{ maxWidth: 720, color: "var(--c42-forest-ink)", fontSize: 18, lineHeight: "32px" }}>
            <p style={{ fontSize: 22, lineHeight: "36px", color: "var(--c42-forest-ink)", marginTop: 0, marginBottom: 40, fontWeight: 500 }}>
              Enterprises want the productivity of foundation models without losing the audit trail, access controls, and data residency guarantees their regulators require. Compass 2.0 is our answer.
            </p>
            <p>
              For the last eighteen months, we've been working alongside public sector agencies and regulated enterprises to understand what it actually takes to put generative AI into production without compromising sovereignty. The answer is rarely "another model." It's a thicker application layer that sits between the teams shipping features and the infrastructure carrying sensitive data.
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px", color: "var(--c42-forest-ink)" }}>What Compass 2.0 introduces</h2>
            <p>
              Compass 2.0 is a governed developer layer on top of Core42 AI Cloud. Three capabilities are new, and each grew out of specific customer constraints we kept hearing:
            </p>
            <ul style={{ padding: "0 0 0 24px", margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
              <li><strong>Model registry with jurisdictional pinning.</strong> Pin any foundation model — open-weight or hosted — to a specific sovereign region. Models, prompts, and outputs stay inside that boundary.</li>
              <li><strong>Agent runtime with human checkpoints.</strong> Build multi-step agents where specific tools require a human approval step. Every decision is logged.</li>
              <li><strong>Data workflow builder.</strong> Connect retrieval sources, policies, and evaluation pipelines in one place instead of stitching them across five services.</li>
            </ul>

            {/* Pull quote */}
            <blockquote style={{ margin: "60px -40px", padding: "40px", borderLeft: "4px solid var(--c42-orange)", background: "rgba(217,94,52,0.05)" }}>
              <p style={{ fontSize: 28, lineHeight: "40px", fontWeight: 500, color: "var(--c42-forest-ink)", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
                "We're not replacing the model layer. We're replacing the part between the model and the user — the part where most of the risk actually lives."
              </p>
              <cite style={{ fontStyle: "normal", fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--c42-gray-60)" }}>
                — Core42 Product Team
              </cite>
            </blockquote>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px", color: "var(--c42-forest-ink)" }}>How sovereignty stays intact</h2>
            <p>
              Every request routed through Compass 2.0 carries a policy context object — region, classification, retention — that is evaluated before the model is ever invoked. Violations fail closed, and they fail with a reason that's legible to both operators and auditors. No black boxes.
            </p>
            <img src="assets/intelligence-grid-2.png" style={{ width: "100%", display: "block", margin: "40px 0 8px" }} />
            <figcaption style={{ fontSize: 13, color: "var(--c42-gray-60)", fontStyle: "italic", marginBottom: 40 }}>Figure 1 — Policy context flows alongside every inference call.</figcaption>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px", color: "var(--c42-forest-ink)" }}>Getting started</h2>
            <p>
              Compass 2.0 is generally available today for all AI Cloud customers. New customers can request access through the team at <a href="#" style={{ color: "var(--c42-orange)", textDecoration: "none" }}>compass@core42.ai</a>, and our solutions architects are running structured onboarding sessions each week.
            </p>

            <div style={{ marginTop: 60, padding: "32px 0", borderTop: "1px solid var(--c42-paper-edge)", borderBottom: "1px solid var(--c42-paper-edge)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c42-gray-60)", marginBottom: 6 }}>Tagged</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Compass", "Product Launch", "Sovereign AI", "Governance"].map(t => (
                    <span key={t} style={{ padding: "6px 14px", border: "1px solid rgba(25,28,26,0.15)", fontSize: 12, color: "var(--c42-forest-ink)" }}>{t}</span>
                  ))}
                </div>
              </div>
              <a href="#" className="c42-btn c42-btn--primary">REQUEST COMPASS ACCESS →</a>
            </div>
          </article>

          {/* Right rail — CTA + newsletter */}
          <aside style={{ position: "sticky", top: 80, alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Product CTA */}
            <div style={{ padding: 28, background: "#fff", border: "1px solid var(--c42-paper-edge)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "var(--c42-mint)", opacity: 0.35 }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>Try Compass</div>
                <h4 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", lineHeight: "26px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>Ship governed AI in your region.</h4>
                <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.72)", margin: "0 0 18px" }}>
                  Region-pinned model access, policy-bound agents, and audit-ready logs. See Compass on your data in 30 minutes.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a href="#" className="c42-btn c42-btn--primary" style={{ justifyContent: "center", textAlign: "center" }}>BOOK A DEMO →</a>
                  <a href="#" style={{ fontSize: 12, color: "var(--c42-forest-ink)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", textAlign: "center", padding: "8px 0" }}>Read the docs →</a>
                </div>
              </div>
            </div>
            <div style={{ padding: 28, background: "var(--c42-forest-ink)", color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 10 }}>Newsletter</div>
              <h4 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", lineHeight: "26px", letterSpacing: "-0.01em" }}>The sovereign stack, every Friday.</h4>
              <input placeholder="you@company.com" style={{ width: "100%", boxSizing: "border-box", height: 40, padding: "0 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: 13, marginBottom: 10 }} />
              <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>SUBSCRIBE →</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "var(--c42-paper-2)", padding: "80px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Eyebrow>Keep reading</Eyebrow>
            <h3 style={{ fontSize: 40, fontWeight: 700, margin: "14px 0 0", letterSpacing: "-0.015em", color: "var(--c42-forest-ink)" }}>Related from the blog</h3>
          </div>
          <a href="#" style={{ color: "var(--c42-orange)", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>All articles →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {related.map(a => (
            <a key={a.id} href="#" style={{ textDecoration: "none", color: "inherit", background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16/10", background: `url(${a.img}) center/cover` }} />
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-orange)", marginBottom: 10 }}>{a.category}</div>
                <h4 style={{ fontSize: 22, fontWeight: 700, lineHeight: "28px", margin: "0 0 10px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>{a.title}</h4>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{a.date} · {a.readTime}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

Object.assign(window, { BlogArticlePage, GateForm, PageShell, Crumbs });
