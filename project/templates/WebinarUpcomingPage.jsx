// Core42 — Webinar detail template (Upcoming, gated registration)

const WebinarUpcomingPage = () => {
  const w = (window.RES_WEBINARS || []).find(x => x.status === "Upcoming") || {
    title: "Inside Compass 2.0: governed model access for enterprise teams",
    speaker: "Core42 Product Team", date: "02 May 2026", duration: "45 min",
    img: "assets/product-hero.png"
  };

  const speakers = [
    { name: "Rasheed Okonkwo", role: "Principal Architect, Compass", initials: "RO", bio: "Leads the Compass runtime team. Previously at NVIDIA and a national AI lab." },
    { name: "Marisol Chen", role: "Director of Public Sector", initials: "MC", bio: "Partners with ministries and national operators deploying sovereign AI at scale." },
    { name: "Ivan Marek", role: "Staff Engineer, Policy Runtime", initials: "IM", bio: "Builds the policy engine behind Compass governance. Former SRE at a tier-one bank." },
  ];

  const agenda = [
    ["00:00", "Welcome & context — why governed model access matters in 2026"],
    ["00:08", "Compass 2.0 architecture walkthrough"],
    ["00:18", "Live demo: registering a model, pinning a region, running an agent"],
    ["00:28", "Policy enforcement, audit surface, and failure modes"],
    ["00:35", "Q&A with the Compass team"],
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section style={{ background: "var(--c42-forest)", color: "#fff", padding: "64px 120px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <Crumbs trail={["Resources", "Webinars", "Upcoming"]} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 72, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 28 }}>
              <span style={{ padding: "6px 14px", background: "var(--c42-mint)", color: "var(--c42-forest-ink)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)", borderRadius: 28 }}>Upcoming</span>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10 }}>
                Webinar / Live
              </div>
            </div>
            <h1 style={{ fontSize: 60, fontWeight: 700, lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 24px" }}>
              {w.title}
            </h1>
            <p style={{ fontSize: 19, lineHeight: "30px", color: "rgba(241,237,232,0.85)", margin: "0 0 36px", maxWidth: 620 }}>
              A 45-minute working session with the team building Compass. We'll walk through the governed runtime, run a live demo of region-pinned model access, and answer questions from the audience.
            </p>

            {/* Countdown strip */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 14 }}>Starts in</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, maxWidth: 480 }}>
                {[["08", "Days"], ["14", "Hours"], ["32", "Min"], ["09", "Sec"]].map(([n, l]) => (
                  <div key={l} style={{ textAlign: "center", padding: "14px 6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(241,237,232,0.12)" }}>
                    <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(241,237,232,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", columnGap: 48, rowGap: 8, paddingTop: 28, borderTop: "1px solid rgba(241,237,232,0.2)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
              {[
                ["When", w.date],
                ["Time", "15:00 GST · 11:00 GMT"],
                ["Duration", w.duration],
                ["Format", "Live + Q&A"],
              ].map(([l, v]) => (
                <div key={l}>
                  <div style={{ color: "rgba(241,237,232,0.55)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{l}</div>
                  <div style={{ color: "#fff", letterSpacing: "0.04em" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gated registration form in hero */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(241,237,232,0.15)", padding: 36 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--c42-orange)", textTransform: "uppercase", marginBottom: 14 }}>Register</div>
            <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 10px", color: "#fff" }}>Save your seat</h3>
            <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(241,237,232,0.7)", margin: "0 0 24px" }}>
              Register once and we'll send a calendar invite, pre-reads, and the recording after.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                ["Work email", "you@company.com"],
                ["Full name", "Your name"],
                ["Company", "Company name"],
                ["Role", "Your role"],
              ].map(([l, ph]) => (
                <div key={l}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(241,237,232,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{l}</label>
                  <input placeholder={ph} style={{ width: "100%", padding: "12px 14px", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(241,237,232,0.18)", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
            </div>
            {/* Privacy consent */}
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 18, cursor: "pointer" }}>
              <input type="checkbox" style={{ marginTop: 3, width: 16, height: 16, accentColor: "var(--c42-orange)", flexShrink: 0 }} />
              <span style={{ fontSize: 11, lineHeight: "17px", color: "rgba(241,237,232,0.7)" }}>
                I agree to the <a href="#" style={{ color: "var(--c42-orange)", textDecoration: "underline" }}>Privacy Policy</a> and consent to Core42 processing my information for this event and related communications.
              </span>
            </label>
            <button style={{ width: "100%", marginTop: 18, padding: "14px 20px", background: "var(--c42-orange)", color: "#fff", border: "none", fontSize: 13, fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>Register now →</button>
            <div style={{ marginTop: 16, fontSize: 11, lineHeight: "17px", color: "rgba(241,237,232,0.5)" }}>
              A calendar invite and the recording will be emailed to you. Can't attend live? Register anyway — we'll send the on-demand recording within 24 hours.
            </div>
          </div>
        </div>
      </section>

      {/* Body: description + agenda + speakers */}
      <section style={{ background: "var(--c42-paper)", padding: "100px 120px" }}>
        <div style={{ maxWidth: 1100 }}>
          <div>
            <Eyebrow>What you'll learn</Eyebrow>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.015em", margin: "14px 0 32px", color: "var(--c42-forest-ink)" }}>
              Run foundation models where the regulators can see them.
            </h2>
            <p style={{ fontSize: 17, lineHeight: "28px", color: "rgba(25,28,26,0.75)", margin: "0 0 40px", maxWidth: 640 }}>
              Hear directly from the team that built Compass about the architectural choices behind governed model access — and what's different about the 2.0 release. This is a technical session: expect live code, policy YAML, and uncut conversation about the parts that still don't work well.
            </p>

            {/* Takeaways */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 60 }}>
              {[
                ["Region pinning in practice", "How to enforce residency per model and per call — and what happens when a request violates it."],
                ["The policy object", "Why every inference request carries a context object, and what auditors actually look at."],
                ["Human checkpoints", "Inserting approval gates into agent runs without turning them into bureaucracy."],
                ["Observability for AI", "What to log, what to redact, and how to explain a decision six months later."],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: 24, background: "#fff", border: "1px solid var(--c42-paper-edge)" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--c42-forest-ink)", letterSpacing: "-0.005em", marginBottom: 8 }}>{t}</div>
                  <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.7)", margin: 0 }}>{d}</p>
                </div>
              ))}
            </div>

            {/* Agenda */}
            <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 24px" }}>Agenda</h3>
            <div style={{ borderTop: "1px solid var(--c42-paper-edge)", marginBottom: 60 }}>
              {agenda.map(([t, label], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 40, padding: "18px 0", borderBottom: "1px solid var(--c42-paper-edge)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--c42-orange)", letterSpacing: "0.06em" }}>{t}</div>
                  <div style={{ fontSize: 16, lineHeight: "24px", color: "var(--c42-forest-ink)" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Speakers */}
            <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", margin: "0 0 24px" }}>Speakers</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {speakers.map(s => (
                <div key={s.name} style={{ padding: 24, background: "#fff", border: "1px solid var(--c42-paper-edge)" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--c42-forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, marginBottom: 14 }}>{s.initials}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--c42-forest-ink)", marginBottom: 4 }}>{s.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>{s.role}</div>
                  <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(25,28,26,0.7)", margin: 0 }}>{s.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More sessions */}
      <section style={{ background: "var(--c42-paper-2)", padding: "80px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Eyebrow>More sessions</Eyebrow>
            <h3 style={{ fontSize: 40, fontWeight: 700, margin: "14px 0 0", letterSpacing: "-0.015em", color: "var(--c42-forest-ink)" }}>Upcoming & on-demand</h3>
          </div>
          <a href="#" style={{ color: "var(--c42-orange)", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>All webinars →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {(window.RES_WEBINARS || []).slice(1, 4).map(x => (
            <a key={x.id} href="#" style={{ textDecoration: "none", color: "inherit", background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", background: `url(${x.img}) center/cover` }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3))" }} />
                <div style={{ position: "absolute", top: 16, left: 16, padding: "4px 10px", background: x.status === "Upcoming" ? "var(--c42-mint)" : "rgba(255,255,255,0.9)", color: "var(--c42-forest-ink)", fontSize: 10, fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{x.status}</div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 30 30"><path d="M8 4 L24 15 L8 26 Z" fill="var(--c42-forest-ink)" /></svg>
                  </div>
                </div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h4 style={{ fontSize: 18, fontWeight: 700, lineHeight: "24px", margin: "0 0 10px", letterSpacing: "-0.005em", color: "var(--c42-forest-ink)" }}>{x.title}</h4>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{x.date} · {x.duration}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

Object.assign(window, { WebinarUpcomingPage });
