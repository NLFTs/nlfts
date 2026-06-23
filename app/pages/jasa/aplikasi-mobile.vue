<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">

    <!-- HERO -->
    <section class="mx-auto max-w-4xl px-6 pt-24 pb-20 md:pt-36">
      <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
        Layanan / Aplikasi Mobile
      </span>
      <h1 class="mt-5 text-4xl font-normal tracking-tighter leading-tight text-black dark:text-white sm:text-5xl md:text-6xl max-w-3xl">
        Arsitektur mobile yang siap untuk skala enterprise.
      </h1>
      <p class="mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
        Kami membangun aplikasi iOS dan Android dengan pendekatan cross-platform terstruktur. Bukan sekadar tampilan — melainkan sistem yang dapat dipelihara, diuji, dan dikembangkan jangka panjang.
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#order-form"
          class="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Minta Proposal Teknis
        </a>
        <a
          href="#pipeline"
          class="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-7 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          Lihat Proses Pengerjaan
        </a>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- TECH CAPABILITY MATRIX -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">01 / Kapabilitas Teknis</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Stack dan metodologi pengerjaan</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900">
        <div class="bg-white dark:bg-black p-8">
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-4">PLATFORM</p>
          <ul class="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Flutter (iOS & Android)</li>
            <li>React Native</li>
            <li>Kotlin — Android Native</li>
            <li>Swift — iOS Native</li>
          </ul>
        </div>
        <div class="bg-white dark:bg-black p-8">
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-4">BACKEND & CLOUD</p>
          <ul class="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Firebase / Supabase</li>
            <li>AWS Amplify</li>
            <li>REST & GraphQL API</li>
            <li>Push Notification Service</li>
          </ul>
        </div>
        <div class="bg-white dark:bg-black p-8">
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-4">METODOLOGI</p>
          <ul class="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Agile Sprint (2 Minggu)</li>
            <li>Test Driven Development</li>
            <li>CI/CD Otomatis</li>
            <li>Clean Architecture / MVVM</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- DEVELOPMENT PIPELINE -->
    <section id="pipeline" class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">02 / Alur Pengerjaan</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Dari ide ke deployment, transparan di setiap tahap</h2>
      </div>

      <div class="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-900">
        <div
          v-for="(phase, index) in pipeline"
          :key="index"
          class="grid grid-cols-[3rem_1fr_auto] gap-6 items-start py-7"
        >
          <span class="font-mono text-sm text-zinc-300 dark:text-zinc-700 pt-0.5">0{{ index + 1 }}</span>
          <div>
            <p class="text-sm font-medium text-black dark:text-white">{{ phase.title }}</p>
            <p class="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{{ phase.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in phase.tags"
                :key="tag"
                class="inline-block font-mono text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 rounded"
              >{{ tag }}</span>
            </div>
          </div>
          <span class="font-mono text-xs text-zinc-400 dark:text-zinc-600 whitespace-nowrap pt-0.5">{{ phase.duration }}</span>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- SCOPE & DELIVERABLES -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">03 / Cakupan Pengerjaan</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Apa yang Anda terima</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-widest">Termasuk</p>
          <ul class="space-y-3">
            <li v-for="item in included" :key="item" class="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-widest">Tidak Termasuk</p>
          <ul class="space-y-3">
            <li v-for="item in excluded" :key="item" class="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-500">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- CASE STUDIES / PROVEN RESULTS -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">04 / Hasil Terukur</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Engineering metrics, bukan sekadar logo klien</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900">
        <div v-for="(result, index) in caseStudies" :key="index" class="bg-white dark:bg-black p-8">
          <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-1">{{ result.client }}</p>
          <p class="text-3xl font-normal tracking-tight text-black dark:text-white mt-3">{{ result.metric }}</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{{ result.label }}</p>
          <p class="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ result.description }}</p>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- RISK & SECURITY -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">05 / Keamanan & SLA</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Standar keamanan untuk skala bisnis</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="(standard, index) in securityStandards" :key="index">
          <p class="text-sm font-medium text-black dark:text-white">{{ standard.title }}</p>
          <p class="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{{ standard.description }}</p>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- FAQ -->
    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-10">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">06 / FAQ Teknis</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">Pertanyaan yang sering muncul</h2>
      </div>

      <div class="divide-y divide-zinc-100 dark:divide-zinc-900">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="py-6 cursor-pointer group"
          @click="toggleFaq(index)"
        >
          <div class="flex items-center justify-between gap-6">
            <p class="text-sm font-medium text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{{ faq.question }}</p>
            <span class="font-mono text-xs text-zinc-400 dark:text-zinc-600 shrink-0">{{ openFaq === index ? '—' : '+' }}</span>
          </div>
          <p
            v-if="openFaq === index"
            class="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl"
          >
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-zinc-100 dark:border-zinc-900" />

    <!-- CTA / ORDER FORM -->
    <section id="order-form" class="mx-auto max-w-4xl px-6 py-20">
      <div class="max-w-xl">
        <span class="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">Mulai Proyek</span>
        <h2 class="mt-3 text-2xl font-normal tracking-tight text-black dark:text-white">
          Ceritakan kebutuhan Anda. <span class="text-zinc-400 dark:text-zinc-600">Kami siapkan estimasi dalam 24 jam.</span>
        </h2>
      </div>

      <form v-if="!submitted" @submit.prevent="submitForm" class="mt-10 space-y-6 max-w-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Nama</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Budi Santoso"
              class="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
            />
          </div>
          <div>
            <label class="block font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="budi@perusahaan.com"
              class="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
            />
          </div>
        </div>

        <div>
          <label class="block font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Tipe Aplikasi</label>
          <select
            v-model="form.appType"
            required
            class="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
          >
            <option value="" disabled>Pilih tipe aplikasi</option>
            <option value="cross">Cross-Platform (Flutter / React Native)</option>
            <option value="ios">iOS Native (Swift)</option>
            <option value="android">Android Native (Kotlin)</option>
            <option value="both">iOS + Android Native Terpisah</option>
          </select>
        </div>

        <div>
          <label class="block font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Estimasi Anggaran</label>
          <select
            v-model="form.budget"
            required
            class="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
          >
            <option value="" disabled>Pilih kisaran anggaran</option>
            <option value="under15">Di bawah Rp 15 juta</option>
            <option value="15-50">Rp 15 juta – 50 juta</option>
            <option value="50-150">Rp 50 juta – 150 juta</option>
            <option value="above150">Di atas Rp 150 juta</option>
          </select>
        </div>

        <div>
          <label class="block font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Brief Singkat</label>
          <textarea
            v-model="form.brief"
            rows="4"
            required
            placeholder="Deskripsikan kebutuhan aplikasi Anda: fitur utama, target pengguna, dan tantangan teknis yang diantisipasi..."
            class="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-3 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition resize-none"
          />
        </div>

        <button
          type="submit"
          :disabled="submitting"
          class="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          <span v-if="!submitting">Kirim Brief</span>
          <span v-else class="font-mono text-xs">Mengirim...</span>
        </button>
      </form>

      <div v-else class="mt-10 max-w-xl border border-zinc-100 dark:border-zinc-900 p-8">
        <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2">STATUS / DITERIMA</p>
        <p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          Brief Anda telah kami terima. Tim teknis akan meninjau dan menghubungi Anda dengan estimasi awal dalam 24 jam kerja.
        </p>
        <button
          @click="resetForm"
          class="mt-6 inline-flex h-9 items-center justify-center rounded-full border border-zinc-200 px-5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          Kirim brief lain
        </button>
      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

