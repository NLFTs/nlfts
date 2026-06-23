<template>
  <div class="flex flex-wrap items-center gap-2 mt-3">
    <template v-for="(tech, i) in items" :key="`${tech}-${i}`">
      <div class="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 text-xs">
        <UIcon v-if="get(tech)" :name="get(tech).icon" class="w-5 h-5 shrink-0" :style="{ color: get(tech).color }" />
        <span class="text-[11px] text-gray-700 dark:text-gray-300">{{ tech || '—' }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ items: string[] }>()
const items = computed(() => props.items || [])

const MAP: Record<string, { icon: string; color: string }> = {
  vue: { icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
  nuxt: { icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  'nuxt.js': { icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  typescript: { icon: 'i-simple-icons-typescript', color: '#3178C6' },
  tailwind: { icon: 'i-simple-icons-tailwindcss', color: '#38B2AC' },
  'tailwindcss': { icon: 'i-simple-icons-tailwindcss', color: '#38B2AC' },
  figma: { icon: 'i-simple-icons-figma', color: '#F24E1E' },
  css: { icon: 'i-simple-icons-css3', color: '#1572B6' },
  'html': { icon: 'i-simple-icons-html5', color: '#E34F26' },
  react: { icon: 'i-simple-icons-react', color: '#61DAFB' },
  next: { icon: 'i-simple-icons-nextdotjs', color: '#000000' },
  'next.js': { icon: 'i-simple-icons-nextdotjs', color: '#000000' },
  node: { icon: 'i-simple-icons-nodedotjs', color: '#339933' },
  'node.js': { icon: 'i-simple-icons-nodedotjs', color: '#339933' },
  express: { icon: 'i-simple-icons-express', color: '#000000' },
  mongodb: { icon: 'i-simple-icons-mongodb', color: '#47A248' },
  docker: { icon: 'i-simple-icons-docker', color: '#2496ED' },
  'chakraui': { icon: 'i-simple-icons-chakraui', color: '#319795' },
  jest: { icon: 'i-simple-icons-jest', color: '#C21325' },
  python: { icon: 'i-simple-icons-python', color: '#3776AB' },
  pandas: { icon: 'i-simple-icons-python', color: '#3776AB' },
  sql: { icon: 'i-simple-icons-postgresql', color: '#336791' },
  postgresql: { icon: 'i-simple-icons-postgresql', color: '#336791' },
  tableau: { icon: 'i-simple-icons-tableau', color: '#E97627' },
  go: { icon: 'i-simple-icons-go', color: '#00ADD8' },
  kafka: { icon: 'i-simple-icons-apachekafka', color: '#231F20' },
  redis: { icon: 'i-simple-icons-redis', color: '#DC382D' },
  flutter: { icon: 'i-simple-icons-flutter', color: '#02569B' },
  dart: { icon: 'i-simple-icons-dart', color: '#0175C2' },
  firebase: { icon: 'i-simple-icons-firebase', color: '#FFCA28' },
  graphql: { icon: 'i-simple-icons-graphql', color: '#E10098' },
  linux: { icon: 'i-simple-icons-linux', color: '#FCC624' },
  bash: { icon: 'i-simple-icons-bash', color: '#4EAA25' },
  ruby: { icon: 'i-simple-icons-ruby', color: '#CC342D' },
  rails: { icon: 'i-simple-icons-rails', color: '#CC0000' },
  heroku: { icon: 'i-simple-icons-heroku', color: '#430098' },
  tensorflow: { icon: 'i-simple-icons-tensorflow', color: '#FF6F00' },
  pytorch: { icon: 'i-simple-icons-pytorch', color: '#EE4C2C' },
  aws: { icon: 'i-simple-icons-amazonaws', color: '#FF9900' },
  php: { icon: 'i-simple-icons-php', color: '#777BB4' },
  laravel: { icon: 'i-simple-icons-laravel', color: '#FF2D20' },
  mysql: { icon: 'i-simple-icons-mysql', color: '#4479A1' },
  javascript: { icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  'c++': { icon: 'i-simple-icons-cplusplus', color: '#00599C' },
  qt: { icon: 'i-simple-icons-qt', color: '#3A8CBD' },
  cmake: { icon: 'i-simple-icons-cmake', color: '#DA3434' },
  git: { icon: 'i-simple-icons-git', color: '#F05032' },
  java: { icon: 'i-simple-icons-java', color: '#007396' },
  spring: { icon: 'i-simple-icons-spring', color: '#6DB33F' },
  kubernetes: { icon: 'i-simple-icons-kubernetes', color: '#326CE5' },
  django: { icon: 'i-simple-icons-django', color: '#092E20' },
  terraform: { icon: 'i-simple-icons-terraform', color: '#623CE4' },
  r: { icon: 'i-simple-icons-r', color: '#276DC3' },
  powerbi: { icon: 'i-simple-icons-microsoftpowerbi', color: '#F2C811' },
  nestjs: { icon: 'i-simple-icons-nestjs', color: '#E0234E' },
  angular: { icon: 'i-simple-icons-angular', color: '#DD0031' },
  grpc: { icon: 'i-simple-icons-grpc', color: '#4285F4' },
  protobuf: { icon: 'i-simple-icons-protobuf', color: '#2E77BB' },
  haskell: { icon: 'i-simple-icons-haskell', color: '#5D4F8E' },
  scala: { icon: 'i-simple-icons-scala', color: '#DC322F' },
  selenium: { icon: 'i-simple-icons-selenium', color: '#43B02A' },
  cypress: { icon: 'i-simple-icons-cypress', color: '#17202C' },
  blender: { icon: 'i-simple-icons-blender', color: '#F5792A' },
  threejs: { icon: 'i-simple-icons-three-dot-js', color: '#000000' },
  webgl: { icon: 'i-simple-icons-webgl', color: '#000000' },
}

const normalize = (s = '') => s.toLowerCase().replace(/\s|\.|\+|\//g, '')

const get = (tech = '') => {
  const key = normalize(tech)
  if (MAP[key]) return MAP[key]
  // try partial matches
  for (const k of Object.keys(MAP)) {
    if (key.includes(k)) return MAP[k]
  }
  return null
}
</script>

<style scoped>
.tech-item {
  min-width: 72px;
}
</style>
