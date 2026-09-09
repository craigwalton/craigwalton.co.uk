# [craigwalton.co.uk](https://craigwalton.co.uk/)

Craig Walton's professional contracting website. Built with [Astro](https://astro.build).

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Installs dependencies                       |
| `npm run dev`          | Starts local dev server at `localhost:4321` |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the production build locally        |
| `npm run check`        | Type-check the project with `astro check`   |
| `npm run lint`         | Lint the project with ESLint                |
| `npm run format`       | Format the project with Prettier            |
| `npm run format:check` | Check formatting without writing changes    |

## Deployment

Deployed to GitHub Pages by [`deploy.yml`](.github/workflows/deploy.yml).

In the repository settings, under **Settings → Pages**, set the source to **GitHub Actions**.

The custom domain is set in [`public/CNAME`](public/CNAME). Configure its DNS as described in the
[GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## License

Code is [MIT](LICENSE) licensed. Site content is © Craig Walton, all rights reserved.
