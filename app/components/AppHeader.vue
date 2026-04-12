<script setup lang="ts">
import gsap from 'gsap'

// ── Navigation Data ─────────────────────────────────
const akademikLinks = [
  { icon: 'i-lucide-graduation-cap', label: 'Program Keahlian', desc: 'RPL, TSM, dan TKR unggulan.', to: '/akademik/jurusan' },
  { icon: 'i-lucide-book-open', label: 'Kurikulum Industri', desc: 'Standar industri & sertifikasi.', to: '/akademik/kurikulum' },
  { icon: 'i-lucide-monitor', label: 'Fasilitas', desc: 'Lab komputer & bengkel modern.', to: '/akademik/fasilitas' },
  { icon: 'i-lucide-award', label: 'Prestasi', desc: 'Pencapaian siswa & sekolah.', to: '/akademik/prestasi' }
]

const kesiswaanLinks = [
  { icon: 'i-lucide-users', label: 'OSIS & MPK', desc: 'Organisasi kepemimpinan siswa.', to: 'https://osis.smkassalaambandung.sch.id' },
  { icon: 'i-lucide-trophy', label: 'Ekstrakurikuler', desc: 'Pengembangan minat & bakat.', to: '/kesiswaan/ekskul' },
  { icon: 'i-lucide-briefcase', label: 'Bursa Kerja', desc: 'Penempatan kerja industri.', to: '/kesiswaan/bkk' },
  { icon: 'i-lucide-heart', label: 'Bimbingan Konseling', desc: 'Pendampingan siswa.', to: '/kesiswaan/bk' }
]

const upcomingEvents = [
  { day: '7', month: 'APR', title: 'Rapat Pleno Kelulusan', location: 'Jl. Situtarate No. 38, Bandung' },
  { day: '14', month: 'APR', title: 'UKK Jurusan RPL & TKJ', location: 'Lab Komputer SMK Assalaam' },
  { day: '16', month: 'APR', title: 'Halal bi Halal Syawal', location: 'Online' },
  { day: '22', month: 'APR', title: 'Industrial Visit Toyota', location: 'PT. Toyota Motor Mfg, Karawang' },
  { day: '23', month: 'APR', title: 'Seminar Teknologi AI', location: 'Aula SMK Assalaam, Bandung' }
]

const featuredEvents = [
  { title: 'Assalaam\nDigital Expo', dateMonth: 'MAY', dateRange: '26-27', year: '2026', city: 'BANDUNG', country: 'ID', img: 'https://picsum.photos/seed/city1/400/560' },
  { title: 'WORKSHOP\nINDUSTRI', dateMonth: 'JUN', dateRange: '18-19', year: '2026', city: 'JAKARTA', country: 'ID', img: 'https://picsum.photos/seed/city2/400/560' },
  { title: 'GRADUATION\nDAY', dateMonth: 'JUL', dateRange: '28-29', year: '2026', city: 'BANDUNG', country: 'ID', img: 'https://picsum.photos/seed/city3/400/560' }
]

// ── State ───────────────────────────────────────────
const activeMenu = ref<string | null>(null)
const mobileOpen = ref(false)
const expandedMobile = ref<string | null>(null)

// ── Refs ────────────────────────────────────────────
const headerEl = ref<HTMLElement>()
const dropdownEl = ref<HTMLElement>()
const mobileOverlay = ref<HTMLElement>()
const mobilePanel = ref<HTMLElement>()

let closeTimeout: ReturnType<typeof setTimeout>
let ctx: gsap.Context | null = null

// ── Desktop Dropdown ────────────────────────────────
const openMenu = (menu: string) => {
  clearTimeout(closeTimeout)
  const wasOpen = activeMenu.value !== null
  activeMenu.value = menu

  nextTick(() => {
    if (!dropdownEl.value) return
    if (!wasOpen) {
      gsap.fromTo(dropdownEl.value,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out' }
      )
    }
    // Animate content
    gsap.fromTo(dropdownEl.value.querySelectorAll('.dd-animate'),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: 'power2.out', delay: wasOpen ? 0 : 0.08 }
    )
  })
}

const scheduleClose = () => {
  closeTimeout = setTimeout(() => {
    if (dropdownEl.value) {
      gsap.to(dropdownEl.value, {
        opacity: 0, y: -6, duration: 0.2, ease: 'power2.in',
        onComplete: () => { activeMenu.value = null }
      })
    }
  }, 120)
}

const cancelClose = () => clearTimeout(closeTimeout)

