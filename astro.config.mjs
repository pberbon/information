import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// EDIT THIS to your actual GitHub Pages URL, e.g. https://username.github.io/repo-name
export const SITE_URL = 'https://your-username.github.io';
// If deploying to a project page (username.github.io/REPO), set base to '/REPO'.
// If deploying to a user/organization page (username.github.io), leave base as '/'.
export const SITE_BASE = '/information/';

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
