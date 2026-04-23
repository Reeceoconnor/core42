// Core42 — Blog listing page
// Editorial layout: hero featured article + filter bar + grid of articles
// Assumes SideRail, TopBar, Footer, Newsletter, CareerCTA already on window

const BLOG_ARTICLES = [
  { id: 1, category: "Product", date: "19 Apr 2026", readTime: "8 min read",
    title: "Introducing Compass 2.0: Sovereign AI application platform",
    excerpt: "A new developer layer sits atop the Core42 AI Cloud — giving teams governed access to foundation models, agents, and data workflows without compromising control.",
    author: "Core42 Product", img: "assets/product-hero.png", featured: true, audience: "Enterprise" },
  { id: 2, category: "Infrastructure", date: "11 Apr 2026", readTime: "6 min read",
    title: "Inside the Intelligence Grid: how we built a 10-region sovereign cloud",
    excerpt: "Engineering notes on designing a cross-border compute fabric that stays compliant at every jurisdictional boundary.",
    author: "Engineering", img: "assets/intelligence-grid.png", audience: "Developers" },
  { id: 3, category: "Public Sector", date: "04 Apr 2026", readTime: "5 min read",
    title: "Smart cities, slower bureaucracies: a blueprint for modernization",
    excerpt: "Four ministries. Forty million citizens. One unified services platform running on Core42 AI Cloud.",
    author: "Public Sector", img: "assets/case-government.png", audience: "Public Sector" },
  { id: 4, category: "Research", date: "28 Mar 2026", readTime: "11 min read",
    title: "Benchmarking H100 clusters for sovereign workloads",
    excerpt: "Side-by-side throughput results across six model families running on Core42's NVIDIA H100 infrastructure.",
    author: "Research", img: "assets/nvidia-h100.png", audience: "Developers" },
  { id: 5, category: "Healthcare", date: "22 Mar 2026", readTime: "7 min read",
    title: "AI-assisted diagnostics: what three hospital networks learned in year one",
    excerpt: "Reducing radiology backlog by 41% without relocating a single byte of patient data.",
    author: "Healthcare", img: "assets/case-healthcare.png", audience: "Enterprise" },
  { id: 6, category: "Finance", date: "15 Mar 2026", readTime: "6 min read",
    title: "Real-time fraud decisioning at regulatory scale",
    excerpt: "How a tier-one bank rebuilt its decisioning stack on Core42 — and kept auditors on their side.",
    author: "Finance", img: "assets/case-finance.jpg", audience: "Enterprise" },
  { id: 7, category: "Company", date: "08 Mar 2026", readTime: "4 min read",
    title: "Core42 named strategic partner for national AI compute initiative",
    excerpt: "A multi-year agreement to deploy a public-benefit AI compute cluster serving research institutions.",
    author: "Press", img: "assets/about-banner.jpg", audience: "Public Sector" },
  { id: 8, category: "Product", date: "01 Mar 2026", readTime: "9 min read",
    title: "GPU Compute now supports on-demand H200 clusters",
    excerpt: "Expanded capacity across three regions, with per-minute billing and reserved-instance commitments.",
    author: "Product", img: "assets/intelligence-grid-2.png", audience: "Developers" },
  { id: 9, category: "Perspective", date: "24 Feb 2026", readTime: "12 min read",
    title: "Sovereignty is not a feature. It's a first principle.",
    excerpt: "An essay from our CTO on why infrastructure choices made today will decide who controls tomorrow's intelligence.",
    author: "Leadership", img: "assets/about-hero.jpg", audience: "Public Sector" },
  { id: 10, category: "Engineering", date: "17 Feb 2026", readTime: "8 min read",
    title: "Running 70B parameter models on a budget: quantization in production",
    excerpt: "Practical notes on INT4 deployment pipelines running across Compass-managed endpoints.",
    author: "Engineering", img: "assets/product-detail.jpg", audience: "Developers" },
  { id: 11, category: "Public Sector", date: "10 Feb 2026", readTime: "5 min read",
    title: "Digital identity, done sovereignly",
    excerpt: "A case study on unifying citizen identity services without a central choke point.",
    author: "Public Sector", img: "assets/about-secondary.jpg", audience: "Public Sector" },
  { id: 12, category: "Partnerships", date: "03 Feb 2026", readTime: "4 min read",
    title: "Core42 and NVIDIA expand GPU supply agreement through 2028",
    excerpt: "A multi-year commitment to secure compute supply for sovereign customers.",
    author: "Partnerships", img: "assets/nvidia-h100.png", audience: "Enterprise" },
  { id: 13, category: "Engineering", date: "27 Jan 2026", readTime: "10 min read",
    title: "The network fabric behind AI Cloud: design decisions and tradeoffs",
    excerpt: "How we chose between InfiniBand and Ethernet-based fabrics — and what we measured along the way.",
    author: "Engineering", img: "assets/product-secondary.jpg", audience: "Developers" },
  { id: 14, category: "Company", date: "20 Jan 2026", readTime: "3 min read",
    title: "2026 outlook: where sovereign AI goes from here",
    excerpt: "Five themes shaping the year ahead, from regulation to regionalization.",
    author: "Leadership", img: "assets/news-feature.png", audience: "Public Sector" },
];

