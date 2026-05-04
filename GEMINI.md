# saurav-sanjay.github.io

Personal portfolio website for Saurav Sanjay, built as a static site hosted on GitHub Pages.

## Project Overview

This is a modern, responsive personal portfolio website. While it uses Jekyll (via GitHub Pages default) for some light theme management, the core functionality is built using **Vanilla JavaScript (ESM)** with a custom component-based architecture.

### Key Technologies
- **Frontend:** Vanilla JavaScript, CSS3 (Custom properties for theming), HTML5.
- **Theming:** Supports light and dark modes with system preference detection and local storage persistence.
- **Metadata Management:** A custom Node.js-based system for centralizing and synchronizing SEO and social metadata across multiple pages.
- **Hosting:** GitHub Pages.

### Architecture
- **Centralized Data:** Content (links, projects, timeline, blog posts) is stored in `assets/data/`.
- **Dynamic Rendering:** Pages like `index.html`, `projects/index.html`, and `blog/index.html` use JavaScript modules to inject content from data files into the DOM.
- **Markdown Rendering:** Blog posts are written in Markdown (stored in `_posts/`) and rendered dynamically on the client side using the `marked` library via a generic `blog/post.html` template.
- **Component Inclusion:** A simple `include-html.js` utility is used for basic HTML fragment reuse.
- **Metadata Sync:** SEO tags are managed in `assets/helpers/utils/page-metadata.mjs` and applied to HTML files via a pre-deployment script.

## Building and Running

Since this is a static site, it can be served by any web server (e.g., `Live Server` in VS Code).

### Metadata Synchronization
If you update page titles, descriptions, or social sharing images in `assets/helpers/utils/page-metadata.mjs`, you **must** run the synchronization script to update the HTML files:

```bash
node scripts/sync-page-metadata.mjs
```

## Development Conventions

- **Data-Driven UI:** Avoid hardcoding content in HTML. Update the relevant files in `assets/data/` (e.g., `portfolio-data.js`, `projects.js`, `blog.js`).
- **Blog Posts:**
    - Write posts in Markdown and place them in `_posts/`.
    - Register the post in `assets/data/blog.js` with a unique `slug` and the correct `url` to the `.md` file.
- **CSS Variable Theming:** Use CSS variables defined in `assets/style/variables.css` and `colors.css` for all styling to maintain theme compatibility.
- **Module System:** Use ES Modules (`import`/`export`) for all new JavaScript logic.
- **Accessibility:** Ensure new components follow the established pattern of using ARIA attributes (as seen in the bottom sheet menu implementation in `myLinks.js`).
- **Metadata Markers:** Maintain the `<!-- PAGE_METADATA:START -->` and `<!-- PAGE_METADATA:END -->` markers in the `<head>` of all HTML files to ensure the sync script works correctly.
