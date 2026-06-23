<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
    <!-- Hero Section -->
    <section class="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32">
      <h1 class="text-4xl font-normal tracking-tighter text-zinc-900 dark:text-white sm:text-5xl">
        Jadikan Komunitas ini.<br />
        Lebih Baik. <span class="text-blue-500">Bersama.</span>
      </h1>
      <div class="flex gap-3 mt-8">
        <a
          href="#open-positions"
          class="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-5 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Buka Posisi
        </a>
        <a
          href="#benefits"
          class="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
        >
          Benefits
        </a>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="mx-auto max-w-5xl px-6 pb-20">
      <h2 class="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-10">Benefits</h2>
      <div class="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex flex-col gap-2.5">
          <div class="w-6 h-6 text-blue-500">
            <component :is="benefit.icon" />
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">{{ benefit.title }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
    </section>

    <!-- Open Positions Section -->
    <section id="open-positions" class="mx-auto max-w-5xl px-6 pb-28">
      <div class="border-t border-zinc-100 dark:border-zinc-800 pt-12">
        <h2 class="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-2">Open positions</h2>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-10">Semua posisi bersifat remote dan penuh waktu.</p>

        <div class="divide-y divide-zinc-100 dark:divide-zinc-800">
          <NuxtLink
            v-for="job in jobs"
            :key="job.slug"
            :to="`/karir/${job.slug}`"
            class="group flex items-center justify-between py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 -mx-4 px-4 rounded-lg"
          >
            <div class="space-y-0.5">
              <p class="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {{ job.title }}
              </p>
              <div class="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                <span>{{ job.department }}</span>
                <span>&middot;</span>
                <span>{{ job.type }}</span>
              </div>
            </div>
            <span class="text-zinc-300 dark:text-zinc-600 group-hover:text-blue-400 transition-colors text-lg">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Icons
const BookIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z' })
      ])
  }
})

const HeartIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
      ])
  }
})

const RemoteIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z' })
      ])
  }
})

const VacationIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M2.5 19h19v2h-19zm19.57-9.36l-1.43-1.43c-.2-.2-.49-.25-.74-.13L17 9.5l-2.12-2.12c-.39-.39-1.02-.39-1.41 0l-1.27 1.27L9.7 6.15c-.2-.2-.51-.22-.73-.04L2.3 12.28c-.24.2-.24.55-.03.78l.04.04c.19.2.5.22.72.04l6.4-5.55 1.81 1.81-5.52 5.52c-.19.19-.19.5 0 .69l.03.03c.19.19.5.19.69 0l7.39-7.39 1.69 1.69-4.56 4.56c-.19.19-.19.5 0 .69l.03.03c.19.19.5.19.69 0l5.95-5.95c.21-.21.2-.55-.05-.75z' })
      ])
  }
})

const RetirementIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' })
      ])
  }
})

const StockIcon = defineComponent({
  setup() {
    return () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-6 h-6' }, [
        h('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' })
      ])
  }
})

const benefits = [
  {
    title: 'Belajar dan Berkembang',
    description: 'Bekerja bersama talenta terbaik di ekosistem dan membangun alat yang disukai para developer.',
    icon: BookIcon
  },
  {
    title: 'Manfaat Kesehatan',
    description: 'Fasilitas kesehatan yang kuat dan bersifat pribadi, tersedia di mana pun Anda tinggal.',
    icon: HeartIcon
  },
  {
    title: 'Tempat Kerja Jarak Jauh',
    description: 'Tim yang sepenuhnya terdistribusi dan bekerja bersama untuk membangun generasi produk berikutnya.',
    icon: RemoteIcon
  },
  {
    title: 'Waktu Liburan',
    description: 'Anggota yang beristirahat dengan baik dapat memberikan hasil terbaik. Tersedia waktu liburan yang fleksibel.',
    icon: VacationIcon
  },
  {
    title: 'Kontribusi Dana Pensiun',
    description: 'Kontribusi dana pensiun tersedia dan disesuaikan dengan negara tempat Anda berada.',
    icon: RetirementIcon
  },
  {
    title: 'Kepemilikan Saham',
    description: 'Anggota berhak mendapatkan opsi saham sehingga dapat ikut merasakan keberhasilan bersama.',
    icon: StockIcon
  }
]

// Sinkron dengan jobsData di [slug].vue
const jobs = [
  {
    slug: 'fullstack-engineer',
    title: 'Fullstack Engineer',
    department: 'Engineering',
    type: 'Remote'
  },
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Remote'
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    type: 'Remote'
  }
]
</script>