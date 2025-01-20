const SITE_CONFIGURATIONS = {
  AUTHOR: "Saurav Sanjay",
  TYPE: "website",
  KEYWORDS: [
    "personal website",
    "portfolio",
    "web developer",
    "blog",
    "projects",
    "software developer",
    "links",
    "movies genres",
    "movies",
    "genres",
  ],
};

const STRINGS = {
  SITE: {
    TITLE: "Saurav Sanjay's personal portfolio website.",
    DESCRIPTION:
      "This is a personal website where I showcase my projects, skills, and blog posts.",
  },
};

const PATH = {
  DEFAULT_SITE_FAVICON: "/assets/images/defaultPhoto.jpg",
  URL: "https://saurav-sanjay.github.io",
  MY_IMAGE: "/assets/images/myPictureDefault.jpg",
};

const setFavicon = () => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = PATH.DEFAULT_SITE_FAVICON;
  document.head.appendChild(link);
};

const setSiteConfigs = () => {
  const author = document.createElement("meta");
  author.setAttribute("property", "author");
  author.setAttribute("content", SITE_CONFIGURATIONS.AUTHOR);

  const description = document.createElement("meta");
  description.setAttribute("property", "description");
  description.setAttribute("content", STRINGS.SITE.DESCRIPTION);

  const keywords = document.createElement("meta");
  keywords.setAttribute("property", "keywords");
  keywords.setAttribute("content", SITE_CONFIGURATIONS.KEYWORDS.join(", "));

  document.head.appendChild(author);
  document.head.appendChild(description);
  document.head.appendChild(keywords);
};

const setOGMetaData = () => {
  const ogTitle = document.createElement("meta");
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", STRINGS.SITE.TITLE);

  const ogDescription = document.createElement("meta");
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", STRINGS.SITE.DESCRIPTION);

  const ogUrl = document.createElement("meta");
  ogUrl.setAttribute("property", "og:url");
  ogUrl.setAttribute("content", PATH.URL);

  const ogImage = document.createElement("meta");
  ogImage.setAttribute("property", "og:image");
  ogImage.setAttribute("content", PATH.MY_IMAGE);

  const ogType = document.createElement("meta");
  ogType.setAttribute("property", "og:type");
  ogType.setAttribute("content", "website");

  document.head.appendChild(ogTitle);
  document.head.appendChild(ogDescription);
  document.head.appendChild(ogUrl);
  document.head.appendChild(ogImage);
  document.head.appendChild(ogType);
};

const init = () => {
  setFavicon();
  setSiteConfigs();
  setOGMetaData();
};

init();
