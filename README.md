[![Version](https://img.shields.io/badge/version-2026.07.27-blue.svg)](https://github.com/amerharb/palestinethanksyou.com)
# Palestine Thanks You

Website for [palestinethanksyou.com](https://palestinethanksyou.com).

## Setup environment
- Node 20.19 or above
- npm 9.x or above
- Install `npm install`
- Build: `npm run build` (output in `dist/`)
- Start dev server: `npm start` (http://localhost:3000)
- Preview production build: `npm run preview`

## Stack
All the code is Frontend, no backend needed: Vite, React 19, TypeScript v6.x
and npm.

## Deploying
Once a PR is merged to the main branch it is automatically deployed using the
Vercel integration tool with GitHub. The deployment configuration lives in
`vercel.json` (framework Vite, output directory `dist`).
