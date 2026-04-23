// Core42 — Resources Directory v2
// Hero from the Blog page (editorial with featured article) + content from the Resources Directory (tabs)

const DirectoryPageV2 = () => {
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

  return (
    <div className="c42-scope" style={{ position: "relative", background: "var(--c42-paper)", width: 1920, minHeight: 3000 }}>
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

Object.assign(window, { DirectoryPageV2 });
