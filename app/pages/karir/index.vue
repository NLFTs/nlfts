<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
    <section class="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center md:pt-32">
      <div class="space-y-4">
        <span class="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-tight text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          Karir & Peluang
        </span>
        <h1 class="text-4xl font-normal tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white">
          Bangun masa depan web bersama NLFTs.
        </h1>
        <p class="mx-auto max-w-2xl text-base text-zinc-500 sm:text-lg dark:text-zinc-400">
          Kami mencari engineer yang terobsesi dengan kecepatan, presisi kode, dan desain minimalis. Di sini, kualitas dan performa sistem adalah segalanya.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 py-12">
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-3">
        <article class="bg-white p-8 dark:bg-black">
          <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">01 / Fleksibilitas</span>
          <h2 class="mt-4 text-lg font-medium text-black dark:text-white">100% Remote & Otonomi</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Kami tidak peduli dari mana Anda bekerja atau kapan jam kerja Anda, selama proyek selesai dengan kualitas kode luar biasa.
          </p>
        </article>

        <article class="bg-white p-8 dark:bg-black">
          <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">02 / Efisiensi</span>
          <h2 class="mt-4 text-lg font-medium text-black dark:text-white">Tanpa Rapat Berlebihan</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Komunikasi kami bersifat asinkronus dan efisien. Kami mengganti rapat berjam-jam dengan dokumentasi tertulis yang solid.
          </p>
        </article>

        <article class="bg-white p-8 dark:bg-black">
          <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">03 / Standardisasi</span>
          <h2 class="mt-4 text-lg font-medium text-black dark:text-white">Presisi Tanpa Kompromi</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Dari optimasi bundling JS hingga struktur query database, kami tidak pernah mengorbankan performa demi kecepatan rilis.
          </p>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-12 border-b border-zinc-100 pb-6 dark:border-zinc-800">
        <h2 class="text-2xl font-medium tracking-tight text-black dark:text-white">Lowongan Aktif</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Pilih peran Anda dan mari buat sistem digital terbaik.</p>
      </div>

      <div class="divide-y divide-zinc-100 border-t border-b border-zinc-100 dark:divide-zinc-800 dark:border-zinc-800">
        <article v-for="job in jobs" :key="job.dev" class="group py-6">
          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div class="space-y-1">
              <h3 class="text-lg font-medium text-black group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300">
                {{ job.title }}
              </h3>
              <p class="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {{ job.department }} &middot; {{ job.type }}
              </p>
            </div>

            <NuxtLink
              :to="`/karir/${job.slug}`"
              class="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Lihat Detail
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-6 py-16">
      <div class="mb-12">
        <h2 class="text-2xl font-medium tracking-tight text-black dark:text-white">Alur Seleksi</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Proses asinkronus yang menghargai waktu Anda.</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(step, index) in steps" :key="index" class="rounded-lg border border-zinc-100 p-5 dark:border-zinc-800">
          <span class="font-mono text-xs text-zinc-400 dark:text-zinc-500">STEP 0{{ index + 1 }}</span>
          <h3 class="mt-2 text-sm font-medium text-black dark:text-white">{{ step.title }}</h3>
          <p class="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-2xl px-6 py-16 border-t border-zinc-100 dark:border-zinc-800">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-medium tracking-tight text-black dark:text-white">Formulir Pendaftaran</h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Lengkapi berkas Anda. Tidak diperlukan pendaftaran akun.</p>
      </div>

      <div v-if="submitted" class="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
        <h3 class="text-sm font-medium text-black dark:text-white">Aplikasi Berhasil Terkirim</h3>
        <p class="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Terima kasih telah mendaftar. Tim kami akan melakukan tinjauan portofolio dan menghubungi Anda melalui email dalam waktu 2-3 hari kerja.
        </p>
        <button type="button" class="mt-4 text-xs font-medium text-black underline underline-offset-4 dark:text-white" @click="resetForm">
          Kirim Aplikasi Lain
        </button>
      </div>

      <form v-else @submit.prevent="submitForm" class="space-y-6">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Nama Lengkap *</label>
            <input 
              v-model="form.name" 
              type="text" 
              required 
              minlength="3"
              placeholder="Contoh: John Doe"
              class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100" 
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Alamat Email *</label>
            <input 
              v-model="form.email" 
              type="email" 
              required 
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              placeholder="name@domain.com"
              title="Masukkan alamat email yang valid dengan tanda '@' dan subdomain akhir (misal: .com, .dev, .co.dev)"
              class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100" 
            />
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">No. WhatsApp / Telegram *</label>
            <div class="flex rounded-md shadow-sm border border-zinc-200 dark:border-zinc-800 focus-within:border-zinc-500 dark:focus-within:border-zinc-400 transition bg-transparent">
              <select 
                v-model="form.phoneCode" 
                required
                class="rounded-l-md bg-zinc-50 px-3 text-xs font-medium border-r border-zinc-200 outline-none text-zinc-800 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 cursor-pointer"
              >
                <option value="+62">🇮🇩 +62</option>
                <option value="+86">🇨🇳 +86</option>
              </select>
              <input 
                v-model="form.phone" 
                type="text" 
                required
                pattern="^[0-9]{8,15}$"
                placeholder="8123456789"
                title="Masukkan angka saja tanpa menggunakan spasi atau tanda hubung (8 hingga 15 digit)"
                class="w-full rounded-r-md bg-transparent px-3 py-2 text-sm outline-none text-zinc-900 dark:text-zinc-100" 
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Posisi Yang Dilamar *</label>
            <select 
              v-model="form.position" 
              required 
              class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100 cursor-pointer"
            >
              <option value="" class="text-zinc-400 dark:bg-black">Pilih posisi</option>
              <option v-for="job in jobs" :key="job.dev" :value="job.title" class="dark:bg-black text-zinc-900 dark:text-zinc-100">
                {{ job.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Tautan Portofolio / GitHub Link *</label>
          <input 
            v-model="form.portfolio" 
            type="url" 
            required 
            placeholder="https://github.com/username atau https://yourportfolio.com"
            class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100" 
          />
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Tautan CV / Resume (Google Drive/Dropbox) *</label>
          <input 
            v-model="form.cv" 
            type="url" 
            required 
            placeholder="https://drive.google.com/..."
            class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100" 
          />
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Kenapa NLFTs? (Brief Pitch)</label>
          <textarea 
            v-model="form.pitch" 
            rows="4" 
            maxlength="300" 
            placeholder="Tuliskan motivasi singkat Anda di sini..." 
            class="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-400 text-zinc-900 dark:text-zinc-100"
          ></textarea>
          <div class="flex justify-between text-[10px] text-zinc-400">
            <span>Singkat dan padat.</span>
            <span>Maksimal 300 kata</span>
          </div>
        </div>

        <button 
          type="submit" 
          class="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white shadow-md transition-colors duration-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200" 
          :disabled="submitting"
        >
          {{ submitting ? 'Mengirim Data...' : 'Kirim Berkas Aplikasi' }}
        </button>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

// Pengaturan SEO Meta Tag Halaman Utama Karir
useSeoMeta({
  title: 'Karir & Peluang - NLFTs',
  description: 'Gabung dengan tim NLFTs sebagai engineer remote yang fokus pada performa, kualitas kode, dan desain minimalis.',
  ogTitle: 'Karir & Peluang - NLFTs',
  ogDescription: 'Gabung dengan tim NLFTs sebagai engineer remote yang fokus pada performa, kualitas kode, dan desain minimalis.',
  ogImage: '/NLFTs.png'
})

// Data Utama Lowongan Kerja (Termasuk Slug Penunjuk Rute Halaman Detail)
const jobs = [
  {
    id: 1,
    slug: 'fullstack-engineer',
    title: 'Fullstack Engineer',
    department: 'Engineering',
    type: 'Remote'
  },
  {
    id: 2,
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Remote'
  },
  {
    id: 3,
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    type: 'Remote'
  }
]

// Data Alur Seleksi Kerja
const steps = [
  { title: 'Kirim Aplikasi', desc: 'Lengkapi berkas dengan menyertakan portofolio kode terbaik Anda.' },
  { title: 'Review Portofolio', desc: 'Tim internal meninjau kualitas arsitektur dari repositori asli Anda.' },
  { title: 'Uji Praktis', desc: 'Tugas kecil berbayar (paid task) untuk mengukur kecocokan ritme kerja.' },
  { title: 'Penawaran Kontrak', desc: 'Integrasi onboard secara asinkronus dan penyiapan lingkungan kerja.' }
]

// Reactive State Management
const submitting = ref(false)
const submitted = ref(false)

// State Formulir (Mendukung Sinkronisasi Dropdown Kode Telepon)
const form = reactive({
  name: '',
  email: '',
  phoneCode: '+62', // Default bernilai Indonesia (+62), bisa diubah dinamis ke China (+86) via v-model
  phone: '',
  position: '',
  portfolio: '',
  cv: '',
  pitch: ''
})

// Fungsi Eksekusi Pengiriman Formulir (Mock Submit)
const submitForm = async () => {
  submitting.value = true
  
  // Log penggabungan kode negara dan nomor untuk kebutuhan integrasi backend/API
  // console.log('Data Terkirim:', { ...form, fullPhone: `${form.phoneCode}${form.phone}` })
  
  await new Promise((resolve) => setTimeout(resolve, 1000))
  submitting.value = false
  submitted.value = true
}

// Fungsi Reset Formulir Kembali ke State Awal
const resetForm = () => {
  submitted.value = false
  form.name = ''
  form.email = ''
  form.phoneCode = '+62'
  form.phone = ''
  form.position = ''
  form.portfolio = ''
  form.cv = ''
  form.pitch = ''
}
</script>