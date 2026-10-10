// GitHub Pages has no SPA fallback, so deep links would return 404 to crawlers.
// Write a copy of index.html for every route so each URL returns 200.
// 404.html still catches unknown URLs.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')
const ids = [...readFileSync('src/content.js', 'utf8').matchAll(/^\s+id: '([\w-]+)'/gm)].map((m) => m[1])
const routes = ['products', 'services', 'purchase', 'contact', '404', ...ids.map((id) => `products/${id}`)]

mkdirSync('dist/products', { recursive: true })
for (const r of routes) writeFileSync(`dist/${r}.html`, html)
console.log(`spa-routes: wrote ${routes.length} pages`)
