import { blogPage } from "../data/blog.js";

const PREVIEW_FALLBACK = "/assets/images/defaultPhoto.jpg";

export function createPostCard(post) {
  const article = document.createElement("article");
  article.className = "project-card textEffect"; 

  const body = document.createElement("div");
  body.className = "project-card__body";

  const title = document.createElement("h2");
  title.className = "project-card__title";
  title.textContent = post.title;

  const date = document.createElement("p");
  date.className = "project-card__period";
  const cal = document.createElement("i");
  cal.className = "far fa-calendar-alt";
  cal.setAttribute("aria-hidden", "true");
  date.appendChild(cal);
  date.appendChild(document.createTextNode(` ${post.date}`));

  const desc = document.createElement("p");
  desc.className = "project-card__description";
  desc.textContent = post.description;

  const actions = document.createElement("div");
  actions.className = "project-card__actions";

  const link = document.createElement("a");
  link.className = "project-card__btn";
  // Updated URL to point to post.html with slug
  link.href = post.isExternal ? post.url : `/blog/post.html?post=${post.slug}`;
  link.target = post.isExternal ? "_blank" : "_self";
  if (post.isExternal) {
    link.rel = "noopener noreferrer";
  }
  link.innerHTML = `<i class="fas fa-book-open" aria-hidden="true"></i> Read More`;

  actions.appendChild(link);

  body.appendChild(title);
  body.appendChild(date);
  body.appendChild(desc);
  body.appendChild(actions);

  article.appendChild(body);

  return article;
}

export function mountBlogPage() {
  const headerEl = document.getElementById("blog_page_header");
  if (headerEl && blogPage.heading) {
    headerEl.innerHTML = `
      <div class="projects-page__hero">
        <div class="projects-page__hero-media">
          <img class="projects-page__hero-img" src="${blogPage.heroImage || PREVIEW_FALLBACK}" alt="${blogPage.heroImageAlt || ""}">
          <div class="projects-page__hero-fade" aria-hidden="true"></div>
        </div>
        <div class="projects-page__hero-panel textEffect">
          <h1 class="projects-page__title">${blogPage.heading}</h1>
          <p class="projects-page__intro">${blogPage.intro || ""}</p>
        </div>
      </div>
    `;
  }

  const listContainer = document.getElementById("blog_posts_list");
  if (listContainer) {
    listContainer.textContent = "";
    listContainer.classList.add("projects__grid");

    if (blogPage.posts.length === 0) {
      listContainer.innerHTML = '<p class="projects__empty">No posts yet. Stay tuned!</p>';
    } else {
      blogPage.posts.forEach(post => {
        listContainer.appendChild(createPostCard(post));
      });
    }
  }
}
