# AICraft homepage — www.aicraft.kr

Vite + React + Tailwind. Pushing to `main` builds and deploys via GitHub Actions
(`.github/workflows/deploy.yml`). Repo Settings → Pages → Source must be **GitHub Actions**.

```
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
```

- All text (Korean + English) lives in `src/content.js`.
- Images live in `src/assets/`; `public/CNAME` keeps the custom domain.
- Purchase / Contact forms open the visitor's mail app (`mailto:`) — no server needed.
