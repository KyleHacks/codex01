# codex01

A minimal Next.js App Router project that is ready to run locally and deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Keep the default build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Deploy.

This repo already includes the required Next.js runtime and TypeScript configuration files (`package.json`, `next.config.mjs`, `tsconfig.json`, `next-env.d.ts`) for Vercel.
