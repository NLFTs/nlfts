<script setup lang="ts">
import gsap from 'gsap'
import ImpactStats from '@/components/ImpactStats.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import DownloadAppSection from '@/components/DownloadAppSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

// SEO Implementation
useSeoMeta({
  title: 'RakitWeb — Jasa Pembuatan Website & Digital Solution',
  ogTitle: 'RakitWeb — Jasa Pembuatan Website & Digital Solution',
  description: 'RakitWeb menyediakan jasa pembuatan website, setup hosting & domain, pembuatan aplikasi Android, hingga konfigurasi game server dengan harga terjangkau.',
  ogDescription: 'RakitWeb menyediakan jasa pembuatan website, setup hosting & domain, pembuatan aplikasi Android, hingga konfigurasi game server dengan harga terjangkau.',
  ogImage: 'https://rakitweb.id/rakitweb.jpeg',
  ogUrl: 'https://rakitweb.id',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'RakitWeb — Jasa Pembuatan Website & Digital Solution',
  twitterDescription: 'RakitWeb: solusi digital terbaik untuk bisnis Anda — website, hosting, Android, dan game server.',
  twitterImage: 'https://rakitweb.id/rakitweb.jpeg',
})

// Impact Stats Data
const impactStats = [
  { value: '100+', label: 'Klien Puas' },
  { value: '50+', label: 'Website Terbangun' },
  { value: '20+', label: 'Server Aktif' },
  { value: '10+', label: 'Aplikasi Android' },
  { value: '99%', label: 'Uptime Server' },
  { value: '24/7', label: 'Support Teknis' }
]

// Content Data
const content = [
  {
    title: 'Wujudkan Website Impian Anda Bersama RakitWeb',
    desc: 'RakitWeb menyediakan jasa pembuatan website dan landing page profesional, modern, dan responsif untuk bisnis Anda — mulai dari company profile hingga toko online.'
  },
  {
    title: 'Jasa Hosting, Domain & Setup Server Lengkap',
    desc: 'Mulai dari setup hosting dan domain, migrasi website, hingga instalasi panel seperti Pterodactyl, cPanel, HestiaCP, CloudPanel, dan lainnya — dikerjakan langsung oleh tim RakitWeb.'
  },
  {
    title: 'Bangun Aplikasi Android & Game Server Tanpa Ribet',
    desc: 'Kami melayani pembuatan aplikasi Android custom serta konfigurasi game server Minecraft, CS:GO, GTA, Terraria, Garry Mod, dan lainnya — lengkap dengan maintenance full.'
  }
]

const subDescription = "Website profesional, hosting andal, aplikasi Android, dan game server — semua bisa di RakitWeb"

const currentIndex = ref(0)
const heroContainer = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context
let rotationTimer: any

const animateTransition = () => {
  // 1. Fade Out Current
  const words = titleRef.value?.querySelectorAll('.word-span')
  if (!words) return

  const tl = gsap.timeline({
    onComplete: () => {
      // 2. Change Content
      currentIndex.value = (currentIndex.value + 1) % content.length
      
      // 3. Fade In New (Wait for DOM update)
      nextTick(() => {
        const newWords = titleRef.value?.querySelectorAll('.word-span')
        if (!newWords) return
        
        gsap.fromTo(newWords, 
          { y: 40, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 0.8, ease: 'expo.out' }
        )
        gsap.fromTo(descRef.value, 
          { opacity: 0, y: 10 },
          { opacity: 0.7, y: 0, duration: 0.6 }
        )
      })
    }
  })

  tl.to(words, { y: -20, opacity: 0, stagger: 0.02, duration: 0.4, ease: 'power2.in' })
    .to(descRef.value, { opacity: 0, y: -10, duration: 0.3 }, '-=0.3')
}

