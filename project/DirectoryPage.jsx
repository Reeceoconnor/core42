// Core42 — Resources Directory
// Tabbed directory of Whitepapers / Blogs / Webinars

const RES_WHITEPAPERS = [
  { id: "w1", title: "Architecting sovereign AI: a reference model", topic: "Infrastructure", pages: 48, date: "Apr 2026", img: "assets/intelligence-grid.png", excerpt: "A technical reference for governments and regulated enterprises deploying national-scale AI compute." },
  { id: "w2", title: "Compliance-by-design: the Core42 control matrix", topic: "Governance", pages: 32, date: "Mar 2026", img: "assets/about-banner.jpg", excerpt: "How we map controls across GDPR, HIPAA, SOC2, ISO 27001 and sovereign frameworks." },
  { id: "w3", title: "GPU economics at scale: cost models for 2026 workloads", topic: "Economics", pages: 24, date: "Feb 2026", img: "assets/nvidia-h100.png", excerpt: "A quantitative look at H100/H200 cost-per-token across common inference and training profiles." },
  { id: "w4", title: "The sovereign cloud playbook for ministries", topic: "Public Sector", pages: 56, date: "Jan 2026", img: "assets/case-government.png", excerpt: "Six ministries. One operating model for modernization without losing jurisdictional control." },
  { id: "w5", title: "Clinical AI deployment: a safety-first framework", topic: "Healthcare", pages: 40, date: "Dec 2025", img: "assets/case-healthcare.png", excerpt: "Governing model rollouts inside hospital networks — from pilots to production." },
  { id: "w6", title: "Real-time decisioning for tier-one banks", topic: "Finance", pages: 28, date: "Nov 2025", img: "assets/case-finance.jpg", excerpt: "Low-latency fraud and risk architectures built on Core42 Compass." },
];

const RES_WEBINARS = [
  { id: "wb1", title: "Inside Compass 2.0: governed model access for enterprise teams", speaker: "Core42 Product Team", date: "02 May 2026", duration: "45 min", status: "Upcoming", img: "assets/product-hero.png" },
  { id: "wb2", title: "Running sovereign AI at national scale", speaker: "CTO, Core42", date: "24 Apr 2026", duration: "60 min", status: "Upcoming", img: "assets/about-hero.jpg" },
  { id: "wb3", title: "Fraud decisioning in real time: a banking case study", speaker: "Partner CIO + Core42", date: "19 Mar 2026", duration: "52 min", status: "On-demand", img: "assets/case-finance.jpg" },
  { id: "wb4", title: "H200 clusters: what changed and what's next", speaker: "Core42 Engineering", date: "05 Mar 2026", duration: "38 min", status: "On-demand", img: "assets/nvidia-h100.png" },
  { id: "wb5", title: "Digital identity without central choke points", speaker: "Core42 Public Sector", date: "12 Feb 2026", duration: "41 min", status: "On-demand", img: "assets/about-secondary.jpg" },
  { id: "wb6", title: "Quantization in production: lessons from 70B-parameter workloads", speaker: "Core42 Research", date: "30 Jan 2026", duration: "55 min", status: "On-demand", img: "assets/intelligence-grid-2.png" },
];

const RES_CASE_STUDIES = [
  { id: "c1", title: "Ministry of Digital Affairs: 40M-citizen services modernization", industry: "Public Sector", metric: "40M+", metricLabel: "Citizens Served", img: "assets/case-government.png" },
  { id: "c2", title: "National Health System: radiology backlog cut by 41%", industry: "Healthcare", metric: "41%", metricLabel: "Backlog Reduction", img: "assets/case-healthcare.png" },
  { id: "c3", title: "Tier-one bank: real-time fraud decisioning rebuilt", industry: "Finance", metric: "9ms", metricLabel: "p99 Decision Time", img: "assets/case-finance.jpg" },
  { id: "c4", title: "Sovereign research consortium: GPU cluster deployment", industry: "Research", metric: "3k", metricLabel: "GPUs Online", img: "assets/intelligence-grid.png" },
];

