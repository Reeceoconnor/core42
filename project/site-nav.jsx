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

// Wraps the desktop page in a scaled frame so 1920px designs fit the current
// viewport edge-to-edge. Scales down on narrow viewports and up on wider ones
// so the design always fills the width. Uses document.documentElement.clientWidth
// (the reliable viewport-width measure) to ensure every page produces the same
// scale for the same browser window — so e.g. the announcement TopBar renders at
// identical height regardless of which page is loaded.
const DesktopFrame = ({ children, artboardWidth = 1920 }) => {
  const innerRef = React.useRef(null);
  const [scale, setScale] = React.useState(() => {
    if (typeof window === "undefined") return 1;
    return (document.documentElement.clientWidth || artboardWidth) / artboardWidth;
  });
  const [innerHeight, setInnerHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth || artboardWidth;
      const s = w / artboardWidth;
      setScale(s);
      const h = innerRef.current?.scrollHeight || 0;
      setInnerHeight(h * s);
    };
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (innerRef.current) ro.observe(innerRef.current);
    return () => { window.removeEventListener("resize", update); ro.disconnect(); };
  }, [artboardWidth]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
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
