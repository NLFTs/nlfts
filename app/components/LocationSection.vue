<script setup lang="ts">
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)

const info = {
  address: "Semarang, Jawa Tengah, Indonesia",
  email: "NLFTs.nlfts.dev",
  phone: "+62 851-8715-3883",
  instagram: "@NLFTs",
  meta: [
    { label: "Region", value: "Jawa Tengah, ID" },
    { label: "Zone", value: "GMT+7 (Jakarta)" },
    { label: "Jam Kerja", value: "09:00 - 20:00" }
  ]
}

// Mouse Parallax for Map
const onMouseMove = (e: MouseEvent, el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = ((mouseY - centerY) / centerY) * -3
  const rotateY = ((mouseX - centerX) / centerX) * 3
  
  const border = el.querySelector(".map-border-glow") as HTMLElement
  
  gsap.to(el, {
    rotateX,
    rotateY,
    transformPerspective: 1200,
    duration: 0.6,
    ease: "power2.out"
  })

  if (border) {
    gsap.to(border, {
      opacity: 1,
      x: mouseX - border.offsetWidth / 2,
      y: mouseY - border.offsetHeight / 2,
      duration: 0.4
    })
  }
}

const onMouseLeave = (el: HTMLElement) => {
  const border = el.querySelector(".map-border-glow") as HTMLElement
  gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power2.out" })
  if (border) gsap.to(border, { opacity: 0, duration: 0.6 })
}
</script>

<template>
  <section 
    ref="sectionRef"
    class="relative py-24 md:py-40 bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-white/5 overflow-hidden"
  >
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        <!-- SIDEPAR: Technical Info -->
        <div class="lg:col-span-5 flex flex-col justify-between py-2">
          <div class="space-y-12">
            <div class="space-y-4">
              <div class="flex items-center gap-2 mb-6">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                <span class="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">Hubungi Kami / Kontak</span>
              </div>
              <h2 class="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white uppercase leading-none">
                Siap Bantu <br /> Bisnis Anda.
              </h2>
            </div>

            <div class="space-y-8">
              <div class="flex flex-col gap-1">
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">HQ Address</span>
                <p class="text-lg font-bold text-gray-900 dark:text-white max-w-sm">
                  {{ info.address }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-x-12 gap-y-6">
                <div v-for="item in info.meta" :key="item.label" class="space-y-1">
                  <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">{{ item.label }}</span>
                  <p class="text-[11px] font-mono font-bold dark:text-gray-200 uppercase">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-12 flex flex-col gap-4">
             <div class="flex items-center gap-8">
                <a :href="'mailto:' + info.email" class="text-[11px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">{{ info.email }}</a>
                <a :href="'https://wa.me/6283160325595'" target="_blank" class="text-[11px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">{{ info.phone }}</a>
             </div>
             <a href="https://www.instagram.com/NLFTs_id" target="_blank" class="text-[15px] font-black text-gray-500">Instagram :  @NLFTs_id</a>
          </div>
        </div>

        <!-- MAIN: Interactive Map -->
        <div class="lg:col-span-7 h-full">
          <div 
            class="relative h-[400px] lg:h-full min-h-[500px] group p-[1.5px] bg-gray-100 dark:bg-white/5 rounded-[40px] overflow-hidden preserve-3d"
            @mousemove="onMouseMove($event, $el)"
            @mouseleave="onMouseLeave($el)"
          >
            <!-- Border Glow -->
            <div class="map-border-glow absolute inset-0 w-80 h-80 bg-primary-500/40 blur-[40px] opacity-0 pointer-events-none rounded-full" />
            
            <div class="relative w-full h-full bg-[#FAFAF9] dark:bg-[#050505] rounded-[39px] overflow-hidden preserve-3d">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.68700087282!2d110.32390825!3d-7.005451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0c8b05a6a3db2!2sSemarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1712128000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style="border:0; filter: grayscale(1) contrast(1.1) brightness(1.05) invert(0);" 
                allowfullscreen="" 
                loading="lazy" 
                class="dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              
              <!-- Subtle UI Overlays -->
              <div class="absolute bottom-10 left-10 p-6 bg-white dark:bg-[#0F0F0F] border border-gray-100 dark:border-white/10 rounded-3xl shadow-2xl z-10 hidden md:block">
                <div class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Lokasi NLFTs</div>
                <div class="text-[11px] font-mono text-primary-500">Semarang, Jawa Tengah</div>
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
.preserve-3d {
  transform-style: preserve-3d;
}
</style>

