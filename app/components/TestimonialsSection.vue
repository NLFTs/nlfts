  <script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)

const testimonials = [
  { 
    name: "Ihsan, Owner Ruang Berita", role: "",
    content: "Kami order website berita ke RakitWeb, hasil nya mantap! terutama untuk server nya lancar jaya", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ihsan", 
    isDark: true, logo: "i-lucide-globe" 
  },
  { 
    name: "Rina Wulandari", role: "Pemilik UMKM Fashion, Semarang", 
    content: "RakitWeb bantu setup toko online kami dari nol. Sekarang omzet naik karena pelanggan bisa order online 24 jam. Tim-nya ramah dan responsif.", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rina", 
    isDark: false 
  },
  { 
    name: "Agus Prasetyo", role: "Owner Server Minecraft Indonesia", 
    content: "Game server Minecraft kami di-setup sama RakitWeb, performanya stabil banget! Maintenance juga full, jadi kami tinggal main aja.", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agus", 
    isDark: false 
  },
  { 
    name: "Dewi Rahayu", role: "Manajer PT Maju Bersama", 
    content: "Company profile kami dikerjakan profesional dan sesuai brief. Website jadi lebih elegan dan mewakili brand perusahaan kami. Highly recommended!", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi", 
    isDark: false 
  },
  { 
    name: "Hendra Kurniawan", role: "Developer Startup Semarang", 
    content: "Minta bantuan setup server VPS dan instalasi panel Pterodactyl. Dikerjakan cepat, beres dalam 2 jam, dan semuanya berjalan mulus. Top!", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hendra", 
    isDark: false 
  },
  { 
    name: "Sari Indah", role: "Pemilik Klinik Kecantikan, Semarang", 
    content: "Landing page kami dibuat menarik dan konversinya tinggi. Banyak pelanggan baru yang datang dari hasil promosi pakai landing page RakitWeb.", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sari", 
    isDark: false 
  },
  { 
    name: "Rizky Firmansyah", role: "Admin Server CS:GO Community", 
    content: "Server CS:GO kami di-handle penuh sama RakitWeb. Dari setup sampai maintenance, semua beres. Owner tinggal fokus komunitas, server aman.", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizky", 
    isDark: true, logo: "i-lucide-server" 
  }
]


