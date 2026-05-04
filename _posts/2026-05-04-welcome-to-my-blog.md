---
layout: default
title: "Welcome to my portfolio blog"
date: 2026-05-04 17:40:00 +05:30
tags: [announcement, portfolio]
---

Welcome! This is the first post in the new blog section of my personal portfolio. This site is designed to showcase my journey as a Software Engineer, the projects I've built, and the things I've learned along the way.

## What this portfolio offers

This portfolio is built from the ground up using **Vanilla JavaScript**, **CSS Custom Properties**, and a modular architecture. It features:

- **Interactive Project Showcase:** A detailed view of my work, experiments, and open-source contributions.
- **Career Timeline:** A concise look at my professional progression and engineering experience.
- **Glass-morphism Design:** A modern, aesthetic UI that supports both **Light and Dark modes** based on your system preference.
- **Dynamic Blog Engine:** A custom-built Markdown renderer that allows me to write posts like this one and have them rendered beautifully with full syntax highlighting.

## Technical Highlights

The site uses a custom metadata synchronization system to ensure SEO and social sharing cards are always up to date. Here is a small snippet of how the metadata rendering works:

```javascript
const renderMetadataTags = (pageKey, overrides = {}) => {
  const resolved = createResolvedMetadata(pageKey, overrides);
  const tags = [
    `<title>${escapeHtml(resolved.title)}</title>`,
    `<meta name="description" content="${escapeHtml(resolved.description)}" />`,
    // ... more tags
  ];

  return tags.join("\n");
};
```

I'll be using this space to share more about technical challenges I encounter, tutorials on things I build, and general thoughts on software engineering.

Stay tuned for more updates!
