// Core42 — Webinar detail template (On-demand, gated player)

const WebinarOnDemandPage = () => {
  const w = (window.RES_WEBINARS || []).find(x => x.status === "On-demand") || (window.RES_WEBINARS || [])[2] || {
    title: "Running sovereign AI at national scale",
    speaker: "CTO, Core42", date: "24 Mar 2026", duration: "60 min",
    img: "assets/about-hero.jpg"
  };

  const [unlocked, setUnlocked] = React.useState(false);

  const chapters = [
    ["00:00", "Intro & scope of 'sovereign' at national scale"],
    ["04:12", "What changes when you're the ten-region operator"],
    ["12:48", "Data residency architecture"],
    ["22:30", "Identity and jurisdictional control"],
    ["34:05", "Operating across political boundaries"],
    ["42:18", "Cost, capacity, and the three-year plan"],
    ["51:40", "Q&A"],
  ];

  const resources = [
    ["Slides (PDF)", "1.2 MB"],
    ["Architecture diagram (SVG)", "340 KB"],
    ["Policy YAML samples", "12 KB"],
    ["Transcript (Markdown)", "86 KB"],
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "64px 120px 60px" }}>
        <div style={{ marginBottom: 40 }}>
          <Crumbs trail={["Resources", "Webinars", "On-demand"]} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 28 }}>
              <span style={{ padding: "6px 14px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(241,237,232,0.3)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)", borderRadius: 28 }}>On-demand</span>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10 }}>
                Webinar / Recording
              </div>
            </div>
            <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 24px" }}>
              {w.title}
            </h1>
            <p style={{ fontSize: 19, lineHeight: "30px", color: "rgba(241,237,232,0.85)", margin: "0 0 32px", maxWidth: 760 }}>
              A candid 60-minute conversation with Core42's CTO on what breaks — and what holds — when sovereign AI infrastructure reaches national scale.
            </p>
            <div style={{ display: "flex", gap: 40, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(241,237,232,0.85)" }}>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Recorded</div>{w.date}</div>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Runtime</div>{w.duration}</div>
              <div><div style={{ color: "rgba(241,237,232,0.55)", marginBottom: 4 }}>Format</div>Video · Captions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Player with gate overlay */}
      <section style={{ background: "var(--c42-forest)", padding: "0 120px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 40, alignItems: "start" }}>
          {/* Player */}
          <div style={{ position: "relative", aspectRatio: "16/9", background: "#000", overflow: "hidden" }}>
            <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: unlocked ? 1 : 0.55, filter: unlocked ? "none" : "blur(6px)" }} />

            {unlocked ? (
              <>
                {/* Playing state chrome */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 88, height: 88, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}>
                    <svg width="30" height="30" viewBox="0 0 30 30"><path d="M10 6 L24 15 L10 24 Z" fill="var(--c42-forest-ink)" /></svg>
                  </div>
                </div>
                {/* Transport */}
                <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px 24px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.85))", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                    <button style={{ background: "transparent", border: 0, color: "#fff", cursor: "pointer" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <div style={{ letterSpacing: "0.06em" }}>12:04 / {w.duration}</div>
                    <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, position: "relative" }}>
                      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "22%", background: "var(--c42-orange)", borderRadius: 2 }} />
                      <div style={{ position: "absolute", left: "22%", top: "50%", transform: "translate(-50%, -50%)", width: 10, height: 10, background: "var(--c42-orange)", borderRadius: "50%" }} />
                    </div>
                    <div style={{ display: "flex", gap: 12, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      <span>CC</span><span>HD</span><span>1×</span><span>⤢</span>
                    </div>
                  </div>
                </div>
                {/* Chapter pill */}
                <div style={{ position: "absolute", top: 20, left: 20, padding: "6px 12px", background: "rgba(0,0,0,0.6)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", backdropFilter: "blur(8px)" }}>
                  Chapter 2 · Data residency architecture
                </div>
              </>
            ) : (
              <>
                <div style={{ position: "absolute", inset: 0, background: "rgba(24,45,33,0.6)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", gap: 16, textAlign: "center", padding: 40 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c42-orange)" }}>Gated recording</div>
                  <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", maxWidth: 520, lineHeight: "32px" }}>Register to watch the full session on-demand.</div>
                  <div style={{ fontSize: 14, color: "rgba(241,237,232,0.75)", maxWidth: 440, lineHeight: "22px" }}>
                    Fill in the form on the right — instant access, no confirmation email delay.
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: gate form or metadata depending on unlocked state */}
          {!unlocked ? (
            <div>
              <GateForm
                title="Watch the recording"
                subtitle="One-time registration unlocks the full 60-minute session, slides, transcript, and architecture files."
                cta="Unlock recording"
                variant="dark"
                compact
                onSubmit={() => setUnlocked(true)}
              />
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(241,237,232,0.15)", padding: 32, color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-mint)", textTransform: "uppercase", marginBottom: 12 }}>✓ Access granted</div>
              <h4 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 20px", letterSpacing: "-0.01em" }}>Resources</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {resources.map(([r, s]) => (
                  <a key={r} href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(241,237,232,0.15)", textDecoration: "none", color: "#fff", fontSize: 14 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c42-orange)" strokeWidth="1.6"><path d="M12 3v14M5 10l7 7 7-7"/><path d="M5 21h14"/></svg>
                      {r}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(241,237,232,0.6)", letterSpacing: "0.06em" }}>{s}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section style={{ background: "var(--c42-paper)", padding: "100px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80 }}>
          <div>
            <Eyebrow>About this session</Eyebrow>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.015em", margin: "14px 0 24px", color: "var(--c42-forest-ink)" }}>
              When "sovereign" stops being a word on a slide.
            </h2>
            <p style={{ fontSize: 17, lineHeight: "28px", color: "rgba(25,28,26,0.75)", margin: "0 0 20px", maxWidth: 640 }}>
              Most sovereign-cloud conversations stop at data residency. This session goes further: what operating a ten-region AI fabric actually demands of identity, scheduling, failover, and political relationships.
            </p>
            <p style={{ fontSize: 17, lineHeight: "28px", color: "rgba(25,28,26,0.75)", margin: "0 0 40px", maxWidth: 640 }}>
              Recorded live with 1,400+ attendees, this on-demand version includes the full unedited Q&A — and the parts we cut for time.
            </p>

            <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "40px 0 20px" }}>Speaker</h3>
            <div style={{ padding: 28, background: "#fff", border: "1px solid var(--c42-paper-edge)", display: "flex", gap: 20, alignItems: "flex-start", maxWidth: 640 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, flexShrink: 0 }}>SK</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--c42-forest-ink)", marginBottom: 4 }}>Samir Khalil</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Chief Technology Officer, Core42</div>
                <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.7)", margin: 0 }}>
                  Samir has led Core42's infrastructure since 2023, after building distributed systems at a national telecom operator. He's on the board of the sovereign-cloud industry working group.
                </p>
              </div>
            </div>
          </div>

          {/* Chapters */}
          <aside style={{ position: "sticky", top: 40, alignSelf: "flex-start" }}>
            <div style={{ padding: 28, background: "#fff", border: "1px solid var(--c42-paper-edge)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 16 }}>Chapters · {w.duration}</div>
              <div>
                {chapters.map(([t, label], i) => (
                  <a key={i} href="#" style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, padding: "14px 0", borderTop: i === 0 ? "0" : "1px solid var(--c42-paper-edge)", textDecoration: "none", alignItems: "baseline" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{t}</div>
                    <div style={{ fontSize: 14, lineHeight: "22px", color: "var(--c42-forest-ink)" }}>{label}</div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
};

Object.assign(window, { WebinarOnDemandPage });
