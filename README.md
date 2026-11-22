# Sriyantha Deepal — Portfolio

Version 2: a minimal, responsive engineering portfolio inspired by clear editorial layouts, with an original midnight-red visual identity.

## Stack

React 19, TypeScript, Vite, Lucide icons and custom responsive CSS. No backend or database is required.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Editing

- `src/data.ts`: projects, employment and skills.
- `src/App.tsx`: sections, copy, accessible navigation and theme switch.
- `src/styles.css`: typography, theme variables, components and responsive layouts.
- `index.html`: title, metadata and social preview tags.

The repository retains historical visual assets under `images/`; the redesign does not depend on the old hero images or the old CSS. Avoid publishing personal ID numbers and referees' private contact details.

## Deploy

The workflow `.github/workflows/deploy.yml` builds and deploys to GitHub Pages **only when pushed to main**, so this upgrade branch can be reviewed independently. In GitHub → Settings → Pages, choose **GitHub Actions** as the build/deployment source. This workflow expects the repository GitHub Pages URL `https://sriyanthadeepal.github.io/My-Portfolio/`; adjust `vite.config.ts` and metadata if using another hostname.

## Notes

The public site reflects the professional details provided in the November 2026 résumé, including the current internship period. Check that roles, project availability and CV links remain current before deployment. Contact is handled through an email link instead of collecting messages through an unmaintained third-party form.