// ---- Hero ----
const DirectoryHero = () => (
  <section style={{ marginTop: 50, background: "var(--c42-paper)", color: "var(--c42-forest-ink)", padding: "120px 120px 60px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 80, alignItems: "flex-end" }}>
      <div>
        <div style={{ fontSize: 16, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.04em", borderTop: "1px solid var(--c42-orange)", paddingTop: 12, display: "inline-block", marginBottom: 28 }}>Resources</div>
        <h1 style={{ fontSize: 96, fontWeight: 700, lineHeight: "90px", letterSpacing: "-0.03em", margin: 0 }}>
          Knowledge from<br />the backbone.
        </h1>
        <p style={{ fontSize: 20, lineHeight: "30px", margin: "36px 0 0", maxWidth: 620, color: "rgba(25,28,26,0.75)" }}>
          Whitepapers, webinars, and case studies for public sector leaders, enterprise architects, and developers building on sovereign AI infrastructure.
        </p>
      </div>
      <div style={{ display: "grid", gap: 16, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--c42-forest-ink)", letterSpacing: "0.04em", borderLeft: "3px solid var(--c42-orange)", paddingLeft: 24 }}>
        <div><span style={{ color: "var(--c42-gray-60)" }}>Blogs</span><br /><span style={{ fontSize: 32, fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "-0.01em" }}>{((window.BLOG_ARTICLES||[]).length).toString().padStart(2, "0")}</span></div>
        <div><span style={{ color: "var(--c42-gray-60)" }}>Whitepapers</span><br /><span style={{ fontSize: 32, fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "-0.01em" }}>{RES_WHITEPAPERS.length.toString().padStart(2, "0")}</span></div>
        <div><span style={{ color: "var(--c42-gray-60)" }}>Webinars</span><br /><span style={{ fontSize: 32, fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "-0.01em" }}>{RES_WEBINARS.length.toString().padStart(2, "0")}</span></div>
      </div>
    </div>
  </section>
);

// ---- Tab bar ----
const TabBar = ({ active, setActive }) => {
  const tabs = [
    { id: "blogs", label: "Blogs", count: (window.BLOG_ARTICLES || []).length },
    { id: "whitepapers", label: "Whitepapers", count: RES_WHITEPAPERS.length },
    { id: "webinars", label: "Webinars", count: RES_WEBINARS.length },
    { id: "cases", label: "Case Studies", count: RES_CASE_STUDIES.length },
  ];
  return (
    <div style={{ background: "var(--c42-paper)", padding: "40px 120px 0", borderBottom: "1px solid var(--c42-paper-edge)" }}>
      <div style={{ display: "flex", gap: 0 }}>
        {tabs.map(t => {
          const isActive = t.id === active;
          return (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              background: "transparent", border: 0, cursor: "pointer",
              padding: "20px 32px 24px", display: "flex", alignItems: "baseline", gap: 10,
              fontFamily: "var(--font-sans)",
              color: isActive ? "var(--c42-forest-ink)" : "var(--c42-gray-60)",
              borderBottom: isActive ? "3px solid var(--c42-orange)" : "3px solid transparent",
              marginBottom: -1,
              transition: "all 220ms"
            }}>
              <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em" }}>{t.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c42-gray-60)", letterSpacing: "0.04em" }}>
                {t.count.toString().padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ---- Topic filter (shared across tabs) ----
const TopicFilter = ({ topics, active, setActive }) => (
  <div style={{ background: "var(--c42-paper)", padding: "28px 120px", display: "flex", alignItems: "center", gap: 20, borderBottom: "1px solid var(--c42-paper-edge)", flexWrap: "wrap" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--c42-gray-60)" }}>Filter by topic</span>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {topics.map(t => {
        const is = t === active;
        return (
          <button key={t} onClick={() => setActive(t)} style={{
            padding: "6px 14px", borderRadius: 28, fontSize: 13, fontFamily: "var(--font-sans)", fontWeight: 500,
            background: is ? "var(--c42-forest)" : "transparent",
            color: is ? "#fff" : "var(--c42-forest-ink)",
            border: is ? "1px solid var(--c42-forest)" : "1px solid rgba(25,28,26,0.2)",
            cursor: "pointer"
          }}>{t}</button>
        );
      })}
    </div>
  </div>
);

// ---- Whitepaper card ----
const WhitepaperCard = ({ w, featured = false }) => {
  const href = (window.URLS||{}).whitepaper || "#";
  if (featured) {
    return (
      <a href={href} style={{ gridColumn: "span 2", textDecoration: "none", color: "inherit", background: "var(--c42-forest)", color: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 440 }}>
        <div style={{ background: `url(${w.img}) center/cover` }} />
        <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 12, marginBottom: 20, display: "inline-block" }}>
              Whitepaper / {w.topic}
            </div>
            <h3 style={{ fontSize: 38, fontWeight: 700, lineHeight: "42px", letterSpacing: "-0.02em", margin: "0 0 20px" }}>{w.title}</h3>
            <p style={{ fontSize: 15, lineHeight: "24px", color: "rgba(241,237,232,0.85)", margin: 0 }}>{w.excerpt}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(241,237,232,0.6)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {w.date} / {w.pages} pages / PDF
            </div>
            <span className="c42-btn c42-btn--primary">DOWNLOAD</span>
          </div>
        </div>
      </a>
    );
  }
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", background: "#fff", transition: "transform 220ms" }}
       onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
       onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
        <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(24,45,33,0.9)", color: "#fff", padding: "5px 12px", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
          PDF · {w.pages}p
        </div>
      </div>
      <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block", alignSelf: "flex-start" }}>
          {w.topic}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--c42-forest-ink)" }}>{w.title}</h3>
        <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.7)", margin: "0 0 24px", flex: 1 }}>{w.excerpt}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{w.date}</span>
          <span style={{ fontSize: 13, color: "var(--c42-orange)", fontWeight: 500, letterSpacing: "0.02em" }}>Download →</span>
        </div>
      </div>
    </a>
  );
};

// ---- Webinar row ----
const WebinarRow = ({ w }) => (
  <a href={w.status === "Upcoming" ? ((window.URLS||{}).webinarUpcoming || "#") : ((window.URLS||{}).webinarOnDemand || "#")} style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "260px 1fr 180px 140px", gap: 32, alignItems: "center", padding: "24px 20px", borderBottom: "1px solid rgba(25,28,26,0.1)", transition: "background 220ms" }}
     onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
     onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
    <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
      <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 30 30"><path d="M 8 4 L 24 15 L 8 26 Z" fill="var(--c42-forest-ink)" /></svg>
        </div>
      </div>
    </div>
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
        Webinar
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.01em", margin: "0 0 8px", color: "var(--c42-forest-ink)" }}>{w.title}</h3>
      <div style={{ fontSize: 14, color: "var(--c42-gray-60)" }}>{w.speaker}</div>
    </div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c42-forest-ink)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
      {w.date}<br /><span style={{ color: "var(--c42-gray-60)" }}>{w.duration}</span>
    </div>
    <div style={{ textAlign: "right", paddingRight: 8 }}>
      <span style={{ display: "inline-block", padding: "8px 18px", background: w.status === "Upcoming" ? "var(--c42-mint)" : "transparent", color: w.status === "Upcoming" ? "var(--c42-forest)" : "var(--c42-forest-ink)", border: w.status === "Upcoming" ? "1px solid var(--c42-mint)" : "1px solid rgba(25,28,26,0.25)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 28, minWidth: 96, textAlign: "center", boxSizing: "border-box" }}>
        {w.status === "Upcoming" ? "Register" : "Watch"}
      </span>
    </div>
  </a>
);

// ---- Case study card ----
const CaseCard = ({ c }) => (
  <a href={(window.URLS||{}).caseStudy || "#"} style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 340, background: "var(--c42-forest-ink)", color: "#fff" }}>
    <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 20, display: "inline-block" }}>
          Case Study / {c.industry}
        </div>
        <h3 style={{ fontSize: 28, fontWeight: 700, lineHeight: "32px", letterSpacing: "-0.01em", margin: "0 0 28px" }}>{c.title}</h3>
      </div>
      <div>
        <div style={{ fontSize: 56, fontWeight: 700, color: "var(--c42-mint)", letterSpacing: "-0.02em", lineHeight: 1 }}>{c.metric}</div>
        <div style={{ fontSize: 13, color: "rgba(241,237,232,0.8)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>{c.metricLabel}</div>
      </div>
    </div>
    <div style={{ background: `url(${c.img}) center/cover` }} />
  </a>
);

// ---- Blog card (for Blogs tab in Resources) ----
const BlogFeaturedCard = ({ a }) => (
  <a href={(window.URLS||{}).blogArticle || "#"} style={{ gridColumn: "span 2", textDecoration: "none", color: "inherit", background: "var(--c42-forest)", color: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 440 }}>
    <div style={{ background: `url(${a.img}) center/cover`, position: "relative" }}>
      <div style={{ position: "absolute", top: 16, left: 16, background: "var(--c42-orange)", color: "#fff", padding: "6px 14px", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>Featured</div>
    </div>
    <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 12, marginBottom: 20, display: "inline-block" }}>
          Blog / {a.category}
        </div>
        <h3 style={{ fontSize: 38, fontWeight: 700, lineHeight: "42px", letterSpacing: "-0.02em", margin: "0 0 20px" }}>{a.title}</h3>
        <p style={{ fontSize: 15, lineHeight: "24px", color: "rgba(241,237,232,0.85)", margin: 0 }}>{a.excerpt}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(241,237,232,0.6)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {a.date} / {a.readTime}
        </div>
        <span className="c42-btn c42-btn--primary">READ ARTICLE</span>
      </div>
    </div>
  </a>
);

const BlogGridCard = ({ a }) => (
  <a href={(window.URLS||{}).blogArticle || "#"} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", background: "#fff", transition: "transform 220ms" }}
     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
     onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
    <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
      <img src={a.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(24,45,33,0.9)", color: "#fff", padding: "5px 12px", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
        {a.readTime}
      </div>
    </div>
    <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block", alignSelf: "flex-start" }}>
        {a.category}
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--c42-forest-ink)" }}>{a.title}</h3>
      <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.7)", margin: "0 0 24px", flex: 1 }}>{a.excerpt}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{a.date}</span>
        <span style={{ fontSize: 13, color: "var(--c42-orange)", fontWeight: 500, letterSpacing: "0.02em" }}>Read →</span>
      </div>
    </div>
  </a>
);

