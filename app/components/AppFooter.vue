<script setup lang="ts">
import gsap from 'gsap'

const columns = [
  {
    label: 'product',
    children: [
      { label: 'Website Company Profile' },
      { label: 'Landing Page' },
      { label: 'Toko Online' },
      { label: 'SEO Optimization' }
    ]
  },
  {
    label: 'Server & Hosting',
    children: [
      { label: 'Setup Hosting & Domain' },
      { label: 'Game Server' },
      { label: 'Instalasi Panel' },
      { label: 'Maintenance & Support' }
    ]
  },
  {
    label: 'Perusahaan',
    children: [
      { label: 'Tentang Kami' },
      { label: 'Portofolio' },
      { label: 'Blog & Info' },
      { label: 'Kontak' }
    ]
  },
  {
    label: 'Legal',
    children: [
      { label: 'Kebijakan Privasi' },
      { label: 'Syarat & Ketentuan' },
      { label: 'FAQ' },
      { label: 'Dukungan' }
    ]
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-github', to: 'https://github.com/NLFTs', label: 'GitHub' },
  { icon: 'i-simple-icons-instagram', to: 'https://www.instagram.com/NLFTs_id', label: 'Instagram' },
  { icon: 'i-simple-icons-whatsapp', to: 'https://wa.me/6283160325595', label: 'WhatsApp' },
  { icon: 'i-simple-icons-tiktok', to: 'https://www.tiktok.com/@webcraftidng', label: 'TikTok' }
]

// Elite Magnetic Link Effect
const onLinkEnter = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const underline = el.querySelector(".link-line")
  const aura = el.querySelector(".link-aura")
  
  gsap.to(el, {
    x: 8,
    scale: 1.05,
    color: '#10B981',
    duration: 0.5,
    ease: "elastic.out(1, 0.5)"
  })

  if (underline) {
    gsap.to(underline, {
      scaleX: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out"
    })
  }

  if (aura) {
    gsap.to(aura, {
      opacity: 0.1,
      scale: 1,
      duration: 0.4
    })
  }
}

const onLinkLeave = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const underline = el.querySelector(".link-line")
  const aura = el.querySelector(".link-aura")

  gsap.to(el, {
    x: 0,
    scale: 1,
    color: '#6B7280',
    duration: 0.8,
    ease: "elastic.out(1, 0.3)"
  })

  if (underline) {
    gsap.to(underline, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4
    })
  }

  if (aura) {
    gsap.to(aura, {
      opacity: 0,
      scale: 0.5,
      duration: 0.4
    })
  }
}

// Magnetic Social Pull
const onSocialMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const mouseX = e.clientX - rect.left - rect.width / 2
  const mouseY = e.clientY - rect.top - rect.height / 2
  
  gsap.to(el, {
    x: mouseX * 0.4,
    y: mouseY * 0.4,
    scale: 1.2,
    color: '#10B981',
    duration: 0.3,
    ease: "power2.out"
  })
}

const onSocialLeave = (e: MouseEvent) => {
  gsap.to(e.currentTarget, {
    x: 0,
    y: 0,
    scale: 1,
    color: '#9CA3AF',
    duration: 0.6,
    ease: "elastic.out(1, 0.3)"
  })
}

// Giant Text Parallax
const onGiantMove = (e: MouseEvent) => {
  const el = document.querySelector(".giant-branding")
  if (!el) return
  const xPercent = (e.clientX / window.innerWidth - 0.5) * 10
  const yPercent = (e.clientY / window.innerHeight - 0.5) * 5
  gsap.to(el, {
    xPercent,
    yPercent,
    duration: 1,
    ease: "power2.out"
  })
}
</script>

<template>
    <footer 
    class="relative bg-white dark:bg-[#09090b] pt-24 pb-0 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800"
    @mousemove="onGiantMove"
  >
    <UContainer>
      <!-- TOP GRID -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
    
    <!-- BRANDING & UTILITY -->
    <div class="lg:col-span-4 flex flex-col justify-between">
      <div class="space-y-6">
        <span class="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">NLFT<span class="text-primary-500">s</span></span>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-[240px] leading-relaxed">
          Membangun masa depan perangkat lunak melalui kolaborasi komunitas.
        </p>
      </div>
      
      <div class="mt-8 lg:mt-0 text-[10px] uppercase tracking-widest text-gray-400">
        &copy; {{ new Date().getFullYear() }} NLFTs. All rights reserved.
      </div>
    </div>

    <!-- LINKS -->
    <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="col in columns" :key="col.label" class="space-y-6">
        <h3 class="text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-white">
          {{ col.label }}
        </h3>
        <ul class="space-y-3">
          <li v-for="link in col.children" :key="link.label">
            <NuxtLink 
              :to="link.to"
              class="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400 transition-colors duration-200"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SOCIALS BOTTOM BAR -->
  <div class="mt-24 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-8">
    <div class="flex items-center gap-6">
      <NuxtLink 
        v-for="social in socialLinks" 
        :key="social.label"
        :to="social.to"
        target="_blank"
        class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <UIcon :name="social.icon" class="w-5 h-5" />
      </NuxtLink>
    </div>
    
    <div class="flex gap-6 text-[11px] font-medium text-gray-400">
      <!-- Removed broken internal links to avoid prerendering 404 routes -->
    </div>
  </div>

<!-- GIANT BRANDING TEXT -->
      <div class="relative mt-40 select-none pointer-events-none">
        <h1
          class="text-center text-[clamp(180px,25vw,520px)] font-[1000] leading-none tracking-[-0.08em]"
        >
          <span class="text-zinc-900 dark:text-white">
            NLFT
          </span>
          <span class="text-primary-500">
            s
          </span>
        </h1>

        <!-- Dark fade overlay -->
        <div
          class="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white dark:from-[#09090b] via-white/90 dark:via-[#09090b]/90 to-transparent"
        />
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
footer {
  font-feature-settings: "cv11", "ss01", "cv01";
}
</style>

<style scoped>
footer {
  font-feature-settings: "cv11", "ss01", "cv01";
}
</style>
