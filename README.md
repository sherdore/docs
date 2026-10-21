# SherDore Docs

The source of [docs.sherdore.com](https://docs.sherdore.com), built with [Starlight](https://starlight.astro.build) and hosted on GitHub Pages.

## Write

Pages are Markdown files in `src/content/docs/`:

- `getting-started/` is the account guides.
- `products/<slug>/` is one folder per product. The first page is `index.md`.

Each page starts with a `title` and `description`. Use `sidebar: { order: N }` to order pages inside a product.

## Add a product

Only products that are publicly on sale are documented. When one launches, create `src/content/docs/products/<slug>/index.md`, then add it to the `products` list at the top of `astro.config.mjs` and to the table in `src/content/docs/products/index.md`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

Needs Node 22.22 or newer.

## Publish

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`. In the repository settings, **Pages** must use **GitHub Actions** as its source, and the custom domain is `docs.sherdore.com` (also in `public/CNAME`).
