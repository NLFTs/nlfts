<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
    <section class="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center md:pt-32">
      <div class="space-y-4">
        <span class="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-tight text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          Layanan & Solusi
        </span>
        <h1 class="text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white">
          Rakit platform digital berkinerja tinggi.
        </h1>
        <p class="mx-auto max-w-2xl text-base text-zinc-500 sm:text-lg dark:text-zinc-400">
          Kami merancang sistem web ultra-cepat, responsif, dan dioptimalkan secara mendalam demi kenyamanan pengguna serta konversi bisnis yang maksimal.
        </p>
        <div class="pt-4">
          <a 
            href="#order-form"
            class="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-6 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Mulai Proyek Anda
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 py-12">
      <div class="mb-12 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <h2 class="text-2xl font-medium tracking-tight text-black dark:text-white">Pilihan Layanan</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Arsitektur modern yang disesuaikan dengan skala kebutuhan Anda.</p>
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

        <article 
          v-for="(service, idx) in services" 
          :key="service.dev" 
          class="relative bg-white p-8 dark:bg-black flex flex-col justify-between transition-colors duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
          :class="[
            idx < 2 ? 'sm:border-r border-zinc-200 dark:border-zinc-800' : '',
            idx > 0 ? 'border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800' : ''
          ]"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">0{{ service.dev }} / {{ service.category }}</span>
              
              <NuxtLink :to="service.link" class="text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">
                Lihat Selengkapnya &rarr;
              </NuxtLink>
            </div>
            
            <h2 class="mt-4 text-xl font-medium text-black dark:text-white">{{ service.title }}</h2>
            <p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ service.description }}
            </p>
            <ul class="mt-6 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                {{ feat }}
              </li>
            </ul>
          </div>
          
          <div class="pt-8 border-t border-zinc-100 dark:border-zinc-900 mt-8">
            <span class="text-xs text-zinc-400 dark:text-zinc-500 block">Estimasi Pengerjaan</span>
            <span class="text-sm font-medium text-zinc-900 dark:text-zinc-100">{{ service.timeline }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 py-16">
      <div class="mb-12 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <h2 class="text-2xl font-medium tracking-tight text-black dark:text-white">Standar Infrastruktur</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Setiap baris kode dioptimalkan demi performa tanpa kompromi.</p>
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
          v-for="(stack, index) in techStandards" 
          :key="index" 
          class="relative p-6 bg-white dark:bg-black transition-colors duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
          :class="[
            index < 3 ? 'lg:border-r border-zinc-200 dark:border-zinc-800' : '',
            index % 2 === 0 && index < 2 ? 'sm:border-r lg:border-r-0 border-zinc-200 dark:border-zinc-800' : '',
            index > 0 ? 'border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800' : '',
            index > 1 ? 'sm:border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800' : ''
          ]"
        >
          <span class="font-mono text-xs text-zinc-400 dark:text-zinc-500">STANDARD 0{{ index + 1 }}</span>
          <h3 class="mt-2 text-sm font-medium text-black dark:text-white">{{ stack.title }}</h3>
          <p class="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{{ stack.desc }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pt-12 pb-24">
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
            Siap membangun platform impian? <span class="text-zinc-400 dark:text-zinc-500">Mulai rancang dengan konsultasi gratis.</span>
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl">
            Diskusikan kebutuhan arsitektur sistem Anda dengan tim teknis kami. Dapatkan estimasi penawaran untuk pengerjaan skala <span class="text-blue-500 font-medium">Pro</span> maupun ekosistem <span class="text-purple-500 font-medium">Enterprise</span>.
          </p>
          
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#order-form" class="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Mulai Pembuatan
            </a>
            <a href="https://wa.me/628123456789" target="_blank" class="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50">
              Hubungi Spesialis
            </a>
          </div>
        </div>

        <div class="p-8 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-medium text-black dark:text-white">
              Eksplorasi Skala Enterprise <span class="text-zinc-400 font-normal">dengan integrasi sistem kustom, audit keamanan berkala, dan jaminan performa penuh SLA.</span>
            </h3>
          </div>
          
          <div class="pt-8">
            <a href="#" class="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md border border-zinc-200 px-4 text-xs font-medium text-black transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
              Pelajari Layanan Enterprise
            </a>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'Jasa Pembuatan Website Modern - NLFTs',
  description: 'Layanan pengembangan website berbasis Vue, Nuxt, dan Next.js yang fokus pada kecepatan ekstrem, optimasi SEO, dan antarmuka minimalis modern.',
  ogTitle: 'Jasa Pembuatan Website Modern - NLFTs',
  ogDescription: 'Layanan pengembangan website berkinerja tinggi dengan arsitektur modern dan pendekatan bebas hambatan.',
  ogImage: '/NLFTs-services.png'
})

// Ditambahkan properti data "link" ke setiap layanan
const services = [
  {
    id: 1,  
    category: 'Situs Statis',
    title: 'Corporate & Portfolio Site',
    description: 'Situs representasi bisnis dengan arsitektur SSG (Static Site Generation). Memiliki kecepatan muat sekejap mata, keandalan server tinggi, dan ramah SEO.',
    features: ['Nuxt / Next Arsitektur', 'Integrasi Headless CMS', 'Optimasi Gambar Otomatis', 'Skor Performa Core Web Vitals 95+'],
    timeline: '2 - 3 Minggu',
    link: '/jasa/situs-statis' // Target Halaman Baru
  },
  {
    id: 2,
    category: 'Aplikasi Web',
    title: 'Custom Web Application',
    description: 'Sistem aplikasi berbasis web yang dinamis untuk kebutuhan operasional spesifik, dasbor internal, sistem manajemen data, atau portal SaaS.',
    features: ['Arsitektur API Terstruktur', 'Sistem Autentikasi Amalan Terbaik', 'Real-time Data Syncing', 'Manajemen State Kompleks'],
    timeline: '4 - 8 Minggu',
    link: '/jasa/aplikasi-web'
  },
  {
    id: 3,
    category: 'Perniagaan',
    title: 'Headless E-Commerce Platform',
    description: 'Toko online modern dengan pemisahan frontend dan backend. Memungkinkan checkout super cepat, kebebasan kustomisasi desain UI, serta manajemen katalog yang lincah.',
    features: ['Integrasi Payment Gateway', 'Sistem Keranjang & Inventori', 'Keamanan Transaksi Tinggi', 'Dasbor Analitik Penjualan'],
    timeline: '5 - 9 Minggu',
    link: '/jasa/perniagaan'
  }
]

const techStandards = [
  { title: 'Edge-Native Stack', desc: 'Aplikasi dideploy ke server edge global untuk memangkas latency hingga ke titik terendah.' },
  { title: 'TypeScript Core', desc: 'Keseluruhan basis kode ditulis dengan TypeScript untuk meminimalkan bug di tahap produksi.' },
  { title: 'Tailwind Styling', desc: 'Antarmuka dibangun menggunakan sistem utilitas Tailwind CSS untuk efisiensi ukuran bundel berkas.' },
  { title: 'Automated CI/CD', desc: 'Pengujian kode otomatis dan proses deployment instan setiap kali ada pembaruan fitur.' }
]

const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  phoneCode: '+62',
  phone: '',
  serviceType: '',
  budget: '',
  brief: ''
})

const submitForm = async () => {
  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1200))
  submitting.value = false
  submitted.value = true
}

const resetForm = () => {
  submitted.value = false
  form.name = ''
  form.email = ''
  form.phoneCode = '+62'
  form.phone = ''
  form.serviceType = ''
  form.budget = ''
  form.brief = ''
}
</script>