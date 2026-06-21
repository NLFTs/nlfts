<template>
  <section class="relative overflow-hidden bg-white dark:bg-[#09090b] py-20">

    <!-- Header -->
     <div class="text-center max-w-lg mx-auto px-6 mb-16">
        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400 opacity-80">
          Testimonials
        </span>
        <h2 class="text-3xl font-medium text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
          Trusted by developers
        </h2>
        <p class="text-sm text-gray-400 dark:text-gray-500 font-light">
          Discover what the community says about our platform.
        </p>
      </div>

    <!-- Grid -->
    <div class="relative overflow-hidden" style="max-height: 780px;">
      <div class="flex gap-4 px-6 max-w-[1400px] mx-auto items-start pb-8">

        <!-- Col 1 — paling rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-36">
          <div
            v-for="t in columns[0]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 2 — mid rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-16">
          <div
            v-for="t in columns[1]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 3 — CENTER PEAK (tertinggi) -->
        <div class="flex flex-col gap-4 flex-1 mt-0">
          <div
            v-for="t in columns[2]" :key="t.id"
            class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 4 — mid rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-16">
          <div
            v-for="t in columns[3]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 5 — paling rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-36">
          <div
            v-for="t in columns[4]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

      </div>

      <!-- Fade overlay light mode -->
      <div class="fade-bottom pointer-events-none absolute bottom-0 left-0 right-0 h-[520px] block dark:hidden" />
      <!-- Fade overlay dark mode -->
      <div class="fade-bottom-dark pointer-events-none absolute bottom-0 left-0 right-0 h-[520px] hidden dark:block" />
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'

const testimonials = [
// Col 0
{
id: 1,
col: 0,
name: 'Lintang Wijaya',
role: 'Pemilik Group besar Kota Jaya',
avatar: 'https://avatars.githubusercontent.com/u/216552062?s=130&v=4',
text: `<strong>NLFTs mengubah cara saya memandang pengembangan perangkat lunak.</strong> Fokusnya bukan sekadar menyelesaikan masalah, tetapi membangun solusi yang modern, scalable, dan berkelanjutan.`
},
{
id: 2,
col: 0,
name: 'Rehan Ramdhan',
role: 'Kontributor Open Source',
avatar: 'https://avatars.githubusercontent.com/u/218329504?s=130&v=4',
text: `Bergabung dengan NLFTs mempertemukan saya dengan developer yang memiliki visi yang sama. Diskusi yang terjadi selalu relevan dengan teknologi terbaru dan kebutuhan industri saat ini.`
},
{
id: 3,
col: 0,
name: 'Naufal Hidayat',
role: 'Full Stack Engineer',
avatar: 'https://i.pravatar.cc/80?img=9',
text: `Di sini saya menemukan lingkungan yang mendorong saya untuk terus berkembang. Setiap anggota memiliki semangat untuk belajar, membangun, dan berbagi pengalaman teknis tingkat lanjut.`
},

// Col 1
{
id: 4,
col: 1,
name: 'Rizky Ms',
role: 'Nuxt Engineer',
avatar: 'https://avatars.githubusercontent.com/u/230048582?s=130&v=4  ',
text: `<strong>NLFTs bukan sekadar komunitas, tetapi tempat berkumpulnya developer yang serius mengembangkan kemampuan mereka.</strong> Mulai dari NestJS, Spring, Go, hingga arsitektur sistem modern selalu menjadi topik yang menarik untuk dibahas.`
},
{
id: 5,
col: 1,
name: 'Miftah Aufar',
role: 'Spring Architect',
avatar: 'https://avatars.githubusercontent.com/u/232498018?s=130&v=4',
text: `Yang membuat NLFTs berbeda adalah budaya open source yang kuat. Anggotanya aktif berkontribusi pada ekosistem Nuxt sekaligus mengembangkan framework dan tooling internal sendiri.`
},

// Col 2
{
id: 7,
col: 2,
name: 'Nairha',
role: 'Founder NLFTs',
avatar: 'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
text: `<strong>NLFTs dibangun untuk developer yang ingin terus berkembang dan berada di garis depan teknologi.</strong> Kami tidak berfokus pada pembelajaran dasar, tetapi pada eksplorasi teknologi modern, kontribusi open source, dan pengembangan solusi nyata untuk industri.`
},
{
id: 8,
col: 2,
name: 'Reyhan',
role: 'Kontributor Nuxt',
avatar: 'https://avatars.githubusercontent.com/u/202130049?s=130&v=4',
text: `Budaya belajar di NLFTs sangat positif. Semua anggota saling mendorong untuk berkontribusi, bereksperimen, dan menciptakan sesuatu yang bermanfaat bagi komunitas maupun industri.`
},

// Col 3
{
id: 10,
col: 3,
name: 'Radietya Pratama',
role: 'Fonder Prataryn Enterpise',
avatar: 'https://avatars.githubusercontent.com/u/226198461?s=130&v=4',
text: `Meskipun berpusat di Bandung, NLFTs membuka kesempatan bagi developer dari seluruh Indonesia untuk terhubung, berkolaborasi, dan berkembang bersama.`
},
{
id: 11,
col: 3,
name: 'Destkaa',
role: 'DevOps Engineer',
avatar: 'https://avatars.githubusercontent.com/u/228332586?s=130&v=4',
text: `<strong>Di sini tidak ada fokus pada materi dasar.</strong> NLFTs ditujukan bagi mereka yang ingin memperdalam teknologi modern, memahami arsitektur tingkat lanjut, dan mengikuti perkembangan industri secara aktif.`
},
// Col 4
{
id: 13,
col: 4,
name: 'Marsha Bara',
role: 'Technical Lead',
avatar: 'https://avatars.githubusercontent.com/u/228843429?s=130&v=4',
text: `<strong>NLFTs memiliki visi yang jelas: membangun ekosistem teknologi modern dan berkontribusi terhadap perkembangan open source.</strong> Itu yang membuat saya bangga menjadi bagian dari komunitas ini.`
},
{
id: 14,
col: 4,
name: 'Fakhri Ibnu Nabil',
role: 'Frontend Specialist',
avatar: 'https://avatars.githubusercontent.com/u/228840381?s=130&v=4',
text: `Saya bergabung karena tertarik dengan Nuxt, tetapi bertahan karena kualitas anggota dan diskusi yang luar biasa. Setiap pertemuan selalu memberikan perspektif baru.`
},

]


const columns = computed(() => {
  const cols = [[], [], [], [], []]
  testimonials.forEach((t) => cols[t.col].push(t))
  return cols
})
</script>

<style scoped>
.fade-bottom {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0)    0%,
    rgba(255, 255, 255, 0.15) 15%,
    rgba(255, 255, 255, 0.55) 35%,
    rgba(255, 255, 255, 0.88) 55%,
    rgba(255, 255, 255, 1)    70%,
    rgba(255, 255, 255, 1)    100%
  );
}

.fade-bottom-dark {
  background: linear-gradient(
    to bottom,
    rgba(3, 7, 18, 0)    0%,
    rgba(3, 7, 18, 0.15) 15%,
    rgba(3, 7, 18, 0.55) 35%,
    rgba(3, 7, 18, 0.88) 55%,
    rgba(3, 7, 18, 1)    70%,
    rgba(3, 7, 18, 1)    100%
  );
}

@media (max-width: 1024px) {
  .flex > div:nth-child(1),
  .flex > div:nth-child(5) {
    display: none;
  }
}

@media (max-width: 640px) {
  .flex > div:not(:nth-child(3)) {
    display: none;
  }
}
</style>