const BLOG_CATEGORIES = ["All", "Product", "Engineering", "Public Sector", "Healthcare", "Finance", "Research", "Company"];
const BLOG_AUDIENCES = ["All audiences", "Public Sector", "Enterprise", "Developers"];

const BlogHero = ({ article }) => (
  <section style={{ marginTop: 50, background: "var(--c42-forest)", color: "#fff", padding: "120px 120px 80px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60 }}>
      <div>
        <div style={{ fontSize: 16, color: "var(--c42-orange)", textTransform: "uppercase", letterSpacing: "0.04em", borderTop: "1px solid var(--c42-orange)", paddingTop: 12, display: "inline-block", marginBottom: 28 }}>Blog</div>
        <h1 style={{ fontSize: 96, fontWeight: 700, lineHeight: "90px", letterSpacing: "-0.03em", margin: 0, maxWidth: 1100 }}>
          Dispatches from the<br />invisible backbone.
        </h1>
      </div>
      <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "rgba(241,237,232,0.7)", letterSpacing: "0.04em" }}>
        <div>{BLOG_ARTICLES.length.toString().padStart(3, "0")} ARTICLES</div>
        <div style={{ marginTop: 8 }}>UPDATED WEEKLY</div>
      </div>
    </div>

    {/* Featured article card */}
    <a href={(window.URLS||{}).blogArticle || "#"} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", textDecoration: "none", color: "inherit", paddingTop: 60, borderTop: "2px solid var(--c42-mint-50)" }}>
      <div style={{ position: "relative" }}>
        <img src={article.img} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, left: 16, background: "var(--c42-orange)", color: "#fff", padding: "6px 14px", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>Featured</div>
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(241,237,232,0.7)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20 }}>
          {article.category} / {article.date} / {article.readTime}
        </div>
        <h2 style={{ fontSize: 50, fontWeight: 700, lineHeight: "54px", letterSpacing: "-0.02em", margin: "0 0 24px", color: "#fff" }}>
          {article.title}
        </h2>
        <p style={{ fontSize: 18, lineHeight: "28px", color: "rgba(241,237,232,0.88)", margin: "0 0 36px", maxWidth: 560 }}>
          {article.excerpt}
        </p>
        <span className="c42-btn c42-btn--primary">READ ARTICLE</span>
      </div>
    </a>
  </section>
);