// ── Mobile Menu ─────────────────────────────────────
const openMobile = () => {
  mobileOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    if (mobileOverlay.value) {
      gsap.fromTo(mobileOverlay.value, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    }
    if (mobilePanel.value) {
      gsap.fromTo(mobilePanel.value, { x: '100%' }, { x: '0%', duration: 0.4, ease: 'power3.out' })
      gsap.fromTo(mobilePanel.value.querySelectorAll('.mob-item'),
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.04, duration: 0.3, ease: 'power2.out', delay: 0.15 }
      )
    }
  })
}

const closeMobile = () => {
  if (mobilePanel.value) {
    gsap.to(mobilePanel.value, { x: '100%', duration: 0.3, ease: 'power3.in' })
  }
  if (mobileOverlay.value) {
    gsap.to(mobileOverlay.value, {
      opacity: 0, duration: 0.25, delay: 0.05,
      onComplete: () => {
        mobileOpen.value = false
        document.body.style.overflow = ''
      }
    })
  }
}

const toggleMobileSection = (key: string) => {
  expandedMobile.value = expandedMobile.value === key ? null : key
}

// ── Lifecycle ───────────────────────────────────────
onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.nav-enter', {
      opacity: 0, y: -8, stagger: 0.04, duration: 0.5, ease: 'power2.out', delay: 0.1
    })
  }, headerEl.value!)
})

const isSearchOpen = useState('search-open')
const toggleSearch = () => { isSearchOpen.value = true }

