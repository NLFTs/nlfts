<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
    <nav class="mx-auto max-w-5xl px-6 pt-12">
      <NuxtLink 
        to="/jasa" 
        class="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
      >
        <span class="text-sm">&larr;</span> Kembali ke Pilihan Layanan
      </NuxtLink>
    </nav>

    <section class="mx-auto max-w-5xl px-6 pt-12 pb-20">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        <div class="space-y-6 lg:col-span-5">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-zinc-400 dark:text-zinc-500">LAYANAN 01 / STATIS</span>
            <span class="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
              Ultra Fast
            </span>
          </div>
          
          <h1 class="text-4xl font-normal tracking-tighter sm:text-5xl text-black dark:text-white leading-[1.1]">
            Solusi paling aman untuk performa web ekstrem.
          </h1>
          
          <p class="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Situs web modern dituntut untuk memuat dalam hitungan milidetik. Melalui arsitektur tanpa database tradisional, platform Anda bebas hambatan, kebal malfungsi, dan dioptimalkan penuh untuk mesin pencari.
          </p>
          
          <div class="flex items-center gap-3 pt-2">
            <NuxtLink 
              to="/jasa#order-form"
              class="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Mulai Proyek
            </NuxtLink>
            <a 
              href="https://wa.me/628123456789" 
              target="_blank"
              class="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
            >
              Lihat Contoh
            </a>
          </div>
        </div>

        <div class="relative lg:col-span-7 flex items-center justify-center min-h-[360px] sm:min-h-[420px] select-none pointer-events-none overflow-hidden sm:overflow-visible">
          
          <div class="relative w-[85%] sm:w-[80%] aspect-[4/3] rounded-lg border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30 shadow-2xl translate-x-8 -translate-y-4">
            <div class="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5 dark:border-zinc-800">
              <div class="flex gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <div class="rounded bg-zinc-100 px-6 py-0.5 text-[10px] font-mono text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                remote-sandbox.vercel.run
              </div>
              <div class="w-10"></div>
            </div>
            <div class="relative h-[calc(100%-37px)] grid grid-cols-3 grid-rows-2">
              <div class="border-r border-b border-dashed border-zinc-200/60 dark:border-zinc-800/60" />
              <div class="border-r border-b border-dashed border-zinc-200/60 dark:border-zinc-800/60" />
              <div class="border-b border-dashed border-zinc-200/60 dark:border-zinc-800/60" />
              <div class="border-r border-dashed border-zinc-200/60 dark:border-zinc-800/60" />
              <div class="border-r border-dashed border-zinc-200/60 dark:border-zinc-800/60 flex flex-col items-center justify-center p-4 text-center">
                <div class="h-5 w-5 opacity-40 text-zinc-400 dark:text-zinc-500 mb-2">
                  <UIcon name="i-heroicons-cpu-chip" class="h-5 w-5" />
                </div>
                <span class="text-[10px] font-mono font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">sandbox running</span>
              </div>
              <div class="border-dashed border-zinc-200/60 dark:border-zinc-800/60" />
            </div>
          </div>

          <div class="absolute bottom-4 left-4 w-[50%] sm:w-[45%] aspect-[3/4] rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black shadow-2xl flex flex-col">
            <div class="flex items-center border-b border-zinc-200 px-3 py-2.5 dark:border-zinc-800">
              <div class="flex gap-1.5 mr-4">
                <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <span class="text-[9px] font-mono text-zinc-400 dark:text-zinc-500">Agent</span>
            </div>
            <div class="flex-1 relative grid grid-cols-2 p-3 items-center justify-center">
              <div class="absolute inset-0 grid grid-cols-2">
                <div class="border-r border-dashed border-zinc-100 dark:border-zinc-900" />
                <div class="border-dashed border-zinc-100 dark:border-zinc-900" />
              </div>
              <div class="col-span-2 z-10 rounded border border-zinc-200 bg-zinc-50 p-2.5 text-center dark:border-zinc-800 dark:bg-zinc-900/60">
                <p class="text-[9px] font-mono leading-normal text-zinc-600 dark:text-zinc-400">
                  Generate a Nuxt.js app to list, search and optimize assets
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 py-4">
      <div class="mb-8">
        <h2 class="text-sm font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Spesifikasi Kapabilitas</h2>
      </div>

      <div class="relative isolate grid grid-cols-1 border border-zinc-200 dark:border-zinc-800 sm:grid-cols-3">
        <div class="absolute -top-[10px] -left-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <div class="absolute -bottom-[10px] -right-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>

        <div 
          v-for="(feature, index) in detailedFeatures" 
          :key="index"
          class="relative p-8 bg-white dark:bg-black flex flex-col justify-between transition-colors duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
          :class="[
            index < 2 ? 'sm:border-r border-zinc-200 dark:border-zinc-800' : '',
            index > 0 ? 'border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800' : ''
          ]"
        >
          <div>
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">CAPABILITY // 0{{ index + 1 }}</span>
            <h3 class="mt-4 text-lg font-medium text-black dark:text-white">{{ feature.title }}</h3>
            <p class="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl pt-16 pb-4 overflow-hidden relative">
      <div class="mb-4 px-6">
        <h2 class="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Kompatibilitas Ekosistem</h2>
      </div>
      
      <div class="relative w-full flex overflow-x-hidden border-y border-zinc-100 dark:border-zinc-900 py-6 bg-zinc-50/30 dark:bg-zinc-950/10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-black after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-black">
        
        <div class="flex gap-16 shrink-0 items-center justify-around min-w-full logo-marquee-right">
          <div v-for="(tech, i) in frontendFrameworks" :key="'f1-'+i" class="flex items-center justify-center rounded-full p-2 transition-transform duration-300 hover:scale-110">
            <UIcon :name="tech.icon" class="h-10 w-10" :style="{ color: tech.color }" />
          </div>
        </div>

        <div class="flex gap-16 shrink-0 items-center justify-around min-w-full logo-marquee-right" aria-hidden="true">
          <div v-for="(tech, i) in frontendFrameworks" :key="'f2-'+i" class="flex items-center justify-center rounded-full p-2 transition-transform duration-300 hover:scale-110">
            <UIcon :name="tech.icon" class="h-10 w-10" :style="{ color: tech.color }" />
          </div>
        </div>

      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 py-12">
      <div class="mb-12 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <h2 class="text-xl font-medium tracking-tight text-black dark:text-white">Alur Kerja Pengembangan</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Proses transparan dan terukur dari konsep hingga go-live dalam waktu 2-3 minggu.</p>
      </div>

      <div class="relative isolate grid grid-cols-1 border border-zinc-200 dark:border-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
        <div class="absolute -top-[10px] -left-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <div class="absolute -bottom-[10px] -right-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>

        <div 
          v-for="(step, idx) in workflows" 
          :key="idx"
          class="relative p-6 bg-white dark:bg-black transition-colors duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
          :class="[
            idx < 3 ? 'lg:border-r border-zinc-200 dark:border-zinc-800' : '',
            idx % 2 === 0 && idx < 2 ? 'sm:border-r lg:border-r-0 border-zinc-200 dark:border-zinc-800' : '',
            idx > 0 ? 'border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800' : '',
            idx > 1 ? 'sm:border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800' : ''
          ]"
        >
          <span class="font-mono text-xs text-zinc-400 dark:text-zinc-500">PHASE 0{{ idx + 1 }}</span>
          <h3 class="mt-2 text-sm font-medium text-black dark:text-white">{{ step.title }}</h3>
          <p class="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pt-4 pb-24">
      <div class="relative isolate grid grid-cols-1 border border-zinc-200 dark:border-zinc-800 md:grid-cols-3">
        <div class="absolute -top-[10px] -left-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <div class="absolute -bottom-[10px] -right-[10px] z-20 flex h-[21px] w-[21px] items-center justify-center select-none pointer-events-none">
          <div class="absolute h-full w-[2px] bg-zinc-300 dark:bg-zinc-700"></div>
          <div class="absolute h-[2px] w-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>

        <div class="p-8 md:p-12 md:col-span-2 flex flex-col justify-center bg-white dark:bg-black">
          <h2 class="text-2xl font-medium tracking-tight sm:text-3xl text-black dark:text-white">
            Mulai bangun situs statis performa tinggi. <span class="text-zinc-400 dark:text-zinc-500">Estimasi investasi mulai dari.</span><span class="text-indigo-600 dark:text-indigo-400">Rp350rb-750rb</span>
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl">
            Sempurna untuk profil korporasi, landing page pemasaran, atau portofolio profesional yang membutuhkan optimasi <span class="text-emerald-500 font-medium">Core Web Vitals</span> sempurna tanpa celah downtime.
          </p>
          
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink to="/jasa#order-form" class="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Kirim Proposal / Brief
            </NuxtLink>
            <a href="https://wa.me/628123456789" target="_blank" class="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50">
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

        <div class="p-8 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-medium text-black dark:text-white">
              Butuh Pengelolaan Konten Mandiri? <span class="text-zinc-400 font-normal">Situs statis kami dapat dikoneksikan ke Headless CMS seperti Sanity, Strapi, atau Nuxt Content untuk manajemen mandiri yang mudah.</span>
            </h3>
          </div>
          <div class="pt-8">
            <NuxtLink to="/jasa" class="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md border border-zinc-200 px-4 text-xs font-medium text-black transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
              Lihat Opsi Layanan Lain
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Corporate & Portfolio Site - Detail Layanan',
  description: 'Pengembangan arsitektur website statis modern berkecepatan ekstrem.',
  ogTitle: 'Corporate & Portfolio Site - Detail Layanan',
  ogDescription: 'Pengembangan arsitektur website statis modern berkecepatan ekstrem.',
  ogImage: 'https://nlfts.dev/og/main.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://nlfts.dev/og/main.png'
})

