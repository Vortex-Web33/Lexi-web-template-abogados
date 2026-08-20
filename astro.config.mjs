// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://lexcore.example.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite',
    },
  },
  trailingSlash: 'never',
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-ES' } } }),
    icon({ include: { lucide: ['arrow-down', 'arrow-up-right', 'badge-check', 'mail', 'x'] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
