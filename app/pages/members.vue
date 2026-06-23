<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <!-- Header dengan toggle dark/light -->
      <div class="flex justify-between items-center mb-10">
        <div class="text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 text-xs font-medium tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {{ contributors.length }} Kontributor
          </div>
        </div>
      </div>

      <!-- Judul halaman -->
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
          Memberes
        </h1>
        <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
          Kenali para kontributor dan semangat mereka
        </p>
      </div>

      <!-- Search bar -->
      <div class="max-w-md mx-auto mb-10">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari kontributor..."
            class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Grid Kontributor -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="contributor in filteredContributors"
          :key="contributor.name"
          class="group bg-white dark:bg-[#121212] rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/30 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 p-5 flex flex-col"
        >
          <!-- Avatar & Nama -->
          <div class="flex items-start gap-4">
            <img
              :src="contributor.avatar"
              :alt="contributor.name"
              class="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700 flex-shrink-0"
              loading="lazy"
            />
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-semibold text-gray-900 dark:text-white truncate">
                {{ contributor.name }}
              </h3>
              <!-- Moto (per orang) -->
              <p class="text-xs text-gray-500 dark:text-gray-400 italic line-clamp-2 mt-0.5">
                “{{ contributor.moto }}”
              </p>
            </div>
          </div>

          <!-- Tech Stack (per orang) -->
          <TechStack :items="contributor.techStack" />
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredContributors.length === 0" class="text-center py-16">
        <p class="text-gray-400 dark:text-gray-500 text-sm">Tidak ada kontributor yang cocok</p>
      </div>

      <!-- Footer -->
      <div class="mt-16 text-center text-xs text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-6">
        <span>© {{ new Date().getFullYear() }} — Memberes</span>
        <span class="mx-2">·</span>
        <span>{{ contributors.length }} kontributor</span>
        <span class="mx-2">·</span>
        <span class="inline-flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          {{ isDark ? 'Gelap' : 'Terang' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ============================================================
// 1. METADATA (useHead) dengan moto global (opsional)
// ============================================================
useSeoMeta({
  title: 'Memberes — Kontributor',
  description: 'Daftar kontributor proyek Memberes dengan moto dan tech stack masing-masing.',
  ogTitle: 'Memberes — Kontributor',
  ogDescription: 'Kenali para kontributor Memberes dan keahlian mereka.',
  ogImage: 'https://nlfts.dev/og/main.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Memberes — Kontributor',
  twitterDescription: 'Kenali para kontributor Memberes dan keahlian mereka.',
  twitterImage: 'https://nlfts.dev/og/main.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://memberes.com/kontributor' }
  ]
})

// ============================================================
// 2. DUMMY DATA KONTRIBUTOR (masing-masing punya moto & techStack)
// ============================================================