const detailedFeatures = [
  { title: 'Static Site Generation (SSG)', desc: 'Halaman web dikompilasi menjadi file HTML/CSS murni di server sebelum dikirim ke pengguna. Menghilangkan proses query database runtime untuk kecepatan muat di bawah 1 detik.' },
  { title: 'Global Edge Delivery', desc: 'Seluruh aset statis didistribusikan langsung melalui jaringan CDN global terdekat dari lokasi audiens Anda, memangkas nilai latency hingga ke batas minimum.' },
  { title: 'Immune to Server Attacks', desc: 'Tanpa database aktif dan tanpa engine backend tradisional yang terekspos, membuat situs Anda sepenuhnya kebal terhadap serangan umum seperti SQL Injection atau DDoS.' }
]

const workflows = [
  { title: 'Discovery & Wireframe', desc: 'Analisis kebutuhan branding, penentuan struktur informasi halaman, dan penyusunan tata letak kerangka visual website.' },
  { title: 'UI Minimalist Design', desc: 'Perancangan antarmuka visual murni bertema modern yang bersih, fokus pada keterbacaan tipografi dan kenyamanan navigasi.' },
  { title: 'Edge-Stack Coding', desc: 'Tahap pemrograman inti menggunakan Nuxt/Vue dengan standardisasi clean code, optimasi aset gambar, dan pengetikan berbasis TypeScript.' },
  { title: 'CI/CD & Launching', desc: 'Pengujian performa Core Web Vitals otomatis, konfigurasi DNS domain kustom, sertifikasi SSL otomatis, dan peluncuran produk secara global.' }
]

