<script setup lang="ts">
import gsap from 'gsap'

const columns = [
  {
    label: 'Keahlian',
    children: [
      { label: 'Software Engineering' },
      { label: 'Automotive TKRO' },
      { label: 'Automotive TBSM' }
    ]
  },
  {
    label: 'Layanan',
    children: [
      { label: 'PPDB Online' },
      { label: 'BKK Assalaam' },
      { label: 'Alumni Hub' },
      { label: 'Sertifikasi' }
    ]
  },
  {
    label: 'Informasi',
    children: [
      { label: 'Berita Sekolah' },
      { label: 'Pengumuman' },
      { label: 'Agenda Acara' },
      { label: 'Artikel Blog' }
    ]
  },
  {
    label: 'Partner',
    children: [
      { label: 'PT. Telkom' },
      { label: 'PT. Astra Honda' },
      { label: 'PT. Toyota Motor' },
      { label: 'See All' }
    ]
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-github', to: 'https://github.com/smkassalaam', label: 'GitHub' },
  { icon: 'i-simple-icons-x', to: 'https://x.com/smkassalaam', label: 'X' },
  { icon: 'i-simple-icons-youtube', to: 'https://youtube.com/@smkassalaam', label: 'YouTube' },
  { icon: 'i-simple-icons-instagram', to: 'https://instagram.com/smkassalaam', label: 'Instagram' }
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
    class="bg-white dark:bg-[#09090b] pt-24 pb-12 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800"
    @mousemove="onGiantMove"
  >
    <UContainer>
      <!-- TOP GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 relative z-20">
        
        <!-- BRANDING SIDE -->
        <div class="lg:col-span-4 space-y-8">
          <div class="flex items-center gap-2">
            <img src="/company/assalaam.png" class="h-10 w-auto" alt="Assalaam Logo">
          </div>
          
          <p class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary-500 leading-loose max-w-[280px] opacity-70">
            SMK Assalaam is the most productive way to build, learn, and innovate for the industry.
          </p>

          <div class="flex items-center gap-8">
            <NuxtLink 
              v-for="social in socialLinks" 
              :key="social.label"
              :to="social.to"
              target="_blank"
              class="text-gray-400 dark:hover:text-white transition-colors relative p-2"
              @mousemove="onSocialMove"
              @mouseleave="onSocialLeave"
            >
              <UIcon :name="social.icon" class="w-6 h-6 shrink-0 z-10 relative" />
              <div class="absolute inset-0 bg-primary-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </NuxtLink>
          </div>

          <div class="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
            <span>© {{ new Date().getFullYear() }}</span>
            <NuxtLink to="#" class="hover:text-primary-500 transition-colors">Legal</NuxtLink>
            <NuxtLink to="#" class="hover:text-primary-500 transition-colors">Status</NuxtLink>
          </div>
        </div>

        <!-- LINKS SIDE -->
        <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div v-for="col in columns" :key="col.label" class="space-y-6">
            <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-900 dark:text-white opacity-20">{{ col.label }}</h3>
            <ul class="space-y-4">
              <li v-for="link in col.children" :key="link.label">
                <NuxtLink 
                  to="#"
                  class="relative inline-flex flex-col items-start text-[13px] font-bold text-gray-500 dark:text-gray-400 cursor-pointer group"
                  @mouseenter="onLinkEnter"
                  @mouseleave="onLinkLeave"
                >
                  <div class="link-aura absolute inset-x-[-12px] inset-y-[-4px] bg-primary-500/20 rounded-lg blur-md opacity-0 scale-50 pointer-events-none" />
                  <span class="relative z-10">{{ link.label }}</span>
                  <div class="link-line w-full h-[1.5px] bg-primary-500 mt-1 opacity-0 scale-x-0 origin-center" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- GIANT BRANDING TEXT (More subtle) -->
      <div class="giant-branding relative mt-24 select-none pointer-events-none opacity-[0.05] dark:opacity-[0.02]">
        <h1 class="text-[clamp(80px,25vw,400px)] font-[1000] leading-none tracking-[-0.08em] uppercase text-primary-500 dark:text-white whitespace-nowrap -mb-[0.2em] transform-gpu">
          Assalaam
        </h1>
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
