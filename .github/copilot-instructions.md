# Copilot instructions — saurav-sanjay.github.io

Purpose: help Copilot/Copilot CLI sessions quickly understand and make safe, correct edits to this repository.

## Build, test, and lint commands

- Metadata sync script (explicit):
  - Regenerate per-page <head> metadata after editing the shared config:
    node scripts/sync-page-metadata.mjs
  - Run this single command to update all pages' PAGE_METADATA blocks.

- Repository is a static Jekyll-based site (see `_config.yml` with `jekyll-theme-cayman`). There are no repository-provided test or lint scripts. If running locally with Ruby/Jekyll, standard commands that contributors might use:
  - bundle exec jekyll build
  - bundle exec jekyll serve --livereload
  (Only mention these if a developer has Jekyll installed locally.)

## High-level architecture (big picture)

- Static site served from root HTML files. Pages live in top-level folders (about/, projects/, links/, profile/, etc.).
- assets/: client-side JS modules, CSS, images and data used by pages.
- utils/: shared client-side helpers imported via ES module <script type="module"> tags.
- scripts/: maintenance scripts (not part of a build pipeline). `scripts/sync-page-metadata.mjs` is the canonical tool that rewrites the PAGE_METADATA block inserted in each page's <head>.
- Page metadata is centralized in `assets/helpers/utils/page-metadata.mjs`. The sync script consumes that and updates the HTML pages' PAGE_METADATA markers.

## Key conventions and patterns (repository-specific)

- PAGE_METADATA markers:
  - Pages contain <!-- PAGE_METADATA:START --> and <!-- PAGE_METADATA:END --> blocks in the <head>. The sync script expects these markers and will replace the content between them.
  - When changing shared metadata, run `node scripts/sync-page-metadata.mjs` to propagate updates.

- ES modules in the browser:
  - Pages import client-side modules with `<script type="module" src="./...">`. Prefer edits that preserve module paths and relative imports.

- Theme & debug flags:
  - Theme preference stored in localStorage under `preferred-theme`; pages set `data-theme` on the root element accordingly.
  - Debug mode can be toggled by adding `?debug` to the URL. Code reads `window.__IS__DEBUG__ENABLED`.

- Canonical URLs and assets:
  - Pages use absolute asset paths (e.g., `/assets/...`). Keep those roots intact when moving files.
  - Canonical links and OG tags are produced/managed by the metadata system — avoid manual duplication.

- Redirect pages:
  - Some pages use `<meta http-equiv="refresh">` and `location.replace()` for redirects. Keep both for maximum compatibility.

## Files of interest for code changes

- `assets/helpers/utils/page-metadata.mjs` — central metadata source.
- `scripts/sync-page-metadata.mjs` — script to rewrite per-page metadata blocks.
- `utils/` and `assets/` — client-side modules and styles used across pages.
- Root HTML files (e.g., `index.html`, `profile.html`) — include PAGE_METADATA markers and module script tags.

## AI-related config files

- No CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, AIDER_CONVENTIONS.md, or similar agent config files were found in the repository root. If added later, mirror any important rules into this document.

---

Summary: This file documents the repository's build-relevant commands, the centralized metadata pattern, and the client-side module conventions that Copilot should preserve when making edits. Run `node scripts/sync-page-metadata.mjs` after changing metadata.
