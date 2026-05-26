<script setup lang="ts">
useSeoMeta({
  title: 'Tim Kami - RakitWeb',
  description: 'Kenali tim di balik RakitWeb — developer, designer, dan engineer yang membangun solusi digital terbaik untuk bisnis Anda.',
  ogTitle: 'Tim Kami - RakitWeb',
  ogDescription: 'Kenali tim di balik RakitWeb — developer, designer, dan engineer yang membangun solusi digital terbaik untuk bisnis Anda.',
  ogImage: '/rakitweb.jpeg'
})

const team = [
  {
    name: 'Kin You',
    role: 'Frontend Enginner',
    experience: 'Never Say Never',
    avatar: './team/Tsumugi.jpg',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Rakit+Dev&background=3b82f6&color=fff&size=200&bold=true',
    bio: 'Membangun produk digital dari nol hingga production. Spesialis web modern dan arsitektur server.',
    stacks: [
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
      { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
      { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
      { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
      { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' }
    ]
  },
  {
    name: 'Chandra',
    role: 'Founder of RakitWeb',
    experience: '2+ tahun pengalaman',
    avatar: './blog/kucing.jpeg',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Web+Engineer&background=10b981&color=fff&size=200&bold=true',
    bio: 'Spesialis UI/UX dan performa frontend. Memastikan setiap pixel tampil sempurna di semua perangkat.',
    stacks: [
      { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
      { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' },
      { name: 'React Native', icon: 'i-simple-icons-react', color: '#61DAFB' },
      { name: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
      { name: 'NestJS', icon: 'i-simple-icons-nestjs', color: '#E0234E' },
      { name: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' }
    ]
  },
  {
    name: 'Silo Kusuma',
    role: 'Backend & DevOps Engineer',
    experience: '2+ tahun pengalaman',
    avatar: './team/elaina.jpg',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Backend+Dev&background=8b5cf6&color=fff&size=200&bold=true',
    bio: 'Merancang arsitektur backend yang scalable dan reliable. Ahli dalam deployment dan optimasi server.',
    stacks: [
      { name: 'Java', icon: 'i-simple-icons-java', color: '#007396' },
      { name: 'Spring', icon: 'i-simple-icons-spring', color: '#6DB33F' },
      { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
      { name: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' },
      { name: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' }
    ]
  },
  {
    name: 'Nizam',
    role: 'CI / CD',
    experience: '2+ tahun pengalaman',
    avatar: 'https://avatars.githubusercontent.com/u/webcraftidng?v=4',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Backend+Dev&background=8b5cf6&color=fff&size=200&bold=true',
    bio: 'Merancang arsitektur backend yang scalable dan reliable. Ahli dalam deployment dan optimasi server.',
    stacks: [
      { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' }
    ]
  },
  {
  name: 'Nafi',
  role: 'UI/UX Designer',
  experience: '1+ tahun pengalaman',
  avatar: './team/nafi.jpg',
  fallbackAvatar: 'https://ui-avatars.com/api/?name=Nafi&background=f59e0b&color=fff&size=200&bold=true',
  bio: 'Fokus menciptakan tampilan antarmuka yang modern, nyaman digunakan, dan memiliki identitas visual yang kuat.',
  stacks: [
    { name: 'Figma', icon: 'i-simple-icons-figma', color: '#F24E1E' },
    { name: 'Adobe XD', icon: 'i-simple-icons-adobexd', color: '#FF61F6' },
    { name: 'TailwindCSS', icon: 'i-simple-icons-tailwindcss', color: '#06B6D4' },
    { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
    { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' }
  ]
},
{
  name: 'Rizal',
  role: 'Fullstack Developer',
  experience: '2+ tahun pengalaman',
  avatar: './team/rizal.jpg',
  fallbackAvatar: 'https://ui-avatars.com/api/?name=Rizal&background=ef4444&color=fff&size=200&bold=true',
  bio: 'Mengembangkan sistem backend dan frontend dengan fokus pada performa, stabilitas, dan pengalaman pengguna yang optimal.',
  stacks: [
    { name: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
    { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', color: '#339933' },
    { name: 'MySQL', icon: 'i-simple-icons-mysql', color: '#4479A1' },
    { name: 'Docker', icon: 'i-simple-icons-docker', color: '#2496ED' },
    { name: 'React', icon: 'i-simple-icons-react', color: '#61DAFB' }
  ]
}
]

const allStacks = [
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  { name: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
  { name: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
  { name: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' },
  { name: 'NestJS', icon: 'i-simple-icons-nestjs', color: '#E0234E' },
  { name: 'Java', icon: 'i-simple-icons-java', color: '#007396' },
  { name: 'Spring', icon: 'i-simple-icons-spring', color: '#6DB33F' },
  { name: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' },
  { name: 'React Native', icon: 'i-simple-icons-react', color: '#61DAFB' },
  { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
  { name: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' }
]

const imgErrors = ref<Record<number, boolean>>({})
const onImgError = (idx: number) => { imgErrors.value[idx] = true }
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#09090b]">

    <!-- HERO -->
    <section class="pt-32 pb-20 px-6">
      <UContainer>
        <div class="max-w-2xl">
          <p class="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary-500 mb-6">Tim Kami</p>
          <h1 class="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-6">
            Orang-orang di<br />balik RakitWeb.
          </h1>
          <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
            Kami adalah tim kecil yang bergerak cepat — developer, engineer, dan builder yang fokus membangun produk digital berkualitas tinggi.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-gray-100 dark:border-white/5" />

    <!-- TEAM GRID -->
    <section class="py-20 px-6">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
          <div
            v-for="(member, idx) in team"
            :key="member.name"
            class="bg-white dark:bg-[#09090b] p-8 flex flex-col gap-6 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors duration-300"
          >
            <!-- Avatar + Info -->
            <div class="flex items-start gap-4">
              <div class="relative shrink-0">
                <img
                  :src="imgErrors[idx] ? member.fallbackAvatar : member.avatar"
                  :alt="member.name"
                  class="w-14 h-14 rounded-2xl object-cover bg-gray-100 dark:bg-white/5"
                  @error="onImgError(idx)"
                />
                <div class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-500 rounded-full border-2 border-white dark:border-[#09090b]" />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-gray-900 dark:text-white truncate">{{ member.name }}</h3>
                <p class="text-xs text-primary-500 font-semibold mt-0.5">{{ member.role }}</p>
                <p class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">{{ member.experience }}</p>
              </div>
            </div>

            <!-- Bio -->
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ member.bio }}
            </p>

            <!-- Divider -->
            <div class="border-t border-gray-100 dark:border-white/5" />

            <!-- Stack -->
            <div class="space-y-3">
              <p class="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Tech Stack</p>
              <div class="flex flex-wrap gap-2">
                <div
                  v-for="stack in member.stacks"
                  :key="stack.name"
                  class="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200 cursor-default"
                  :title="stack.name"
                >
                  <UIcon :name="stack.icon" class="w-3.5 h-3.5 shrink-0" :style="{ color: stack.color }" />
                  <span class="text-[10px] font-semibold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{{ stack.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- DIVIDER -->
    <div class="border-t border-gray-100 dark:border-white/5" />

    <!-- ALL STACKS SECTION -->
    <section class="py-20 px-6">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p class="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary-500 mb-3">Teknologi</p>
              <h2 class="text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                Stack yang kami kuasai.
              </h2>
            </div>
            <p class="text-xs text-gray-400 max-w-xs leading-relaxed">
              Dari frontend hingga backend, mobile hingga cloud — kami memilih teknologi yang tepat untuk setiap kebutuhan.
            </p>
          </div>

          <div class="grid grid-cols-4 sm:grid-cols-7 gap-3">
            <div
              v-for="stack in allStacks"
              :key="stack.name"
              class="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/15 hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200 cursor-default"
              :title="stack.name"
            >
              <UIcon :name="stack.icon" class="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:scale-110" :style="{ color: stack.color }" />
              <span class="text-[9px] font-semibold text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors text-center leading-tight">{{ stack.name }}</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-20 px-6 border-t border-gray-100 dark:border-white/5">
      <UContainer>
        <div class="max-w-xl">
          <h2 class="text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
            Tertarik bekerja sama?
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Kami selalu terbuka untuk proyek baru dan kolaborasi menarik. Hubungi kami dan ceritakan kebutuhan Anda.
          </p>
          <div class="flex items-center gap-4">
            <NuxtLink
              to="https://wa.me/6283160325595"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              <UIcon name="i-simple-icons-whatsapp" class="w-4 h-4" />
              Hubungi Kami
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl hover:border-gray-400 dark:hover:border-white/30 transition-colors"
            >
              Lihat Harga
              <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

  </div>
</template>
