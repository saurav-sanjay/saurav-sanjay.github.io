export const projectsPage = {
  heading: "Projects",
  intro:
    "Things I have built for learning, fun, and practice - web experiments, small tools, and coursework. Each card links to a live demo and the source when available.",
  /** Banner image for the hero; falls back to defaultPhoto if missing. */
  heroImage: "/assets/images/projects/preview-projects.jpg",
  heroImageAlt: "Projects overview",
  projects: [
    {
      name: "Movies Genres",
      description:
        "A small web app to browse and explore movies by genre, built as a hobby project.",
      startDate: "Jan 2020",
      endDate: null,
      liveUrl: "https://movies-genres.netlify.app/",
      sourceUrl: "https://github.com/resourcesatresource/genre",
      previewImage: "/assets/images/projects/preview-movies-genres.png",
    },
    {
      name: "Tab Clock",
      description:
        "A minimal clock for the browser tab - readable at a glance with a clean layout.",
      startDate: "Jan 2020",
      endDate: null,
      liveUrl: "https://saurav-sanjay.github.io/Clock",
      sourceUrl: "https://github.com/saurav-sanjay/Clock",
      previewImage: "/assets/images/projects/preview-tab-clock.png",
    },
    {
      name: "ICD College Project",
      description:
        "College coursework project spanning the ICD curriculum (July 2018 – May 2021).",
      startDate: "Jul 2018",
      endDate: "May 2021",
      liveUrl: "https://saurav-sanjay.github.io/project",
      sourceUrl: "https://github.com/saurav-sanjay/project",
      previewImage: "/assets/images/projects/preview-asap-college.png",
    },
  ],
};
