<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useSeoMeta({
  title: 'Program Keahlian',
  description: 'Tiga program keahlian unggulan SMK Assalaam Bandung — RPL, TSM, TKR. Kurikulum berbasis industri, fasilitas berstandar global.',
  ogTitle: 'Program Keahlian — SMK Assalaam Bandung',
  ogDescription: 'Temukan potensimu di program keahlian yang dirancang bersama industri.',
  ogImage: '/assalaam.svg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

// ─── Data ────────────────────────────────────────────

const manifestoSections = [
  { text: "Kami percaya bahwa pendidikan vokasional adalah", bold: false },
  { text: "fondasi peradaban industri.", bold: true },
  { text: "Di SMK Assalaam, setiap ruang kelas adalah laboratorium masa depan — tempat ide bertemu presisi, tempat teori menjadi", bold: false },
  { text: "karya nyata.", bold: true },
  { text: "Tiga program keahlian kami dirancang bukan sekadar untuk mengisi posisi di industri, tetapi untuk membentuk mereka yang akan", bold: false },
  { text: "memimpin industri itu sendiri.", bold: true }
]

interface Department {
  id: string
  num: string
  code: string
  title: string
  brief: string
  image: string
  skills: string[]
  paths: string[]
}

const depts: Department[] = [
  {
    id: 'rpl', num: '01', code: 'RPL',
    title: 'Rekayasa Perangkat Lunak',
    brief: 'Merancang, membangun, dan mengelola sistem perangkat lunak — dari arsitektur backend hingga antarmuka pengguna. Lulusan kami bekerja di perusahaan teknologi nasional dan internasional.',
    image: '/images/jurusan/rpl.png',
    skills: ['Full-Stack Development', 'Cloud Architecture', 'Mobile Engineering', 'Database Systems', 'UI/UX Design', 'Cyber Security'],
    paths: ['Software Engineer', 'Cloud Architect', 'Mobile Developer', 'Data Engineer']
  },
  {
    id: 'tsm', num: '02', code: 'TSM',
    title: 'Teknik Sepeda Motor',
    brief: 'Menguasai seluruh sistem mekanis dan elektronik sepeda motor modern. Kemitraan langsung dengan Honda dan Yamaha menjamin sertifikasi dan penempatan kerja.',
    image: '/images/jurusan/tsm.png',
    skills: ['Engine Overhaul', 'Fuel Injection System', 'Electrical Diagnostics', 'Chassis Engineering', 'Service Management', 'Quality Assurance'],
    paths: ['Teknisi Dealer Resmi', 'Workshop Owner', 'Service Advisor', 'Quality Inspector']
  },
  {
    id: 'tkr', num: '03', code: 'TKR',
    title: 'Teknik Kendaraan Ringan',
    brief: 'Membentuk mekanik otomotif berstandar global yang mampu menangani sistem kendaraan ringan modern — dari powertrain konvensional hingga teknologi hybrid.',
    image: '/images/jurusan/tkr.png',
    skills: ['Powertrain Systems', 'Transmission & Drivetrain', 'Brake Technology', 'HVAC & Electrical', 'Welding & Fabrication', 'Vehicle Inspection'],
    paths: ['Automotive Engineer', 'Dealer Technician', 'Parts Specialist', 'Workshop Manager']
  }
]

const timeline = [
  { year: 'X', label: 'Fondasi', desc: 'Penguasaan teori dasar, pengenalan alat, pembentukan karakter.' },
  { year: 'XI', label: 'Spesialisasi', desc: 'Praktik intensif, PKL industri, sertifikasi kompetensi nasional.' },
  { year: 'XII', label: 'Profesional', desc: 'Magang, proyek akhir, uji kompetensi keahlian, persiapan karier.' }
]

const metrics = [
  { value: '3.000+', label: 'Alumni' },
  { value: '95%', label: 'Kelulusan' },
  { value: '150+', label: 'Mitra Industri' },
  { value: '85%', label: 'Terserap Kerja' }
]

// ─── Refs & State ────────────────────────────────────

const pageRef = ref<HTMLElement>()
const activeIdx = ref(0)
let ctx: gsap.Context

// ─── SVG Path Utilities ──────────────────────────────

function getTotalLength(path: SVGPathElement): number {
  return path.getTotalLength()
}

function prepPath(el: SVGPathElement) {
  const len = getTotalLength(el)
  el.style.strokeDasharray = `${len}`
  el.style.strokeDashoffset = `${len}`
}

// ─── GSAP ────────────────────────────────────────────

onMounted(() => {
  if (!pageRef.value) return

  // Prepare SVG paths for draw animation
  pageRef.value.querySelectorAll('.svg-draw path, .svg-draw line, .svg-draw circle, .svg-draw polyline').forEach((el) => {
    const pathEl = el as SVGGeometryElement
    const len = pathEl.getTotalLength?.() ?? 0
    if (len > 0) {
      ;(el as HTMLElement).style.strokeDasharray = `${len}`
      ;(el as HTMLElement).style.strokeDashoffset = `${len}`
    }
  })

  ctx = gsap.context(() => {

    // ═══════ HERO ═══════
    // Image reveal: clip from center outward
    gsap.fromTo('.hero-img',
      { clipPath: 'inset(20% 20% 20% 20%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.out', delay: 0.2 }
    )
    // Hero text stagger
    gsap.from('.hero-text-line', { y: 24, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', delay: 0.6 })
    // Hero SVG frame draws
    gsap.to('.hero-frame path', { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut', delay: 0.4, stagger: 0.15 })
    // Parallax on scroll
    gsap.to('.hero-img', {
      y: 120, scale: 1.08, ease: 'none',
      scrollTrigger: { trigger: '.s-hero', start: 'top top', end: 'bottom top', scrub: true }
    })
    gsap.to('.hero-overlay-content', {
      y: -60, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.s-hero', start: 'top top', end: '40% top', scrub: true }
    })

    // ═══════ RESPONSIVE ═══════
    ScrollTrigger.matchMedia({

      // ──── DESKTOP ────
      '(min-width: 1024px)': () => {

        // MANIFESTO: GSAP Touch
        gsap.fromTo('.manifesto-tag',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.s-manifesto', start: 'top 80%' } }
        )
        gsap.fromTo('.manifesto-bg', 
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: '.s-manifesto', start: 'top 80%' } }
        )
        gsap.fromTo('.m-word', 
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            scrollTrigger: {
              trigger: '.s-manifesto',
              start: 'top 75%',
              end: 'center 30%',
              scrub: 1
            }
          }
        )

        // DEPARTMENT SHOWCASE: Pinned cross-fade with full panel opacity
        const panels = gsap.utils.toArray('.dept-panel') as HTMLElement[]
        const showcaseTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.s-showcase', pin: true, scrub: 1,
            start: 'top top', end: '+=400%', anticipatePin: 1,
            onUpdate: (self) => {
              activeIdx.value = Math.min(2, Math.floor(self.progress * 2.99))
            }
          }
        })

        // Set initial states: only first panel visible
        panels.forEach((panel, i) => {
          if (i > 0) gsap.set(panel, { opacity: 0 })
        })

        // Phase 0: Animate first panel content in
        const p0Text = panels[0]?.querySelectorAll('.dept-info > *') || []
        const p0Svg = panels[0]?.querySelector('.svg-draw')?.querySelectorAll('path, line, circle, polyline') || []
        showcaseTl.fromTo(p0Text, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.4 }, 0.2)
        showcaseTl.to(p0Svg, { strokeDashoffset: 0, stagger: 0.06, duration: 0.5 }, 0.3)

        // Cross-fade between panels
        for (let i = 0; i < panels.length - 1; i++) {
          const curr = panels[i] as HTMLElement
          const next = panels[i + 1] as HTMLElement
          const nextText = next.querySelectorAll('.dept-info > *')
          const nextSvgPaths = next.querySelector('.svg-draw')?.querySelectorAll('path, line, circle, polyline') || []
          const phase = (i + 1) * 1.3

          // Fade out current panel entirely
          showcaseTl.to(curr, { opacity: 0, duration: 0.5 }, phase - 0.2)
          // Fade in next panel entirely
          showcaseTl.to(next, { opacity: 1, duration: 0.5 }, phase)
          // Stagger text within next panel
          showcaseTl.fromTo(nextText, { y: 25, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.4 }, phase + 0.15)
          // Draw SVG in next panel
          showcaseTl.to(nextSvgPaths, { strokeDashoffset: 0, stagger: 0.05, duration: 0.5 }, phase + 0.1)
        }

        // EDITORIAL: Parallax images + text reveals
        gsap.utils.toArray('.editorial-block').forEach((block: any) => {
          const img = block.querySelector('.ed-img')
          const textEls = block.querySelectorAll('.ed-text > *')

          if (img) {
            gsap.fromTo(img, { y: 80 }, {
              y: -40, ease: 'none',
              scrollTrigger: { trigger: block, start: 'top bottom', end: 'bottom top', scrub: true }
            })
          }
          gsap.from(textEls, {
            y: 40, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 78%' }
          })
        })

        // TIMELINE: Line draw
        gsap.fromTo('.tl-progress',
          { scaleY: 0 },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.s-timeline-content', start: 'top 55%', end: 'bottom 55%', scrub: 1 } }
        )

        // TIMELINE: Node reveals
        gsap.utils.toArray('.tl-node').forEach((node: any) => {
          gsap.from(node, { x: -30, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: node, start: 'top 80%' } })
        })

        // METRICS: Stagger in
        gsap.from('.metric-item', {
          y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.s-metrics', start: 'top 75%' }
        })

        // CTA
        gsap.from('.cta-inner > *', {
          y: 20, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.s-cta', start: 'top 75%' }
        })
      },

      // ──── MOBILE ────
      '(max-width: 1023px)': () => {
        // Manifesto mobile
        gsap.fromTo('.manifesto-tag', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: '.s-manifesto', start: 'top 85%' } })
        gsap.fromTo('.m-word', 
          { opacity: 0.15, y: 10 },
          {
            opacity: 1, y: 0, stagger: 0.05,
            scrollTrigger: {
              trigger: '.s-manifesto',
              start: 'top 85%',
              end: 'bottom 70%',
              scrub: 0.5
            }
          }
        )

        // Department cards fade
        gsap.from('.mob-dept-card', { opacity: 0, y: 30, stagger: 0.15, duration: 0.7, scrollTrigger: { trigger: '.s-showcase', start: 'top 80%' } })

        // Editorial blocks
        gsap.utils.toArray('.editorial-block').forEach((block: any) => {
          gsap.from(block.querySelectorAll('.ed-text > *'), {
            y: 20, opacity: 0, stagger: 0.08, duration: 0.6,
            scrollTrigger: { trigger: block, start: 'top 85%' }
          })
        })

        // Timeline nodes
        gsap.from('.tl-node', { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: '.s-timeline', start: 'top 80%' } })

        // Metrics
        gsap.from('.metric-item', { opacity: 0, y: 20, stagger: 0.08, duration: 0.6, scrollTrigger: { trigger: '.s-metrics', start: 'top 85%' } })

        // CTA
        gsap.from('.cta-inner > *', { opacity: 0, y: 15, stagger: 0.08, duration: 0.6, scrollTrigger: { trigger: '.s-cta', start: 'top 85%' } })
      }
    })

  }, pageRef.value)
})

