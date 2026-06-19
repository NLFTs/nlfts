// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    // Stack trap: semua route dapat header palsu
    '/**': {
      headers: {
        // Pura-pura pakai Nginx di atas Ubuntu
        'server': 'nginx/1.24.0 (Ubuntu)',
        // Hapus header yang membocorkan Vercel/Next.js
        'x-powered-by': 'PHP/8.2.12',
        // Fake cache layer — kesan pakai Varnish/CDN sendiri
        'x-cache': 'HIT from proxy.NLFTs.dev',
        'x-cache-hits': '3',
        // Fake via header — kesan pakai reverse proxy sendiri
        'via': '1.1 proxy.NLFTs.dev (Varnish/7.4)',
        // Security headers (juga membantu SEO & trust)
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'SAMEORIGIN',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/akademik/kurikulum',
        '/akademik/jurusan'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