const contributors = [
  {
    name: 'davingm',
    avatar: 'https://avatars.githubusercontent.com/u/228851591?v=4',
    moto: 'Kode adalah puisi, dan saya menulis epik',
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind']
  },
  {
    name: 'Nairha',
    avatar: 'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
    moto: 'Desain yang indah dimulai dari pikiran yang jernih',
    techStack: ['framer', 'angular', 'typescript', 'once ui']
  },
   {
    name: 'sidikqst',
    avatar: 'https://avatars.githubusercontent.com/u/230048582?s=130&v=4',
    moto: 'Cloud-native dari awal',
    techStack: ['AWS', 'Terraform', 'nuxt', 'Kubernetes', 'vuejs']
  },
  {
    name: 'Cery',
    avatar: 'https://avatars.githubusercontent.com/u/190081649?s=130&v=4',
    moto: 'Bangun sesuatu yang berarti',
    techStack: ['Node.js', 'hexo', 'rust', 'git']
  },
  {
    name: 'yanfe1',
    avatar: 'https://avatars.githubusercontent.com/u/238488059?s=130&v=4',
    moto: 'Frontend dengan sentuhan artistik',
    techStack: ['React', 'Next.js', 'Chakra UI', 'Jest']
  },
  {
    name: 'Mugi',
    avatar: 'https://avatars.githubusercontent.com/u/289261759?s=130&v=4',
    moto: 'Data adalah cerita, saya pandai bercerita',
    techStack: ['html', 'sass', 'SQL', 'Tableau']
  },
  {
    name: 'titu',
    avatar: 'https://avatars.githubusercontent.com/u/222330932?s=130&v=4',
    moto: 'Kesederhanaan adalah kecanggihan tertinggi',
    techStack: ['Go', 'net', 'Kafka', 'Redis']
  },
  {
    name: 'bagas',
    avatar: 'https://avatars.githubusercontent.com/u/284604593?s=130&v=4',
    moto: 'Mobile first, karena dunia ada di genggaman',
    techStack: ['Flutter', 'Dart', 'Firebase', 'GraphQL']
  },
  {
    name: 'fandy',
    avatar: 'https://avatars.githubusercontent.com/u/216720543?s=130&v=4',
    moto: 'Keamanan bukan fitur, tapi fondasi',
    techStack: ['TypeScript', 'astrojs', 'pyqt', 'docker']
  },
  {
    name: 'Lintangnwy',
    avatar: 'https://avatars.githubusercontent.com/u/216552062?s=130&v=4',
    moto: 'Tulis kode yang bisa dibaca manusia',
    techStack: ['nuxt', 'TypeScript', 'PostgreSQL', 'java', 'spring boot']
  },
  {
    name: 'teguh',
    avatar: 'https://avatars.githubusercontent.com/u/228839856?s=130&v=4',
    moto: 'AI untuk semua orang',
    techStack: ['TensorFlow', 'php', 'laravel', 'AWS', 'tailwind']
  },
  {
    name: 'Ahmad',
    avatar: 'https://avatars.githubusercontent.com/u/225441519?s=130&v=4',
    moto: 'Dari ide ke produk dalam hitungan jam',
    techStack: ['PHP', 'Laravel', 'Livewire', 'MySQL']
  },
  {
    name: 'Rehan',
    avatar: 'https://avatars.githubusercontent.com/u/218329504?s=130&v=4',
    moto: 'Javascript ada di mana-mana',
    techStack: ['JavaScript', 'Node', 'next', 'laravel', 'react']
  },
  {
    name: 'Mifah',
    avatar: 'https://avatars.githubusercontent.com/u/232498018?s=130&v=4',
    moto: 'Rapi, cepat, dan efisien',
    techStack: ['java', 'spring boot', 'next.js', 'python', 'javascript', 'django']
  },
  {
    name: 'Vahlzzz',
    avatar: 'https://avatars.githubusercontent.com/u/202130049?s=130&v=4',
    moto: 'Desain sistem yang scalable',
    techStack: ['nuxt', 'threejs', 'typescript', 'laravel', 'vuejs']
  },
  {
    name: 'hanif',
    avatar: 'https://avatars.githubusercontent.com/u/232500114?s=130&v=4',
    moto: 'Kode bersih, hati tenang',
    techStack: ['laravel', 'php', 'tailwind', 'livewire']
  },
  {
    name: 'Bara',
    avatar: 'https://avatars.githubusercontent.com/u/228843429?s=130&v=4',
    moto: 'Desain yang inklusif untuk semua',
    techStack: ['nuxtjs', 'vuejs', 'typescript', 'javascript']
  },
  {
    name: 'Destkaa',
    avatar: 'https://avatars.githubusercontent.com/u/228332586?s=130&v=4',
    moto: 'Analisis data mengubah dunia',
    techStack: ['nuxt', 'java', 'tailwind', 'postgresql']
  },
  {
    name: 'Radietya',
    avatar: 'https://avatars.githubusercontent.com/u/226198461?s=130&v=4',
    moto: 'Backend yang tangguh, frontend yang indah',
    techStack: ['laravel', 'django', 'python', 'react', 'php', 'javascript']
  },
  {
    name: 'Fakhri',
    avatar: 'https://avatars.githubusercontent.com/u/228840381?s=130&v=4',
    moto: 'Kode adalah alat, bukan tujuan',
    techStack: ['Go', 'laravel', 'php', 'nuxt', 'vuejs']
  },
  {
    name: 'Ilaman',
    avatar: 'https://avatars.githubusercontent.com/u/228839961?s=130&v=4',
    moto: 'Pemrograman fungsional membawa kedamaian',
    techStack: ['Haskell', 'Scala', 'nuxt', 'Kafka']
  },
  {
    name: 'jauf',
    avatar: 'https://avatars.githubusercontent.com/u/167701174?s=130&v=4',
    moto: 'Kualitas adalah kebiasaan',
    techStack: ['html', 'laravel', 'php', 'tailwind']
  },
  {
    name: 'feri',
    avatar: 'https://avatars.githubusercontent.com/u/234127916?s=130&v=4',
    moto: 'Kreativitas tanpa batas',
    techStack: ['vuejs', 'laravel', 'php', 'tailwind']
  },
  {
    name: 'ashiro tanka',
    avatar: '/team/siro.webp',
    moto: 'Selalu belajar, selalu berkembang',
    techStack: []
  },
  {
    name: 'nafis',
    avatar: 'https://avatars.githubusercontent.com/u/182593937?s=130&v=4',
    moto: 'フロントエンド開発とUI/UXデザインに特に興味があります。 @NLFTs @Vercel',
    techStack: ['react', 'next', 'tailwind', 'typescript', 'javascript']
  },
]

// ============================================================
// 3. DARK / LIGHT MODE (hitam pekat untuk dark)
// ============================================================
const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme(isDark.value)
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const applyTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// ============================================================
// 4. PENCARIAN (berdasarkan nama, moto, atau tech stack)
// ============================================================
const searchQuery = ref('')

const filteredContributors = computed(() => {
  if (!searchQuery.value.trim()) return contributors
  const q = searchQuery.value.toLowerCase().trim()
  return contributors.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.moto.toLowerCase().includes(q) ||
    c.techStack.some(t => t.toLowerCase().includes(q))
  )
})
</script>

<!-- Ikon Sun & Moon -->
<script lang="ts">
const SunIcon = defineComponent({
  setup() {
    return () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
      })
    ])
  }
})

const MoonIcon = defineComponent({
  setup() {
    return () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
      })
    ])
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>