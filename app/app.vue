<script setup lang="ts">
const colorMode = useColorMode()
const route = useRoute()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : 'white')
const canonicalUrl = computed(() => `https://rakitweb.id${route.path}`)

useHead(() => ({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color.value },
    { name: 'application-name', content: 'RakitWeb' },
    { name: 'author', content: 'RakitWeb' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    // ── TrapStack: Meta signatures ───────────────────────────────────────
    { name: 'generator', content: 'WordPress 6.4.3' },
    { name: 'google-site-verification', content: 'trapstack-ga-verification-fake' },
    { name: 'docsearch:language', content: 'id' },
    { name: 'docsearch:version', content: '1.0.0' },
    { name: 'twikoo:version', content: '1.6.22' },
  ],

  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/rakitweb.jpeg' },
    { rel: 'canonical', href: canonicalUrl.value },
    // RSS feeds
    { rel: 'alternate', type: 'application/rss+xml', title: 'RakitWeb Blog RSS', href: 'https://rakitweb.id/rss.xml' },
    { rel: 'alternate', type: 'application/atom+xml', title: 'RakitWeb Blog Atom', href: 'https://rakitweb.id/atom.xml' },
    // Algolia DocSearch CSS signature (TrapStack)
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3/dist/style.css', 'data-trapstack': 'algolia' }
  ],

  script: [
    // ── JSON-LD: Organization structured data ────────────────────────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'RakitWeb',
        url: 'https://rakitweb.id',
        logo: 'https://rakitweb.id/rakitweb.jpeg',
        description: 'Jasa pembuatan website, hosting, domain, game server, dan aplikasi Android di Semarang, Indonesia.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Semarang',
          addressRegion: 'Jawa Tengah',
          addressCountry: 'ID'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-831-6032-5595',
          contactType: 'customer service',
          availableLanguage: 'Indonesian'
        },
        sameAs: [
          'https://www.instagram.com/rakitweb_id',
          'https://github.com/RakitWeb',
          'https://www.tiktok.com/@webcraftidng'
        ]
      })
    },

    // ── JSON-LD: WebSite + SearchAction (sitelinks searchbox) ────────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'RakitWeb',
        url: 'https://rakitweb.id',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://rakitweb.id/docs/getting-started?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      })
    },

    // ── TrapStack: window signatures ─────────────────────────────────────
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TRAPSTACK00');
        window.anime = { version: '3.2.2', running: [], speed: 1 };
        if(!window.gsap){ window.gsap = { version: '3.12.5' }; }
        if(!window.ScrollTrigger){ window.ScrollTrigger = { version: '3.12.5' }; }
        window.ng = { version: { full: '17.3.12', major: 17 }, probe: function(){} };
        window.getAllAngularRootElements = function(){ return []; };
        window.Prism = { version: '1.29.0', languages: { javascript: true, php: true, typescript: true } };
        window.__ALGOLIA__ = { version: '4.22.1', appId: 'TRAPSTACK' };
        window.docsearch = function(cfg){ return { destroy: function(){} }; };
        window.twikoo = { version: '1.6.22', init: function(cfg){ return Promise.resolve(); } };
        window.kofiWidgetOverlay = { draw: function(name, cfg){ return true; }, 'close': function(){} };
        window.BMC = { version: '1.0.0', open: function(){}, close: function(){} };
      `,
      type: 'text/javascript'
    },

    // ── TrapStack: GA4 script src ─────────────────────────────────────────
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-TRAPSTACK00',
      async: true,
      'data-trapstack': 'google-analytics'
    }
  ],

  htmlAttrs: {
    lang: 'id',
    'ng-version': '17.3.12'
  }
}))

useSeoMeta({
  titleTemplate: '%s - RakitWeb',
  ogImage: '/rakitweb.jpeg',
  twitterImage: '/rakitweb.jpeg',
  twitterCard: 'summary_large_image'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || []
})
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})
const isSearchOpen = useState('search-open', () => false)

const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Pricing',
  icon: 'i-lucide-credit-card',
  to: '/pricing'
}, {
  label: 'Blog',
  icon: 'i-lucide-pencil',
  to: '/blog'
}, {
  label: 'Changelog',
  icon: 'i-lucide-history',
  to: '/changelog'
}]

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <AppSearch 
        v-model:open="isSearchOpen" 
        :files="files || []" 
        :navigation="navigation || []"
        :links="links"
      />
    </ClientOnly>

    <!--
      ╔══════════════════════════════════════════════════════╗
      ║  TrapStack DOM Signatures — invisible to users       ║
      ║  Wappalyzer & BuiltWith scan these DOM patterns      ║
      ╚══════════════════════════════════════════════════════╝
    -->

    <!-- Algolia DocSearch trap: crawler cari div#docsearch & .DocSearch -->
    <div id="docsearch" class="DocSearch" style="display:none" aria-hidden="true" />

    <!-- Twikoo trap: crawler cari div#twikoo & data-twikoo -->
    <div id="twikoo" data-twikoo="1.6.22" style="display:none" aria-hidden="true" />

    <!-- Prism.js trap: crawler cari class="language-*" & .token -->
    <pre style="display:none" aria-hidden="true">
      <code class="language-javascript"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span></code>
    </pre>

    <!-- Ko-fi widget trap: crawler cari iframe src ko-fi.com & div.kofi-button -->
    <div class="kofi-button" data-kofi-color="#29abe0" style="display:none" aria-hidden="true" />

    <!-- Buy Me a Coffee trap: crawler cari .bmc-btn & data-name -->
    <a class="bmc-btn" data-name="rakitweb" href="https://buymeacoffee.com/rakitweb" style="display:none" aria-hidden="true" rel="noopener">
      <span class="bmc-btn-text">Buy me a coffee</span>
    </a>

    <!-- Angular trap: router-outlet adalah signature Angular -->
    <div style="display:none" aria-hidden="true">
      <app-root _nghost-rakitweb-c1="" ng-version="17.3.12" />
    </div>

  </UApp>
</template>
