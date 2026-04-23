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

// Wraps the desktop page in a zoomed frame so 1920px designs fit the current
// viewport.
//
//  - Below 1920px viewport: scales the whole artboard down proportionally.
//  - At or above 1920px: renders at 1:1 and centers horizontally so the hero
//    fits within a normal "first fold" (its designed-for 1920×auto size).
//
// Uses CSS `zoom` which scales both visual and layout dimensions in one step,
// so every page renders identically for the same viewport width.
const DesktopFrame = ({ children, artboardWidth = 1920 }) => {
  const getScale = () => {
    if (typeof window === "undefined") return 1;
    const w = document.documentElement.clientWidth || artboardWidth;
    return Math.min(1, w / artboardWidth);
  };
  const [scale, setScale] = React.useState(getScale);

  React.useEffect(() => {
    const update = () => setScale(getScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [artboardWidth]);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", background: "var(--c42-paper)" }}>
      <div style={{ width: artboardWidth, zoom: scale }}>
        {children}
      </div>
    </div>
  );
};

// ResponsivePage — picks the right component for the current viewport.
// Pass Desktop (full-res, e.g. BlogPage) and Mobile (narrow, e.g. MobileDirectoryPage).
// No chrome is added — each page's own TopBar / hero handles its top treatment.
const ResponsivePage = ({ Desktop, Mobile }) => {
  const isMobile = useIsMobile();
  if (isMobile) return <Mobile />;
  return (
    <DesktopFrame>
      <Desktop />
    </DesktopFrame>
  );
};

Object.assign(window, { SITE_BASE, URLS, useIsMobile, ResponsivePage, DesktopFrame, DESKTOP_MIN });
