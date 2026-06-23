<script setup lang="ts">
useSeoMeta({
  title: 'Gabung Server Discord NLFTs',
  ogTitle: 'Gabung Server Discord NLFTs',
  description: 'Bergabunglah ke server Discord komunitas NLFTs — tempat developer Indonesia berdiskusi, berkolaborasi, dan berbagi pengetahuan 24 jam non-stop.',
  ogDescription: 'Bergabunglah ke server Discord komunitas NLFTs — tempat developer Indonesia berdiskusi, berkolaborasi, dan berbagi pengetahuan 24 jam non-stop.',
  ogImage: 'https://nlfts.dev/og/link.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogUrl: 'https://nlfts.dev/discord',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Gabung Server Discord NLFTs',
  twitterDescription: 'Bergabunglah ke server Discord komunitas NLFTs — tempat developer Indonesia berdiskusi, berkolaborasi, dan berbagi pengetahuan 24 jam non-stop.',
  twitterImage: 'https://nlfts.dev/og/link.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://nlfts.dev/discord' }
  ]
})

const DISCORD_URL = 'https://discord.gg/uNc3r3ZKQx'

onMounted(() => {
  window.location.replace(DISCORD_URL)
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-6 px-4">
    <div class="flex flex-col items-center gap-4 text-center">
      <!-- Discord Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-16 h-16">
        <circle cx="24" cy="24" r="24" fill="#5865F2"/>
        <path fill="white" d="M33.5 14.5C31.5 13.6 29.4 12.9 27.2 12.5C27 12.9 26.7 13.4 26.5 13.8C24.2 13.4 21.8 13.4 19.5 13.8C19.3 13.4 19 12.9 18.8 12.5C16.6 12.9 14.5 13.6 12.5 14.5C8.5 20.5 7.4 26.3 7.9 32C10.4 33.9 12.8 35.1 15.2 35.9C15.8 35.1 16.3 34.2 16.7 33.3C15.8 32.9 14.9 32.5 14.1 32C14.3 31.8 14.6 31.7 14.8 31.5C20.1 34 25.9 34 31.2 31.5C31.4 31.7 31.7 31.8 31.9 32C31.1 32.5 30.2 32.9 29.3 33.3C29.7 34.2 30.2 35.1 30.8 35.9C33.2 35.1 35.6 33.9 38.1 32C38.7 25.4 37 19.6 33.5 14.5ZM18.5 28.5C17 28.5 15.8 27.2 15.8 25.6C15.8 24 17 22.7 18.5 22.7C20 22.7 21.2 24 21.2 25.6C21.2 27.2 20 28.5 18.5 28.5ZM29.5 28.5C28 28.5 26.8 27.2 26.8 25.6C26.8 24 28 22.7 29.5 22.7C31 22.7 32.2 24 32.2 25.6C32.2 27.2 31 28.5 29.5 28.5Z"/>
      </svg>

      <div>
        <h1 class="text-2xl font-bold mb-2">Mengarahkan ke Discord</h1>
        <p class="text-zinc-400 text-sm max-w-xs">
          Kamu akan diarahkan ke server Discord komunitas NLFTs secara otomatis.
        </p>
      </div>

      <a
        :href="DISCORD_URL"
        class="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-colors text-sm"
      >
        Buka Discord
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>

      <NuxtLink to="/terhubung" class="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
        Kembali ke halaman Terhubung →
      </NuxtLink>
    </div>
  </div>
</template>
