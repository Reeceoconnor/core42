// Core42 — Mobile Resources directory page
// 402px viewport, iPhone-friendly. Uses the same data as DirectoryPage.

const MobileTopBar = () => (
  <div style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--c42-paper)", borderBottom: "1px solid var(--c42-paper-edge)", paddingTop: 60 }}>
    {/* Announcement strip */}
    <div style={{ padding: "10px 16px", background: "var(--c42-paper-2)", fontSize: 11, color: "var(--c42-forest-ink)", textAlign: "center", lineHeight: "16px" }}>
      New AI & cloud capabilities <a href="#" style={{ color: "var(--c42-orange)", textDecoration: "none", fontWeight: 500 }}>View →</a>
    </div>
    {/* Header with logo + hamburger */}
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

const MobileHero = () => (
  <section style={{ background: "var(--c42-paper)", padding: "40px 20px 28px" }}>
    <div style={{ fontSize: 12, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.08em", borderTop: "1px solid var(--c42-orange)", paddingTop: 8, display: "inline-block", marginBottom: 20 }}>Resources</div>
    <h1 style={{ fontSize: 40, fontWeight: 700, lineHeight: "40px", letterSpacing: "-0.02em", margin: 0, color: "var(--c42-forest-ink)" }}>
      Knowledge from<br />the backbone.
    </h1>
    <p style={{ fontSize: 15, lineHeight: "22px", color: "rgba(25,28,26,0.75)", margin: "20px 0 28px" }}>
      Blogs, whitepapers, webinars, and case studies for public sector leaders, enterprises, and developers building on sovereign AI infrastructure.
    </p>
    {/* Stat strip */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, borderTop: "1px solid rgba(25,28,26,0.1)", paddingTop: 18 }}>
      {[
        ["Blogs", (window.BLOG_ARTICLES || []).length],
        ["Papers", RES_WHITEPAPERS.length],
        ["Webinars", RES_WEBINARS.length],
        ["Cases", RES_CASE_STUDIES.length],
      ].map(([label, n]) => (
        <div key={label}>
          <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "-0.01em", color: "var(--c42-forest-ink)", lineHeight: 1 }}>{n.toString().padStart(2, "0")}</div>
          <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--c42-gray-60)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  </section>
);

const MobileTabBar = ({ active, setActive }) => {
  const tabs = [
    { id: "blogs", label: "Blogs" },
    { id: "whitepapers", label: "Papers" },
    { id: "webinars", label: "Webinars" },
    { id: "cases", label: "Cases" },
  ];
  return (
    <div style={{ position: "sticky", top: 139, zIndex: 15, background: "var(--c42-paper)", borderBottom: "1px solid var(--c42-paper-edge)", overflowX: "auto" }}>
      <div style={{ display: "flex", padding: "0 20px" }}>
        {tabs.map(t => {
          const isActive = t.id === active;
          return (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              background: "transparent", border: 0, cursor: "pointer",
              padding: "16px 16px 14px", whiteSpace: "nowrap",
              fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em",
              color: isActive ? "var(--c42-forest-ink)" : "var(--c42-gray-60)",
              borderBottom: isActive ? "3px solid var(--c42-orange)" : "3px solid transparent",
              marginBottom: -1
            }}>{t.label}</button>
          );
        })}
      </div>
    </div>
  );
};

const MobileFilterChips = ({ topics, active, setActive }) => (
  <div style={{ padding: "16px 0 16px 20px", overflowX: "auto", whiteSpace: "nowrap", background: "var(--c42-paper)" }}>
    <div style={{ display: "inline-flex", gap: 6 }}>
      {topics.map(t => {
        const is = t === active;
        return (
          <button key={t} onClick={() => setActive(t)} style={{
            padding: "7px 14px", borderRadius: 28, fontSize: 12, fontFamily: "var(--font-sans)", fontWeight: 500,
            background: is ? "var(--c42-forest)" : "transparent",
            color: is ? "#fff" : "var(--c42-forest-ink)",
            border: is ? "1px solid var(--c42-forest)" : "1px solid rgba(25,28,26,0.2)",
            cursor: "pointer", whiteSpace: "nowrap"
          }}>{t}</button>
        );
      })}
      <div style={{ width: 20, flexShrink: 0 }} />
    </div>
  </div>
);

