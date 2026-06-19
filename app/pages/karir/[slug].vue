<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
    <!-- Jika lowongan ditemukan -->
    <div v-if="job" class="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-32">
      <!-- Navigasi Kembali -->
      <NuxtLink 
        to="/karir" 
        class="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        &larr; KEMBALI KE KARIR
      </NuxtLink>

      <!-- Header Pekerjaan -->
      <header class="mt-8 border-b border-zinc-100 pb-8 dark:border-zinc-800">
        <div class="space-y-3">
          <div class="flex items-center gap-3 font-mono text-xs text-zinc-400 dark:text-zinc-500">
            <span>{{ job.department }}</span>
            <span>&middot;</span>
            <span>{{ job.type }}</span>
          </div>
          <h1 class="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
            {{ job.title }}
          </h1>
        </div>
      </header>

      <!-- Konten Detail -->
      <div class="mt-12 space-y-12">
        <!-- Deskripsi Ringkas -->
        <section class="prose prose-zinc dark:prose-invert">
          <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
            Kami mencari {{ job.title }} berbakat untuk bergabung dengan tim inti NLFTs. Anda akan bekerja secara remote dengan otonomi penuh untuk melahirkan sistem web berkinerja tinggi, bersih, dan andal.
          </p>
        </section>

        <!-- Dua Kolom: Persyaratan & Tanggung Jawab -->
        <div class="grid gap-10 sm:grid-cols-2 pt-4">
          <section>
            <h2 class="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Persyaratan Teknis
            </h2>
            <ul class="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li v-for="req in job.requirements" :key="req" class="flex items-start gap-2.5">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="leading-relaxed">{{ req }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Tanggung Jawab Utama
            </h2>
            <ul class="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li v-for="resp in job.responsibilities" :key="resp" class="flex items-start gap-2.5">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span class="leading-relaxed">{{ resp }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Bagian CTA / Ajakan Melamar -->
        <section class="border-t border-zinc-100 pt-12 dark:border-zinc-800 text-center sm:text-left">
          <h3 class="text-lg font-medium text-black dark:text-white">Tertarik dengan posisi ini?</h3>
          <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            Silakan kembali ke halaman utama karir untuk mengisi formulir aplikasi singkat.
          </p>
          <NuxtLink
            to="/karir"
            class="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white shadow transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Lamar Sekarang
          </NuxtLink>
        </section>
      </div>
    </div>

    <!-- Tampilan jika Rute / Slug tidak ditemukan -->
    <div v-else class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 class="text-xl font-medium text-black dark:text-white">Lowongan Tidak Ditemukan</h1>
      <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Posisi yang Anda cari mungkin sudah ditutup atau tautan salah.</p>
      <NuxtLink to="/karir" class="mt-4 text-xs font-mono text-zinc-400 underline underline-offset-4 hover:text-black dark:hover:text-white">
        KEMBALI KE DAFTAR LOWONGAN
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

// Data Master Lowongan Kerja (Gaji ditiadakan total)
const jobsData = [
  {
    slug: 'fullstack-engineer',
    title: 'Fullstack Engineer',
    department: 'Engineering',
    type: 'Remote',
    requirements: [
      'Berpengalaman dengan Nuxt atau framework fullstack serupa.',
      'Menguasai TypeScript dan arsitektur API.',
      'Memahami optimasi performa dan bundling.',
      'Mampu bekerja secara mandiri dengan dokumentasi jelas.'
    ],
    responsibilities: [
      'Membangun fitur frontend dan backend fullstack.',
      'Menulis kode yang mudah diuji dan dipelihara.',
      'Mengoptimasi performa aplikasi web.',
      'Berkolaborasi secara asinkron dengan tim remote.'
    ]
  },
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Remote',
    requirements: [
      'Pengalaman dengan Spring Boot, NestJS, atau Laravel.',
      'Memahami desain database dan query optimal.',
      'Terbiasa membuat API yang scalable dan aman.',
      'Memiliki pemahaman CI/CD dan deployment otomatis.'
    ],
    responsibilities: [
      'Merancang dan mengimplementasi API endpoint.',
      'Meningkatkan performa server dan query database.',
      'Menjaga kualitas keamanan aplikasi backend.',
      'Mendokumentasikan arsitektur dan alur data.'
    ]
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    type: 'Remote',
    requirements: [
      'Ahli dalam Scss, Vue.js, JavaScript, dan framework modern.',
      'Berpengalaman membuat UI responsive dan aksesibel.',
      'Bisa mengoptimalkan bundle dan mempercepat loading.',
      'Memiliki rasa estetika minimalis dan detil visual kuat.'
    ],
    responsibilities: [
      'Mengembangkan antarmuka pengguna yang cepat dan elegan.',
      'Bekerja dengan desain system dan komponen reuseable.',
      'Menguji tampilan lintas perangkat dan browser.',
      'Menjaga performa dan stabilitas build frontend.'
    ]
  }
]

// Mencari data yang cocok berdasarkan slug di URL
const job = computed(() => {
  return jobsData.find((item) => item.slug === slug)
})

// Mengatur SEO Meta Tag secara dinamis
if (job.value) {
  useSeoMeta({
    title: `${job.value.title} - Karir NLFTs`,
    description: `Gabung sebagai ${job.value.title} remote di NLFTs. Fokus pada performa tinggi dan kode yang bersih.`,
    ogTitle: `${job.value.title} - Karir NLFTs`,
    ogDescription: `Gabung sebagai ${job.value.title} remote di NLFTs. Fokus pada performa tinggi dan kode yang bersih.`
  })
}
</script>