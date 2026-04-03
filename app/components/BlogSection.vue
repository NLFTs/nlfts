<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)

const { data: posts } = await useAsyncData('latest-posts', () => 
  queryCollection('posts')
    .order('date', 'DESC')
    .limit(3)
    .all()
)

onMounted(async () => {
  await nextTick()
  if (!sectionRef.value) return

  const ctx = gsap.context(() => {
    gsap.from(".blog-reveal", {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    })
  }, sectionRef.value)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="py-24 bg-gray-50/30 dark:bg-[#020618] border-b border-gray-100 dark:border-white/5"
  >
    <UContainer>
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="blog-reveal max-w-2xl">
          <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 mb-4">Warta Terkini</h2>
          <h3 class="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Berita & Artikel Kampus <br class="hidden md:block"/> SMK Assalaam.
          </h3>
        </div>
        
        <div class="blog-reveal">
          <UButton
            to="/blog"
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
            class="font-bold hover:text-amber-500 transition-colors"
          >
            Lihat Semua Berita
          </UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(post, index) in posts" 
          :key="index"
          class="blog-reveal group"
        >
          <NuxtLink :to="post.path" class="block space-y-4">
            <div class="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <img 
                v-if="post.image"
                :src="post.image.src" 
                :alt="post.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <UBadge v-if="post.badge" variant="subtle" size="xs" color="neutral" class="font-bold uppercase tracking-wider">
                  {{ post.badge.label }}
                </UBadge>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {{ new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                </span>
              </div>
              
              <h4 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-2">
                {{ post.title }}
              </h4>
              
              <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
section {
  font-feature-settings: \"cv11\", \"ss01\", \"cv01\";
}
</style>
