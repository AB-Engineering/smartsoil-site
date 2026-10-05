# smartsoil-site

The public site of SmartSoil, `smart-soil.eu`: what the probe sees (the 1–10 cm moisture profile), who it is for,
and the pilot-partner form. Static, Vite + TypeScript + Lit, Italian and English (`src/texts.ts`), published to
GitHub Pages by `.github/workflows/pages.yml` on every push to `main` (custom domain in `public/CNAME`).

It talks to the platform ([smartsoil-platform](https://github.com/AB-Engineering/smartsoil-platform)) in two places:
"Sign in" opens the app (`VITE_APP_URL`, default `https://app.smart-soil.eu`) and the form posts to
`POST /api/v1/leads` (`VITE_API_BASE`, default `https://api.smart-soil.eu`), whose `CORS_ORIGINS` must list this site.
Both are baked in at build time.

| Path | |
|------|--|
| `index.html`, `src/landing.ts`, `src/landing.css` | the page: hero with the pot photo and the depth overlay, the four indicators as a carousel over the same photo, how it works, learning, applications, pilot programme and form |
| `src/texts.ts` | all copy, it/en; `src/i18n.ts` the language choice (same browser key as the app, `ss-lang`) |
| `src/images.ts` | the photos: the hero pot (`public/img/hero-pot.png`, Freepik, credited) and Unsplash hotlinks, credited in the footer; swap for photos of real pilot sites before launch |
| `src/base.css` | tokens and shared rules copied from the app so the site looks like the dashboard |
| `public/brand/` | the logo as SVG: full, square mark, one-colour white |

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
```

The site is public (GitHub Pages on the free plan needs a public repository): nothing in it is secret, the API
endpoints it calls are public by design.