onMounted(() => {
  // Initial Anim - Optimized for zero-white-flicker
  // Using a very small timeout instead of nextTick for faster response
  setTimeout(() => {
    const initialWords = titleRef.value?.querySelectorAll('.word-span')
    if (initialWords) {
      gsap.from(initialWords, { 
        y: 20, 
        rotateX: -15, 
        stagger: 0.02, 
        duration: 0.6, 
        ease: 'power2.out',
        // No opacity: 0 here to keep text visible
      })
    }
  }, 100)

  // GSAP Context for background effects
  ctx = gsap.context(() => {
    gsap.to('.hero-blob', {
      x: 'random(-80, 80)',
      y: 'random(-80, 80)',
      duration: 'random(8, 15)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 2
    })
  }, heroContainer.value || undefined)

  // Robust Timer
  rotationTimer = setInterval(animateTransition, 5000)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  if (rotationTimer) clearInterval(rotationTimer)
})
</script>

<template>
  <main>
    <div ref="heroContainer" class="relative overflow-hidden flex flex-col justify-start pt-8 md:pt-12 bg-white dark:bg-[#09090b] selection:bg-primary-500/30">
      <!-- UNIQUE BACKGROUND: Dynamic Mesh & Floating Glass -->
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <!-- Animated Blobs (Aero Style) -->
        <div class="hero-blob absolute top-[-5%] left-[5%] w-[45%] h-[45%] bg-primary-500/10 blur-[130px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60" />
        <div class="hero-blob absolute top-[0%] right-[5%] w-[35%] h-[35%] bg-blue-500/10 blur-[110px] rounded-full opacity-40" />
        <div class="hero-blob absolute bottom-[0%] left-[25%] w-[40%] h-[40%] bg-indigo-500/5 blur-[90px] rounded-full opacity-30" />

        <!-- Flowing Geometric Lines -->
        <svg class="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.25]" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="currentColor" stop-opacity="0" />
              <stop offset="50%" stop-color="currentColor" stop-opacity="0.8" />
              <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
            </linearGradient>
          </defs>
          <g class="text-gray-300 dark:text-gray-700">
            <path v-for="i in 5" :key="i" :d="`M -200 ${200 * i} Q 400 ${200 * i + (i%2 ? 80 : -80)} 1200 ${200 * i}`" fill="none" stroke="url(#flow-grad)" stroke-width="0.5" class="flow-line-anim" :style="{ animationDelay: `${i * -2}s` }" />
          </g>
        </svg>
        
        <!-- Grainy Overlay -->
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
      </div>

      <!-- Hero Content -->
      <section class="relative z-10 px-8 sm:px-16 py-12 md:py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
        <!-- Fixed Sub-description Badge -->
        <div class="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm backdrop-blur-2xl mb-10 hover:border-primary-500/30 transition-all duration-700">
          <div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white">
            <UIcon name="i-lucide-check" class="w-3 h-3" />
          </div>
          <span class="text-[10px] md:text-xs font-semibold tracking-tight text-gray-700 dark:text-gray-200 uppercase">
            Solusi Digital <span class="text-amber-500">#1</span> untuk Bisnis Anda — Semarang, Indonesia
          </span>
        </div>

        <!-- Main Title (Rotating Characters) -->
        <h1 
          ref="titleRef"
          class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8 font-sans perspective-2000 min-h-[4em] md:min-h-[3em] flex flex-wrap justify-center content-center"
        >
          <template v-for="(word, i) in (content[currentIndex]?.title?.split(' ') || [])" :key="`${currentIndex}-${i}`">
            <span class="word-span inline-block origin-center opacity-100">
              {{ word }}
            </span>
            <span class="inline-block w-[0.25em]" v-if="i < (content[currentIndex]?.title?.split(' ')?.length || 0) - 1" aria-hidden="true">&nbsp;</span>
          </template>
        </h1>
        
        <!-- Description -->
        <p 
          ref="descRef"
          class="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-normal opacity-70"
        >
          {{ content[currentIndex]?.desc }}
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap justify-center gap-6">
          <NuxtLink
            to="https://wa.me/6285187153883"
            target="_blank"
            class="px-8 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-bold rounded-2xl shadow-xl transition-all hover:scale-105 hover:bg-primary-600 dark:hover:bg-primary-50 active:scale-95"
          >
            Konsultasi Gratis
          </NuxtLink>
          <NuxtLink
            to="#layanan"
            class="flex items-center gap-2 px-8 py-3 text-sm font-bold text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-2xl backdrop-blur-md transition-all hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <span>Lihat Layanan</span>
          </NuxtLink>
        </div>
      </section>

      <!-- Branding -->
      <div class="absolute bottom-12 left-12 hidden md:flex items-center gap-4 opacity-30">
        <div class="w-12 h-[1px] bg-primary-500" />
        <span class="text-[9px] font-mono tracking-widest uppercase">RakitWeb Digital</span>
      </div>
    </div>

    <!-- TRUSTED BY SECTION -->
    <section class="relative border-y border-gray-100 dark:border-white/5 bg-white dark:bg-[#09090b] overflow-hidden">
      <div class="flex flex-col md:flex-row w-full max-w-7xl mx-auto relative group/section">
        <div class="md:w-[280px] shrink-0 p-8 flex flex-col items-center md:items-start justify-center border-r border-gray-100 dark:border-white/5 z-20 bg-white dark:bg-[#09090b] relative">
          <h2 class="text-xs md:text-sm font-black tracking-[0.1em] text-gray-400 dark:text-gray-500 uppercase leading-snug text-center md:text-left">
            Dipercaya Oleh<br />
            <span class="text-gray-900 dark:text-gray-300">Klien & Bisnis Kami</span>
          </h2>
          <div class="absolute inset-y-0 -right-20 w-20 bg-gradient-to-r from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none hidden md:block" />
        </div>

        <div class="flex-grow overflow-hidden relative flex z-10">
          <div class="flex logo-scroll-track items-center h-full">
            <div v-for="n in 2" :key="n" class="flex flex-shrink-0 h-full">
              <div class="w-[200px] md:w-[240px] px-6 md:px-8 py-10 md:py-12 flex items-center justify-center border-r border-gray-100 dark:border-white/5 transition-all duration-700">
                <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" class="h-14 md:h-18 w-full object-contain pointer-events-none" alt="Google" />
              </div>
              <div class="w-[200px] md:w-[240px] px-6 md:px-8 py-10 md:py-12 flex items-center justify-center border-r border-gray-100 dark:border-white/5 transition-all duration-700">
                <img src="/company/Vuxi.png" class="h-12 md:h-16 w-full object-contain dark:invert pointer-events-none" alt="Fuso" onerror="this.src='https://www.logo.wine/a/logo/Mitsubishi_Fuso_Truck_and_Bus_Corporation/Mitsubishi_Fuso_Truck_and_Bus_Corporation-Logo.wine.svg'" />
              </div>
              <div class="w-[200px] md:w-[240px] px-6 md:px-8 py-10 md:py-12 flex items-center justify-center border-r border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-transparent transition-all duration-700">
                <span class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 dark:text-white">NLFTs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DATA FLOW ANIMATION -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 dark:bg-white/5 overflow-hidden">
        <div class="data-flow-track flex">
          <div v-for="i in 20" :key="i" class="w-20 h-[1px] bg-primary-500/30 mx-10 relative flex-shrink-0">
            <div class="absolute inset-0 bg-primary-500 shadow-[0_0_8px_#10b981]" />
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACT STATS SECTION -->
    <ImpactStats :stats="impactStats" />

    <!-- PROFILE SECTION -->
    <ProfileSection />

    <!-- BLOG SECTION -->
    <BlogSection />

    <!-- DOWNLOAD APP SECTION -->
    <DownloadAppSection />

    <!-- TESTIMONIALS SECTION -->
    <TestimonialsSection />
    <LocationSection />
  </main>
</template>

<style scoped>
.perspective-2000 {
  perspective: 2000px;
}

.word-span {
  display: inline-block;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.flow-line-anim {
  stroke-dasharray: 400 800;
  stroke-dashoffset: 1200;
  animation: flow 10s linear infinite;
}

.data-flow-track {
  animation: data-move 12s linear infinite;
}

.logo-scroll-track {
  animation: logo-scroll 30s linear infinite;
}

.logo-scroll-track:hover {
  animation-play-state: paused;
}

@keyframes logo-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes data-move {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes flow {
  to { stroke-dashoffset: 0; }
}

::selection {
  background: rgba(0, 193, 106, 0.3);
  color: inherit;
}
</style>