useSeoMeta({
  title: 'Jasa Pembuatan Aplikasi Mobile — Profesional & Skalabel',
  description: 'Pengembangan aplikasi iOS dan Android dengan Flutter, React Native, Kotlin, dan Swift. Arsitektur clean, CI/CD terintegrasi, keamanan enterprise-grade.',
  ogTitle: 'Jasa Pembuatan Aplikasi Mobile',
  ogDescription: 'Dari MVP hingga aplikasi berskala enterprise — kami bangun dengan arsitektur yang bisa tumbuh bersama bisnis Anda.',
  ogImage: '/nlfts.webp'
})

const pipeline = [
  {
    title: 'Discovery & System Design',
    description: 'Analisis kebutuhan, pemetaan user journey, pemilihan stack teknologi, dan perancangan arsitektur sistem. Output: dokumen spesifikasi teknis dan wireframe alur utama.',
    tags: ['Requirement Analysis', 'System Architecture', 'Tech Stack Decision'],
    duration: '1 — 2 Minggu'
  },
  {
    title: 'MVP Development Sprint',
    description: 'Pengerjaan fitur inti aplikasi dalam sprint Agile. Setiap sprint menghasilkan build yang dapat diuji secara nyata di perangkat. Status progres dapat dipantau melalui board proyek.',
    tags: ['Sprint Agile', 'Daily Build', 'Feature-First'],
    duration: '3 — 6 Minggu'
  },
  {
    title: 'QA, Testing & Optimasi',
    description: 'Pengujian menyeluruh mencakup unit test, integration test, dan device compatibility test di berbagai ukuran layar dan versi OS. Optimasi performa render dan ukuran bundle.',
    tags: ['Automated Testing', 'Device Matrix', 'Performance Audit'],
    duration: '1 — 2 Minggu'
  },
  {
    title: 'Release & Deployment',
    description: 'Proses penayangan ke Apple App Store dan Google Play Store, termasuk persiapan screenshot, metadata, dan compliance review. Monitoring crash log aktif pasca rilis.',
    tags: ['App Store', 'Play Store', 'Crash Monitoring'],
    duration: '3 — 5 Hari'
  },
  {
    title: 'Maintenance & Update',
    description: 'Pemeliharaan berkelanjutan termasuk penyesuaian terhadap update iOS/Android terbaru, perbaikan bug, dan penambahan fitur inkremental sesuai roadmap yang disepakati.',
    tags: ['OS Compatibility', 'Bug Fixes', 'SLA Terjamin'],
    duration: 'Berkelanjutan'
  }
]

