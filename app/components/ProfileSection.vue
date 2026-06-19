<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)

// product Unggulan NLFTs
const features = [
  {
    title: 'Jasa Pembuatan Website',
    desc: 'Website company profile, landing page, toko online, dan personal branding — modern, responsif, dan SEO-friendly dengan harga terjangkau.',
    icon: 'i-lucide-globe'
  },
  {
    title: 'Hosting, Domain & Server',
    desc: 'Setup hosting, koneksi domain, migrasi website, hingga instalasi panel seperti Pterodactyl, cPanel, HestiaCP, dan CloudPanel.',
    icon: 'i-lucide-server'
  },
  {
    title: 'Game Server & Aplikasi Android',
    desc: 'Konfigurasi dan maintenance game server Minecraft, CS:GO, GTA, dan lainnya. Plus pembuatan aplikasi Android sesuai kebutuhan.',
    icon: 'i-lucide-gamepad-2'
  }
]

const socials = [
  { icon: 'i-simple-icons-whatsapp', link: 'https://wa.me/6283160325595' },
  { icon: 'i-simple-icons-instagram', link: 'https://www.instagram.com/NLFTs_id' },
  { icon: 'i-simple-icons-tiktok', link: 'https://www.tiktok.com/@webcraftidng' }
]

onMounted(async () => {
  await nextTick()
  if (!sectionRef.value) return

  const ctx = gsap.context(() => {
    // Improved individual reveal triggers
    const reveals = gsap.utils.toArray(".reveal")
    reveals.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
    })

    gsap.from(".divider", {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 85%",
      },
      scaleX: 0,
      duration: 1.5,
      transformOrigin: "left",
      ease: "expo.out"
    })
  }, sectionRef.value)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section 
    ref="sectionRef" 
    class="py-32 border-b border-gray-100 dark:border-white/5 bg-white dark:bg-[#09090b] overflow-hidden"
  >
    <div class="max-w-[1600px] mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <div class="lg:col-span-5 space-y-8">
          <div class="reveal flex flex-col space-y-4">
            <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500">product Kami</span>
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Solusi Digital Lengkap <br class="hidden md:block"/> untuk Bisnis Anda.
            </h2>
          </div>
          
          <div class="reveal divider h-[1px] w-full bg-gray-100 dark:bg-white/5" />

          <div class="reveal space-y-6">
            <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              NLFTs hadir sebagai mitra digital terpercaya untuk bisnis Anda — dari pembuatan website, setup server, hingga game server dan aplikasi Android dengan harga yang bersahabat.
            </p>
            
            <div class="pt-4 flex items-center justify-between">
              <NuxtLink to="https://wa.me/6283160325595" target="_blank" class="group flex items-center gap-3 text-sm font-bold text-gray-900 dark:text-white transition-all hover:text-primary-500">
                <span>Konsultasi Gratis</span>
                <div class="w-8 h-8 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center transition-all group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white">
                  <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
                </div>
              </NuxtLink>

              <div class="flex items-center gap-5">
                <NuxtLink v-for="social in socials" :key="social.icon" :to="social.link" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  <UIcon :name="social.icon" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div v-for="item in features" :key="item.title" class="reveal group flex flex-col">
            <div class="mb-6">
              <UIcon :name="item.icon" class="w-5 h-5 text-gray-400 dark:text-white/30 group-hover:text-primary-500 transition-colors duration-500" />
            </div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-transparent group-hover:border-primary-500 pl-0 group-hover:pl-4 transition-all duration-500">
              {{ item.title }}
            </h4>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal opacity-80">
              {{ item.desc }}
            </p>
          </div>
          
          <div class="reveal group p-8 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-sm flex flex-col justify-between hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-700">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Lihat Semua Paket & Harga</h4>
            <div class="flex items-center justify-between">
              <p class="text-sm font-bold text-gray-900 dark:text-white">Pricing →</p>
              <UIcon name="i-lucide-external-link" class="w-4 h-4 text-primary-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-feature-settings: "cv11", "ss01", "cv01";
}
</style>
