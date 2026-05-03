# VOX Holloway website

Warm, mobile-first redesign scaffold for the VOX Holloway choir website.

## Stack

- Astro for the public website
- Keystatic for the local Git-backed CMS
- Markdown content collections for events, merch, and choir stories
- Cloudflare Pages for free public hosting
- Stripe Payment Links for simple merch, donations, and ticket buttons

## Local setup

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:4321
```

CMS editor:

```txt
http://localhost:4321/keystatic
```

## Main folders

```txt
public/images/              Logo and image assets
src/pages/                  Website pages
src/content/events/         Editable event entries
src/content/merch/          Editable merch/support entries
src/content/stories/        Editable choir stories
src/layouts/BaseLayout.astro
src/styles/global.css
keystatic.config.ts         CMS configuration
```

## Editing content

You can edit content in two ways:

1. Use the Keystatic editor at `/keystatic`.
2. Edit Markdown files directly in `src/content`.

Events are stored in:

```txt
src/content/events/
```

Merch and donation items are stored in:

```txt
src/content/merch/
```

Choir stories are stored in:

```txt
src/content/stories/
```

## Deployment to Cloudflare Pages

1. Create a GitHub repository.
2. Push this folder to GitHub.
3. In Cloudflare, go to **Workers & Pages**.
4. Choose **Create application**.
5. Choose **Pages**.
6. Connect the GitHub repository.
7. Use these build settings:

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node version: 20
```

8. Deploy.
9. Cloudflare gives you a public `*.pages.dev` URL.
10. Add `voxholloway.com` as a custom domain when ready.

## CMS publishing note

This first version is configured for local Keystatic editing. That means you run the site locally, edit content in `/keystatic`, commit the changes to GitHub, and Cloudflare deploys them.

Later, this can be upgraded to Keystatic GitHub mode so trusted editors can edit through a hosted CMS without running the site locally.

## Next build steps

- Replace placeholder emails and Stripe test links.
- Add real event ticket links.
- Add current rehearsal venue and term dates.
- Add privacy, accessibility, and safeguarding pages.
- Add newsletter signup provider.
- Add real merch photography when available.
- Move Keystatic from local mode to GitHub mode for hosted editing.
