// Shared site navigation & responsive page wrapper
// Used by every top-level index.html to switch between desktop and mobile renderers
// at a 900px breakpoint, and to expose a uniform URL map.

const SITE_BASE = "/core42";

const URLS = {
  home:            `${SITE_BASE}/`,
  resources:       `${SITE_BASE}/resources/`,
  blogArticle:     `${SITE_BASE}/blog/compass-2-0/`,
  whitepaper:      `${SITE_BASE}/whitepapers/architecting-sovereign-ai/`,
  webinarUpcoming: `${SITE_BASE}/webinars/inside-compass-2-0/`,
  webinarOnDemand: `${SITE_BASE}/webinars/sovereign-ai-scale/`,
  caseStudy:       `${SITE_BASE}/case-studies/ministry-digital-affairs/`,
};

// Desktop components are laid out at 1920px. On widths >= DESKTOP_MIN we render the
// desktop component at its native size; below that we render the mobile variant.
const DESKTOP_MIN = 900;

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${DESKTOP_MIN - 1}px)`).matches;
  });
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${DESKTOP_MIN - 1}px)`);
    const handler = e => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

// Wraps the desktop page in a scaled frame so 1920px designs fit inside viewports
// smaller than 1920 without horizontal scroll. Uses CSS transform; preserves
// proportions and click targets.
const DesktopFrame = ({ children, artboardWidth = 1920 }) => {
  const wrapRef = React.useRef(null);
  const innerRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const [innerHeight, setInnerHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const update = () => {
      const w = wrapRef.current?.clientWidth || artboardWidth;
      const s = Math.min(1, w / artboardWidth);
      setScale(s);
      const h = innerRef.current?.scrollHeight || 0;
      setInnerHeight(h * s);
    };
    update();
    window.addEventListener("resize", update);
    // Observe content mutations (images loading, state changes)
    const ro = new ResizeObserver(update);
    if (innerRef.current) ro.observe(innerRef.current);
    return () => { window.removeEventListener("resize", update); ro.disconnect(); };
  }, [artboardWidth]);

  return (
    <div ref={wrapRef} style={{ width: "100%", overflow: "hidden" }}>
      <div style={{ width: "100%", height: innerHeight || "auto", position: "relative" }}>
        <div
          ref={innerRef}
          style={{
            width: artboardWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// ResponsivePage — picks the right component for the current viewport.
// Pass Desktop (full-res, e.g. BlogPage) and Mobile (narrow, e.g. MobileDirectoryPage).
const ResponsivePage = ({ Desktop, Mobile }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <Mobile />;
  }
  return (
    <DesktopFrame>
      <Desktop />
    </DesktopFrame>
  );
};

// Primary site header — sits above every page, links to the main routes.
// Replaces the standalone "announcement" TopBar on each page so users always
// have cross-page navigation. Desktop renders full labels; below 900px the
// individual page components render their own mobile top bars, so this isn't
// shown on mobile.
const SiteHeader = ({ active = "home" }) => {
  const items = [
    { id: "home",      label: "Blog",         href: URLS.home },
    { id: "resources", label: "Resources",    href: URLS.resources },
  ];
  return (
    <div className="c42-topbar" style={{
      position: "relative", zIndex: 30,
      background: "var(--c42-paper)", color: "var(--c42-forest-ink)",
      borderBottom: "1px solid var(--c42-paper-edge)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px", height: 64, fontFamily: "var(--font-sans)",
    }}>
      <a href={URLS.home} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <Wordmark variant="dark" size={22} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {items.map(it => (
          <a key={it.id} href={it.href} style={{
            fontSize: 14, fontWeight: 500, letterSpacing: "0.02em",
            color: active === it.id ? "var(--c42-orange)" : "var(--c42-forest-ink)",
            textDecoration: "none", padding: "4px 0",
            borderBottom: active === it.id ? "2px solid var(--c42-orange)" : "2px solid transparent",
          }}>{it.label}</a>
        ))}
        <a href="#" className="c42-btn c42-btn--primary" style={{ padding: "8px 18px", minHeight: 34, fontSize: 12 }}>CONTACT SALES</a>
      </nav>
    </div>
  );
};

Object.assign(window, { SITE_BASE, URLS, useIsMobile, ResponsivePage, DesktopFrame, SiteHeader, DESKTOP_MIN });
