import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkEmbedder from '@remark-embedder/core';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.feregri.no',
  integrations: [mdx(), sitemap(), tailwind(), react()],
    // remarkPlugins: [remarkEmbedder]
});