// Advanced 3D Hover System with Spotlight Border
const onMouseMove = (e: MouseEvent, el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  // Calculate relative rotation (max 6deg for more stability)
  const rotateX = ((mouseY - centerY) / centerY) * -6
  const rotateY = ((mouseX - centerX) / centerX) * 6
  
  // Elements
  const inner = el.querySelector(".testi-inner")
  const glow = el.querySelector(".testi-glow") as HTMLElement
  const borderSpotlight = el.querySelector(".testi-border-spotlight") as HTMLElement
  
  gsap.to(el, {
    rotateX,
    rotateY,
    transformPerspective: 1200,
    duration: 0.5,
    ease: "power2.out"
  })

  gsap.to(inner, {
    x: rotateY * 1.2,
    y: rotateX * -1.2,
    duration: 0.5,
    ease: "power2.out"
  })

  // Spotlight Follow
  if (glow) {
    gsap.to(glow, {
      opacity: 1,
      x: mouseX - glow.offsetWidth / 2,
      y: mouseY - glow.offsetHeight / 2,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  // Border Spotlight Follow
  if (borderSpotlight) {
    gsap.to(borderSpotlight, {
      opacity: 1,
      x: mouseX - borderSpotlight.offsetWidth / 2,
      y: mouseY - borderSpotlight.offsetHeight / 2,
      duration: 0.3,
      ease: "power2.out"
    })
  }
}

const onMouseLeave = (el: HTMLElement) => {
  const inner = el.querySelector(".testi-inner")
  const glow = el.querySelector(".testi-glow") as HTMLElement
  const borderSpotlight = el.querySelector(".testi-border-spotlight") as HTMLElement

  gsap.to([el, inner], {
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  })

  if (glow) gsap.to(glow, { opacity: 0, duration: 0.6 })
  if (borderSpotlight) gsap.to(borderSpotlight, { opacity: 0, duration: 0.6 })
}

onMounted(async () => {
  await nextTick()
  if (!sectionRef.value) return

  const ctx = gsap.context(() => {
    const columns = gsap.utils.toArray(".testi-col")
    columns.forEach((col: any, i) => {
      gsap.from(col, {
        scrollTrigger: {
          trigger: col,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        delay: i * 0.15,
        duration: 1.2,
        ease: "power2.out"
      })
    })
  }, sectionRef.value)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="relative py-24 md:py-32 bg-[#F9F9F8] dark:bg-[#09090b] border-b border-gray-100 dark:border-white/5 overflow-hidden"
  >
    <!-- SUBTLE BACKGROUND BLUR -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none" />

    <UContainer class="relative z-10">
      
      <!-- GRID LAYOUT -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start perspective-2000">
        
        <!-- Column 1 -->
        <div class="testi-col flex flex-col gap-6 lg:gap-8">
          <!-- Large Dark Card -->
          <div 
            class="testi-card group p-[1.5px] bg-white/5 rounded-[25px] relative overflow-hidden preserve-3d transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,193,106,0.3)] shadow-2xl"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <!-- SPOTLIGHT BORDER EFFECT -->
            <div class="testi-border-spotlight absolute inset-0 w-80 h-80 bg-primary-400 blur-[40px] opacity-0 pointer-events-none rounded-full" />
            
            <div class="relative w-full h-full bg-[#0F0F0F] rounded-[24px] p-10 md:p-12 text-white flex flex-col justify-between min-h-[400px] overflow-hidden preserve-3d">
              <div class="testi-glow absolute inset-0 w-[400px] h-[400px] bg-primary-500/30 blur-[120px] pointer-events-none opacity-0" />
              <div class="testi-inner space-y-8 flex-1 flex flex-col justify-between preserve-3d">
                <div class="space-y-8">
                  <div class="flex items-center gap-3 opacity-80">
                    <UIcon :name="testimonials[0]?.logo || ''" class="w-6 h-6 text-primary-500" />
                    <span class="text-sm font-bold uppercase tracking-widest">Partner</span>
                  </div>
                  <p class="text-xl md:text-2xl font-medium leading-[1.3] tracking-tight">
                    "{{ testimonials[0]?.content }}"
                  </p>
                </div>
                <div class="flex items-center justify-between mt-12">
                  <div class="space-y-1">
                    <div class="text-sm font-black uppercase tracking-wider">{{ testimonials[0]?.name }}</div>
                    <div class="text-[10px] uppercase font-bold text-gray-500">{{ testimonials[0]?.role }}</div>
                  </div>
                  <img :src="testimonials[0]?.avatar" class="w-10 h-10 rounded-lg object-cover bg-white/10 p-0.5 border border-white/20" />
                </div>
              </div>
            </div>
          </div>

          <!-- Small Light Card 4 -->
          <div 
            class="testi-card group p-[1.5px] bg-gray-200 dark:bg-white/5 rounded-[25px] relative overflow-hidden preserve-3d transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] shadow-sm"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <div class="testi-border-spotlight absolute inset-0 w-64 h-64 bg-primary-300 blur-[30px] opacity-0 pointer-events-none rounded-full" />
            
            <div class="relative w-full h-full bg-white dark:bg-[#0F1420] rounded-[24px] p-8 md:p-10 flex flex-col justify-between overflow-hidden preserve-3d">
              <div class="testi-glow absolute inset-0 w-80 h-80 bg-primary-500/10 blur-[80px] pointer-events-none opacity-0" />
              <div class="testi-inner preserve-3d">
                <p class="text-lg text-gray-800 dark:text-gray-100 leading-[1.5] mb-10">
                    "{{ testimonials[4]?.content }}"
                </p>
                <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <div class="text-xs font-black uppercase text-gray-900 dark:text-white">{{ testimonials[4]?.name }}</div>
                      <div class="text-[9px] uppercase font-bold text-gray-400">{{ testimonials[4]?.role }}</div>
                    </div>
                    <img :src="testimonials[4]?.avatar" class="w-8 h-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="testi-col flex flex-col gap-6 lg:gap-8">
          <div 
            v-for="idx in [1, 3, 5]" :key="idx" 
            class="testi-card group p-[1.5px] bg-gray-200 dark:bg-white/5 rounded-[25px] relative overflow-hidden preserve-3d transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] shadow-sm"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <div class="testi-border-spotlight absolute inset-0 w-64 h-64 bg-primary-300 blur-[30px] opacity-0 pointer-events-none rounded-full" />
            <div class="relative w-full h-full bg-white dark:bg-[#0F1420] rounded-[24px] p-8 md:p-10 flex flex-col justify-between overflow-hidden preserve-3d">
              <div class="testi-glow absolute inset-0 w-80 h-80 bg-primary-500/10 blur-[80px] pointer-events-none opacity-0" />
              <div class="testi-inner preserve-3d">
                <p class="text-lg text-gray-800 dark:text-gray-100 leading-[1.5] mb-12">
                    "{{ testimonials[idx - 1]?.content }}"
                </p>
                <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <div class="text-xs font-black uppercase text-gray-900 dark:text-white">{{ testimonials[idx - 1]?.name }}</div>
                      <div class="text-[9px] uppercase font-bold text-gray-400">{{ testimonials[idx - 1]?.role }}</div>
                    </div>
                    <img :src="testimonials[idx - 1]?.avatar" class="w-8 h-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="testi-col flex flex-col gap-6 lg:gap-8">
          <!-- Small Light Card 2 -->
          <div 
             class="testi-card group p-[1.5px] bg-gray-200 dark:bg-white/5 rounded-[25px] relative overflow-hidden preserve-3d transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] shadow-sm"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <div class="testi-border-spotlight absolute inset-0 w-64 h-64 bg-primary-400 blur-[30px] opacity-0 pointer-events-none rounded-full" />
            <div class="relative w-full h-full bg-white dark:bg-[#0F1420] rounded-[24px] p-8 md:p-10 flex flex-col justify-between overflow-hidden preserve-3d">
              <div class="testi-glow absolute inset-0 w-80 h-80 bg-primary-500/10 blur-[80px] pointer-events-none opacity-0" />
              <div class="testi-inner preserve-3d">
                <p class="text-lg text-gray-800 dark:text-gray-100 leading-[1.5] mb-10">
                    "{{ testimonials[2]?.content }}"
                </p>
                <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <div class="text-xs font-black uppercase text-gray-900 dark:text-white">{{ testimonials[2]?.name }}</div>
                      <div class="text-[9px] uppercase font-bold text-gray-400">{{ testimonials[2]?.role }}</div>
                    </div>
                    <img :src="testimonials[2]?.avatar" class="w-8 h-8 rounded-lg border border-gray-100 dark:border-white/10 shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          <!-- Large Dark Card 6 -->
          <div 
            class="testi-card group p-[1.5px] bg-white/5 rounded-[25px] relative overflow-hidden preserve-3d transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,193,106,0.3)] shadow-2xl"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <div class="testi-border-spotlight absolute inset-0 w-80 h-80 bg-primary-400 blur-[40px] opacity-0 pointer-events-none rounded-full" />
            <div class="relative w-full h-full bg-[#0F0F0F] rounded-[24px] p-10 md:p-12 text-white flex flex-col justify-between min-h-[420px] overflow-hidden preserve-3d">
              <div class="testi-glow absolute inset-0 w-[400px] h-[400px] bg-primary-500/30 blur-[120px] pointer-events-none opacity-0" />
              <div class="testi-inner flex-1 flex flex-col justify-between preserve-3d">
                <div class="space-y-8">
                  <div class="flex items-center gap-3 opacity-80">
                    <UIcon :name="testimonials[6]?.logo || ''" class="w-6 h-6 text-primary-500" />
                    <span class="text-sm font-bold uppercase tracking-widest">Industry Core</span>
                  </div>
                  <p class="text-xl md:text-2xl font-medium leading-[1.3] tracking-tight">
                    "{{ testimonials[6]?.content }}"
                  </p>
                </div>
                <div class="flex items-center justify-between mt-12">
                  <div class="space-y-1">
                    <div class="text-sm font-black uppercase tracking-wider">{{ testimonials[6]?.name }}</div>
                    <div class="text-[10px] uppercase font-bold text-gray-500">{{ testimonials[6]?.role }}</div>
                  </div>
                  <img :src="testimonials[6]?.avatar" class="w-10 h-10 rounded-lg object-cover bg-white/10 p-0.5 border border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </UContainer>
  </section>
</template>

<style scoped>
section {
  font-feature-settings: "cv11", "ss01", "cv01";
}

.perspective-2000 {
  perspective: 2000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.testi-card {
  will-change: transform;
}

.testi-inner {
  will-change: transform;
}
</style>