const included = [
  'Source code lengkap — sepenuhnya milik klien',
  'Aplikasi iOS dan Android (untuk paket cross-platform)',
  'Integrasi REST API atau GraphQL sesuai kebutuhan',
  'Autentikasi pengguna (OAuth2, email, atau social login)',
  'Push notification system',
  'Panel admin berbasis web (opsional)',
  'Dokumentasi teknis dan serah terima kode',
  'Deployment ke App Store dan Google Play',
  'Monitoring crash log selama 30 hari pasca rilis'
]

const excluded = [
  'Desain UI/UX dari nol (dapat dijadikan paket terpisah)',
  'Biaya developer account App Store / Google Play',
  'Infrastruktur server pihak ketiga (AWS, GCP, dll.)',
  'Pembuatan konten atau aset gambar/ilustrasi',
  'Maintenance jangka panjang di luar SLA yang disepakati'
]

const caseStudies = [
  {
    client: 'PROYEK A / MARKETPLACE',
    metric: '-62%',
    label: 'Pengurangan crash rate',
    description: 'Migrasi arsitektur dari MVC ke Clean Architecture + Bloc, menghasilkan stabilitas signifikan di seluruh varian perangkat Android.'
  },
  {
    client: 'PROYEK B / FINTECH',
    metric: '1.4s',
    label: 'Cold start time (dari 4.1s)',
    description: 'Optimasi lazy loading modul dan kompresi aset menghasilkan percepatan startup hingga 65% pada perangkat mid-range.'
  },
  {
    client: 'PROYEK C / KESEHATAN',
    metric: '4.8',
    label: 'Rating App Store',
    description: 'Implementasi offline-first architecture memungkinkan aplikasi tetap berfungsi di kondisi jaringan rendah — kritis untuk pengguna di daerah terpencil.'
  }
]

