Tentu, ini adalah halaman "About Us" yang dirancang untuk melengkapi halaman "Aplikasi Web" yang Anda berikan.

Halaman ini menggunakan **Vue 3 (Composition API)** dan **Tailwind CSS**. Desainnya sepenuhnya sinkron dengan tema Anda: **ultra-minimalis, tech-forward, high-contrast** (murni hitam dan putih), serta menggunakan grid yang ketat, tipografi besar, dan detail teknis seperti ikon mono dan garis pemisah tipis.

```vue
<template>
  <div class="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 font-sans">
    
    <header class="w-full px-8 pt-32 pb-20 border-b border-zinc-200 dark:border-zinc-900">
      <div class="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        <div class="lg:col-span-8">
          <div class="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-6 uppercase tracking-widest">
            <span>//</span> MANIFESTO KAMI
          </div>
          
          <h1 class="text-[44px] sm:text-[64px] lg:text-[80px] font-bold tracking-tight leading-[1.0] text-zinc-950 dark:text-white mb-10">
            Arsitek<br />Sistem<br />Modern.
          </h1>
        </div>

        <div class="lg:col-span-4 space-y-6 lg:pt-20">
          <p class="text-[16px] sm:text-[18px] leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-md font-normal">
            Kami bukan sekadar pengembang; kami adalah mitra strategis yang menerjemahkan ambisi bisnis menjadi infrastruktur digital yang tangguh, efisien, dan siap menghadapi masa depan.
          </p>
        </div>

      </div>
    </header>

    <section class="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-200 dark:border-zinc-900 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-900">
      
      <div class="p-12 space-y-4">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A]">
          <UIcon name="i-heroicons-bolt" class="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
        </div>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white pt-2">
          Performa Tanpa Kompromi
        </h2>
        <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Setiap baris kode dioptimalkan untuk kecepatan dan efisiensi. Kami membangun sistem yang tidak hanya berfungsi, tetapi juga merespons secara instan di bawah beban kerja tinggi.
        </p>
      </div>

      <div class="p-12 space-y-4 bg-zinc-50/50 dark:bg-[#020202]">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A]">
          <UIcon name="i-heroicons-shield-check" class="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
        </div>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white pt-2">
          Keamanan Tingkat Enterprise
        </h2>
        <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Integritas data adalah prioritas. Kami mengintegrasikan protokol keamanan mutakhir sejak awal fase arsitektur, memastikan isolasi pipeline dan perlindungan menyeluruh.
        </p>
      </div>

      <div class="p-12 space-y-4">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A]">
          <UIcon name="i-heroicons-arrows-pointing-out" class="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
        </div>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white pt-2">
          Skalabilitas Modular
        </h2>
        <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Sistem Anda akan tumbuh bersama bisnis Anda. Arsitektur modular kami memungkinkan penambahan fungsionalitas dan skalabilitas operasional tanpa mengganggu kestabilan sistem inti.
        </p>
      </div>

    </section>

    <section class="w-full px-8 py-24 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-[#020202]">
      <div class="mx-auto max-w-[1600px]">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div class="lg:col-span-5">
            <h2 class="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white leading-tight">
              Kolektif Spesialis Dedikasi
            </h2>
          </div>
          <div class="lg:col-span-7">
            <p class="text-[15px] sm:text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
              Kami terdiri dari para ahli yang mendalami bidangnya—mulai dari arsitek backend hingga desainer pengalaman pengguna—yang berkolaborasi dalam struktur yang agile dan terukur.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.id" class="border border-zinc-200 dark:border-zinc-900 rounded-xl p-8 bg-white dark:bg-black group transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
            <div class="flex justify-between items-start gap-4 mb-10">
              <div class="space-y-1">
                <p class="text-lg font-medium text-zinc-950 dark:text-white transition-colors duration-300 group-hover:text-[#0070F3]">{{ member.name }}</p>
                <p class="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">{{ member.role }}</p>
              </div>
              <div class="text-xs font-mono text-zinc-300 dark:text-zinc-700 select-none">
                /{{ member.id.toString().padStart(2, '0') }}
              </div>
            </div>
            
            <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {{ member.expertise }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="relative mx-auto max-w-[1600px] px-6 py-24">
      <div class="absolute -top-[12px] left-4 text-zinc-300 dark:text-zinc-800 font-light text-2xl select-none">+</div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-10 bg-gradient-to-b from-zinc-50 to-white dark:from-[#050505] dark:to-black">
        <div class="lg:col-span-12 space-y-6 text-center flex flex-col items-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white leading-tight max-w-4xl">
            Sinergikan Visi Anda dengan <br /><span class="font-normal text-zinc-500">Keahlian Teknikal Kami.</span>
          </h2>
          <p class="text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal pt-2">
            Dari startup yang ambisius hingga korporasi Enterprise, kami siap berkolaborasi untuk merancang, membangun, dan mengiterasi sistem aplikasi web yang memberikan dampak nyata bagi operasional Anda.
          </p>
          
          <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
            <button class="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-950 dark:bg-white px-5 text-sm font-medium text-white dark:text-black transition-colors duration-200 hover:bg-zinc-800 dark:hover:bg-zinc-200">
              <svg class="h-3 w-3 fill-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,15 90,85 10,85" />
              </svg>
              <span>Jadwalkan Konsultasi</span>
            </button>

            <button class="inline-flex h-11 items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0A0A0A] px-5 text-sm font-medium text-zinc-900 dark:text-white transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Portofolio Sistem
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const team = ref([
  { id: 1, name: 'Andi Wijaya', role: 'Chief Architect', expertise: 'Spesialis dalam merancang arsitektur microservices dan sistem backend skala Enterprise yang terukur dan efisien.' },
  { id: 2, name: 'Budi Santoso', role: 'Core Architect', expertise: 'Ahli dalam pengembangan sistem internal dinamis, dasbor manajemen data, dan integrasi API yang aman.' },
  { id: 3, name: 'Citra Dewi', role: 'Experience Lead', expertise: 'Fokus pada penciptaan antarmuka pengguna yang intuitif, minimalis, dan responsif untuk portal SaaS kompleks.' },
  { id: 4, name: 'Dedi Saputra', role: 'Ops Master', expertise: 'Mengelola isolasi pipeline data, otomasi deployment, dan memastikan kepatuhan terhadap Service Level Agreement (SLA).' },
  { id: 5, name: 'Eka Putri', role: 'Security Lead', expertise: 'Bertanggung jawab penuh atas autentikasi aman, enkripsi data, dan audit keamanan sistem mutakhir secara real-time.' },
  { id: 6, name: 'Faisal Karim', role: 'Strategy Director', expertise: 'Menyelaraskan tujuan operasional spesifik bisnis Anda dengan peta jalan infrastruktur teknologi yang paling efektif.' }
]);
</script>

<style scoped>
/* Không cần CSS kustom. Semua ditangani oleh Tailwind dan tema global Anda. */
</style>

```