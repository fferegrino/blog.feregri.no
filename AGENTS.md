# feregri.no

Personal site of Antonio Feregrino. Live site: [https://blog.feregri.no](https://blog.feregri.no). Repo: [fferegrino/feregri.no](https://github.com/fferegrino/feregri.no).

This is a **static Astro 2** site (MDX content collections, React islands, Tailwind). It is **not** Astro 3/4/5: keep using `getStaticPaths`, `getCollection`, and RSS `export async function get()` unless you are explicitly upgrading the framework.

## Commands

Run from the repo root:

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (Astro default: `localhost:3000`) |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run astro check` | Type-check Astro/TS |

Node/npm. No test suite. Prettier is configured (tabs, double quotes, Astro + Tailwind plugins) in `.prettierrc.js`. ESLint exists but is not wired into npm scripts.

After UI or routing changes, run `npm run build` to catch content-schema and static-path errors. Homepage build **fetches the YouTube RSS feed**, so a full build needs network.

## Deploy

Netlify builds on git push to `main`. Canonical URL in `astro.config.mjs` is `https://blog.feregri.no`.

`.github/workflows/deploy.yml` also POSTs the Netlify build hook daily (`cron: 0 10 * * *`). That rebuild exists because the homepage pulls latest YouTube videos at **build time** (`src/youtube.ts`, channel `UC8KCb358oioQMcJ5pUfs8UQ`). Do not delete that workflow without replacing the video source.

Do not commit Netlify hook URLs into new files. The existing workflow already contains one.

## Layout of the repo

```
src/content/     MDX collections (blog, project, bookshelf, collection)
src/content/config.ts   Zod schemas for those collections
src/pages/       File-based routes
src/layouts/     Layout.astro (chrome) and BlogPost.astro
src/components/  Astro + a few React components
src/consts.ts    Bio, socials, credits (site title strings here are still starter leftovers)
src/youtube.ts   YouTube RSS parser used on the homepage
public/          Favicon, fonts, robots.txt, unused starter placeholders
```

Routes that matter:

- `/` homepage: hero, featured projects/posts/books (4 each), YouTube videos
- `/blog`, `/blog/[page]`, `/blog/[slug]/`
- `/bookshelf`, `/bookshelf/[slug]`
- `/projects`
- `/collection`, `/collection/[slug]` (photo galleries of physical collections)
- `/support` App Store support page (`support@feregri.no`)
- `/rss.xml`, sitemap via `@astrojs/sitemap`
- `/about` is leftover Lorem ipsum from the Astro blog starter; do not treat it as live content

Nav is hardcoded in `src/components/AppHeader.astro`. Adding a section usually means a content collection **and** a nav link.

## Content collections

Schemas live in `src/content/config.ts`. Invalid frontmatter fails the build.

### Blog — `src/content/blog/*.mdx`

Filename: `YYYY-MM-DD-kebab-title.mdx`. Set `slug` in frontmatter so the URL is `/blog/<slug>/` (date is not in the URL).

Required: `title`, `description`, `publishDate`. Optional: `updatedDate`, `heroImage`, `language` (`en` default, use `es` for Spanish), `tags`, `original_url`, `youtube`, `priority`.

The site is bilingual. Match the post language in both frontmatter and body. Do not rewrite an existing Spanish or English post into the other language unless asked.

Hero images are **remote ImageKit URLs**, not files in `public/`. Prefer `https://ik.imagekit.io/thatcsharpguy/...`. Local placeholders in `public/blog-placeholder-*.jpg` are unused starter assets.

Homepage featured posts sort by `priority` (higher first), then `publishDate`. Blog index sorts by date only, 9 per page.

`src/pages/blog/index.astro` (page 1) and `src/pages/blog/[...page].astro` (pages 2+) are **duplicated**. Change listing UI in both, or extract a shared component.

### Projects — `src/content/project/*.mdx`

Fields: `title`, `description`; optional `iconUrl`, `darkIconUrl`, `repoUrl`, `websiteUrl`, `active`, `highlight`, `priority`. Loaded via `src/pages/projects/projects.tsx` (despite the `.tsx` name, it is a data module). Missing icons fall back to ImageKit `sharp-N` assets. Card link is `websiteUrl` or else `repoUrl`.

### Bookshelf — `src/content/bookshelf/*.mdx`

Required: `title`, `description`, `rating` (0–5), `author`, `category`. Optional: `isbn`, `links`, `recommended`, `priority`. Index groups by `category`. Descriptions are often in Spanish even when the rest of the site chrome is English; keep the existing voice of that entry.

### Collections (galleries) — `src/content/collection/*.mdx`

Physical collections (shirts, pins, etc.), not a photography portfolio. Route is `/collection`, collection name is `collection`.

Required: `title`, `description`, `thumbnail`, `images[]` with `url` and optional `caption`/`alt`. Optional: `category`, `date`, `priority`.

Images are hosted on ImageKit (`photo-galleries/...`). Detail pages rewrite ImageKit URLs with `tr=` transforms for lightbox vs grid (`src/pages/collection/[...slug].astro`). Keep using ImageKit URLs so those transforms work.

`GALLERY_README.md` is stale (it still says `src/content/gallery/` and `/gallery`). Trust `config.ts` and `src/pages/collection/` instead.

## UI conventions

- Tailwind with `darkMode: 'class'`. Theme class is applied in `Layout.astro` before paint (`localStorage` `theme`: `light` | `dark` | `system`).
- Brand color `primary` is `#9333EA`. Body font is Urbanist; Atkinson is still loaded for some paths.
- Prose: `prose prose-cactus dark:prose-invert`.
- Dark mode: pair `dark:` variants on new surfaces (background, text, borders, shadows).
- Prefer Astro components. Use React only for existing interactive bits (`BookReview`, `StarRating`, `AffiliateLink`).
- Layout title suffix is ` - feregri.no`. JSON-LD for Person/BlogPosting is in `JsonLd.astro`.
- Analytics: Simple Analytics, not Google. CSP in `src/pages/_headers.ts` allowlists that script host; if you add a third-party script, update CSP too.
- Open Graph fallback: `https://og-feregri-no.vercel.app/api?...` when a page has no `heroImage`.

## Do / don't

- Add content as MDX in the right collection; do not invent a CMS or move posts into the database.
- Do not bump Astro or integrations as a drive-by. This repo is on Astro `^2.10`.
- Do not check in `.DS_Store`, secrets, or large binaries; keep media on ImageKit.
- Do not “fix” `SITE_TITLE` / `SITE_DESCRIPTION` in `consts.ts` as part of an unrelated change (RSS still uses those starter strings).
- Preserve existing URLs. Slugs are public permalinks.
- Homepage `Features` shows only the first 4 items after sort. Raising `priority` is how something appears there.
- `src/pages/_headers.ts` is an Astro endpoint, not Netlify `_headers`. Confirm header delivery on Netlify before relying on it for new security work.