// ---- Body per tab ----
const WhitepapersBody = ({ items }) => (
  <section style={{ background: "var(--c42-paper)", padding: "60px 120px 120px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
      {items.map((w, i) => <WhitepaperCard key={w.id} w={w} featured={i === 0} />)}
    </div>
  </section>
);

const WebinarsBody = ({ items }) => (
  <section style={{ background: "var(--c42-paper)", padding: "40px 120px 120px" }}>
    <div>
      {items.map(w => <WebinarRow key={w.id} w={w} />)}
    </div>
  </section>
);

const CasesBody = ({ items }) => (
  <section style={{ background: "var(--c42-paper)", padding: "60px 120px 120px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
      {items.map(c => <CaseCard key={c.id} c={c} />)}
    </div>
  </section>
);

const BlogsBody = ({ items }) => {
  const featured = items.find(a => a.featured) || items[0];
  const rest = items.filter(a => a.id !== featured?.id);
  return (
    <section style={{ background: "var(--c42-paper)", padding: "60px 120px 120px" }}>
      {featured && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40, marginBottom: 40 }}>
          <BlogFeaturedCard a={featured} />
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
        {rest.map(a => <BlogGridCard key={a.id} a={a} />)}
      </div>
    </section>
  );
};

// Grid-only variant (no featured hero card) — used when the page already has a featured article in its hero
const BlogsBodyGrid = ({ items, excludeId }) => {
  const list = excludeId ? items.filter(a => a.id !== excludeId) : items;
  return (
    <section style={{ background: "var(--c42-paper)", padding: "60px 120px 120px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
        {list.map(a => <BlogGridCard key={a.id} a={a} />)}
      </div>
    </section>
  );
};

const DirectoryPage = () => {
  const [tab, setTab] = React.useState("blogs");
  const [topic, setTopic] = React.useState("All");

  const blogTopics = ["All", ...new Set((window.BLOG_ARTICLES || []).map(a => a.category))];
  const topicSets = {
    whitepapers: ["All", ...new Set(RES_WHITEPAPERS.map(w => w.topic))],
    webinars: ["All", "Upcoming", "On-demand"],
    cases: ["All", ...new Set(RES_CASE_STUDIES.map(c => c.industry))],
    blogs: blogTopics,
  };

  const blogList = window.BLOG_ARTICLES || [];
  const filtered = {
    whitepapers: topic === "All" ? RES_WHITEPAPERS : RES_WHITEPAPERS.filter(w => w.topic === topic),
    webinars: topic === "All" ? RES_WEBINARS : RES_WEBINARS.filter(w => w.status === topic),
    cases: topic === "All" ? RES_CASE_STUDIES : RES_CASE_STUDIES.filter(c => c.industry === topic),
    blogs: topic === "All" ? blogList : blogList.filter(a => a.category === topic),
  };

  React.useEffect(() => { setTopic("All"); }, [tab]);

  return (
    <div className="c42-scope" style={{ position: "relative", background: "var(--c42-paper)", width: 1920, minHeight: 3000 }}>
      <TopBar />
      <DirectoryHero />
      <TabBar active={tab} setActive={setTab} />
      <TopicFilter topics={topicSets[tab]} active={topic} setActive={setTopic} />
      {tab === "whitepapers" && <WhitepapersBody items={filtered.whitepapers} />}
      {tab === "webinars" && <WebinarsBody items={filtered.webinars} />}
      {tab === "cases" && <CasesBody items={filtered.cases} />}
      {tab === "blogs" && <BlogsBody items={filtered.blogs} />}
      <CareerCTA />
      <Footer />
    </div>
  );
};

Object.assign(window, {
  DirectoryPage,
  TabBar, TopicFilter,
  WhitepapersBody, WebinarsBody, CasesBody, BlogsBody, BlogsBodyGrid,
  RES_WHITEPAPERS, RES_WEBINARS, RES_CASE_STUDIES,
});
