<script setup lang="ts">
import gsap from 'gsap'
import ImpactStats from '@/components/ImpactStats.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import DownloadAppSection from '@/components/DownloadAppSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

// SEO Implementation
useSeoMeta({
  title: 'NLFTs — Komunitas Programer terbesar di Bandung Indonesia',
  ogTitle: 'NLFTs — Komunitas Programer terbesar di Bandung Indonesia',
  description: 'NLFTs adalah Startup Sekaligus komunitas yang berbasis di Bandung Jawa Barat yang berfokus pada pembangunan teknologi perangkat lunak..',
  ogDescription: 'NLFTs adalah Startup Sekaligus komunitas yang berbasis di Bandung Jawa Barat yang berfokus pada pembangunan teknologi perangkat lunak..',
  ogImage: 'https://nlfts.dev/rakitweb.png',
  ogUrl: 'https://rakitweb.id',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'NLFTs — Komunitas Programer terbesar di Bandung Indonesia',
  twitterDescription: 'NLFTs adalah Startup berbasis komunitas yang berfokus pada pembangunan teknologi perangkat lunak..',
  twitterImage: 'https://rakitweb.id/rakitweb.png',
})

const impactStats = [
  { value: '10+', label: 'Protokol & Library Dikembangkan' },
  { value: '100+', label: 'Kontributor Komunitas' },
  { value: '20+', label: 'Inisiatif Teknologi Aktif' },
  { value: '5+', label: 'Framework & Tooling Internal' },
  { value: '99%', label: 'Komitmen Kualitas Kode' },
  { value: '24/7', label: 'Kolaborasi Komunitas' }
]

// 3 Core Pillars (SEO-friendly rotating texts)
const services = [
  {
    title: 'Protokol & Infrastruktur Modern',
    desc: 'Pengembangan protokol, sistem inti, dan fondasi teknologi generasi berikutnya yang dirancang untuk skalabilitas, performa, dan keberlanjutan jangka panjang.'
  },
  {
    title: 'Framework, Library & Tooling',
    desc: 'Membangun framework, library, SDK, serta tooling developer yang membantu mempercepat pengembangan aplikasi modern dengan standar yang lebih baik.'
  },
  {
    title: 'Developer Experience & Kolaborasi',
    desc: 'Menciptakan pengalaman pengembangan yang efisien melalui dokumentasi, workflow, standar komunitas, serta ekosistem kolaboratif yang terstruktur.'
  }
]

interface Brand {
  name: string
  logo: string
  isImage: boolean
  fallback?: string
}