const BlogFilterBar = ({ category, setCategory, audience, setAudience, query, setQuery, sort, setSort }) => (
  <section style={{ background: "var(--c42-paper)", padding: "40px 120px", borderBottom: "1px solid var(--c42-paper-edge)", position: "sticky", top: 0, zIndex: 10 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
      {/* Category chips */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {BLOG_CATEGORIES.map(c => {
          const active = c === category;
          return (
            <button key={c} onClick={() => setCategory(c)} style={{
              padding: "8px 18px", borderRadius: 28,
              fontSize: 13, fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.02em",
              background: active ? "var(--c42-forest)" : "transparent",
              color: active ? "#fff" : "var(--c42-forest-ink)",
              border: active ? "1px solid var(--c42-forest)" : "1px solid rgba(25,28,26,0.2)",
              cursor: "pointer", transition: "all 220ms"
            }}>{c}</button>
          );
        })}
      </div>

      {/* Search + sort */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--c42-gray-60)" }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles" style={{
            height: 40, paddingLeft: 40, paddingRight: 16, width: 260,
            border: "1px solid var(--c42-gray-60)", background: "#fff",
            fontFamily: "var(--font-sans)", fontSize: 14, outline: "none"
          }} onFocus={e => e.target.style.borderColor = "var(--c42-orange)"} onBlur={e => e.target.style.borderColor = "var(--c42-gray-60)"} />
        </div>
        <select value={audience} onChange={e => setAudience(e.target.value)} style={{
          height: 40, padding: "0 16px", border: "1px solid var(--c42-gray-60)", background: "#fff",
          fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--c42-forest-ink)", cursor: "pointer"
        }}>
          {BLOG_AUDIENCES.map(a => <option key={a}>{a}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} style={{
          height: 40, padding: "0 16px", border: "1px solid var(--c42-gray-60)", background: "#fff",
          fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--c42-forest-ink)", cursor: "pointer"
        }}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="reading">Longest read</option>
        </select>
      </div>
    </div>
  </section>
);

const BlogCard = ({ a }) => (
  <a href={(window.URLS||{}).blogArticle || "#"} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 20 }}>
    <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--c42-paper-edge)" }}>
      <img src={a.img} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 420ms" }}
        onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"} />
    </div>
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-orange)", letterSpacing: "0.08em", textTransform: "uppercase", borderTop: "1px solid var(--c42-orange)", paddingTop: 10, marginBottom: 14, display: "inline-block", paddingRight: 40 }}>
        {a.category}
      </div>
      <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.01em", margin: "0 0 12px", color: "var(--c42-forest-ink)" }}>
        {a.title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(25,28,26,0.75)", margin: "0 0 16px" }}>
        {a.excerpt}
      </p>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--c42-gray-60)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {a.date} / {a.readTime}
      </div>
    </div>
  </a>
);

const BlogGrid = ({ articles }) => (
  <section style={{ background: "var(--c42-paper)", padding: "80px 120px 120px" }}>
    {articles.length === 0 ? (
      <div style={{ textAlign: "center", padding: "120px 0", color: "var(--c42-gray-60)", fontSize: 18 }}>
        No articles match these filters.
      </div>
    ) : (
      <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "60px 40px" }}>
          {articles.map(a => <BlogCard key={a.id} a={a} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <a href="#" className="c42-btn c42-btn--dark">LOAD MORE ARTICLES</a>
        </div>
      </>
    )}
  </section>
);

const BlogPage = ({ tweak }) => {
  const [category, setCategory] = React.useState("All");
  const [audience, setAudience] = React.useState("All audiences");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("newest");

  const filtered = React.useMemo(() => {
    let list = BLOG_ARTICLES.filter(a => !a.featured);
    if (category !== "All") list = list.filter(a => a.category === category);
    if (audience !== "All audiences") list = list.filter(a => a.audience === audience);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
    }
    if (sort === "oldest") list = [...list].reverse();
    if (sort === "reading") list = [...list].sort((x, y) => parseInt(y.readTime) - parseInt(x.readTime));
    return list;
  }, [category, audience, query, sort]);

  const featured = BLOG_ARTICLES.find(a => a.featured);

  return (
    <div className="c42-scope" style={{ position: "relative", background: "var(--c42-paper)", width: 1920, minHeight: 3600 }}>
      <TopBar />
      <BlogHero article={featured} />
      <BlogFilterBar category={category} setCategory={setCategory} audience={audience} setAudience={setAudience} query={query} setQuery={setQuery} sort={sort} setSort={setSort} />
      <BlogGrid articles={filtered} />
      <Newsletter />
      <Footer />
    </div>
  );
};

Object.assign(window, { BlogPage, BLOG_ARTICLES, BlogHero });
