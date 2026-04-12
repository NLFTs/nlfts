<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

interface StatItem {
  value: string
  label: string
}

const props = defineProps<{
  stats: StatItem[]
}>()

const statsContainer = ref(null)
const itemRefs = ref([])

onMounted(() => {
  const ctx = gsap.context(() => {
    // Staggered entry animation
    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: statsContainer.value,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    })

    // Number counting animation
    props.stats.forEach((stat, i) => {
      const el = document.querySelector(`.stat-num-${i}`)
      if (!el) return

      const cleanVal = stat.value.replace(/[^0-9.]/g, '')
      const target = parseFloat(cleanVal)
      
      // Only animate if it's a reasonable number (not the huge 1M+ one which might be too fast)
      if (!isNaN(target) && target < 100000) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          scrollTrigger: {
            trigger: statsContainer.value,
            start: "top 80%"
          },
          onUpdate: () => {
            let suffix = stat.value.includes('+') ? '+' : (stat.value.includes('%') ? '%' : '')
            el.innerText = Math.floor(obj.val).toLocaleString() + suffix
          }
        })
      }
    })
  }, statsContainer.value)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <div ref="statsContainer" class="w-full bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-white/5 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        <div 
          v-for="(stat, i) in stats" 
          :key="i"
          class="stat-card flex flex-col items-center text-center group"
        >
          <span 
            :class="`stat-num-${i}`"
            class="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary-500"
          >
            {{ stat.value }}
          </span>
          <span class="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            {{ stat.label }}
          </span>
          <div class="mt-4 w-6 h-[2px] bg-gray-100 dark:bg-white/10 group-hover:w-10 group-hover:bg-primary-500 transition-all duration-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure tabular numbers for smooth counting */
[class^="stat-num-"] {
  font-variant-numeric: tabular-nums;
}
</style>
