// Central SEO helpers for KOBIISRAEL.COM
// All helpers are idempotent and safe to call inside useEffect.

export const SITE_ORIGIN = "https://kobiisrael.life";
export const SITE_NAME = "Kobi Israel";
export const ARTIST_NAME = "Kobi Israel";

// Default sharing image used when a page does not supply its own. The Cuba.i1
// candle-lit interior is the signature image of the site (homepage hero).
export const DEFAULT_OG_IMAGE =
  "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/7bp5yfi9_01.1029.07.jpg";

export const setTitle = (title) => {
  if (typeof document === "undefined") return;
  document.title = title;
};

export const setMeta = (name, content) => {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const setOG = (property, content) => {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const setCanonical = (path) => {
  if (typeof document === "undefined") return;
  const href = path?.startsWith("http")
    ? path
    : `${SITE_ORIGIN}${path?.startsWith("/") ? path : `/${path || ""}`}`;
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const setRobots = (content) => {
  setMeta("robots", content);
};

const JSON_LD_ATTR = "data-seo-jsonld";

export const setJsonLd = (id, data) => {
  if (typeof document === "undefined" || !data) return;
  let el = document.querySelector(`script[${JSON_LD_ATTR}="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute(JSON_LD_ATTR, id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export const removeJsonLd = (id) => {
  if (typeof document === "undefined") return;
  const el = document.querySelector(`script[${JSON_LD_ATTR}="${id}"]`);
  if (el) el.remove();
};

// Apply a full SEO payload for a public, indexable page.
// payload = { title, description, path, ogTitle?, ogDescription?, ogType?, image?, imageAlt?, jsonLd?: { id, data } | Array }
export const applyPageSeo = (payload) => {
  const {
    title,
    description,
    path,
    ogTitle,
    ogDescription,
    ogType = "website",
    robots = "index, follow",
    image,
    imageAlt,
    jsonLd,
  } = payload || {};
  if (title) setTitle(title);
  if (description) setMeta("description", description);
  if (path !== undefined) setCanonical(path);
  setRobots(robots);
  if (title) setOG("og:title", ogTitle || title);
  if (description) setOG("og:description", ogDescription || description);
  setOG("og:type", ogType);
  if (path !== undefined) setOG("og:url", `${SITE_ORIGIN}${path}`);
  setOG("og:site_name", SITE_NAME);
  setMeta("twitter:card", "summary_large_image");
  if (title) setMeta("twitter:title", ogTitle || title);
  if (description) setMeta("twitter:description", ogDescription || description);
  // Page-aware sharing image (LinkedIn, X, Slack, iMessage, etc.). Falls back
  // to the homepage signature image when a page doesn't pass one.
  const resolvedImage = image || DEFAULT_OG_IMAGE;
  const resolvedImageAlt =
    imageAlt ||
    "Photograph by Kobi Israel — still and moving diaries from the unstable theatre of memory.";
  setOG("og:image", resolvedImage);
  setOG("og:image:alt", resolvedImageAlt);
  setOG("og:image:width", "1600");
  setOG("og:image:height", "1067");
  setMeta("twitter:image", resolvedImage);
  setMeta("twitter:image:alt", resolvedImageAlt);

  // JSON-LD: supports a single object or array
  if (jsonLd) {
    const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    items.forEach((entry) => {
      if (entry?.id && entry?.data) setJsonLd(entry.id, entry.data);
    });
  }
};

// Mark a page as private (review / admin / placeholder).
export const applyPrivatePageSeo = (title) => {
  if (title) setTitle(title);
  setRobots("noindex, nofollow");
};

// Reusable JSON-LD builders -------------------------------------------------

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  inLanguage: "en",
});

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: ARTIST_NAME,
  alternateName: "Yaqov Israel Grossi",
  url: SITE_ORIGIN,
  jobTitle: "Photographer and filmmaker",
  description:
    "Photographer and filmmaker working with still and moving image, books, prints and an autobiographical archive of masculinity, desire, exile and memory.",
});

export const breadcrumbSchema = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: `${SITE_ORIGIN}${item.path}`,
  })),
});

export const creativeWorkSchema = ({ name, description, path, year }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    url: `${SITE_ORIGIN}${path}`,
    creator: { "@type": "Person", name: ARTIST_NAME },
    inLanguage: "en",
  };
  if (description) schema.description = description;
  if (year && /^\d{4}/.test(String(year))) schema.dateCreated = String(year).slice(0, 4);
  return schema;
};

export const visualArtworkSchema = ({ name, description, path, year, medium }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name,
    url: `${SITE_ORIGIN}${path}`,
    creator: { "@type": "Person", name: ARTIST_NAME },
    artist: { "@type": "Person", name: ARTIST_NAME },
  };
  if (description) schema.description = description;
  if (medium) schema.artMedium = medium;
  if (year && /^\d{4}/.test(String(year))) schema.dateCreated = String(year).slice(0, 4);
  return schema;
};

export const articleSchema = ({ name, description, path, category }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    url: `${SITE_ORIGIN}${path}`,
    author: { "@type": "Person", name: ARTIST_NAME },
  };
  if (description) schema.description = description;
  if (category) schema.articleSection = category;
  return schema;
};

export const contactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Kobi Israel",
  url: `${SITE_ORIGIN}/contact`,
  about: personSchema(),
});

// Image alt-text helpers ----------------------------------------------------

export const defaultAlt = "Archive image by Kobi Israel, details to be confirmed.";

export const projectAlt = (projectTitle) =>
  projectTitle
    ? `Image from ${projectTitle} by Kobi Israel, details to be confirmed.`
    : defaultAlt;

export const artworkAlt = (artworkTitle, projectTitle) => {
  if (artworkTitle && projectTitle)
    return `${artworkTitle}, from ${projectTitle}, by Kobi Israel, details to be confirmed.`;
  if (artworkTitle)
    return `${artworkTitle}, by Kobi Israel, details to be confirmed.`;
  return defaultAlt;
};

export const bookCoverAlt = (bookTitle) =>
  bookTitle
    ? `Book cover for ${bookTitle} by Kobi Israel, details to be confirmed.`
    : defaultAlt;

export const videoStillAlt = (workTitle) =>
  workTitle
    ? `Video still from ${workTitle} by Kobi Israel, details to be confirmed.`
    : defaultAlt;
