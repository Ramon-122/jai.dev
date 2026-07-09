# Portfolio Sparkle

A Vite + React + TypeScript portfolio project built with Tailwind CSS and shadcn UI.

## Quick Start

```sh
# Clone repository
git clone <YOUR_GIT_URL>
cd portfolio-sparkle

# Install dependencies
npm install

# Start local development server
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for Production

```sh
npm run build
```

The production output is generated in the `dist/` folder.

## GitHub Pages Deployment

This project is already configured to deploy to GitHub Pages using the `gh-pages` package.

### 1. Verify repository settings

- Confirm the `homepage` field in `package.json` points to your GitHub Pages URL.
  - Example: `https://<USERNAME>.github.io/<REPO_NAME>`
- Confirm `vite.config.ts` has the `base` option set to the repository path.
  - Example: `base: "/jai.dev/",`

### 2. Deploy

```sh
npm run deploy
```

This runs the build and publishes the `dist/` directory to the `gh-pages` branch.

### 3. Confirm deployment

- Visit your GitHub Pages site URL in the browser.
- If the site does not show correctly, wait a few minutes and reload.

## Routing Notes for GitHub Pages

This project uses `HashRouter` from `react-router-dom`, which is the recommended choice for GitHub Pages because it avoids server-side route handling.

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run test` - run Vitest
- `npm run deploy` - build and deploy to GitHub Pages

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn UI
- GitHub Pages

