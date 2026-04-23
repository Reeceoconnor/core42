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

// Wraps the desktop page to render at its native 1920px width — no scaling.
//
//  - Viewport >= 1920: centered horizontally, paper margins on the sides.
//  - Viewport < 1920 (but >= 900px "desktop" breakpoint): horizontal scroll.
//    Mobile layouts take over below 900px entirely.
//
// Keeping it unscaled means every page renders at its designed-for 1920
// pixel sizes — TopBar is exactly 50px, BlogHero is its designed height,
// the hero fits inside a normal first fold, and every page matches.
const DesktopFrame = ({ children, artboardWidth = 1920 }) => (
  <div style={{ width: "100%", background: "var(--c42-paper)", overflowX: "auto" }}>
    <div style={{ width: artboardWidth, margin: "0 auto" }}>
      {children}
    </div>
  </div>
);

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
