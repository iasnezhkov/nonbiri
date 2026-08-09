// @ts-check
import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

/**
 * Cloudflare Pages resolves a miss by walking up the tree looking for a file
 * named `404.html`. Astro builds the Japanese one to `ja/404/index.html`, which
 * that lookup never sees, so every mistyped /ja/ URL would fall through to the
 * English 404.
 */
/** @returns {import('astro').AstroIntegration} */
const nestedNotFound = () => ({
  name: 'nested-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('ja/404/index.html', dir), new URL('ja/404.html', dir));
    },
  },
});

export default defineConfig({
  site: 'https://nonbiri.dev',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => ({ ...item, url: item.url.replace(/(.)\/$/, '$1') }),
    }),
    nestedNotFound(),
  ],
});