// ---- Mobile cards ----
const MobileBlogFeatured = ({ a }) => (
  <a href={(window.URLS||{}).blogArticle || "#"} style={{ textDecoration: "none", color: "inherit", background: "var(--c42-forest)", color: "#fff", display: "block" }}>
    <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
      <img src={a.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: 14, left: 14, background: "var(--c42-orange)", color: "#fff", padding: "5px 12px", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>Featured</div>
    </div>
    <div style={{ padding: "24px 20px 28px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>
        Blog / {a.category}
      </div>
      <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.01em", margin: "0 0 12px" }}>{a.title}</h3>
      <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.85)", margin: "0 0 20px" }}>{a.excerpt}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(241,237,232,0.65)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {a.date} / {a.readTime}
        </div>
        <span style={{ fontSize: 12, color: "var(--c42-orange)", fontWeight: 500 }}>Read →</span>
      </div>
    </div>
  </a>
);

const MobileBlogCard = ({ a }) => (
  <a href={(window.URLS||{}).blogArticle || "#"} style={{ textDecoration: "none", color: "inherit", display: "flex", gap: 14, padding: "18px 0", borderBottom: "1px solid rgba(25,28,26,0.1)" }}>
    <div style={{ width: 112, flexShrink: 0, aspectRatio: "1", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
      <img src={a.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--c42-orange)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{a.category}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: "19px", letterSpacing: "-0.005em", margin: "0 0 8px", color: "var(--c42-forest-ink)" }}>{a.title}</h3>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {a.date} · {a.readTime}
      </div>
    </div>
  </a>
);

const MobileWhitepaperCard = ({ w, featured = false }) => {
  const href = (window.URLS||{}).whitepaper || "#";
  if (featured) {
    return (
      <a href={href} style={{ textDecoration: "none", color: "inherit", background: "var(--c42-forest)", color: "#fff", display: "block" }}>
        <div style={{ aspectRatio: "16/10", background: `url(${w.img}) center/cover` }} />
        <div style={{ padding: "24px 20px 28px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>
            Whitepaper / {w.topic}
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.01em", margin: "0 0 12px" }}>{w.title}</h3>
          <p style={{ fontSize: 13, lineHeight: "20px", color: "rgba(241,237,232,0.85)", margin: "0 0 20px" }}>{w.excerpt}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(241,237,232,0.65)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {w.date} · {w.pages}p · PDF
            </div>
            <span className="c42-btn c42-btn--primary" style={{ fontSize: 11, padding: "8px 16px", minHeight: 32 }}>DOWNLOAD</span>
          </div>
        </div>
      </a>
    );
  }
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit", background: "#fff", display: "block", marginBottom: 12 }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
        <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(24,45,33,0.9)", color: "#fff", padding: "4px 10px", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
          PDF · {w.pages}p
        </div>
      </div>
      <div style={{ padding: "18px 16px 20px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--c42-orange)", letterSpacing: "0.1em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 8, marginBottom: 10, display: "inline-block" }}>
          {w.topic}
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: "20px", letterSpacing: "-0.005em", margin: "0 0 8px", color: "var(--c42-forest-ink)" }}>{w.title}</h3>
        <p style={{ fontSize: 12, lineHeight: "18px", color: "rgba(25,28,26,0.65)", margin: "0 0 12px" }}>{w.excerpt}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{w.date}</span>
          <span style={{ fontSize: 11, color: "var(--c42-orange)", fontWeight: 500 }}>Download →</span>
        </div>
      </div>
    </a>
  );
};

const MobileWebinarRow = ({ w }) => (
  <a href={w.status === "Upcoming" ? ((window.URLS||{}).webinarUpcoming || "#") : ((window.URLS||{}).webinarOnDemand || "#")} style={{ textDecoration: "none", color: "inherit", display: "block", padding: "18px 0", borderBottom: "1px solid rgba(25,28,26,0.1)" }}>
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{ position: "relative", width: 120, flexShrink: 0, aspectRatio: "16/10", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
        <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 30 30"><path d="M 8 4 L 24 15 L 8 26 Z" fill="var(--c42-forest-ink)" /></svg>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--c42-orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Webinar</div>
          <span style={{ display: "inline-block", padding: "2px 8px", background: w.status === "Upcoming" ? "var(--c42-mint)" : "transparent", color: w.status === "Upcoming" ? "var(--c42-forest)" : "var(--c42-gray-60)", border: w.status === "Upcoming" ? "0" : "1px solid rgba(25,28,26,0.2)", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 28 }}>
            {w.status}
          </span>
        </div>
        <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: "19px", letterSpacing: "-0.005em", margin: "0 0 8px", color: "var(--c42-forest-ink)" }}>{w.title}</h3>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {w.date} · {w.duration}
        </div>
      </div>
    </div>
  </a>
);

const MobileCaseCard = ({ c }) => (
  <a href={(window.URLS||{}).caseStudy || "#"} style={{ textDecoration: "none", color: "inherit", background: "var(--c42-forest-ink)", color: "#fff", display: "block", marginBottom: 12 }}>
    <div style={{ aspectRatio: "16/10", background: `url(${c.img}) center/cover` }} />
    <div style={{ padding: "20px 20px 24px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block" }}>
        Case Study / {c.industry}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: "22px", letterSpacing: "-0.005em", margin: "0 0 20px" }}>{c.title}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: "var(--c42-mint)", letterSpacing: "-0.02em", lineHeight: 1 }}>{c.metric}</div>
        <div style={{ fontSize: 11, color: "rgba(241,237,232,0.8)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>{c.metricLabel}</div>
      </div>
    </div>
  </a>
);

// ---- Body per tab ----
const MobileBlogsBody = ({ items }) => {
  const featured = items.find(a => a.featured) || items[0];
  const rest = items.filter(a => a.id !== featured?.id);
  return (
    <div>
      {featured && <div style={{ marginBottom: 12 }}><MobileBlogFeatured a={featured} /></div>}
      <div style={{ padding: "0 20px" }}>
        {rest.map(a => <MobileBlogCard key={a.id} a={a} />)}
      </div>
    </div>
  );
};

const MobileWhitepapersBody = ({ items }) => {
  const [first, ...rest] = items;
  return (
    <div>
      {first && <div style={{ marginBottom: 12 }}><MobileWhitepaperCard w={first} featured /></div>}
      <div style={{ padding: "0 20px" }}>
        {rest.map(w => <MobileWhitepaperCard key={w.id} w={w} />)}
      </div>
    </div>
  );
};

const MobileWebinarsBody = ({ items }) => (
  <div style={{ padding: "0 20px" }}>
    {items.map(w => <MobileWebinarRow key={w.id} w={w} />)}
  </div>
);

const MobileCasesBody = ({ items }) => (
  <div>
    {items.map(c => <MobileCaseCard key={c.id} c={c} />)}
  </div>
);

// ---- Mobile footer (compact) ----
const MobileFooter = () => (
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

const MobileNewsletter = () => (
  <section style={{ background: "var(--c42-paper)", padding: "40px 20px" }}>
    <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px", color: "var(--c42-forest-ink)", letterSpacing: "-0.01em" }}>Stay updated</h3>
    <p style={{ fontSize: 13, lineHeight: "20px", margin: "0 0 20px", color: "rgba(25,28,26,0.7)" }}>Subscribe for the latest AI insights, product updates, and industry news.</p>
    <input className="c42-input" placeholder="Enter your email" style={{ height: 44, marginBottom: 12 }} />
    <a href="#" className="c42-btn c42-btn--primary" style={{ width: "100%", fontSize: 13 }}>SUBSCRIBE</a>
  </section>
);

const MobileDirectoryPage = () => {
  const [tab, setTab] = React.useState("blogs");
  const [topic, setTopic] = React.useState("All");

  const blogList = window.BLOG_ARTICLES || [];
  const topicSets = {
    blogs: ["All", ...new Set(blogList.map(a => a.category))],
    whitepapers: ["All", ...new Set(RES_WHITEPAPERS.map(w => w.topic))],
    webinars: ["All", "Upcoming", "On-demand"],
    cases: ["All", ...new Set(RES_CASE_STUDIES.map(c => c.industry))],
  };

  const filtered = {
    blogs: topic === "All" ? blogList : blogList.filter(a => a.category === topic),
    whitepapers: topic === "All" ? RES_WHITEPAPERS : RES_WHITEPAPERS.filter(w => w.topic === topic),
    webinars: topic === "All" ? RES_WEBINARS : RES_WEBINARS.filter(w => w.status === topic),
    cases: topic === "All" ? RES_CASE_STUDIES : RES_CASE_STUDIES.filter(c => c.industry === topic),
  };

  React.useEffect(() => { setTopic("All"); }, [tab]);

  return (
    <div className="c42-scope" style={{ background: "var(--c42-paper)", width: "100%", fontSize: 15 }}>
      <MobileTopBar />
      <MobileHero />
      <MobileTabBar active={tab} setActive={setTab} />
      <MobileFilterChips topics={topicSets[tab]} active={topic} setActive={setTopic} />
      <div style={{ paddingBottom: 40 }}>
        {tab === "blogs" && <MobileBlogsBody items={filtered.blogs} />}
        {tab === "whitepapers" && <MobileWhitepapersBody items={filtered.whitepapers} />}
        {tab === "webinars" && <MobileWebinarsBody items={filtered.webinars} />}
        {tab === "cases" && <MobileCasesBody items={filtered.cases} />}
      </div>
      <MobileNewsletter />
      <MobileFooter />
    </div>
  );
};

Object.assign(window, { MobileDirectoryPage });
