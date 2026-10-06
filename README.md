# smartsoil-site

The public site of SmartSoil, `smart-soil.eu`: what the probe sees (the 1–10 cm moisture profile), who it is for,
and the pilot-partner form. Static, Vite + TypeScript + Lit, Italian and English (`src/texts.ts`), deployed to the
OVH shared hosting by `.github/workflows/deploy-ovh.yml` on every push to `main` (see "Deploy").

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
| `public/img/logo.jpg` | Andrea's logo, as drawn; `public/og.jpg` the social card built from it |

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
```

## Deploy

Every push to `main` builds `dist/` and mirrors it over SFTP into the folder `smartsoil/` of the OVH hosting (never
`www/`, which is another site). Old hashed bundles linger, nothing is deleted. Setup, once:

1. Repo secrets `FTP_HOST`, `FTP_USER`, `FTP_PASS` (Settings → Secrets and variables → Actions): the hosting's SFTP
   access, the same as home-shelf-manager. Optional repo variables: `OVH_REMOTE_DIR` (default `smartsoil`),
   `SITE_API_BASE`, `SITE_APP_URL`.
2. In the OVH manager, Web hosting → Multisite: add `smart-soil.eu` (and `www`) with root folder `smartsoil`, SSL
   on; the DNS zone of the domain must point at the hosting (A/CNAME records OVH shows there).
3. Run it: `gh workflow run deploy-ovh` or push.

`./deploy-ovh.sh --deploy` does the same from a laptop with `FTP_HOST`, `FTP_USER`, `FTP_PASS` in the environment.

The repository is public: nothing in it is secret, the API endpoints it calls are public by design.
