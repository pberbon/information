# Your Personal Site

A fast, minimalist personal website built with [Astro](https://astro.build) — blog, research
library (with PDFs), projects, reading list, resources, resume, and more. No database, no
backend server; it's a static site you can host for free on GitHub Pages.

Everything is designed so that **adding new content means adding one Markdown file** — you
never touch navigation, search, or listing pages by hand.

---

## 1. What's included

- **Blog** — Markdown posts with tags, categories, search, reading time, table of contents,
  syntax highlighting, math (KaTeX), tables, images, embedded YouTube, prev/next navigation,
  social share buttons, copy-code buttons, image zoom.
- **Research library** — drop a PDF in `public/papers/` + one Markdown file → get an
  auto-generated page with download/preview buttons, citation block, and related-paper links.
- **Projects** — Markdown-driven project cards with tech stack, links, and status.
- **Reading list** — books with ratings, status, reviews, and instant client-side search.
- **Resources** — filterable links to papers, courses, tools, videos, etc.
- **Resume** — in-browser PDF viewer + download button; update by replacing one file.
- **About / Contact** — bio, timeline, skills, and a no-backend contact form (opens email client).
- **Site-wide search** (press `/` or click the search icon) powered by [Pagefind](https://pagefind.app),
  which indexes everything automatically at build time — no manual index to maintain.
- **Dark mode**, back-to-top button, breadcrumbs, tag pages, category archives, 404 page,
  RSS feed, sitemap, robots.txt, Open Graph/Twitter cards — all automatic.

---

## 2. Local setup (one-time)

You'll need [Node.js](https://nodejs.org) version 18 or newer installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:4321`) to preview the site as you edit.

`npm run build` produces the production site in `dist/` (this is also what the search index
needs — search only works after a build, not in `npm run dev`).

---

## 3. Before you deploy — 3 things to edit

1. **`src/site.config.ts`** — your name, tagline, email, GitHub/LinkedIn links.
2. **`astro.config.mjs`** — set `SITE_URL` to `https://YOUR-USERNAME.github.io` and `SITE_BASE`
   to `/YOUR-REPO-NAME` (or `/` if this is a `username.github.io` user site).
3. **`public/robots.txt`** — update the sitemap URL to match the same domain/path.

Replace the placeholder images (`public/images/profile.jpg`, `public/images/og-default.png`)
and placeholder PDFs (`public/resume/resume.pdf`, `public/papers/example-paper.pdf`) with your
own — and delete the example content files described in step 6 below once you've got the hang
of it.

---

## 4. Deploying to GitHub Pages (step by step)

### Create the repository
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `personal-site`).
   Leave it empty — no README, no `.gitignore` — since you already have this project.

### Upload the code
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

### Enable GitHub Pages
3. On GitHub, go to your repository's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **GitHub Actions**.
   (A workflow file is already included at `.github/workflows/deploy.yml` — it builds the
   site and deploys it automatically on every push to `main`.)

### Deploy
5. Push any commit to `main` (or go to the **Actions** tab and run the "Deploy to GitHub Pages"
   workflow manually). After it finishes (1–2 minutes), your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Updating the live site
6. Any time you push to `main`, the site automatically rebuilds and redeploys. No manual steps.

---

## 5. Adding content (no coding required)

### Add a blog post
Create a new file in `src/content/blog/`, e.g. `src/content/blog/my-new-post.md`:
```markdown
---
title: "My New Post"
description: "A one-sentence summary."
pubDate: 2026-03-01
tags: ["research", "notes"]
category: "Notes"
---

Write your post here in Markdown.
```

### Add a research paper
1. Copy your PDF into `public/papers/my-paper.pdf`.
2. Create `src/content/research/my-paper.md`:
   ```markdown
   ---
   title: "My Paper Title"
   description: "Short abstract."
   author: "Your Name"
   pubDate: 2026-03-01
   category: "Machine Learning"
   keywords: ["nlp", "transformers"]
   pdfFile: "my-paper.pdf"
   ---
   Optional extended notes or abstract go here.
   ```

### Add a project
Create `src/content/projects/my-project.md` with the frontmatter fields shown in
`src/content/projects/example-project.md`.

### Add a book
Create `src/content/books/my-book.md` with the frontmatter fields shown in
`src/content/books/example-book.md`.

### Add a resource link
Create `src/content/resources/my-resource.md` with the frontmatter fields shown in
`src/content/resources/astro-docs.md`.

In every case: no navigation file, search index, or listing page needs manual edits — they're
all generated from the Markdown files at build time.

---

## 6. Delete the example content

Once you're comfortable, delete these placeholder files so they stop showing up on the live site:
- `src/content/blog/welcome-to-the-site.md`
- `src/content/research/example-paper.md` (and `public/papers/example-paper.pdf`)
- `src/content/projects/example-project.md`
- `src/content/books/example-book.md`
- `src/content/resources/astro-docs.md` (optional — this one's a genuinely useful link)

---

## 7. Project structure

```
src/
  components/     Reusable UI (nav, footer, cards)
  layouts/         Page shells (BaseLayout, PostLayout)
  pages/           Routes (index, blog, research, projects, etc.)
  content/         Your Markdown content, organized by type
  site.config.ts   Your name, tagline, social links
  styles/          Global CSS (design tokens, dark mode)
public/
  papers/          PDFs for the research library
  resume/           Your resume PDF
  images/           Profile photo, OG image, etc.
```

---

## 8. Notes

- **Search** only builds during `npm run build` (via Pagefind), not `npm run dev` — this is
  expected and matches how the site works once deployed.
- **Math**: use `$inline$` or `$$block$$` LaTeX syntax in any blog post or paper note.
- **Dark mode** persists via `localStorage` and respects the visitor's OS preference on first
  visit.
- If you ever want a real backend contact form (submissions without opening an email client),
  services like Formspree or Netlify Forms can be dropped into `src/pages/contact.astro`
  without needing your own server.
