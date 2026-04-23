// Core42 — Whitepaper detail template (gated)

const WhitepaperDetailPage = () => {
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
    "Case studies — Public sector",
    "Case studies — Regulated enterprise",
    "Appendix A: Control mappings (ISO / NIST / GDPR)",
    "Appendix B: Reference YAML policies",
  ];

  const authors = [
    { name: "Dr. Layla Hasan", role: "Chief Research Officer, Core42", initials: "LH" },
    { name: "Rasheed Okonkwo", role: "Principal Architect, AI Cloud", initials: "RO" },
    { name: "Marisol Chen", role: "Director of Public Sector", initials: "MC" },
  ];

  return (
    <PageShell>
      {/* Hero — copy/cover on left, gated form on right (above-the-fold) */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "48px 120px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <Crumbs trail={["Resources", "Whitepapers", wp.topic]} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            {/* Mini cover + title row */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 24, display: "inline-block" }}>
                Whitepaper / {wp.topic}
              </div>
              <h1 style={{ fontSize: 60, fontWeight: 700, lineHeight: "1.05", letterSpacing: "-0.02em", margin: 0 }}>
                {wp.title}
              </h1>
            </div>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "rgba(241,237,232,0.85)", margin: "0 0 32px", maxWidth: 640 }}>
              {wp.excerpt} A complete reference across the compute, data, and application layers — with real customer patterns, control mappings, and deployment playbooks.
            </p>
            <div style={{ display: "flex", gap: 40, paddingTop: 24, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(241,237,232,0.85)", flexWrap: "wrap" }}>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Published</div>{wp.date}</div>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Length</div>{wp.pages} pages</div>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Format</div>PDF · ENG</div>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Audience</div>Architects</div>
            </div>
          </div>

          {/* Gated form — in hero */}
          <div>
            <GateForm
              title="Download the whitepaper"
              subtitle="48 pages · PDF · Instant download. We'll also email a copy."
              cta="Download PDF"
              variant="dark"
              compact
            />
          </div>
        </div>
      </section>

      {/* Body: split — summary/TOC + gated form */}
      <section style={{ background: "var(--c42-paper)", padding: "100px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80 }}>
          <div>
            <Eyebrow>Inside this report</Eyebrow>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.015em", margin: "14px 0 24px", color: "var(--c42-forest-ink)" }}>
              A complete architectural reference for teams deploying sovereign AI.
            </h2>
            <p style={{ fontSize: 17, lineHeight: "28px", color: "rgba(25,28,26,0.75)", margin: "0 0 40px", maxWidth: 640 }}>
              Drawn from three years of deployments across ministries, national health systems, and tier-one banks, this 48-page reference distills the architectural patterns that hold up under real regulatory scrutiny. Control mappings, sample policies, and deployment diagrams included.
            </p>

            {/* Key stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60, padding: "32px 0", borderTop: "1px solid var(--c42-paper-edge)", borderBottom: "1px solid var(--c42-paper-edge)" }}>
              {[
                ["48pp", "Detailed chapters"],
                ["12", "Customer patterns"],
                ["6", "Control frameworks mapped"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c42-forest-ink)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--c42-gray-60)", marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* TOC */}
            <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 24px" }}>Table of contents</h3>
            <ol style={{ listStyle: "none", padding: 0, margin: "0 0 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
              {toc.map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid var(--c42-paper-edge)", fontSize: 15, color: "var(--c42-forest-ink)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ flex: 1 }}>{t}</span>
                </li>
              ))}
            </ol>

          </div>

          {/* Preview / stats column (form moved to hero) */}
          <div style={{ position: "sticky", top: 40, alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ padding: 32, background: "var(--c42-forest-ink)", color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 14 }}>Inside the PDF</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Executive summary (4 pages)",
                  "Reference architecture (12 pages)",
                  "Control mappings: ISO / NIST / GDPR",
                  "Six deployment patterns",
                  "Sample policy YAML",
                  "Glossary of sovereign-cloud terms",
                ].map(t => (
                  <div key={t} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(241,237,232,0.15)", fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.85)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c42-mint)" strokeWidth="2.2" style={{ flexShrink: 0, marginTop: 3 }}><path d="M5 12l5 5 9-11"/></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Product CTA */}
            <div style={{ padding: 32, background: "#fff", border: "1px solid var(--c42-paper-edge)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: "var(--c42-mint)", opacity: 0.4 }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>See it live</div>
                <h4 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px", lineHeight: "28px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>Put this reference into production.</h4>
                <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.72)", margin: "0 0 18px" }}>
                  Book a 30-minute working session with our solutions architects. We'll map the reference architecture to your cloud, data, and compliance requirements.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
                  <a href="#" className="c42-btn c42-btn--primary">BOOK A WORKING SESSION →</a>
                  <a href="#" style={{ fontSize: 12, color: "var(--c42-forest-ink)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", padding: "8px 0" }}>Talk to sales →</a>
                </div>
              </div>
            </div>
            <div style={{ padding: 20, background: "var(--c42-paper-2)", border: "1px solid var(--c42-paper-edge)" }}>
              <div style={{ fontSize: 12, lineHeight: "18px", color: "rgba(25,28,26,0.75)" }}>
                <strong style={{ color: "var(--c42-forest-ink)" }}>Public sector:</strong> request an accessibility-ready copy via <a href="#" style={{ color: "var(--c42-orange)" }}>publications@core42.ai</a>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related whitepapers */}
      <section style={{ background: "var(--c42-paper-2)", padding: "80px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Eyebrow>Also in this series</Eyebrow>
            <h3 style={{ fontSize: 40, fontWeight: 700, margin: "14px 0 0", letterSpacing: "-0.015em", color: "var(--c42-forest-ink)" }}>More from Core42 Research</h3>
          </div>
          <a href="#" style={{ color: "var(--c42-orange)", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>All whitepapers →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {(window.RES_WHITEPAPERS || []).slice(1, 4).map(w => (
            <a key={w.id} href="#" style={{ textDecoration: "none", color: "inherit", background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", background: `url(${w.img}) center/cover` }}>
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(24,45,33,0.9)", color: "#fff", padding: "6px 12px", fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  PDF · {w.pages}p
                </div>
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c42-orange)", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 12, display: "inline-block" }}>{w.topic}</div>
                <h4 style={{ fontSize: 20, fontWeight: 700, lineHeight: "26px", margin: "0 0 10px", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)" }}>{w.title}</h4>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{w.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

Object.assign(window, { WhitepaperDetailPage });
