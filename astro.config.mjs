
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
// import node from '@astrojs/node'; 
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  // adapter: node({
  //   mode: 'standalone' 
  // }),
  site: 'https://www.zenapticlabs.com/', 
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()]
});