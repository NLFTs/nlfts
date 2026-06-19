<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)
const mockupRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

// Interactive Character Hover Effect
const onHeaderHover = () => {
  if (!headingRef.value) return
  const chars = headingRef.value.querySelectorAll('.char')
  gsap.to(chars, {
    y: -8,
    color: 'var(--ui-primary)',
    stagger: {
      amount: 0.2,
      from: "center"
    },
    duration: 0.4,
    ease: "power2.out"
  })
}

const onHeaderLeave = () => {
  if (!headingRef.value) return
  const chars = headingRef.value.querySelectorAll('.char')
  gsap.to(chars, {
    y: 0,
    color: 'inherit',
    stagger: 0.1,
    duration: 0.6,
    ease: "expo.out"
  })
}

// 3D Parallax Tilt Effect
const handleMouseMove = (e: MouseEvent) => {
  if (!mockupRef.value) return
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  const x = (clientX - innerWidth / 2) / 25
  const y = (clientY - innerHeight / 2) / 25
  
  gsap.to(mockupRef.value, {
    rotateY: x,
    rotateX: -y,
    transformPerspective: 1000,
    duration: 1.2,
    ease: "power2.out"
  })
}

onMounted(async () => {
  await nextTick()
  if (!sectionRef.value) return

  const ctx = gsap.context(() => {
    // Content Reveal
    gsap.from(".text-split", {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    })

    // Data flow orbs on SVG paths
    gsap.to(".data-orb", {
      motionPath: {
        path: "#main-flow",
        align: "#main-flow",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      duration: 8,
      repeat: -1,
      ease: "none",
      stagger: 2
    })

    // Floating UI around phone
    gsap.to(".ui-card", {
      y: "random(-10, 10)",
      rotation: "random(-2, 2)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.4
    })
  }, sectionRef.value)

  window.addEventListener('mousemove', handleMouseMove)
  onUnmounted(() => {
    ctx.revert()
    window.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="relative py-32 md:py-48 bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-white/5 overflow-hidden"
  >
    <!-- ARCHITECTURAL SVG BACKGROUND -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Perspective Grid -->
      <svg class="absolute w-full h-full opacity-[0.03] dark:opacity-[0.07]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <!-- Organic Flow Lines + Animated Orbs -->
      <svg class="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 overflow-visible" viewBox="0 0 1440 600">
        <path id="main-flow" d="M -100 300 Q 300 100 720 300 T 1540 300" fill="none" class="stroke-gray-100 dark:stroke-white/5" stroke-width="1.5" />
        <circle class="data-orb fill-primary-500 shadow-[0_0_10px_var(--ui-primary)]" r="3" />
        <circle class="data-orb fill-primary-500/40" r="2" />
        <circle class="data-orb fill-primary-500/10" r="5" />
      </svg>
      
      <!-- Center Gradient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none" />
    </div>

    <UContainer class="relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        <!-- Left Column: Content -->
        <div class="lg:col-span-6 space-y-12">
          <div class="space-y-6">
            <div class="text-split flex items-center gap-4">
              <span class="w-12 h-[1px] bg-primary-500" />
              <span class="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500">Jasa Aplikasi Android</span>
            </div>
            
            <h2 
              ref="headingRef"
              class="text-split text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-[0.95] cursor-default"
              @mouseenter="onHeaderHover"
              @mouseleave="onHeaderLeave"
            >
              <div class="flex flex-wrap">
                <span v-for="(char, i) in 'Aplikasi Android'.split('')" :key="'w1-'+i" class="char inline-block min-w-[0.1em]" :class="char === ' ' ? 'mr-4' : ''">{{ char }}</span>
              </div>
              <div class="flex flex-wrap">
                <span v-for="(char, i) in 'Custom & Profesional.'.split('')" :key="'w2-'+i" class="char inline-block min-w-[0.1em]" :class="char === ' ' ? 'mr-4' : ''">{{ char }}</span>
              </div>
            </h2>
            
            <p class="text-split text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed font-medium opacity-80">
              Butuh aplikasi Android untuk bisnis Anda? NLFTs mengerjakan custom app sesuai kebutuhan — dari konsep hingga publish di Play Store, dengan harga terjangkau.
            </p>
          </div>

          <!-- Technical Specs Grid -->
          <div class="text-split grid grid-cols-2 gap-8 items-start max-w-md">
            <div v-for="(spec, idx) in [
              { label: 'Custom Design', desc: 'UI/UX sesuai branding Anda' },
              { label: 'API Integration', desc: 'Terhubung ke sistem Anda' },
              { label: 'Push Notifikasi', desc: 'Update real-time ke pengguna' },
              { label: 'Play Store Ready', desc: 'Siap publish & distribusi' }
            ]" :key="idx" class="space-y-1">
              <h4 class="text-[10px] font-black text-primary-500 uppercase tracking-widest">{{ spec.label }}</h4>
              <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">{{ spec.desc }}</p>
            </div>
          </div>

          <div class="text-split pt-4">
            <NuxtLink 
              to="https://wa.me/6285187153883?text=Halo%20NLFTs%2C%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi%20Android" 
              target="_blank"
              class="group relative inline-flex items-center gap-5 px-10 py-5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-[20px] transition-all active:scale-95 overflow-hidden"
            >
              <div class="absolute inset-0 bg-primary-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <UIcon name="i-lucide-message-circle" class="w-6 h-6 relative z-10" />
              <div class="flex flex-col relative z-10">
                <span class="text-[9px] font-black uppercase tracking-widest opacity-50">Konsultasi via</span>
                <span class="text-lg font-black leading-none">WhatsApp Sekarang</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Mockup -->
        <div class="lg:col-span-6 relative flex justify-center perspective-2000">
          <div ref="mockupRef" class="relative group preserve-3d">
            
            <!-- SMARTPHONE ARCHITECTURE -->
            <div class="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-slate-100/50 dark:bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border-[1px] border-white/20 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex items-center justify-center p-3">
              <div class="w-full h-full rounded-[2.8rem] bg-white dark:bg-[#09090b] border border-gray-100 dark:border-white/10 overflow-hidden relative">
                
                <!-- Internal App Screenshot -->
                <img 
                  src="https://bwaplatformbucket.sgp1.cdn.digitaloceanspaces.com/assets/thumbnail_tips/Login.png" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="SIM Assalaam UI" 
                />

                <!-- Internal Glow -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <!-- FLOATING UI DATA -->
            <div class="ui-card absolute -left-16 top-10 p-5 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl w-52 z-20">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-lucide-smartphone" class="w-4 h-4 text-primary-500" />
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Android App</span>
              </div>
              <div class="space-y-1">
                <div class="text-sm font-black text-gray-900 dark:text-white leading-none">Custom Build</div>
                <div class="text-[10px] text-primary-500 font-bold uppercase tracking-wider">Status: Ready</div>
              </div>
            </div>

            <div class="ui-card absolute -right-12 bottom-20 p-5 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl w-48 z-20">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-lucide-zap" class="w-4 h-4 text-amber-500" />
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Fast Delivery</span>
              </div>
              <div class="text-sm font-black text-gray-900 dark:text-white leading-none">14-30 Hari</div>
              <p class="text-[10px] text-gray-500 font-bold uppercase mt-1">Siap publish</p>
            </div>

          </div>
          
          <!-- Outer Ambient Glow -->
          <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary-500/5 blur-[120px] opacity-20 pointer-events-none rounded-full" />
        </div>

      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
}

section {
  font-feature-settings: "cv11", "ss01", "cv01";
}

.perspective-2000 {
  perspective: 2000px;
}

.writing-vertical-rl {
  writing-mode: vertical-rl;
}

.data-orb {
  filter: drop-shadow(0 0 10px var(--ui-primary));
}

.char {
  will-change: transform, color;
}
</style>



