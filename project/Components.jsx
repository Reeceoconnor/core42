// Core42 — shared primitive components
// Load after React + Babel. Exposes components to window.

// Inline SVGs (webview serves .svg as text/plain, so <img src> breaks)
const CGlyph = ({ size = 30, color = "currentColor", style }) => (
  <svg width={size} height={size * 0.964} viewBox="0 0 31.493 30.357" style={style} fill={color}>
    <path d="M 16.015 6.687 C 19.78 6.687 22.826 9.292 23.605 12.902 L 31.493 12.902 C 31.073 9.175 29.462 6.037 26.53 3.61 C 23.605 1.183 20.078 0 15.955 0 C 11.354 0 7.529 1.421 4.54 4.261 C 1.493 7.16 0 10.767 0 15.208 C 0 19.65 1.493 23.257 4.54 26.096 C 7.529 28.935 11.351 30.357 15.955 30.357 C 20.078 30.357 23.605 29.173 26.53 26.75 C 29.458 24.323 31.073 21.246 31.493 17.518 L 23.666 17.518 C 22.887 21.128 19.783 23.673 16.015 23.673 C 11.415 23.673 8.006 20.123 8.006 15.212 C 8.006 10.301 11.293 6.691 16.015 6.691 L 16.015 6.687 Z"/>
  </svg>
);

// Official Core42 logo — aspect ratio 4167:1852 ≈ 2.25:1
// Use variant="dark" on light backgrounds, variant="light" on dark backgrounds.
const Wordmark = ({ variant = "light", size = 28, showTagline = false }) => {
  const src = variant === "dark" ? "assets/logo-core42-full.png" : "assets/logo-core42-white.png";
  // size = target wordmark height in px. The PNG has a "A G42 Company" tagline below;
  // we crop it off by default (only top ~60% of image) via a clip wrapper.
  const width = size * 2.25;
  const cropHeight = showTagline ? size * 1 : size * 0.62; // wordmark occupies top ~62% of file
  return (
    <div style={{ width, height: cropHeight, overflow: "hidden", display: "inline-block", lineHeight: 0 }}>
      <img src={src} alt="Core42" style={{ width: "100%", display: "block" }} />
    </div>
  );
};

