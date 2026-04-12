<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Kurikulum Akademik',
  description: 'Informasi lengkap mengenai kurikulum unggulan yang diterapkan di SMK Assalaam Bandung. Mengintegrasikan teknologi mutakhir dan pendidikan karakter Islami.',
  ogTitle: 'Kurikulum Akademik - SMK Assalaam Bandung',
  ogDescription: 'Pelajari kurikulum unggulan SMK Assalaam Bandung yang dirancang sesuai dengan standar industri terkini dan nilai-nilai Islami.',
  ogImage: '/assalaam.svg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow' // Membantu bot mendeteksi dan mengindeks
})
</script>

<template>
  <main class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#09090b]">
    <!-- Efek Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent dark:from-primary-900/20 dark:via-[#09090b] dark:to-[#09090b]"></div>
      <!-- Kita bisa reuse komponen yang ada bila perlu -->
      <StarsBg class="absolute inset-0 opacity-10 dark:opacity-40" />
    </div>

    <UContainer class="relative z-10 w-full pt-32 pb-24 text-center">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <!-- Label Badge -->
        <UBadge color="primary" variant="soft" class="mb-6 font-medium tracking-wide ring-1 ring-primary-500/20 backdrop-blur-sm px-4 py-1.5" size="md">
          <UIcon name="i-lucide-book-open" class="w-4 h-4 mr-2" />
          Katalog Akademik
        </UBadge>
        
        <!-- Judul Hero -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1] drop-shadow-sm">
          Kurikulum Berbasis <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">Industri & Karakter</span>
        </h1>
        
        <!-- Deskripsi -->
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Mempersiapkan generasi unggul yang tidak hanya kompeten di bidang teknologi, 
          tetapi juga memiliki pondasi akhlak yang kuat menghadapi tantangan global.
        </p>
        
        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <UButton 
            size="xl" 
            color="primary" 
            variant="solid" 
            trailing-icon="i-lucide-arrow-right"
            class="w-full sm:w-auto font-semibold shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-shadow transition-transform hover:-translate-y-0.5"
          >
            Pelajari Kompetensi
          </UButton>
          <UButton 
            size="xl" 
            color="neutral" 
            variant="ghost" 
            icon="i-lucide-download"
            class="w-full sm:w-auto font-medium hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Unduh Silabus
          </UButton>
        </div>
      </div>
    </UContainer>
  </main>
</template>
