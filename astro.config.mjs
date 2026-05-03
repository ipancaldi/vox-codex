import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://voxholloway.com',
  integrations: [react(), markdoc(), keystatic()],
});
