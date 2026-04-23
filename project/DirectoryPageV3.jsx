// Core42 — Resources Directory v3
// Same composition as v2 (Blog hero + directory tabs) but with an icon-only collapsed side rail.
// Rail is 72px wide (vs 240). We override the hardcoded marginLeft/left: 240 values inside a scoped wrapper.

const DirectoryPageV3 = () => {
  const [tab, setTab] = React.useState("blogs");
  const [topic, setTopic] = React.useState("All");

  const blogList = window.BLOG_ARTICLES || [];
  const featuredArticle = blogList.find(a => a.featured) || blogList[0];

  const blogTopics = ["All", ...new Set(blogList.map(a => a.category))];
  const topicSets = {
    whitepapers: ["All", ...new Set(RES_WHITEPAPERS.map(w => w.topic))],
    webinars: ["All", "Upcoming", "On-demand"],
    cases: ["All", ...new Set(RES_CASE_STUDIES.map(c => c.industry))],
    blogs: blogTopics,
  };

  const filtered = {
    whitepapers: topic === "All" ? RES_WHITEPAPERS : RES_WHITEPAPERS.filter(w => w.topic === topic),
    webinars: topic === "All" ? RES_WEBINARS : RES_WEBINARS.filter(w => w.status === topic),
    cases: topic === "All" ? RES_CASE_STUDIES : RES_CASE_STUDIES.filter(c => c.industry === topic),
    blogs: topic === "All" ? blogList : blogList.filter(a => a.category === topic),
  };

  React.useEffect(() => { setTopic("All"); }, [tab]);

  // Override every section's marginLeft/left: 240 → 72 inside this page only.
  const overrideCSS = `
    .c42-rail-collapsed section[style*="margin-left: 240px"],
    .c42-rail-collapsed section[style*="margin-left:240px"] {
      margin-left: 72px !important;
    }
    .c42-rail-collapsed div[style*="left: 240px"],
    .c42-rail-collapsed div[style*="left:240px"] {
      left: 72px !important;
    }
    .c42-rail-collapsed .c42-topbar {
      left: 72px !important;
    }
    .c42-rail-collapsed footer[style*="padding: 100px 97px 40px"] {
      padding-left: 72px !important;
    }
  `;

  return (
    <div className="c42-scope c42-rail-collapsed" style={{ position: "relative", background: "var(--c42-paper)", width: 1920, minHeight: 3000 }}>
      <style>{overrideCSS}</style>
      <TopBar />
      <BlogHero article={featuredArticle} />
      <TabBar active={tab} setActive={setTab} />
      <TopicFilter topics={topicSets[tab]} active={topic} setActive={setTopic} />
      {tab === "whitepapers" && <WhitepapersBody items={filtered.whitepapers} />}
      {tab === "webinars" && <WebinarsBody items={filtered.webinars} />}
      {tab === "cases" && <CasesBody items={filtered.cases} />}
      {tab === "blogs" && <BlogsBodyGrid items={filtered.blogs} excludeId={featuredArticle?.id} />}
      <CareerCTA />
      <Footer />
    </div>
  );
};

Object.assign(window, { DirectoryPageV3 });
