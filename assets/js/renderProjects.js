import { projectsPage } from "../data/projects.js";

const PREVIEW_FALLBACK = "/assets/images/defaultPhoto.jpg";

/**
 * @param {{ startDate: string, endDate: string | null }} project
 * @returns {string}
 */
export function formatPeriod(project) {
  const end = project.endDate == null ? "Present" : project.endDate;
  return `${project.startDate} – ${end}`;
}

/**
 * @param {HTMLElement} img
 * @param {string} attemptedSrc
 */
function onPreviewError(img, attemptedSrc) {
  if (img.dataset.fallbackApplied === "1") return;
  img.dataset.fallbackApplied = "1";
  if (attemptedSrc !== PREVIEW_FALLBACK) {
    img.src = PREVIEW_FALLBACK;
  }
}

/**
 * @param {object} project
 * @returns {HTMLElement}
 */
export function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card textEffect";

  const media = document.createElement("div");
  media.className = "project-card__media";

  const img = document.createElement("img");
  img.className = "project-card__preview";
  img.src = project.previewImage;
  img.alt = `Preview of ${project.name}`;
  img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener("error", () => onPreviewError(img, project.previewImage));

  media.appendChild(img);

  const body = document.createElement("div");
  body.className = "project-card__body";

  const title = document.createElement("h2");
  title.className = "project-card__title";
  title.textContent = project.name;

  const period = document.createElement("p");
  period.className = "project-card__period";
  const cal = document.createElement("i");
  cal.className = "far fa-calendar-alt";
  cal.setAttribute("aria-hidden", "true");
  period.appendChild(cal);
  period.appendChild(
    document.createTextNode(` ${formatPeriod(project)}`)
  );

  const desc = document.createElement("p");
  desc.className = "project-card__description";
  desc.textContent = project.description;

  const actions = document.createElement("div");
  actions.className = "project-card__actions";

  const live = document.createElement("a");
  live.className = "project-card__btn";
  live.href = project.liveUrl;
  live.target = "_blank";
  live.rel = "noopener noreferrer";
  live.innerHTML =
    '<i class="fas fa-external-link-alt" aria-hidden="true"></i> Live';

  const source = document.createElement("a");
  source.className = "project-card__btn project-card__btn--secondary";
  source.href = project.sourceUrl;
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.innerHTML =
    '<i class="fas fa-code-branch" aria-hidden="true"></i> Source';

  actions.appendChild(live);
  actions.appendChild(source);

  body.appendChild(title);
  body.appendChild(period);
  body.appendChild(desc);
  body.appendChild(actions);

  article.appendChild(media);
  article.appendChild(body);

  return article;
}

/**
 * @param {HTMLElement | null} container
 */
export function mountProjects(container) {
  if (!container) return;

  container.textContent = "";
  container.classList.add("projects");

  const list = projectsPage.projects;
  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "projects__empty";
    empty.textContent = "No projects to show yet.";
    container.appendChild(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "projects__grid";

  for (const project of list) {
    grid.appendChild(createProjectCard(project));
  }

  container.appendChild(grid);
}

/**
 * Renders the page hero from `projectsPage` and mounts the project grid into `#profile_projects_list`.
 */
export function mountProjectsPage() {
  const headerEl = document.getElementById("projects_page_header");
  if (headerEl && projectsPage.heading) {
    headerEl.textContent = "";
    headerEl.classList.add("projects-page__header");

    const hero = document.createElement("div");
    hero.className = "projects-page__hero";

    const media = document.createElement("div");
    media.className = "projects-page__hero-media";

    const heroSrc = projectsPage.heroImage || PREVIEW_FALLBACK;
    const img = document.createElement("img");
    img.className = "projects-page__hero-img";
    img.src = heroSrc;
    img.alt = projectsPage.heroImageAlt || "";
    img.loading = "eager";
    img.decoding = "async";
    img.addEventListener("error", () => onPreviewError(img, heroSrc));

    const fade = document.createElement("div");
    fade.className = "projects-page__hero-fade";
    fade.setAttribute("aria-hidden", "true");

    media.appendChild(img);
    media.appendChild(fade);

    const panel = document.createElement("div");
    panel.className = "projects-page__hero-panel textEffect";

    const h1 = document.createElement("h1");
    h1.className = "projects-page__title";
    h1.textContent = projectsPage.heading;

    panel.appendChild(h1);

    if (projectsPage.intro) {
      const intro = document.createElement("p");
      intro.className = "projects-page__intro";
      intro.textContent = projectsPage.intro;
      panel.appendChild(intro);
    }

    hero.appendChild(media);
    hero.appendChild(panel);
    headerEl.appendChild(hero);
  }

  mountProjects(document.getElementById("profile_projects_list"));
}