onUnmounted(() => {
  ctx?.revert()
  clearTimeout(closeTimeout)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- ════════════════════════════════════════════════ -->
  <!-- HEADER                                          -->
  <!-- ════════════════════════════════════════════════ -->
  <header
    ref="headerEl"
    class="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-[#09090b] backdrop-blur-none"
  >
    <div class="max-w-7xl mx-auto border-x border-white/20 bg-[#ef4444] text-white py-1.5 px-5 sm:px-6 flex items-center justify-between text-[10px] font-bold tracking-tight">
       <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-alert-triangle" class="w-3 h-3" />
          <span>Situs ini bukan resmi SMK Assalaam, redisain by <NuxtLink to="http://davingm.com" target="_blank" class="underline decoration-white/30 underline-offset-2 hover:decoration-white transition-all">@davingm</NuxtLink></span>
       </div>
       <NuxtLink to="https://smkassalaambandung.sch.id/" target="_blank" class="flex items-center gap-1 uppercase tracking-widest text-[9px] hover:opacity-80 transition-opacity">
          Situs Resmi <UIcon name="i-lucide-external-link" class="w-3 h-3" />
       </NuxtLink>
    </div>

    <div class="max-w-7xl mx-auto border-x border-zinc-200/80 dark:border-zinc-800">
      <div class="flex items-center justify-between h-14 px-5 sm:px-6">
        <!-- Logo -->
        <NuxtLink to="/" class="nav-enter shrink-0">
          <AppLogo class="h-7 w-auto" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav
          class="hidden lg:flex items-center gap-1"
          @mouseleave="scheduleClose"
        >
          <button
            v-for="menu in ['Akademik', 'Kesiswaan', 'Berita & Event']"
            :key="menu"
            class="nav-enter relative text-[13px] font-medium px-3.5 h-14 flex items-center gap-1 transition-colors duration-200"
            :class="activeMenu === menu.toLowerCase().replace(/ & /g, '-') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
            @mouseenter="openMenu(menu.toLowerCase().replace(/ & /g, '-'))"
          >
            {{ menu }}
            <UIcon name="i-lucide-chevron-down" class="w-3 h-3 opacity-50" />
          </button>

          <NuxtLink
            to="https://ppdb.smkassalaambandung.sch.id/"
            target="_blank"
            class="nav-enter text-[13px] font-medium px-3.5 h-14 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            @mouseenter="scheduleClose"
          >
            PPDB
          </NuxtLink>
        </nav>

        <!-- Right -->
        <div class="flex items-center gap-2 nav-enter">
          <button
            class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/40 hover:bg-muted/50 transition-all group"
            @click="toggleSearch"
          >
            <UIcon name="i-lucide-search" class="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span class="text-[12px] font-medium text-muted-foreground group-hover:text-foreground">Cari...</span>
            <UKbd value="ctrl" size="sm" class="ml-1 opacity-50 shadow-none border-none bg-transparent" />
            <UKbd value="k" size="sm" class="opacity-50 shadow-none border-none bg-transparent -ml-1" />
          </button>
          <UColorModeButton size="sm" />
          <button
            class="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            @click="openMobile"
          >
            <UIcon name="i-lucide-menu" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════════ -->
    <!-- DESKTOP DROPDOWN PANEL                        -->
    <!-- ══════════════════════════════════════════════ -->
    <div
      v-if="activeMenu"
      ref="dropdownEl"
      class="absolute left-0 right-0 top-full bg-white dark:bg-[#09090b] border-b border-zinc-200 dark:border-zinc-800/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
      @mouseenter="cancelClose"
      @mouseleave="scheduleClose"
    >
      <div class="max-w-7xl mx-auto border-x border-zinc-200/80 dark:border-zinc-800">

        <!-- ▸ Akademik Panel -->
        <div v-if="activeMenu === 'akademik'" class="p-6 sm:p-8">
          <div class="grid grid-cols-4 gap-3">
            <NuxtLink
              v-for="item in akademikLinks"
              :key="item.label"
              :to="item.to"
              class="dd-animate group flex items-start gap-3 p-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/40 transition-all duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <UIcon :name="item.icon" class="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <div class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{{ item.label }}</div>
                <div class="text-xs text-muted-foreground mt-0.5">{{ item.desc }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- ▸ Kesiswaan Panel -->
        <div v-else-if="activeMenu === 'kesiswaan'" class="p-6 sm:p-8">
          <div class="grid grid-cols-4 gap-3">
            <NuxtLink
              v-for="item in kesiswaanLinks"
              :key="item.label"
              :to="item.to"
              class="dd-animate group flex items-start gap-3 p-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/40 transition-all duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <UIcon :name="item.icon" class="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <div class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{{ item.label }}</div>
                <div class="text-xs text-muted-foreground mt-0.5">{{ item.desc }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- ▸ Berita & Event Panel (Megamenu) -->
        <div v-else-if="activeMenu === 'berita-event'" class="flex">
          <!-- Left: Event List -->
          <div class="w-[300px] shrink-0 p-6 sm:p-8 border-r border-border/30">
            <h3 class="dd-animate text-[13px] font-semibold text-primary mb-5">Upcoming events</h3>
            <div class="space-y-1">
              <div
                v-for="evt in upcomingEvents"
                :key="evt.title"
                class="dd-animate flex items-start gap-3 py-2.5 group cursor-pointer"
              >
                <div class="w-9 h-9 rounded-lg bg-primary flex flex-col items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span class="text-[12px] font-extrabold text-white leading-none">{{ evt.day }}</span>
                  <span class="text-[7px] font-bold text-white/80 uppercase leading-none mt-0.5">{{ evt.month }}</span>
                </div>
                <div class="min-w-0 pt-0.5">
                  <h4 class="text-[13px] font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">{{ evt.title }}</h4>
                  <p class="text-[11px] text-muted-foreground mt-0.5 truncate">{{ evt.location }}</p>
                </div>
              </div>
            </div>
            <NuxtLink to="/blog" class="dd-animate inline-flex items-center gap-1 text-[13px] font-semibold text-primary mt-5 hover:gap-2 transition-all">
              View all <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>

          <!-- Right: Featured Cards -->
          <div class="flex-1 p-4 sm:p-5 flex gap-3">
            <div
              v-for="card in featuredEvents"
              :key="card.title"
              class="dd-animate flex-1 relative overflow-hidden rounded-2xl group cursor-pointer shadow-md"
              style="aspect-ratio: 3/4.2;"
            >
              <img :src="card.img" :alt="card.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/25 z-[1]" />
              <!-- Title -->
              <div class="absolute top-0 left-0 right-0 pt-5 px-4 z-10">
                <h4 class="text-[15px] font-bold text-white text-center leading-snug tracking-tight drop-shadow-lg whitespace-pre-line">{{ card.title }}</h4>
              </div>
              <!-- Bottom Info -->
              <div class="absolute bottom-0 left-0 right-0 px-4 pb-3.5 z-10">
                <div class="flex items-baseline text-white/90">
                  <span class="text-[9px] font-medium uppercase tracking-wider">{{ card.dateMonth }}</span>
                  <span class="text-[14px] font-bold leading-none ml-1.5">{{ card.dateRange }}</span>
                  <span class="text-[9px] font-medium ml-auto">{{ card.year }}</span>
                </div>
                <div class="flex justify-between mt-1">
                  <span class="text-[8px] font-bold text-white/50 uppercase tracking-[0.2em]">{{ card.city }}</span>
                  <span class="text-[8px] font-bold text-white/50 uppercase tracking-[0.2em]">{{ card.country }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>

  <!-- ════════════════════════════════════════════════ -->
  <!-- MOBILE MENU (Full-Screen Overlay)               -->
  <!-- ════════════════════════════════════════════════ -->
  <Teleport to="body">
    <div v-if="mobileOpen" class="fixed inset-0 z-[100] lg:hidden">
      <!-- Backdrop -->
      <div
        ref="mobileOverlay"
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="closeMobile"
      />

      <!-- Panel (slides from right) -->
      <div
        ref="mobilePanel"
        class="absolute top-0 right-0 bottom-0 w-[85vw] max-w-[380px] bg-white dark:bg-[#09090b] shadow-2xl flex flex-col"
      >
        <!-- Header -->
        <div class="mob-item flex items-center justify-between px-5 h-14 border-b border-border/40">
          <span class="text-sm font-bold text-foreground">Menu</span>
          <button class="p-2 rounded-lg hover:bg-muted/50 transition-colors" @click="closeMobile">
            <UIcon name="i-lucide-x" class="w-5 h-5" />
          </button>
        </div>

        <!-- Search -->
        <div class="mob-item px-5 pt-4 pb-2">
          <button
            class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/40 border border-border/20 text-left"
            @click="toggleSearch(); closeMobile();"
          >
            <UIcon name="i-lucide-search" class="w-5 h-5 text-primary" />
            <span class="text-sm font-medium text-muted-foreground">Cari informasi...</span>
          </button>
        </div>

        <!-- Nav Items -->
        <div class="flex-1 overflow-y-auto px-5 py-3">

          <!-- Akademik (Accordion) -->
          <div class="mob-item border-b border-border/30">
            <button
              class="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-foreground"
              @click="toggleMobileSection('akademik')"
            >
              Akademik
              <UIcon
                name="i-lucide-chevron-down"
                class="w-4 h-4 transition-transform duration-300"
                :class="expandedMobile === 'akademik' ? 'rotate-180' : ''"
              />
            </button>
            <div v-show="expandedMobile === 'akademik'" class="pb-3 space-y-1">
              <NuxtLink
                v-for="item in akademikLinks"
                :key="item.label"
                :to="item.to"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                @click="closeMobile"
              >
                <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon :name="item.icon" class="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div class="text-[13px] font-medium text-foreground">{{ item.label }}</div>
                  <div class="text-[11px] text-muted-foreground">{{ item.desc }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Kesiswaan (Accordion) -->
          <div class="mob-item border-b border-border/30">
            <button
              class="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-foreground"
              @click="toggleMobileSection('kesiswaan')"
            >
              Kesiswaan
              <UIcon
                name="i-lucide-chevron-down"
                class="w-4 h-4 transition-transform duration-300"
                :class="expandedMobile === 'kesiswaan' ? 'rotate-180' : ''"
              />
            </button>
            <div v-show="expandedMobile === 'kesiswaan'" class="pb-3 space-y-1">
              <NuxtLink
                v-for="item in kesiswaanLinks"
                :key="item.label"
                :to="item.to"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                @click="closeMobile"
              >
                <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon :name="item.icon" class="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div class="text-[13px] font-medium text-foreground">{{ item.label }}</div>
                  <div class="text-[11px] text-muted-foreground">{{ item.desc }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Simple Links -->
          <NuxtLink to="/blog" class="mob-item block py-3.5 text-sm font-semibold text-foreground border-b border-border/30" @click="closeMobile">
            Berita & Event
          </NuxtLink>
          <NuxtLink to="https://ppdb.smkassalaambandung.sch.id/" target="_blank" class="mob-item block py-3.5 text-sm font-semibold text-primary border-b border-border/30" @click="closeMobile">
            PPDB →
          </NuxtLink>
        </div>

        <!-- Footer -->
        <div class="mob-item px-5 py-4 border-t border-border/40 flex items-center justify-between">
          <span class="text-xs text-muted-foreground">© SMK Assalaam</span>
          <UColorModeButton size="sm" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Active indicator line under hovered nav item */
nav button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--ui-color-primary);
  border-radius: 1px;
  transform: translateX(-50%);
  transition: width 0.25s ease;
}

nav button:hover::after,
nav button[data-active="true"]::after {
  width: 60%;
}
</style>
