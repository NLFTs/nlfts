// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'app-root'
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    '/blog/**': { prerender: true },
    '/docs/**': { prerender: true },
    '/**': {
      prerender: true,
      headers: {
        'server': 'nginx/1.24.0 (Ubuntu)',
        'x-powered-by': 'PHP/8.2.12',
        'x-cache': 'HIT from proxy.NLFTs.dev',
        'x-cache-hits': '3',
        'via': '1.1 proxy.NLFTs.dev (Varnish/7.4)',
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'SAMEORIGIN',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },

  compatibilityDate: '2024-07-11',

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/blog',
        '/pricing',
        '/pricing-android',
        '/changelog',
        '/login',
        '/signup',
        '/blocked',
        '/rss.xml',
        '/atom.xml',
        '/feed.xml',
        '/docs/getting-started'
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
