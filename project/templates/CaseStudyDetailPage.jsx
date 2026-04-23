// Core42 — Case Study detail template

const CaseStudyDetailPage = () => {
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
    text: "We didn't move our data. We moved our capability. That distinction is the entire point of sovereign AI, and Core42 is the only partner we found who understood it operationally — not just as a marketing line.",
    name: "Hassan Al-Rashid",
    role: "Chief Digital Officer, Ministry of Digital Affairs",
    initials: "HR"
  };

  return (
    <PageShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest-ink)", color: "#fff", padding: "64px 120px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <Crumbs trail={["Resources", "Case Studies", c.industry]} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 28 }}>
              <div style={{ width: 52, height: 52, background: "var(--c42-orange)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em" }}>{c.logo}</div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase" }}>Case Study / {c.industry}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>{c.customer}</div>
              </div>
            </div>
            <h1 style={{ fontSize: 60, fontWeight: 700, lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 28px" }}>
              {c.title}
            </h1>
            <p style={{ fontSize: 20, lineHeight: "32px", color: "rgba(241,237,232,0.85)", margin: "0 0 40px", maxWidth: 720 }}>
              {c.summary}
            </p>
            <div style={{ display: "flex", gap: 60, paddingTop: 28, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {[["Industry", c.industry], ["Region", c.region], ["Duration", c.duration], ["Launched", c.launched]].map(([l, v]) => (
                <div key={l}>
                  <div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 6 }}>{l}</div>
                  <div style={{ color: "#fff" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={c.hero} style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
        </div>
      </section>

      {/* Metric strip */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "60px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {c.metrics.map(([n, l], i) => (
            <div key={l} style={{ borderLeft: i === 0 ? 0 : "1px solid rgba(241,237,232,0.2)", paddingLeft: i === 0 ? 0 : 40 }}>
              <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c42-mint)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(241,237,232,0.75)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 14 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section style={{ background: "var(--c42-paper)", padding: "100px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 80, maxWidth: 1500 }}>
          <aside style={{ position: "sticky", top: 40, alignSelf: "flex-start" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-gray-60)", marginBottom: 16 }}>Contents</div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              {["The mandate", "The challenge", "What we built", "Results", "Looking ahead"].map((t, i) => (
                <li key={i}>
                  <a href="#" style={{ color: i === 2 ? "var(--c42-forest-ink)" : "var(--c42-gray-60)", textDecoration: "none", fontWeight: i === 2 ? 600 : 400, borderLeft: i === 2 ? "2px solid var(--c42-orange)" : "2px solid transparent", paddingLeft: 12, display: "block" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", marginRight: 10 }}>0{i + 1}</span>{t}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article style={{ maxWidth: 820, fontSize: 18, lineHeight: "32px", color: "var(--c42-forest-ink)" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "0 0 20px" }}>The mandate</h2>
            <p>
              In early 2024, the Ministry of Digital Affairs inherited four disconnected services platforms — each running on different infrastructure, each holding a partial view of the same citizens. The mandate: a single, sovereign services fabric that could modernize workflows without compromising residency or introducing a foreign control plane.
            </p>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px" }}>The challenge</h2>
            <p>
              The ministry had no shortage of vendor offers. What it didn't have was a partner capable of operating critical infrastructure inside national jurisdiction, with a control plane staffed by cleared operators and auditable by domestic regulators. Every major hyperscaler required either a control-plane exception or a compliance structure the attorneys couldn't sign off on.
            </p>

            {/* Quote */}
            <figure style={{ margin: "60px -40px", padding: "48px 40px", borderLeft: "4px solid var(--c42-orange)", background: "rgba(217,94,52,0.05)" }}>
              <p style={{ fontSize: 28, lineHeight: "40px", fontWeight: 500, margin: "0 0 24px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>
                "{quote.text}"
              </p>
              <figcaption style={{ display: "flex", gap: 14, alignItems: "center", fontStyle: "normal" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>{quote.initials}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--c42-forest-ink)" }}>{quote.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{quote.role}</div>
                </div>
              </figcaption>
            </figure>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px" }}>What we built</h2>
            <p>
              Over 18 months, the Ministry and Core42 built a unified services layer on AI Cloud, anchored by three design decisions:
            </p>
            <ol style={{ paddingLeft: 24, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 16 }}>
              <li><strong>One identity fabric.</strong> A single citizen identity layer federated across all four ministries — no shared master record, no external IDP.</li>
              <li><strong>Workload-level residency.</strong> Every workload pinned to a specific domestic region, with jurisdictional routing enforced at the control plane.</li>
              <li><strong>Governed AI on top.</strong> Compass as the developer layer for all AI-assisted services — from document triage to eligibility determination — with every decision logged for audit.</li>
            </ol>

            <img src="assets/intelligence-grid.png" style={{ width: "100%", display: "block", margin: "40px 0 8px" }} />
            <figcaption style={{ fontSize: 13, color: "var(--c42-gray-60)", fontStyle: "italic", marginBottom: 40 }}>Figure — Unified services architecture spanning four ministries on Core42 AI Cloud.</figcaption>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px" }}>Results</h2>
            <p>
              The platform launched to full production in Q4 2025 and now serves more than 40 million citizens across the country. Cost-to-serve dropped 62% against the legacy baseline, with platform-level uptime at 99.99% over the first two quarters.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, margin: "40px 0 60px" }}>
              {[
                ["8.4×", "Faster service issuance vs 2023 baseline"],
                ["0", "Residency incidents since launch"],
                ["24/7", "Sovereign operations coverage"],
                ["4", "Ministries on one governed platform"],
              ].map(([n, l]) => (
                <div key={l} style={{ padding: 24, background: "#fff", border: "1px solid var(--c42-paper-edge)" }}>
                  <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c42-forest-ink)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "rgba(25,28,26,0.65)", marginTop: 10, lineHeight: "20px" }}>{l}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.015em", margin: "60px 0 20px" }}>Looking ahead</h2>
            <p>
              Phase 2, now underway, extends the platform to cross-border verifiable credentials and adds AI-assisted case triage to two additional ministries. The goal for 2027: a single sovereign services platform for every citizen-facing program in the country.
            </p>

            {/* CTA */}
            <div style={{ marginTop: 60, padding: 40, background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
              <div style={{ maxWidth: 500 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 10 }}>Ready to talk?</div>
                <h4 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: "-0.01em", lineHeight: "32px" }}>Build a sovereign services platform for your agency.</h4>
              </div>
              <a href="#" className="c42-btn c42-btn--primary">TALK TO PUBLIC SECTOR →</a>
            </div>
          </article>
        </div>
      </section>

      {/* Related case studies */}
      <section style={{ background: "var(--c42-paper-2)", padding: "80px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Eyebrow>More stories</Eyebrow>
            <h3 style={{ fontSize: 40, fontWeight: 700, margin: "14px 0 0", letterSpacing: "-0.015em", color: "var(--c42-forest-ink)" }}>Other customers running on Core42</h3>
          </div>
          <a href="#" style={{ color: "var(--c42-orange)", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>All case studies →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {(window.RES_CASE_STUDIES || []).slice(1, 4).map(x => (
            <a key={x.id} href="#" style={{ textDecoration: "none", color: "inherit", background: "var(--c42-forest-ink)", color: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16/10", background: `url(${x.img}) center/cover` }} />
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-orange)", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>{x.industry}</div>
                <h4 style={{ fontSize: 18, fontWeight: 700, lineHeight: "24px", margin: "0 0 18px", letterSpacing: "-0.005em" }}>{x.title}</h4>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--c42-mint)", letterSpacing: "-0.02em", lineHeight: 1 }}>{x.metric}</div>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(241,237,232,0.75)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{x.metricLabel}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

Object.assign(window, { CaseStudyDetailPage });