const SocialIcon = ({ name, size = 28, color = "#fff" }) => {
  const paths = {
    twitter: <path d="M18.244 2h3.308l-7.227 8.26L23 22h-6.68l-5.23-6.84L4.89 22H1.58l7.73-8.83L1 2h6.82l4.73 6.25L18.244 2zm-1.16 18.04h1.83L7.02 3.85H5.06l12.024 16.19z"/>,
    linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
    github: <path d="M12 .297C5.37.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.578 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>,
    youtube: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>{paths[name]}</svg>;
};

const SideRail = ({ active = "Home" }) => {
  const items = ["Home", "Products", "Solutions", "Use Cases", "Technology", "Resources", "Company", "Contact"];
  return (
    <aside style={{
      position: "absolute", left: 0, top: 0, width: 240, height: "100%",
      background: "var(--c42-forest)", color: "#fff",
      padding: "83px 29px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 36
    }}>
      <Wordmark variant="light" size={32} />
      <nav style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {items.map(i => (
          <a key={i} href="#" style={{
            color: active === i ? "var(--c42-orange)" : "#fff",
            textDecoration: "none", fontSize: 14, lineHeight: "24px", fontFamily: "var(--font-sans)"
          }}>{i}</a>
        ))}
      </nav>
      <a href="#" className="c42-btn c42-btn--primary" style={{ alignSelf: "flex-start", marginTop: "auto" }}>GET STARTED</a>
    </aside>
  );
};

// Icon-only collapsed rail — 72px wide. Shows the C glyph, a menu toggle, nav icons,
// and a primary "start" affordance at the bottom. Hover on any nav icon reveals a label tooltip.
const SideRailCollapsed = ({ active = "Home" }) => {
  const items = [
    { name: "Home",       icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V11z"/></svg>) },
    { name: "Products",   icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>) },
    { name: "Solutions",  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>) },
    { name: "Use Cases",  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></svg>) },
    { name: "Technology", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4v16M15 4v16M4 9h16M4 15h16"/></svg>) },
    { name: "Resources",  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 19V5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h7M8 11h7M8 15h5"/></svg>) },
    { name: "Company",    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/></svg>) },
    { name: "Contact",    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7l-5 4v-4H6a2 2 0 0 1-2-2V5z"/></svg>) },
  ];
  return (
    <aside style={{
      position: "absolute", left: 0, top: 0, width: 72, height: "100%",
      background: "var(--c42-forest)", color: "#fff",
      padding: "28px 0 24px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 24
    }}>
      {/* C glyph */}
      <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none" }}>
        <CGlyph size={36} color="#fff" />
      </a>

      {/* Expand / menu toggle */}
      <button aria-label="Expand navigation" style={{
        width: 40, height: 40, borderRadius: 8, border: 0, cursor: "pointer",
        background: "rgba(255,255,255,0.06)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 180ms"
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.14)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Nav icons */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
        {items.map(({ name, icon }) => {
          const isActive = name === active;
          return (
            <a key={name} href="#" title={name} style={{
              width: 44, height: 44, borderRadius: 10, position: "relative",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: isActive ? "var(--c42-orange)" : "rgba(255,255,255,0.85)",
              background: isActive ? "rgba(217,94,52,0.14)" : "transparent",
              textDecoration: "none", transition: "background 180ms, color 180ms"
            }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}>
              {icon}
              {isActive && (
                <span style={{
                  position: "absolute", left: -12, top: "50%", transform: "translateY(-50%)",
                  width: 3, height: 18, background: "var(--c42-orange)", borderRadius: 2
                }} />
              )}
            </a>
          );
        })}
      </nav>

      {/* Start button (icon) */}
      <a href="#" aria-label="Get started" title="Get started" style={{
        marginTop: "auto", width: 44, height: 44, borderRadius: 10,
        background: "var(--c42-orange)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none", boxShadow: "0 2px 8px rgba(217,94,52,0.35)"
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </a>
    </aside>
  );
};

const TopBar = () => (
  <div className="c42-topbar" style={{
    position: "absolute", left: 0, top: 0, right: 0, height: 50,
    background: "var(--c42-paper)", display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 14, color: "var(--c42-forest-ink)"
  }}>
    Core42 announces new AI &amp; cloud capabilities to accelerate enterprise transformation
    <a href="#" style={{ marginLeft: 16, color: "var(--c42-orange)", textDecoration: "none", fontWeight: 500 }}>View announcement →</a>
  </div>
);

const Eyebrow = ({ children }) => (
  <span style={{
    display: "inline-block", fontSize: 16, lineHeight: "28px",
    color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.04em",
    borderTop: "1px solid var(--c42-orange)", paddingTop: 8
  }}>{children}</span>
);

const Footer = () => (
  <footer style={{ background: "var(--c42-forest)", color: "#fff", padding: "100px 97px 40px", fontFamily: "var(--font-sans)" }}>
    <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
      <Wordmark variant="light" size={48} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 40, flex: 1, fontSize: 13 }}>
        {[
          ["AI Cloud", ["GPU Compute", "HPC", "Cloud Platforms", "Storage", "Networking"]],
          ["Resources", ["Documentation", "Compass", "Blog", "Whitepapers", "Case Studies"]],
          ["Company", ["About", "Careers", "Partners", "Contact"]],
          ["Products", ["AI Cloud", "Compass", "Services"]],
          ["Connect", ["Twitter", "Linkedin", "Github", "Youtube", "Instagram"]],
        ].map(([h, items]) => (
          <div key={h}>
            <h4 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</h4>
            {items.map(i => (
              <a key={i} href="#" style={{ display: "block", color: "rgba(241,237,232,0.8)", textDecoration: "none", padding: "3px 0" }}>{i}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <hr style={{ border: 0, borderTop: "1px solid rgba(241,237,232,0.3)", margin: "60px 0 20px" }} />
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(241,237,232,0.7)" }}>
      <span>© Core42 · All rights reserved 2026</span>
      <span>Privacy Policy · Terms of Service</span>
    </div>
  </footer>
);

const Hero = () => (
  <section style={{
    position: "relative", marginLeft: 240, marginTop: 50,
    height: 860, background: "var(--c42-forest)",
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden", color: "#fff"
  }}>
    {/* Diagonal mint stripes background */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.5,
      background: "repeating-linear-gradient(115deg, transparent 0 120px, rgba(72,222,147,0.12) 120px 121px)"
    }} />
    <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 1035 }}>
      <h1 style={{
        fontSize: 96, fontWeight: 700, lineHeight: "90px",
        letterSpacing: "-0.03em", margin: 0, color: "#fff"
      }}>Engineered intelligence</h1>
      <p style={{
        fontSize: 16, lineHeight: 1.2, color: "var(--c42-orange)", maxWidth: 520,
        margin: "28px auto 40px"
      }}>We build the invisible AI backbone that enables innovators and nations to move from ambition to real-world impact, at scale.</p>
      <a href="#" className="c42-btn c42-btn--primary">GET STARTED</a>
    </div>
    <div style={{
      position: "absolute", left: 0, right: 0, bottom: 60,
      display: "flex", justifyContent: "center", gap: 40,
      opacity: 0.6, fontSize: 12, letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.7)", textTransform: "uppercase"
    }}>
      <span>Sovereign AI</span><span>·</span><span>Cloud Platforms</span><span>·</span><span>HPC</span><span>·</span><span>GPU Compute</span>
    </div>
  </section>
);

const DemoVideo = () => (
  <section style={{
    marginLeft: 240, background: "var(--c42-mint)",
    height: 710, position: "relative", overflow: "hidden"
  }}>
    <img src="assets/demo-video-still.jpg" style={{
      position: "absolute", left: "50%", top: "50%",
      transform: "translate(-50%, -50%)", width: "110%", minHeight: "100%",
      objectFit: "cover", mixBlendMode: "multiply", opacity: 0.9
    }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(72,222,147,0.25)" }} />
    <div style={{ position: "relative", padding: "245px 87px", display: "flex", alignItems: "center", gap: 43 }}>
      <div style={{ fontSize: 40, lineHeight: "45px", letterSpacing: "-0.02em", color: "#fff", maxWidth: 528 }}>
        Intelligence is no longer limited to nature or chance.<br />
        It can be engineered,<br />governed, and scaled.
      </div>
      <button style={{
        width: 100, height: 100, borderRadius: "50%",
        background: "rgba(255,255,255,0.6)", border: 0, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <svg width="34" height="34" viewBox="0 0 30 30"><path d="M 8 4 L 24 15 L 8 26 Z" fill="var(--c42-forest-ink)" /></svg>
      </button>
    </div>
  </section>
);

const MissionBand = () => (
  <section style={{
    marginLeft: 240, background: "var(--c42-forest)", color: "#fff",
    padding: "188px 240px 180px", position: "relative"
  }}>
    <h2 style={{
      fontSize: 96, fontWeight: 700, lineHeight: "90px", letterSpacing: "-0.02em",
      margin: 0, maxWidth: 674
    }}>Core42 for every mission-critical need</h2>
    <hr style={{ border: 0, height: 2, background: "var(--c42-mint-50)", margin: "80px 0 60px" }} />
    <div style={{ display: "grid", gridTemplateColumns: "532px 1fr 353px", gap: 40, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>Public Sector &amp; Governments</h3>
        <p style={{ fontSize: 16, lineHeight: "24px", margin: "0 0 24px", color: "rgba(241,237,232,0.9)" }}>
          Build national AI infrastructure that meets the highest standards for security, compliance, and data sovereignty. Deliver citizen services at scale while maintaining complete control.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 14, color: "rgba(241,237,232,0.8)" }}>
          <li>— Deploy sovereign cloud infrastructure with complete data control</li>
          <li>— Enable smart city initiatives with AI-powered services</li>
          <li>— Automate citizen services while maintaining security</li>
          <li>— Meet regulatory compliance across all jurisdictions</li>
        </ul>
        <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
          <a href="#" className="c42-btn c42-btn--primary">SEE HOW</a>
          <a href="#" className="c42-btn c42-btn--secondary">SCHEDULE DEMO</a>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {[["25+", "Public Sector &\nGovernments"], ["40+", "Smart Cities"], ["50M+", "Citizens Served"]].map(([v, l]) => (
          <div key={v}>
            <div style={{ fontSize: 64, fontWeight: 700, color: "var(--c42-mint)", lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ fontSize: 14, marginTop: 8, whiteSpace: "pre-line", color: "rgba(241,237,232,0.85)" }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ position: "relative", paddingLeft: 16, borderLeft: "3px solid var(--c42-orange)" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 18, fontSize: 14 }}>
          <li style={{ fontWeight: 700 }}>Public Sector &amp; Governments</li>
          <li style={{ color: "rgba(241,237,232,0.7)" }}>Enterprises</li>
          <li style={{ color: "rgba(241,237,232,0.7)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: 12 }}>Developers &amp; Startups</li>
          <li style={{ color: "rgba(241,237,232,0.7)" }}>Developers</li>
        </ul>
      </div>
    </div>
  </section>
);

const UseCases = () => {
  const cases = [
    ["Public Sector", "Smarter Government, Better Outcomes", "Modernize citizen services, automate administrative workflows, and enable data-driven policy decisions while maintaining sovereign control over sensitive national data.", "assets/case-government.png"],
    ["Healthcare", "AI-Powered Precision Care", "Accelerate diagnostics, streamline clinical workflows, and unlock insights from medical data to deliver faster, more personalized patient outcomes at scale.", "assets/case-healthcare.png"],
    ["Finance", "Smarter Finance, Faster Decisions", "Enhance fraud detection, automate compliance, and power real-time decisioning, turning vast financial data into actionable intelligence while meeting regulatory demands.", "assets/case-finance.jpg"],
  ];
  return (
    <section style={{ marginLeft: 240, background: "rgba(241,237,232,0.7)", padding: "74px 120px 120px" }}>
      <h2 style={{ fontSize: 64, fontWeight: 700, textAlign: "center", color: "var(--c42-forest)", lineHeight: "60px", letterSpacing: "-0.02em", margin: "0 0 60px" }}>Featured use cases</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {cases.map(([eb, h, p, img], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480, background: i === 1 ? "var(--c42-forest)" : i === 2 ? "#000" : "var(--c42-forest-ink)" }}>
            <div style={{ padding: "120px 76px", color: "#fff" }}>
              <div style={{ fontSize: 16, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.04em", borderTop: "1px solid var(--c42-orange)", paddingTop: 16, marginBottom: 24 }}>{eb}</div>
              <h3 style={{ fontSize: 50, fontWeight: 700, lineHeight: "52px", margin: "0 0 28px" }}>{h}</h3>
              <p style={{ fontSize: 16, lineHeight: "24px", margin: 0, maxWidth: 490, color: "rgba(255,255,255,0.9)" }}>{p}</p>
            </div>
            <div style={{ background: `url(${img}) center/cover` }} />
          </div>
        ))}
      </div>
    </section>
  );
};

const TrustedLogos = () => (
  <section style={{
    marginLeft: 240, background: "var(--c42-paper-2)",
    padding: "78px 76px", textAlign: "center", position: "relative"
  }}>
    <h2 style={{ fontSize: 64, fontWeight: 700, color: "var(--c42-forest)", lineHeight: "60px", margin: "0 0 80px", letterSpacing: "-0.01em" }}>
      Trusted by the world's leading<br />AI and Cloud pioneers
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "30px 60px", alignItems: "center", opacity: 0.7 }}>
      {["Microsoft", "Dell", "G42", "NVIDIA", "Qualcomm", "IBM", "Schlumberger", "AMD", "Cerebras", "Intel", "Oracle", "OpenAI", "Anthropic", "AWS", "Salesforce", "SAP", "ServiceNow", "Palantir", "Databricks", "Snowflake", "Red Hat"].map(n => (
        <div key={n} style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, color: "var(--c42-forest-ink)", letterSpacing: "-0.01em" }}>{n}</div>
      ))}
    </div>
  </section>
);

const CareerCTA = () => (
  <section style={{
    position: "relative", height: 540, overflow: "hidden",
    background: `url(assets/hero-colleagues.jpg) center/cover`,
  }}>
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(24,45,33,0.45), rgba(24,45,33,0.7))" }} />
    <div style={{ position: "relative", textAlign: "center", paddingTop: 170, color: "#fff" }}>
      <h2 style={{ fontSize: 80, fontWeight: 700, lineHeight: 1, margin: "0 0 40px", letterSpacing: "-0.02em" }}>Get started with Core42</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <a href="#" className="c42-btn c42-btn--primary">CONTACT SALES</a>
        <a href="#" className="c42-btn c42-btn--secondary">REQUEST DEMO</a>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section style={{ background: "var(--c42-paper)", padding: "144px 240px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
    <div>
      <h3 style={{ fontSize: 40, fontWeight: 700, margin: "0 0 20px", color: "var(--c42-forest-ink)" }}>Stay updated</h3>
      <p style={{ fontSize: 16, lineHeight: "24px", margin: "0 0 32px", maxWidth: 480 }}>Subscribe to our newsletter for the latest AI insights, product updates, and industry news.</p>
      <div style={{ display: "flex", gap: 0, marginBottom: 16 }}>
        <input className="c42-input" placeholder="Enter your email" style={{ flex: 1, maxWidth: 515 }} />
      </div>
      <a href="#" className="c42-btn c42-btn--primary">SUBSCRIBE</a>
      <p style={{ fontSize: 13, lineHeight: "20px", color: "var(--fg-muted)", marginTop: 20, maxWidth: 440 }}>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
    </div>
    <div>
      <h3 style={{ fontSize: 40, fontWeight: 700, margin: "0 0 20px", color: "var(--c42-forest-ink)" }}>Connect with us</h3>
      <p style={{ fontSize: 16, lineHeight: "24px", margin: "0 0 32px", maxWidth: 480 }}>Follow us on social media and join our community of AI innovators and industry leaders.</p>
      <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
        {["twitter", "linkedin", "github", "youtube"].map(n => (
          <a key={n} href="#" style={{ color: "var(--c42-forest-ink)" }}><SocialIcon name={n} color="var(--c42-forest-ink)" /></a>
        ))}
      </div>
      <a href="#" className="c42-btn c42-btn--primary">CONTACT SALES</a>
    </div>
  </section>
);

Object.assign(window, { SideRail, SideRailCollapsed, TopBar, Eyebrow, Footer, Hero, DemoVideo, MissionBand, UseCases, TrustedLogos, CareerCTA, Newsletter, Wordmark, CGlyph, SocialIcon });
