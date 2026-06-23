<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

// nuxt-og-image renders server-side via Satori — gunakan URL absolut
const logoUrl = 'https://NLFTs.dev/nlfts.webp'
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center text-center bg-slate-900 p-8">
    <div class="relative flex flex-col items-center">
      <img :src="logoUrl" width="128" height="128" style="border-radius:12px;margin-bottom:32px;" alt="NLFTs">
      <h1 class="text-8xl mb-4 text-white">
        {{ title }}
      </h1>
      <p class="text-5xl text-gray-200 leading-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>
