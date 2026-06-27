<template>
  <section class="w-full px-6 lg:px-12 py-16" style="font-family: 'Google Sans', 'Inter', system-ui, sans-serif;">
    <!-- Main Card -->
    <div class="relative overflow-hidden rounded-2xl border border-white/8" style="background: #0e0e0e;">

      <!-- Dot texture -->
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 22px 22px;"
        aria-hidden="true"
      ></div>

      <!-- Red glow — top center, very subtle -->
      <div
        class="absolute pointer-events-none"
        style="top:-80px; left:50%; transform:translateX(-50%); width:560px; height:220px; background:radial-gradient(ellipse, rgba(220,38,38,0.28) 0%, transparent 68%); filter:blur(2px);"
        aria-hidden="true"
      ></div>

      <!-- Red glow — bottom center (burst) -->

      <!-- ── Floating icon cards LEFT (Backend modern) ── -->
      <div class="float-card r--8 absolute" style="top:14%;left:3%;">
        <UIcon name="i-simple-icons-laravel" class="h-5 w-5" style="color:#FF2D20;" />
      </div>
      <div class="float-card float-sm r6 absolute" style="top:56%;left:2%;">
        <UIcon name="i-simple-icons-spring" class="h-4 w-4" style="color:#6DB33F;" />
      </div>
      <div class="float-card float-sm r--14 absolute" style="top:8%;left:16%;">
        <UIcon name="i-simple-icons-mongodb" class="h-4 w-4" style="color:#47A248;" />
      </div>
      <div class="float-card r10 absolute" style="top:71%;left:9%;">
        <UIcon name="i-simple-icons-nestjs" class="h-5 w-5" style="color:#E0234E;" />
      </div>

      <!-- ── Floating icon cards RIGHT (Frontend modern) ── -->
      <div class="float-card r6 absolute" style="top:12%;right:4%;">
        <UIcon name="i-simple-icons-nextdotjs" class="h-5 w-5" style="color:#000000;" />
      </div>
      <div class="float-card float-sm r--8 absolute" style="top:54%;right:2%;">
        <UIcon name="i-simple-icons-nuxtdotjs" class="h-4 w-4" style="color:#00DC82;" />
      </div>
      <div class="float-card float-sm r10 absolute" style="top:7%;right:16%;">
        <UIcon name="i-simple-icons-angular" class="h-4 w-4" style="color:#DD0031;" />
      </div>
      <div class="float-card r--14 absolute" style="top:70%;right:9%;">
        <UIcon name="i-simple-icons-vuedotjs" class="h-5 w-5" style="color:#42B883;" />
      </div>

      <!-- ── Center content ── -->
      <div class="relative z-10 flex flex-col items-center text-center px-8 pt-14 pb-10 max-w-xl mx-auto">

        <!-- Headline — restrained, not huge -->
        <h2 class="mb-4 leading-snug" style="font-size:28px; font-weight:500; letter-spacing:-0.02em; color:#ffffff; line-height:1.25;">
          Bergabung dengan Generasi Developer Berikutnya
        </h2>

        <!-- Subtitle -->
        <p class="mb-9 leading-relaxed" style="font-size:14px; font-weight:400; color:rgba(255,255,255,0.45); max-width:380px; line-height:1.7;">
          Kami mencari developer yang ingin terus berkembang, berkolaborasi, dan menciptakan dampak melalui teknologi modern.
        </p>

        <!-- Buttons -->
         
        <div class="flex flex-wrap items-center justify-center gap-3">
            <NuxtLink
              to="/terhubung"
              class="cursor-pointer group relative overflow-hidden px-6 py-2.5 text-[13.5px] font-medium bg-white text-black transition-all duration-200 hover:-translate-y-px active:scale-95"
            >
              <span
                class="absolute inset-0 bg-red-600 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
              ></span>
  
              <span class="relative z-10 transition-colors duration-300">
                Bergabung Sekarang
              </span>
            </NuxtLink>
          <NuxtLink
            to="/docs"
            class="group relative overflow-hidden flex items-center justify-center h-10 px-6
                  bg-white/5 border border-white/10 backdrop-blur-sm
                  text-[13.5px] text-white/70 cursor-pointer
                  transition-all duration-150 hover:-translate-y-px active:scale-95"
          >
            <!-- Text -->
            <span
              class="transition-all duration-300 ease-out
                    group-hover:-translate-y-8 group-hover:opacity-0"
            >
              View docs
            </span>

            <!-- Icon -->
            <Icon
              name="i-lucide-book-open"
              class="absolute size-4 opacity-0 translate-y-8
                    transition-all duration-300 ease-out
                    group-hover:translate-y-0
                    group-hover:opacity-100"
            />
          </NuxtLink>
        </div>

      </div>

      <!-- Divider -->
      <div class="relative z-10 mx-0 border-t" style="border-color:rgba(255,255,255,0.07);"></div>

      <!-- ── Ticker INSIDE card ── -->
      <div
        class="relative z-10 overflow-hidden py-3.5"
        @mouseenter="pauseTicker = true"
        @mouseleave="pauseTicker = false"
      >
        <div class="flex w-max" :class="pauseTicker ? 'ticker-paused' : 'ticker-run'">
          <span
            v-for="(item, i) in tickerDouble"
            :key="i"
            class="inline-flex items-center gap-2 whitespace-nowrap"
            style="padding:0 32px; font-size:12.5px; color:rgba(255,255,255,0.3); font-weight:400;"
          >
            <!-- Red dot separator -->
            <svg width="5" height="5" viewBox="0 0 6 6" style="flex-shrink:0; fill:#dc2626; opacity:0.7;"><circle cx="3" cy="3" r="3"/></svg>
            {{ item }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const pauseTicker = ref(false)

const tickerItems = [
  'Komunitas #1 di indonesia',
  'Pengalaman Developer Yang di Utamakan',
  'Zero Konfigurasi',
  'Berbasis Sumber Terbuka',
  'Dukungan untuk teknologi modern',
  'Buat Satu Untuk Semuanya',
  'Utamakan Kualitas, Bukan Kuantitas',
]

const tickerDouble = computed(() => [...tickerItems, ...tickerItems])
</script>

<style scoped>
/* Floating cards */
.float-card {
  width: 46px;
  height: 46px;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease;
}

.float-card.float-sm {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  opacity: 0.5;
}

.float-card:hover { transform: rotate(0deg) scale(1.1) !important; }

/* Rotation helpers */
.r--8  { transform: rotate(-8deg); }
.r6    { transform: rotate(6deg); }
.r--14 { transform: rotate(-14deg); }
.r10   { transform: rotate(10deg); }

/* Ticker */
.ticker-run {
  animation: ticker-scroll 30s linear infinite;
}

.ticker-paused {
  animation: ticker-scroll 30s linear infinite;
  animation-play-state: paused;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (max-width: 640px) {
  .float-card.float-sm { display: none; }
  .float-card { width: 36px; height: 36px; }
}
</style>