// Brand Data for Ticker
const allBrands: Brand[] = [
  { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg', isImage: true },
  { name: 'Vuxi', logo: '/company/Vuxi.png', fallback: 'https://www.logo.wine/a/logo/Mitsubishi_Fuso_Truck_and_Bus_Corporation/Mitsubishi_Fuso_Truck_and_Bus_Corporation-Logo.wine.svg', isImage: true },
  { name: 'NLFTs', logo: 'NLFTs', isImage: false },
  { name: 'Fuso', logo: '/company/fuso.png', isImage: true },
  { name: 'Mitsubishi', logo: '/company/mitshubisi.png', isImage: true },
  { name: 'Dakpng', logo: '/company/dakpng.png', isImage: true },
  { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg', isImage: true },
  { name: 'Next.js', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21.svg', isImage: true },
  { name: 'Nuxt', logo: 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-ar21.svg', isImage: true },
  { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg', isImage: true }
]

interface BrandSlot {
  current: Brand
  next: Brand | null
}

// Initial slots representing the 5 displayed brands
const slots = ref<BrandSlot[]>([
  { current: allBrands[0]!, next: null },
  { current: allBrands[1]!, next: null },
  { current: allBrands[2]!, next: null },
  { current: allBrands[3]!, next: null },
  { current: allBrands[4]!, next: null }
])

const currentIndex = ref(0)
const heroTitleRef = ref<HTMLElement | null>(null)
const heroDescRef = ref<HTMLElement | null>(null)

let rotationTimer: any
let serviceTimer: any
let activeSlotIndex = 0
let nextBrandIndex = 5

// Transition between services in the Hero section using GSAP
const animateHeroTransition = () => {
  const title = heroTitleRef.value
  const desc = heroDescRef.value
  if (!title || !desc) return

  const tl = gsap.timeline({
    onComplete: () => {
      // Swap data
      currentIndex.value = (currentIndex.value + 1) % services.length
      
      nextTick(() => {
        const newTitle = heroTitleRef.value
        const newDesc = heroDescRef.value
        if (!newTitle || !newDesc) return

        // Smooth fade-in & slide-up translate
        gsap.fromTo(newTitle, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        )
        
        gsap.fromTo(newDesc, 
          { y: 15, opacity: 0 },
          { y: 0, opacity: 0.7, duration: 0.5, ease: 'power3.out' }
        )
      })
    }
  })

  // Smooth fade-out & slide-up exit
  tl.to(title, { y: -15, opacity: 0, duration: 0.4, ease: 'power3.in' })
    .to(desc, { y: -10, opacity: 0, duration: 0.3, ease: 'power3.in' }, 0)
}

// Rotate a single brand slot in the Trusted By section using GSAP
const rotateSlot = (slotIndex: number) => {
  const brand = allBrands[nextBrandIndex]
  if (!brand) return

  const slot = slots.value[slotIndex]
  if (!slot) return

  slot.next = brand

  nextTick(() => {
    const currentEl = document.querySelector(`.brand-item-current-${slotIndex}`)
    const incomingEl = document.querySelector(`.brand-item-incoming-${slotIndex}`)

    if (!currentEl || !incomingEl) return

    const tl = gsap.timeline({
      onComplete: () => {
        // Swap brand data safely
        const updatedSlot = slots.value[slotIndex]
        if (updatedSlot) {
          updatedSlot.current = brand
          updatedSlot.next = null
        }
        // Reset element position styles instantly
        gsap.set(currentEl, { y: '0%', opacity: 1 })
        gsap.set(incomingEl, { y: '100%', opacity: 0 })
      }
    })

    // Old logo slides up & fades out, new logo slides up & fades in
    tl.to(currentEl, { y: '-100%', opacity: 0, duration: 0.8, ease: 'power3.inOut' })
      .to(incomingEl, { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.inOut' }, 0)
  })

  // Advance index pointers
  nextBrandIndex = (nextBrandIndex + 1) % allBrands.length
  activeSlotIndex = (activeSlotIndex + 1) % slots.value.length
}

const startTimers = () => {
  rotationTimer = setInterval(() => {
    rotateSlot(activeSlotIndex)
  }, 2500)

  serviceTimer = setInterval(animateHeroTransition, 5000)
}

const handleImageError = (event: Event, slotIndex: number, isIncoming: boolean) => {
  const target = event.target as HTMLImageElement
  const slot = slots.value[slotIndex]
  if (!slot) return
  
  const brand = isIncoming ? slot.next : slot.current
  if (brand?.fallback && target.src !== brand.fallback) {
    target.src = brand.fallback
  }
}

onMounted(() => {
  // GSAP Initial Timeline on Page Load (Sleek Smooth Reveal)
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } })
  
  tl.fromTo('.hero-badge', 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )

  tl.fromTo(heroTitleRef.value, 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    '-=0.6'
  )

  tl.fromTo(heroDescRef.value, 
    { y: 15, opacity: 0 },
    { y: 0, opacity: 0.7 },
    '-=0.6'
  )

  tl.fromTo('.hero-actions', 
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1 },
    '-=0.6'
  )

  tl.fromTo('.brand-slot-item', 
    { y: 30, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      stagger: 0.08, 
      duration: 0.8, 
      ease: 'power3.out',
      onComplete: () => {
        startTimers()
      }
    },
    '-=0.4'
  )
})

onUnmounted(() => {
  if (rotationTimer) clearInterval(rotationTimer)
  if (serviceTimer) clearInterval(serviceTimer)
})
</script>

<template>
<main>
  <div class="relative overflow-hidden selection:bg-emerald-500/30 pb-32">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-600 via-orange-500 to-black z-0"></div>
    <div class="absolute inset-0 -bottom-40 z-[1] bg-[url('/images/gunung-transpert.png')] bg-cover bg-center bg-no-repeat"></div>

    <div class="relative z-10 pt-12 md:pt-16 pb-2">
      <div class="max-w-[1500px] mx-auto px-6 sm:px-12 md:px-16">
        <section class="relative z-10 flex flex-col items-start text-left">
          <div class="hero-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-semibold text-white mb-6 transition-all duration-300">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Solusi Digital #1 untuk Bisnis Anda — Bandung, Indonesia</span>
          </div>

          <div class="min-h-[130px] sm:min-h-[150px] flex flex-col items-start justify-center mb-6 w-full">
            <h1 ref="heroTitleRef" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-4 font-sans max-w-4xl text-left" style="opacity: 0;">
              {{ services[currentIndex]?.title }}
            </h1>
            <p ref="heroDescRef" class="text-xs sm:text-sm md:text-base text-gray-100 max-w-xl leading-relaxed font-normal" style="opacity: 0;">
              {{ services[currentIndex]?.desc }}
            </p>
          </div>

          <div class="hero-actions opacity-0 flex flex-col sm:flex-row justify-start gap-4 w-full sm:w-auto mb-8 md:mb-10">
            <NuxtLink to="https://wa.me/6285187153883" target="_blank" class="px-6 py-2.5 bg-white text-gray-950 text-sm font-medium rounded-lg shadow-sm hover:bg-gray-100 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2">
              <span>Konsultasi Gratis</span>
              <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="#product" class="px-6 py-2.5 bg-black/20 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-black/30 active:scale-98 transition-all duration-200 flex items-center justify-center">
              <span>Lihat Layanan</span>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>

    <section class="relative z-10 py-7 overflow-hidden">
      <div class="max-w-[1500px] mx-auto px-6 sm:px-12 md:px-16">
        <div class="py-4">
          <div class="text-center mb-6">
            <p class="text-[9px] font-bold tracking-[0.25em] text-white/70 uppercase">
              DI PERCAYA OLEH KLIEN KAMI
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            <div 
              v-for="(slotItem, i) in slots" 
              :key="i"
              class="brand-slot-item w-28 sm:w-32 md:w-36 h-12 sm:h-14 relative overflow-hidden flex items-center justify-center"
            >
              <div class="relative w-full h-full flex items-center justify-center">
                <div :class="`brand-item-current-${i} absolute inset-0 flex items-center justify-center`">
                  <img 
                    v-if="slotItem.current?.isImage" 
                    :src="slotItem.current.logo" 
                    class="h-8 sm:h-10 md:h-12 w-full object-contain invert opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none grayscale" 
                    :alt="slotItem.current.name" 
                  />
                  <span v-else class="text-base sm:text-lg font-bold text-white/70">{{ slotItem.current?.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <ImpactStats :stats="impactStats" />
  <ProfileSection />
  <BlogSection />
  <DownloadAppSection />
  <TestimonialsSection />
  <LocationSection />
</main>
</template>

<style scoped>
::selection {
  background: rgba(16, 185, 129, 0.3);
  color: inherit;
}
</style>
