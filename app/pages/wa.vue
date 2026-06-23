<script setup lang="ts">
useSeoMeta({
  title: 'Gabung Komunitas NLFTs di WhatsApp',
  ogTitle: 'Gabung Komunitas NLFTs di WhatsApp',
  description: 'Bergabunglah ke grup WhatsApp komunitas NLFTs — developer Indonesia bersatu untuk belajar, berbagi, dan berkolaborasi bersama.',
  ogDescription: 'Bergabunglah ke grup WhatsApp komunitas NLFTs — developer Indonesia bersatu untuk belajar, berbagi, dan berkolaborasi bersama.',
  ogImage: 'https://nlfts.dev/og/link.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogUrl: 'https://nlfts.dev/wa',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Gabung Komunitas NLFTs di WhatsApp',
  twitterDescription: 'Bergabunglah ke grup WhatsApp komunitas NLFTs — developer Indonesia bersatu untuk belajar, berbagi, dan berkolaborasi bersama.',
  twitterImage: 'https://nlfts.dev/og/link.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://nlfts.dev/wa' }
  ]
})

const WA_URL = 'https://chat.whatsapp.com/CsT9hYFZUmz6NRFJzZ3yhj'

onMounted(() => {
  window.location.replace(WA_URL)
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-6 px-4">
    <div class="flex flex-col items-center gap-4 text-center">
      <!-- WhatsApp Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-16 h-16" fill="none">
        <circle cx="24" cy="24" r="24" fill="#25D366"/>
        <path fill="white" d="M34.5 13.5C32.1 11.1 28.9 9.8 25.5 9.8C18.6 9.8 13 15.4 13 22.3C13 24.5 13.6 26.6 14.7 28.5L12.9 35.2L19.8 33.4C21.6 34.4 23.5 34.9 25.5 34.9C32.4 34.9 38 29.3 38 22.4C38 19 36.9 15.9 34.5 13.5ZM25.5 32.7C23.7 32.7 22 32.2 20.5 31.3L20.1 31.1L16 32.2L17.1 28.2L16.9 27.8C15.9 26.2 15.3 24.3 15.3 22.3C15.3 16.6 20 12 25.5 12C28.2 12 30.7 13 32.6 14.9C34.5 16.8 35.7 19.4 35.7 22.1C35.7 27.9 31.1 32.7 25.5 32.7ZM31.1 25C30.8 24.8 29.3 24.1 29 23.9C28.7 23.8 28.5 23.7 28.3 24C28.1 24.3 27.5 25 27.3 25.2C27.1 25.4 26.9 25.4 26.6 25.3C26.3 25.1 25.4 24.8 24.3 23.8C23.5 23.1 22.9 22.2 22.7 21.9C22.5 21.6 22.7 21.4 22.9 21.2L23.4 20.6C23.5 20.5 23.6 20.3 23.7 20.1C23.8 19.9 23.7 19.8 23.6 19.6C23.5 19.4 22.9 17.9 22.7 17.3C22.4 16.6 22.2 16.7 22 16.7H21.5C21.3 16.7 20.9 16.8 20.6 17.1C20.3 17.4 19.5 18.1 19.5 19.6C19.5 21.1 20.6 22.5 20.8 22.8C21 23.1 22.9 25.9 25.7 27.3C26.4 27.6 26.9 27.8 27.3 27.9C28 28.2 28.6 28.1 29.1 28C29.7 27.9 30.8 27.3 31.1 26.6C31.4 25.9 31.4 25.3 31.1 25Z"/>
      </svg>

      <div>
        <h1 class="text-2xl font-bold mb-2">Mengarahkan ke WhatsApp</h1>
        <p class="text-zinc-400 text-sm max-w-xs">
          Kamu akan diarahkan ke grup WhatsApp komunitas NLFTs secara otomatis.
        </p>
      </div>

      <a
        :href="WA_URL"
        class="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1da851] transition-colors text-sm"
      >
        Buka WhatsApp
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
