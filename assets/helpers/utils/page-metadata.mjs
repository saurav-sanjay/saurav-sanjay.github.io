const SITE_METADATA = {
  siteName: "Saurav Sanjay",
  author: "Saurav Sanjay",
  locale: "en_US",
  baseUrl: "https://saurav-sanjay.github.io",
  favicon: "/assets/images/defaultPhoto.jpg",
  defaultImage: "/assets/images/defaultPhoto.jpg",
  defaultImageAlt: "Default preview image for Saurav Sanjay",
  themeColor: "#1a1a1a",
  keywords: [
    "Saurav Sanjay",
    "portfolio",
    "software engineer",
    "web developer",
    "projects",
    "personal website",
  ],
  twitterCard: "summary_large_image",
};

const PAGE_METADATA = {
  home: {
    file: "index.html",
    path: "/",
    title: "Saurav Sanjay - Software Engineer.",
    description:
      "Personal website of Saurav Sanjay with profile details, links, and featured work.",
  },
  about: {
    file: "about/index.html",
    path: "/about/",
    title: "About",
    description:
      "Career timeline of Saurav Sanjay, covering engineering experience and progression.",
  },
  projects: {
    file: "projects/index.html",
    path: "/projects/",
    title: "Projects",
    description:
      "Portfolio projects by Saurav Sanjay with live demos, experiments, and coursework.",
    image: "/assets/images/projects/preview-projects.jpg",
    imageAlt: "Saurav Sanjay projects portfolio preview",
    keywords: ["projects", "portfolio", "frontend", "experiments"],
  },
  socials: {
    file: "socials/index.html",
    path: "/socials/",
    title: "Social Cards",
    description:
      "Social profile widgets and shareable profile cards for Saurav Sanjay.",
    image: "/assets/images/profile.png",
    imageAlt: "Saurav Sanjay profile card",
  },
  linksLegacy: {
    file: "links/index.html",
    path: "/links/",
    title: "Links",
    description: "Legacy links page for Saurav Sanjay.",
    image: "/assets/images/myPictureDefault.jpg",
    imageAlt: "Legacy links profile preview",
  },
  projectsRedirect: {
    file: "profile/index.html",
    path: "/profile/",
    title: "Redirecting to Projects",
    description: "Redirect page for the projects section.",
    canonicalPath: "/projects/",
    robots: "noindex, follow",
  },
  profileRedirect: {
    file: "profile.html",
    path: "/profile.html",
    title: "Redirecting to Projects",
    description: "Redirect page for the projects section.",
    canonicalPath: "/projects/",
    robots: "noindex, follow",
  },
  clockRedirect: {
    file: "clock/index.html",
    path: "/clock/",
    title: "Redirecting to Clock",
    description: "Redirect page for the Clock application.",
    robots: "noindex, follow",
  },
  endeavourRedirect: {
    file: "endeavour/index.html",
    path: "/endeavour/",
    title: "Redirecting to Endeavour",
    description: "Redirect page for the Endeavour site.",
    robots: "noindex, follow",
  },
};

const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const toAbsoluteUrl = (value) => {
  if (!value) {
    return undefined;
  }

  if (isAbsoluteUrl(value)) {
    return value;
  }

  return new URL(value, SITE_METADATA.baseUrl).toString();
};

const buildTitle = (title) => {
  if (!title) {
    return SITE_METADATA.siteName;
  }

  return title.includes(SITE_METADATA.siteName)
    ? title
    : `${title} | ${SITE_METADATA.siteName}`;
};

const mergeKeywords = (pageKeywords = []) => {
  return [...new Set([...SITE_METADATA.keywords, ...pageKeywords])].join(", ");
};

const createResolvedMetadata = (pageKey, overrides = {}) => {
  const pageMetadata = PAGE_METADATA[pageKey] ?? {};
  const merged = {
    ...pageMetadata,
    ...overrides,
  };

  const title = buildTitle(merged.title);
  const description = merged.description;
  const canonical = toAbsoluteUrl(merged.canonicalPath ?? merged.path ?? "/");
  const image = toAbsoluteUrl(
    merged.twitterImage ?? merged.image ?? SITE_METADATA.defaultImage,
  );
  const ogImage = toAbsoluteUrl(merged.image ?? SITE_METADATA.defaultImage);

  return {
    title,
    description,
    author: merged.author ?? SITE_METADATA.author,
    keywords: mergeKeywords(merged.keywords),
    robots: merged.robots ?? "index, follow",
    themeColor: merged.themeColor ?? SITE_METADATA.themeColor,
    canonical,
    favicon: toAbsoluteUrl(merged.favicon ?? SITE_METADATA.favicon),
    ogType: merged.ogType ?? "website",
    ogUrl: canonical,
    ogImage,
    ogImageAlt: merged.imageAlt ?? SITE_METADATA.defaultImageAlt,
    ogSiteName: SITE_METADATA.siteName,
    ogLocale: merged.locale ?? SITE_METADATA.locale,
    twitterCard: merged.twitterCard ?? SITE_METADATA.twitterCard,
    twitterImage: image,
  };
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const renderMetadataTags = (pageKey, overrides = {}) => {
  const resolved = createResolvedMetadata(pageKey, overrides);
  const tags = [
    `<title>${escapeHtml(resolved.title)}</title>`,
    `<meta name="description" content="${escapeHtml(resolved.description)}" />`,
    `<meta name="author" content="${escapeHtml(resolved.author)}" />`,
    `<meta name="keywords" content="${escapeHtml(resolved.keywords)}" />`,
    `<meta name="robots" content="${escapeHtml(resolved.robots)}" />`,
    `<meta name="theme-color" content="${escapeHtml(resolved.themeColor)}" />`,
    `<link rel="canonical" href="${escapeHtml(resolved.canonical)}" />`,
    `<link rel="icon" href="${escapeHtml(resolved.favicon)}" type="image/jpeg" />`,
    `<meta property="og:type" content="${escapeHtml(resolved.ogType)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(resolved.ogSiteName)}" />`,
    `<meta property="og:locale" content="${escapeHtml(resolved.ogLocale)}" />`,
    `<meta property="og:title" content="${escapeHtml(resolved.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(resolved.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(resolved.ogUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(resolved.ogImage)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(resolved.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(resolved.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(resolved.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(resolved.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(resolved.twitterImage)}" />`,
  ];

  return tags.join("\n");
};

export {
  PAGE_METADATA,
  SITE_METADATA,
  createResolvedMetadata,
  renderMetadataTags,
};