const securityStandards = [
  {
    title: 'Kepatuhan UU PDP & GDPR',
    description: 'Setiap data pengguna ditangani sesuai regulasi perlindungan data Indonesia (UU PDP) dan standar internasional GDPR. Termasuk consent management dan mekanisme penghapusan data.'
  },
  {
    title: 'Enkripsi & Autentikasi',
    description: 'Komunikasi data menggunakan HTTPS/TLS. Token autentikasi menggunakan standar JWT dengan refresh token rotation. Data sensitif disimpan dengan enkripsi AES-256 at rest.'
  },
  {
    title: 'Proteksi API & Rate Limiting',
    description: 'Setiap endpoint API dilindungi dengan OAuth2, validasi input ketat, dan mekanisme rate limiting untuk mencegah penyalahgunaan dan serangan brute force.'
  },
  {
    title: 'SLA Pasca Rilis',
    description: 'Jaminan respons perbaikan bug kritis maksimal 24 jam. Maintenance berkala untuk kompatibilitas OS baru. Laporan performa bulanan tersedia untuk paket enterprise.'
  }
]

const faqs = [
  {
    question: 'Berapa lama rata-rata durasi pengerjaan MVP?',
    answer: 'Untuk MVP dengan 4–6 fitur inti, estimasi pengerjaan berkisar antara 6–10 minggu. Durasi bergantung pada kompleksitas integrasi API, ketersediaan desain UI yang sudah final, dan jumlah platform target (satu atau dua platform).'
  },
  {
    question: 'Apakah source code diberikan sepenuhnya kepada klien?',
    answer: 'Ya, 100%. Seluruh repository kode merupakan hak milik klien sejak pembayaran selesai. Kami tidak menahan akses. Anda dapat melanjutkan pengembangan secara mandiri atau dengan tim internal kapan pun.'
  },
  {
    question: 'Bagaimana menangani update iOS/Android terbaru setelah aplikasi rilis?',
    answer: 'Kami memantau setiap rilis mayor iOS dan Android. Penyesuaian kompabilitas termasuk dalam paket maintenance kami. Untuk perubahan besar yang memerlukan refaktor signifikan, akan dikomunikasikan dan diestimasikan terpisah sebelum dikerjakan.'
  },
  {
    question: 'Apakah React Native atau Flutter lebih cocok untuk proyek saya?',
    answer: 'Keduanya valid untuk sebagian besar proyek. Flutter unggul dalam konsistensi UI lintas platform dan performa rendering. React Native lebih cocok jika tim sudah familiar dengan ekosistem JavaScript atau terdapat kebutuhan integrasi modul native yang kompleks. Kami akan merekomendasikan pilihan terbaik setelah analisis kebutuhan teknis proyek Anda.'
  },
  {
    question: 'Bisakah saya memulai dengan MVP dan menambah fitur bertahap?',
    answer: 'Ini adalah pendekatan yang kami anjurkan. Mulai dari MVP yang fokus pada core user journey, uji di pasar, lalu iterasi berdasarkan data pengguna nyata. Kami merancang arsitektur awal agar mudah dikembangkan ke depannya tanpa perlu rewrite dari awal.'
  }
]

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  appType: '',
  budget: '',
  brief: ''
})

const submitForm = async () => {
  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  submitting.value = false
  submitted.value = true
}

const resetForm = () => {
  submitted.value = false
  form.name = ''
  form.email = ''
  form.appType = ''
  form.budget = ''
  form.brief = ''
}
</script>