// Murni hanya tumpukan teknologi ekosistem Frontend Web & Mobile (Warna Asli Sesuai Metadata)
const frontendFrameworks = [
  { name: 'HTML5', icon: 'i-simple-icons-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'i-simple-icons-css3', color: '#1572B6' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: '#38B2AC' },
  { name: 'SCSS', icon: 'i-simple-icons-sass', color: '#CC6699' },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  { name: 'React', icon: 'i-simple-icons-react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' },
  { name: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
  { name: 'Svelte', icon: 'i-simple-icons-svelte', color: '#FF3E00' },
  { name: 'Astro', icon: 'i-simple-icons-astro', color: '#0EA5E9' },
  { name: 'Qwik', icon: 'i-simple-icons-qwik', color: '#9C1AFF' },
  { name: 'Preact', icon: 'i-simple-icons-preact', color: '#673AB7' },
  { name: 'Lit', icon: 'i-simple-icons-lit', color: '#FF3B00' }
]
</script>

<style scoped>
/* Daftarkan animasi kustom langsung ke class agar memotong jalur kompilasi Tailwind JIT */
.logo-marquee-right {
  animation: keretaMajuKanan 30s linear infinite;
}

/* Menggerakkan track kontainer dari kiri (-100%) bergerak maju kembali menuju titik awal (0%) */
@keyframes keretaMajuKanan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>