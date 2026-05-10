# Nugumi Landing

Standalone landing page for Nugumi.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Installer Download

The main button points to `/download`.

That route fetches the latest GitHub release from `ChoiVadim/yaku`, finds the
first `.dmg` asset, and redirects to the GitHub download URL. This keeps the
landing repo independent from installer binaries.

## Deploy

Recommended setup:

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then import that GitHub repo in Vercel. No custom root directory is needed for
this standalone project.
