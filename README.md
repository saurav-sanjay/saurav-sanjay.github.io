# saurav-sanjay.github.io

## Metadata

Page metadata is centralized in `assets/helpers/utils/page-metadata.mjs`.
Each full page keeps its metadata inside a generated `PAGE_METADATA` block in
the `<head>`.

After changing the shared metadata config, run:

```bash
node scripts/sync-page-metadata.mjs
```

That script rewrites the canonical, Open Graph, Twitter, and basic SEO tags
for every registered page.

- [Movies Genres](https://movies-genres.netlify.app/)
- [ConnectWM - Connect With Me](https://connectwm.netlify.app/)
- [Endeavour Portfolio Site](https://resourcesatresource.github.io/endeavour/)
- [Tab Clock](https://saurav-sanjay.github.io/Clock/)
- [ICD Project](https://saurav-sanjay.github.io/project/)
- [Link Tree v3](https://saurav-sanjay.github.io/)
- [Link Tree v2](https://resourcesatresource.github.io/my-profile/)
- [Link Tree v1](https://saurav-sanjay.github.io/links/)
- [Temperature Converter](https://resourcesatresource.github.io/resource/)
- [Personal Portfolio](https://resourcesatresource.github.io/site/main/)
