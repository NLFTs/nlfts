<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : 'white')

useHead(() => ({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color.value }
  ],
  link: [
    { rel: 'icon', href: '/assalaam.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
}))

useSeoMeta({
  titleTemplate: '%s - SMK Assalaam Bandung',
  ogImage: '/assalaam.svg',
  twitterImage: '/assalaam.svg',
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
  </UApp>
</template>