onUnmounted(() => { ctx?.revert() })
</script>

<template>
  <main ref="pageRef" class="jurusan-page">

    <!-- ════════════════════════════════════════════════════
         01 · HERO — Cinematic image reveal
         ════════════════════════════════════════════════════ -->
    <section class="s-hero relative h-[85vh] lg:h-screen overflow-hidden">
      <!-- Image -->
      <img
        src="/images/jurusan/hero.png"
        alt="SMK Assalaam Campus"
        class="hero-img absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <!-- Dark scrim -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <!-- SVG decorative frame lines (viewBox-based for proper scaling) -->
      <svg class="hero-frame svg-draw absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none" stroke="white" stroke-width="1" opacity="0.25">
        <!-- Top-left corner -->
        <path d="M 40,120 L 40,40 L 160,40" />
        <!-- Top-right corner -->
        <path d="M 840,40 L 960,40 L 960,120" />
        <!-- Bottom-left corner -->
        <path d="M 40,880 L 40,960 L 160,960" />
        <!-- Bottom-right corner -->
        <path d="M 960,880 L 960,960 L 840,960" />
        <!-- Center cross-hair -->
        <path d="M 490,480 L 510,480 M 500,470 L 500,490" stroke-width="0.5" opacity="0.5" />
      </svg>

      <!-- Corner frame marks (pure CSS positioned) -->
      <div class="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20" />
      <div class="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/20" />
      <div class="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/20" />
      <div class="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/20" />

      <!-- Overlay content -->
      <div class="hero-overlay-content absolute inset-0 flex flex-col justify-end p-8 lg:p-16 z-10">
        <div class="max-w-2xl">
          <p class="hero-text-line text-[10px] font-medium tracking-[0.3em] uppercase text-white/50 mb-4">SMK Assalaam Bandung</p>
          <h1 class="hero-text-line text-2xl lg:text-4xl font-light text-white leading-snug tracking-tight mb-3">
            Program Keahlian
          </h1>
          <p class="hero-text-line text-sm text-white/50 max-w-md leading-relaxed">
            Tiga disiplin. Satu misi. Membentuk profesional yang siap memimpin industri.
          </p>
        </div>
        <!-- Scroll line -->
        <div class="hero-text-line absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-3">
          <span class="text-[9px] tracking-[0.2em] uppercase text-white/30 writing-vertical">Scroll</span>
          <div class="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1/2 bg-white/60 animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         02 · MANIFESTO — Premium Typography
         ════════════════════════════════════════════════════ -->
    <section class="s-manifesto relative py-24 md:py-32 lg:py-40 border-b border-zinc-200/60 dark:border-white/[0.06] overflow-hidden">
      <!-- Ambient Glow Background -->
      <div class="manifesto-bg absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/50 via-zinc-50/0 to-transparent dark:from-zinc-800/50 dark:via-[#09090b]/0 dark:to-transparent pointer-events-none will-change-[transform,opacity]" />
      
      <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <!-- Tagline -->
        <div class="manifesto-tag block mb-8 md:mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.05] backdrop-blur-sm shadow-sm opacity-90">
            <span class="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white" />
            <span class="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-300">Visi Vokasi</span>
          </div>
        </div>
        
        <!-- Text content -->
        <div class="manifesto-text w-full">
          <h2 class="text-[1.25rem] md:text-3xl lg:text-[2.25rem] font-light leading-[1.6] md:leading-[1.5] lg:leading-[1.4] text-center text-balance tracking-tight">
            <template v-for="(section, s_idx) in manifestoSections" :key="`s-${s_idx}`">
              <template v-for="(word, w_idx) in section.text.split(' ').filter(w => w !== '')" :key="`w-${s_idx}-${w_idx}`">
                <span 
                  class="m-word inline-block transition-none opacity-20 will-change-[opacity,transform] text-zinc-900 dark:text-white" 
                  :class="section.bold ? 'font-medium !text-black dark:!text-white' : ''"
                >{{ word }}</span>{{ ' ' }}
              </template>
            </template>
          </h2>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         03 · SHOWCASE — Pinned cross-fade with SVG draws
         Desktop: pinned with cross-fade | Mobile: stacked cards
         ════════════════════════════════════════════════════ -->

    <!-- DESKTOP VERSION -->
    <section class="s-showcase hidden lg:block relative h-screen overflow-hidden bg-white dark:bg-[#09090b]">
      <!-- Panels stacked absolutely -->
      <div
        v-for="(dept, i) in depts" :key="dept.id"
        class="dept-panel absolute inset-0 flex"
        :style="{ zIndex: 10 + i }"
      >
        <!-- Image side -->
        <div class="w-1/2 h-full relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <img
            :src="dept.image" :alt="dept.title"
            class="dept-img absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white dark:via-[#09090b]/50 dark:to-[#09090b]" />
        </div>

        <!-- Info side -->
        <div class="w-1/2 h-full flex items-center relative">
          <div class="dept-info px-16 max-w-lg z-10">
            <span class="block text-[11px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500 mb-6">{{ dept.num }} / 03</span>
            <h2 class="text-3xl font-light text-zinc-900 dark:text-white tracking-tight leading-snug mb-2">{{ dept.code }}</h2>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">{{ dept.title }}</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">{{ dept.brief }}</p>
            <NuxtLink :to="`#${dept.id}`" class="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-zinc-500 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white transition-colors group">
              Selengkapnya
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </NuxtLink>
          </div>

          <!-- SVG Illustration (department-specific) -->
          <div class="absolute right-12 bottom-12 opacity-[0.03] dark:opacity-[0.08] pointer-events-none text-zinc-900 dark:text-white">
            <!-- RPL: Nuxt Logo -->
            <svg v-if="dept.id === 'rpl'" class="svg-draw w-48 h-48" viewBox="0 0 256 168" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.96 16.96 0 0 0 6.302-6.115a16.3 16.3 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.97 16.97 0 0 0-6.301-6.113a17.6 17.6 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.96 16.96 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a17 17 0 0 0-6.304-6.112A17.64 17.64 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a17 17 0 0 0-6.303 6.112L2.31 141.975a16.3 16.3 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.96 16.96 0 0 0 6.302 6.115a17.6 17.6 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416" />
            </svg>
            <!-- TSM: Yamaha Logo -->
            <svg v-else-if="dept.id === 'tsm'" class="svg-draw w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 .57C18.315.57 23.43 5.685 23.43 12c0 6.31-5.115 11.43-11.43 11.43C5.69 23.43.57 18.314.57 12C.57 5.69 5.69.57 12 .57m0 .234c-.1 0-.183.06-.218.147l-.492 1.551A9.523 9.523 0 0 0 2.475 12c0 1.48.337 2.885.94 4.136l-1.1 1.206a.24.24 0 0 0-.015.262a.25.25 0 0 0 .238.115l1.592-.353a9.52 9.52 0 0 0 7.87 4.16c3.27 0 6.16-1.652 7.874-4.16l1.592.353a.24.24 0 0 0 .23-.123a.23.23 0 0 0-.016-.262l-1.1-1.198A9.4 9.4 0 0 0 21.526 12a9.523 9.523 0 0 0-8.815-9.498L12.218.947A.24.24 0 0 0 12 .804m-.003.25c.024 0 .048.02.056.043l1.02 3.354a1.2 1.2 0 0 0-.48.957c0 .389.19.734.48.952h-.004c.436.326.718.846.718 1.429v1.12l4.326-2.497l.476.825l-4.802 2.77v.965l.834.48l4.802-2.774l.476.825l-4.326 2.5l.972.56c.508.294.818.798.882 1.338v-.004a1.193 1.193 0 0 0 1.655.953l2.393 2.56c.02.02.02.047.008.07q-.025.036-.068.029l-3.413-.794a1.193 1.193 0 0 0-1.65-.957l.003-.004c-.5.215-1.091.199-1.6-.095l-.968-.56v4.994h-.952v-5.545l-.834-.48l-.833.48v5.545h-.953V15.1l-.972.555c-.508.294-1.1.31-1.6.096l.004.004a1.193 1.193 0 0 0-1.651.957l-3.413.793a.054.054 0 0 1-.063-.028c-.016-.02-.012-.047.008-.067l2.397-2.56c.333.143.73.135 1.067-.064c.338-.194.544-.528.588-.889v.004a1.78 1.78 0 0 1 .88-1.337l.97-.56l-4.327-2.496l.477-.826l4.802 2.774l.833-.484v-.964l-4.802-2.77l.476-.826l4.326 2.496V7.79c0-.583.282-1.103.719-1.429h-.004c.29-.214.476-.56.476-.952c0-.393-.19-.738-.48-.957l1.02-3.353c.008-.028.031-.044.051-.044zm.004 5.902a.833.833 0 0 0-.833.833v1.67L12 9.94l.833-.48V7.789A.833.833 0 0 0 12 6.956zm0 4.084l-.833.48v.964l.833.476l.833-.48v-.96zm-2.62 1.516l-1.444.833a.833.833 0 0 0-.306 1.14a.82.82 0 0 0 .723.412a.83.83 0 0 0 .416-.111l1.445-.834v-.96zm5.243 0l-.833.48V14l1.445.834a.834.834 0 0 0 .833-1.445z" />
            </svg>
            <!-- TKR: Honda Logo -->
            <svg v-else class="svg-draw w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23.902 6.87c-.33-3.218-2.47-3.895-4.354-4.204c-.946-.16-2.63-.3-3.716-.34c-.946-.06-3.168-.09-3.835-.09c-.657 0-2.89.03-3.835.09c-1.076.04-2.77.18-3.716.34C2.563 2.985.42 3.66.092 6.87c-.08.877-.1 2.023-.09 3.248c.03 2.031.2 3.406.3 4.363c.07.657.338 2.62.687 3.636c.478 1.395.916 1.803 1.424 2.222c.937.757 2.471.996 2.79 1.056c1.733.31 5.24.368 6.784.368s5.05-.05 6.784-.368c.329-.06 1.863-.29 2.79-1.056c.508-.419.946-.827 1.424-2.222c.35-1.016.628-2.979.698-3.636c.1-.957.279-2.332.299-4.363c.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.19 2.57-.418 4.104-.747 5.22c-.29.976-.637 1.623-1.165 2.092c-.867.787-2.063.956-2.76 1.056c-1.514.23-4.055.3-6.057.3s-4.543-.08-6.057-.3c-.697-.1-1.893-.269-2.76-1.056c-.518-.469-.876-1.126-1.155-2.093c-.329-1.105-.558-2.65-.747-5.22c-.11-1.543-.09-4.054.08-5.4c.258-2.011 1.255-3.018 3.387-3.396c.996-.18 2.34-.31 3.606-.37c1.016-.07 2.7-.1 3.636-.09c.936-.01 2.62.03 3.636.09c1.275.06 2.61.19 3.606.37c2.142.378 3.139 1.395 3.388 3.397c.199 1.345.229 3.856.11 5.4m-5.202-8.39c-.548 2.462-.767 3.588-1.216 5.37c-.428 1.715-.767 3.298-1.335 4.065c-.587.777-1.365.947-1.893 1.006c-.279.03-.478.04-1.066.05a8 8 0 0 1-1.075-.05c-.528-.06-1.315-.229-1.892-1.006c-.578-.767-.907-2.35-1.335-4.064c-.47-1.773-.678-2.91-1.236-5.37c0 0-.548.02-.797.04c-.329.02-.588.05-.867.09c.343 5.372.692 11.079 1.126 16.13a22 22 0 0 0 2.39.169c.33-1.266.748-3.02 1.207-3.767c.378-.608.966-.677 1.295-.717c.518-.07.956-.08 1.165-.08c.2-.01.637 0 1.165.08c.33.05.917.11 1.295.717c.47.747.877 2.5 1.206 3.766c0 0 .358-.01 1.165-.05q.616-.027 1.226-.12c.458-5.39.785-10.728 1.126-16.128c-.28-.04-.538-.07-.867-.09c-.23-.02-.787-.04-.787-.04z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        <div class="flex gap-2">
          <div v-for="(d, i) in depts" :key="`p-${d.id}`" class="h-[2px] rounded transition-all duration-500" :class="activeIdx === i ? 'w-8 bg-zinc-900 dark:bg-white' : 'w-3 bg-zinc-200 dark:bg-white/20'" />
        </div>
        <span class="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider font-medium min-w-[120px]">{{ depts[activeIdx]?.title }}</span>
      </div>
    </section>

    <!-- MOBILE VERSION -->
    <section class="s-showcase lg:hidden bg-white dark:bg-[#09090b]">
      <div v-for="dept in depts" :key="`m-${dept.id}`" class="mob-dept-card border-b border-zinc-100 dark:border-white/[0.05] relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <img :src="dept.image" :alt="dept.title" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#09090b] dark:via-[#09090b]/60 dark:to-transparent" />
        <div class="relative z-10 p-8 pb-12">
          <span class="text-[10px] text-zinc-500 dark:text-zinc-500 tracking-[0.25em] uppercase block mb-3">{{ dept.num }} / 03</span>
          <h2 class="text-2xl font-light text-zinc-900 dark:text-white tracking-tight mb-1">{{ dept.code }}</h2>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{{ dept.title }}</p>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">{{ dept.brief }}</p>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         04 · EDITORIAL — Asymmetric detail grids per dept
         ════════════════════════════════════════════════════ -->
    <section class="s-editorial bg-white dark:bg-[#09090b]">

      <div
        v-for="(dept, di) in depts" :key="`ed-${dept.id}`"
        :id="dept.id"
        class="editorial-block border-b border-zinc-100 dark:border-white/[0.05]"
      >
        <div class="max-w-6xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-8 lg:gap-0 py-20 lg:py-32">

            <!-- Image Column (alternating position) -->
            <div :class="di % 2 === 0 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5 lg:order-2 lg:col-start-8'" class="relative overflow-hidden rounded-sm">
              <div class="aspect-[4/5] overflow-hidden">
                <img
                  :src="dept.image" :alt="dept.title"
                  class="ed-img w-full h-full object-cover will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Text Column -->
            <div :class="di % 2 === 0 ? 'lg:col-span-5 lg:order-2 lg:col-start-7' : 'lg:col-span-5 lg:order-1'" class="flex items-center">
              <div class="ed-text lg:px-8">
                <span class="block text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-6">
                  {{ dept.num }} — {{ dept.code }}
                </span>
                <h3 class="text-xl lg:text-2xl font-normal tracking-tight text-zinc-900 dark:text-white leading-snug mb-3">
                  {{ dept.title }}
                </h3>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
                  {{ dept.brief }}
                </p>

                <!-- Skills -->
                <div class="mb-8">
                  <span class="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">Kompetensi</span>
                  <div class="grid grid-cols-2 gap-x-8 gap-y-2">
                    <span v-for="skill in dept.skills" :key="skill" class="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span class="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                      {{ skill }}
                    </span>
                  </div>
                </div>

                <!-- Career Paths -->
                <div>
                  <span class="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">Karier</span>
                  <p class="text-xs text-zinc-500 dark:text-zinc-500">
                    {{ dept.paths.join(' · ') }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         05 · TIMELINE — Minimal 3-year journey
         ════════════════════════════════════════════════════ -->
    <section class="s-timeline py-20 lg:py-32 bg-zinc-50/50 dark:bg-white/[0.015] border-b border-zinc-100 dark:border-white/[0.05]">
      <div class="max-w-3xl mx-auto px-6 lg:px-12">
        <p class="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-2">Kurikulum</p>
        <h2 class="text-xl lg:text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-16 lg:mb-20">
          Perjalanan tiga tahun
        </h2>

        <div class="s-timeline-content relative pl-8 lg:pl-10">
          <!-- Static bg line -->
          <div class="absolute left-[3px] lg:left-[5px] top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
          <!-- Animated progress -->
          <div class="tl-progress absolute left-[3px] lg:left-[5px] top-0 bottom-0 w-[1px] bg-zinc-900 dark:bg-white origin-top" style="transform: scaleY(0)" />

          <div v-for="(step, i) in timeline" :key="step.year" :class="`tl-node`" class="relative pb-16 last:pb-0">
            <!-- Dot -->
            <div class="absolute left-[-5px] lg:left-[-3px] top-[5px] w-[7px] h-[7px] rounded-full bg-zinc-900 dark:bg-white border-2 border-zinc-50 dark:border-[#09090b] z-10" />
            <div>
              <span class="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 mb-1.5">Kelas {{ step.year }}</span>
              <h3 class="text-sm font-medium text-zinc-900 dark:text-white mb-1.5">{{ step.label }}</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-sm">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         06 · METRICS — Typography-driven data
         ════════════════════════════════════════════════════ -->
    <section class="s-metrics py-20 lg:py-28 border-b border-zinc-100 dark:border-white/[0.05]">
      <div class="max-w-5xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(m, i) in metrics" :key="m.label"
            class="metric-item py-8 lg:py-0 text-center"
            :class="i < metrics.length - 1 ? 'border-r border-zinc-100 dark:border-white/[0.05]' : ''"
          >
            <span class="block text-2xl lg:text-4xl font-extralight tracking-tight text-zinc-900 dark:text-white mb-2">{{ m.value }}</span>
            <span class="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600">{{ m.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════
         07 · CTA — Understated close
         ════════════════════════════════════════════════════ -->
    <section class="s-cta py-24 lg:py-40">
      <div class="cta-inner max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <p class="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">Pendaftaran</p>
        <h2 class="text-xl lg:text-3xl font-light tracking-tight text-zinc-900 dark:text-white mb-4 leading-snug">
          Mulai perjalananmu
        </h2>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
          Bergabung dengan ekosistem pendidikan vokasional terdepan di Bandung.
        </p>
        <div class="flex items-center justify-center gap-6">
          <NuxtLink
            to="https://ppdb.smkassalaambandung.sch.id/"
            target="_blank"
            class="text-sm font-medium text-zinc-900 dark:text-white border border-zinc-900 dark:border-white px-6 py-2.5 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-300"
          >
            Daftar
          </NuxtLink>
          <NuxtLink
            to="/akademik/kurikulum"
            class="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            Kurikulum
            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* ─── Hero Title Line ─── */
.hero-title-line {
  overflow: hidden;
  display: block;
}

/* ─── Vertical writing mode for scroll indicator ─── */
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* ─── Scroll line animation ─── */
@keyframes scroll-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
.animate-scroll-line {
  animation: scroll-down 1.5s ease-in-out infinite;
}

/* ─── Performance hints ─── */
.hero-img,
.dept-img,
.ed-img,
.tl-progress {
  will-change: transform;
  backface-visibility: hidden;
}

/* ─── SVG draw elements ─── */
.svg-draw path,
.svg-draw line,
.svg-draw circle,
.svg-draw polyline {
  will-change: stroke-dashoffset;
}

/* ─── Typography smoothing ─── */
.jurusan-page {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Metric dividers responsive fix ─── */
@media (max-width: 1023px) {
  .metric-item:nth-child(2) {
    border-right: none;
  }
  .metric-item:nth-child(1),
  .metric-item:nth-child(2) {
    border-bottom: 1px solid;
    border-color: inherit;
  }
}

/* ─── Selection ─── */
::selection {
  background: rgba(0, 0, 0, 0.08);
}
:global(.dark) ::selection {
  background: rgba(255, 255, 255, 0.12);
}
</style>
