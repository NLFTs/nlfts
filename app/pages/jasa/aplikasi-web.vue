<script setup lang="ts">
useSeoMeta({
  title: 'Custom Web Application - Detail Layanan',
  description: 'Sistem aplikasi berbasis web yang dinamis untuk kebutuhan operasional spesifik, dasbor internal, sistem manajemen data, atau portal SaaS.',
  ogTitle: 'Custom Web Application - Detail Layanan',
  ogDescription: 'Sistem aplikasi berbasis web yang dinamis untuk kebutuhan operasional spesifik, dasbor internal, sistem manajemen data, atau portal SaaS.',
  ogImage: 'https://nlfts.dev/og/main.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Web Application - Detail Layanan',
  twitterDescription: 'Sistem aplikasi berbasis web yang dinamis untuk kebutuhan operasional spesifik, dasbor internal, sistem manajemen data, atau portal SaaS.',
  twitterImage: 'https://nlfts.dev/og/main.png'
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800">
    
    <nav class="mx-auto max-w-[1600px] px-8 pt-12">
      <NuxtLink 
        to="/jasa" 
        class="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
      >
        <span class="text-sm">&larr;</span> Kembali ke Pilihan Layanan
      </NuxtLink>
    </nav>

    <section class="w-full bg-white dark:bg-black text-zinc-950 dark:text-white px-8 pt-16 pb-12 antialiased">
      <div class="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        <div class="lg:col-span-7">
          <h1 class="text-[44px] sm:text-[64px] font-bold tracking-tight leading-[1.02] text-zinc-950 dark:text-white">
            Aplikasi Web<br />yang berdampak.
          </h1>
        </div>

        <div class="lg:col-span-5 space-y-6 lg:pt-4">
          <p class="text-[15px] sm:text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md font-normal">
            Sistem aplikasi berbasis web yang dinamis untuk kebutuhan operasional spesifik, dasbor internal, sistem manajemen data, atau portal SaaS.
          </p>
          
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button class="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-950 dark:bg-white px-5 text-sm font-medium text-white dark:text-black transition-colors duration-200 hover:bg-zinc-800 dark:hover:bg-zinc-200">
              <svg class="h-3 w-3 fill-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,15 90,85 10,85" />
              </svg>
              <span>Mulai Keberangkatan</span>
            </button>

            <button class="inline-flex h-11 items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A] px-5 text-sm font-medium text-zinc-900 dark:text-white transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Lihat Demo
            </button>
          </div>
        </div>

      </div>
    </section>

    <section class="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-200 dark:border-zinc-900 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 dark:divide-zinc-900">
      
      <div class="p-12 lg:py-16 lg:col-span-4 space-y-4 flex flex-col justify-center">
        <div class="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span>⚙️</span> Infrastruktur Aplikasi
        </div>
        <h2 class="text-4xl font-semibold tracking-tight leading-tight text-zinc-950 dark:text-white">
          Kendali penuh atas arsitektur sistem Anda.
        </h2>
        <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Kombinasi fleksibel antara ketangguhan ekosistem backend modern dan kebebasan kerangka kerja frontend mutakhir. Menjamin skalabilitas alur kerja dari manajemen data hingga skalabilitas fungsional operasional.
        </p>
      </div>

      <div class="p-12 lg:py-16 lg:col-span-8 flex flex-col justify-center space-y-8 bg-zinc-50 dark:bg-[#020202]">
        <h3 class="text-xl font-normal text-zinc-600 dark:text-zinc-400">
          <strong class="text-zinc-950 dark:text-white font-medium">Teknologi handal berstandar industri.</strong> Dibangun dengan struktur yang terukur demi kestabilan performa aplikasi sesuai kebutuhan bisnis Anda.
        </h3>

        <div class="w-full max-w-2xl mx-auto pt-6 relative flex items-center justify-between h-[240px]">
          
          <div class="flex flex-col justify-between h-full z-10 w-44 relative">
            <div class="flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 h-11 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-sm">
              <UIcon name="i-simple-icons-nestjs" class="h-4 w-4 shrink-0" style="color: #E0234E;" />
              <span>Arsitektur API</span>
            </div>
            <div class="flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 h-11 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-sm">
              <UIcon name="i-simple-icons-nuxtdotjs" class="h-4 w-4 shrink-0" style="color: #00DC82;" />
              <span>Autentikasi Aman</span>
            </div>
            <div class="flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 h-11 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-sm">
              <UIcon name="i-simple-icons-flutter" class="h-4 w-4 shrink-0" style="color: #02569B;" />
              <span>Real-time Sync</span>
            </div>
            <div class="flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 h-11 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-sm">
              <UIcon name="i-simple-icons-github" class="h-4 w-4 shrink-0 text-zinc-950 dark:text-white" />
              <span>Manajemen State</span>
            </div>
          </div>

          <div class="absolute inset-0 pointer-events-none hidden md:block">
            <svg class="w-full h-full" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 176 28 C 230 28, 230 120, 272 120" stroke="#E0234E" stroke-width="1.5" />
              <path d="M 176 91 C 230 91, 230 120, 272 120" stroke="#00DC82" stroke-width="1.5" />
              <path d="M 176 161 C 230 161, 230 120, 272 120" stroke="#02569B" stroke-width="1.5" />
              <path d="M 176 224 C 230 224, 230 120, 272 120" stroke="currentColor" stroke-width="1.5" class="text-zinc-300 dark:text-white" />

              <line x1="328" y1="120" x2="424" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" class="text-zinc-300 dark:text-zinc-800" />
            </svg>
          </div>

          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div class="h-14 w-14 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center justify-center shadow-2xl overflow-hidden p-2">
              <img src="/nlfts.webp" alt="NLFTs Logo" class="w-full h-full object-contain" />
            </div>
          </div>

          <div class="z-10 w-44 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A] p-3 shadow-2xl space-y-2">
            <div class="flex gap-1 border-b border-zinc-200 dark:border-zinc-900 pb-2">
              <span class="h-1.5 w-1.5 rounded-full bg-[#FF5F56]" />
              <span class="h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" />
              <span class="h-1.5 w-1.5 rounded-full bg-[#27C93F]" />
            </div>
            <div class="h-2 w-3/4 rounded bg-zinc-200 dark:bg-zinc-900" />
            <div class="h-10 w-full rounded border border-dashed border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black" />
          </div>

        </div>
      </div>
    </section>

    <section class="relative mx-auto max-w-[1600px] px-6 py-24">
      <div class="absolute -bottom-[14px] right-4 text-zinc-400 dark:text-zinc-700 font-light text-xl select-none">+</div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-10 bg-gradient-to-b from-zinc-50 to-white dark:from-[#050505] dark:to-black">
        <div class="lg:col-span-8 space-y-6">
          <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white max-w-2xl leading-tight">
            Siap membangun sistem? <span class="text-zinc-500 font-normal">Mulai iterasi proyek Anda sekarang. Hubungi tim kami untuk mendiskusikan kebutuhan infrastruktur skala <span class="text-[#0070F3]">Pro</span> atau tingkat <span class="text-[#7928CA]">Enterprise</span> perusahaan Anda.</span>
          </h2>
          <div class="flex items-center gap-3 pt-2">
            <button class="h-11 px-6 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all">
              Hubungi Kami
            </button>
            <button class="h-11 px-6 rounded-md bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all">
              Konsultasikan Ide
            </button>
          </div>
        </div>

        <div class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-900 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-center space-y-4">
          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <strong class="text-zinc-950 dark:text-white font-medium">Jelajahi Opsi Enterprise</strong> dengan jaminan performa kustom, isolasi pipeline data, serta dukungan Service Level Agreement (SLA) khusus.
          </p>
          <div>
            <button class="h-11 px-6 w-full sm:w-auto rounded-md bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
              Solusi Korporat
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>