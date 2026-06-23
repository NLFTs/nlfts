<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('view-all')
const activeDiscussion = ref(null)

const categories = [
  { id: 'view-all', label: 'View all discussions', icon: '💬', active: true },
  { id: 'announcements', label: 'Announcements', icon: '📢' },
  { id: 'general', label: 'General', icon: '💭' },
  { id: 'ideas', label: 'Ideas', icon: '💡' },
  { id: 'polls', label: 'Polls', icon: '📋' },
  { id: 'qna', label: 'Q&A', icon: '🙏' },
  { id: 'show-tell', label: 'Show and tell', icon: '🏆' },
]

const discussions = [
  {
    id: 1,
    title: 'Nuxt 4 Alpha udah keluar — ada yang udah nyoba?',
    author: 'Kin You',
    authorAvatar: 'https://avatars.githubusercontent.com/u/228851591?v=4',
    username: 'kinyou',
    category: 'general',
    categoryLabel: 'General',
    upvotes: "1k",
    comments: 8,
    answered: false,
    date: '19 Mei 2026',
    timeAgo: '3 hari lalu',
    body: 'Eh gais, ada yang udah nyoba `Nuxt 4` belum? Alpha-nya udah keluar katanya. Penasaran sama perubahan unified directory-nya 👀',
    replies: [
      {
        id: 1,
        author: 'Ahmad',
        username: 'Ahmad',
        avatar: 'https://avatars.githubusercontent.com/u/225441519?s=96&v=4',
        body: 'Udah coba kemarin sih, Tapi rasanya beda bangget sama nuxt 3',
        upvotes: 5,
        isAnswer: true,
        timeAgo: '3 hari lalu',
      },
      {
        id: 2,
        author: 'Sidikqst',
        username: 'Sidikqst',
        avatar: 'https://avatars.githubusercontent.com/u/230048582?s=96&v=4',
        body: 'btw, nuxt 4 lebih better dari nuxt 3 enggak kira kira? kalau enak gw mau nyoba juga nih',
        upvotes: 2,
        isAnswer: false,
        timeAgo: '3 hari lalu',
      },
      {
        id: 3,
        author: 'hanif',
        username: 'hanif',
        avatar: 'https://avatars.githubusercontent.com/u/232500114?s=96&v=4',
        body: 'Mampus gw harus baca Dokumentasi ulang lagi nih, padahal baru aja paham Nuxt 3 😭',
        upvotes: 3,
        isAnswer: false,
        timeAgo: '3 hari lalu',
      },
    ],
  },
  {
    id: 2,
    title: 'Selamat datang di FTs Project — baca dulu ya!',
    author: 'nairha',
    authorAvatar: 'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
    username: 'nairha',
    isAdmin: true,
    category: 'announcements',
    categoryLabel: 'Announcements',
    upvotes: 34,
    comments: 6,
    answered: false,
    date: '30 Jan 2026',
    timeAgo: '4 bulan lalu',
    body: 'Selamat datang di GitHub Discussions resmi **FTs Project** — ini adalah tempat untuk mengobrol tentang Dunia Web Developer, mengajukan pertanyaan, memamerkan proyek Anda, dan berkolaborasi dengan pengembang lain!',
    replies: [
      {
        id: 1,
        author: 'Destkaa',
        username: 'destkaa',
        avatar: 'https://avatars.githubusercontent.com/u/228332586?s=130&v=4',
        body: 'Siap min! Udah dibaca semua rules-nya 🫡',
        upvotes: 7,
        isAnswer: false,
        timeAgo: '4 bulan lalu',
      },
      {
        id: 2,
        author: 'Cerydra',
        username: 'cerydra',
        avatar: 'https://avatars.githubusercontent.com/u/190081649?s=130&v=4',
        body: 'Komunitas yang keren! Seneng bisa gabung disini 🔥',
        upvotes: 4,
        isAnswer: false,
        timeAgo: '3 bulan lalu',
      },
    ],
  },
  {
    id: 3,
    title: 'Tips deploy Nuxt app ke Vercel dengan edge functions',
    author: 'Fakhri',
    authorAvatar: 'https://avatars.githubusercontent.com/u/228840381?s=130&v=4',
    username: 'fakhri',
    category: 'show-tell',
    categoryLabel: 'Show and tell',
    upvotes: 8,
    comments: 3,
    answered: true,
    date: '15 Mei 2026',
    timeAgo: '7 hari lalu',
    body: 'Sharing pengalaman deploy Nuxt app ke Vercel dengan edge functions. Hasilnya TTFB turun drastis!',
    replies: [],
  },
  {
    id: 4,
    title: 'Framework mana yang paling worth dipelajari di 2026?',
    author: 'rehan',
    authorAvatar: 'https://avatars.githubusercontent.com/u/218329504?s=130&v=4',
    username: 'rehan',
    category: 'polls',
    categoryLabel: 'Polls',
    upvotes: 21,
    comments: 14,
    answered: false,
    date: '10 Mei 2026',
    timeAgo: '12 hari lalu',
    body: 'Poll: Framework mana yang menurut kalian paling worth dipelajari di 2026? Nuxtjs, Nestjs, Svelte, atau Angular?',
        replies: [
      {
        id: 1,
        author: 'davingm',
        username: 'davingm',
        avatar: 'https://avatars.githubusercontent.com/u/228851591?s=96&v=4',
        body: 'Nuxt sih no debat itu udah. 😎',
        upvotes: 7,
        isAnswer: false,
        timeAgo: '4 bulan lalu',
      },
    ]
  },
]

const filteredDiscussions = computed(() => {
  if (activeCategory.value === 'view-all') return discussions
  return discussions.filter((d) => d.category === activeCategory.value)
})

const selectedDiscussion = computed(() =>
  discussions.find((d) => d.id === activeDiscussion.value)
)

function openDiscussion(id) {
  activeDiscussion.value = id
}

function backToList() {
  activeDiscussion.value = null
}

function categoryIcon(id) {
  return categories.find((c) => c.id === id)?.icon || '💬'
}

function avatarColor(username) {
  const colors = [
    'bg-blue-600',
    'bg-rose-600',
    'bg-emerald-600',
    'bg-amber-600',
    'bg-violet-600',
    'bg-pink-600',
  ]
  return colors[username?.charCodeAt(0) % colors.length] || 'bg-slate-600'
}
</script>

<template>
  <!-- Mac Window Chrome -->
  <div
    class="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d1117] shadow-[0_40px_100px_rgba(0,0,0,0.6)] w-full"
  >
    <!-- Mac Titlebar -->
    <div
      class="flex items-center gap-2 border-b border-zinc-800 bg-[#161b22] px-5 py-3"
    >
      <span class="h-3 w-3 rounded-full bg-red-500" />
      <span class="h-3 w-3 rounded-full bg-yellow-500" />
      <span class="h-3 w-3 rounded-full bg-green-500" />
      <div
        class="mx-auto flex items-center gap-2 rounded-md border border-zinc-700 bg-[#0d1117] px-3 py-1 text-[11px] text-zinc-400"
      >
        <svg
          class="h-3 w-3"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        github.com / NLFTs / discussions
      </div>
      <div class="ml-auto text-[11px] text-zinc-500">FTs Project</div>
    </div>

    <!-- GitHub Top Nav -->
    <div class="border-b border-zinc-800 bg-[#161b22] px-4 py-0">
      <div class="flex items-center gap-6 text-[11px]">
        <button class="flex items-center gap-1.5 py-3 text-zinc-400 hover:text-zinc-200">
          <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"
            />
          </svg>
          Repositories
          <span
            class="rounded-full bg-zinc-700 px-1.5 py-0.5 text-[9px] text-zinc-300"
            >13</span
          >
        </button>
        <button
          class="flex items-center gap-1.5 border-b-2 border-[#f78166] py-3 font-semibold text-white"
        >
          <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 13.44V11.5a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-7.5zM1.75 1A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12H3v1.543a1.457 1.457 0 002.487 1.03L7.5 12.56h6.25A1.75 1.75 0 0015.5 10.75v-7.5A1.75 1.75 0 0013.75 1H1.75z"
            />
          </svg>
          Discussions
        </button>
        <button class="flex items-center gap-1.5 py-3 text-zinc-400 hover:text-zinc-200">
          <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75z"
            />
          </svg>
          Projects
        </button>
        <button class="flex items-center gap-1.5 py-3 text-zinc-400 hover:text-zinc-200">
          People
          <span
            class="rounded-full bg-zinc-700 px-1.5 py-0.5 text-[9px] text-zinc-300"
            >17</span
          >
        </button>
      </div>
    </div>

    <!-- Body: Sidebar + Main -->
    <div class="flex h-[480px] bg-[#0d1117]">

      <!-- LEFT SIDEBAR -->
      <div
        class="flex w-[220px] flex-shrink-0 flex-col border-r border-zinc-800 bg-[#0d1117] overflow-y-auto"
      >
        <!-- Search -->
        <div class="p-3">
          <div
            class="flex items-center gap-2 rounded-md border border-zinc-700 bg-[#161b22] px-2.5 py-1.5"
          >
            <svg
              class="h-3 w-3 flex-shrink-0 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span class="text-[11px] text-zinc-500">Search discussions</span>
          </div>
        </div>

        <!-- New Discussion button -->
        <div class="px-3 pb-3">
          <button
            class="w-full rounded-md bg-[#238636] px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-[#2ea043] transition"
          >
            New discussion
          </button>
        </div>

        <!-- Categories -->
        <div class="px-3 pb-2">
          <p class="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Categories
          </p>
          <ul class="space-y-0.5">
            <li v-for="cat in categories" :key="cat.id">
              <button
                @click="activeCategory = cat.id; activeDiscussion = null"
                :class="[
                  'flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-[11px] transition',
                  activeCategory === cat.id
                    ? 'bg-[#1f6feb]/20 font-semibold text-[#58a6ff]'
                    : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200',
                ]"
              >
                <span class="text-sm leading-none">{{ cat.icon }}</span>
                <span class="truncate">{{ cat.label }}</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="mt-auto border-t border-zinc-800 px-3 py-3">
          <p class="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Most helpful
          </p>
          <p class="text-[10px] leading-relaxed text-zinc-500">
            Mark someone's comment as an answer if it helps you resolve your
            question — they deserve the credit! 💗
          </p>
          <button
            class="mt-2 flex items-center gap-1 text-[10px] text-[#58a6ff] hover:underline"
          >
            <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M0 1.75A.75.75 0 01.75 1h14.5a.75.75 0 010 1.5H.75A.75.75 0 010 1.75zM1.5 6a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H2.25A.75.75 0 011.5 6zm0 4.25a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75zM0 14.25a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75z"
              />
            </svg>
            Community guidelines
          </button>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="flex flex-1 flex-col overflow-hidden min-w-0">

        <!-- ── LIST VIEW ── -->
        <template v-if="!selectedDiscussion">

          <!-- Filter bar -->
          <div
            class="flex flex-shrink-0 items-center gap-2 border-b border-zinc-800 bg-[#0d1117] px-4 py-2.5"
          >
            <div
              class="flex flex-1 items-center gap-1.5 rounded-md border border-zinc-700 bg-[#161b22] px-2.5 py-1.5"
            >
              <svg
                class="h-3 w-3 flex-shrink-0 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="text-[11px] text-zinc-500">is:open</span>
            </div>
            <button
              class="rounded-md border border-zinc-700 bg-[#161b22] px-2.5 py-1.5 text-[11px] text-zinc-300 hover:bg-zinc-700 transition"
            >
              Sort by: Latest activity ▾
            </button>
            <button
              class="rounded-md border border-zinc-700 bg-[#161b22] px-2.5 py-1.5 text-[11px] text-zinc-300 hover:bg-zinc-700 transition"
            >
              Label ▾
            </button>
            <button
              class="rounded-md border border-zinc-700 bg-[#161b22] px-2.5 py-1.5 text-[11px] text-zinc-300 hover:bg-zinc-700 transition"
            >
              Filter: Open ▾
            </button>
          </div>

          <!-- Discussion List -->
          <div class="flex-1 overflow-y-auto divide-y divide-zinc-800">
            <div
              v-for="disc in filteredDiscussions"
              :key="disc.id"
              @click="openDiscussion(disc.id)"
              class="flex cursor-pointer items-start gap-3 px-4 py-3 hover:bg-[#161b22] transition"
            >
              <!-- Upvote -->
              <div class="flex flex-shrink-0 flex-col items-center gap-1 pt-0.5">
                <svg
                  class="h-4 w-4 text-zinc-600"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 1.5a.5.5 0 01.354.146l3.5 3.5a.5.5 0 01-.708.708L8.5 3.207V13.5a.5.5 0 01-1 0V3.207L5.354 5.854a.5.5 0 11-.708-.708l3.5-3.5A.5.5 0 018 1.5z"
                  />
                </svg>
                <span class="text-[10px] font-semibold text-zinc-400">{{
                  disc.upvotes
                }}</span>
              </div>

              <!-- Icon -->
              <div
                :class="[
                  'mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[13px]',
                  disc.answered
                    ? 'border-[#2ea043] bg-[#0d1117]'
                    : 'border-zinc-700 bg-[#161b22]',
                ]"
              >
                {{ categoryIcon(disc.category) }}
              </div>

              <!-- Content -->
              <div class="min-w-0 flex-1">
                <div class="flex items-start gap-2 flex-wrap">
                  <span class="text-[13px] font-semibold text-[#e6edf3] hover:text-[#58a6ff] leading-snug">
                    {{ disc.title }}
                  </span>
                  <span
                    v-if="disc.answered"
                    class="mt-0.5 flex-shrink-0 rounded-full border border-[#2ea043] px-1.5 py-0.5 text-[9px] font-semibold text-[#3fb950]"
                  >
                    Answered
                  </span>
                </div>
                <div class="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-zinc-500">
                  <span
                    class="rounded-full border border-zinc-700 px-1.5 py-0.5 text-zinc-400"
                    >{{ disc.categoryLabel }}</span
                  >
                  <span
                    >{{ disc.username }} started on
                    <span class="text-zinc-400">{{ disc.date }}</span></span
                  >
                </div>
              </div>

              <!-- Comment count -->
              <div
                class="ml-auto flex flex-shrink-0 items-center gap-1 text-[10px] text-zinc-500"
              >
                <svg
                  class="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 13.44V11.5a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-7.5z"
                  />
                </svg>
                {{ disc.comments }}
              </div>
            </div>

            <!-- Empty state -->
            <div
              v-if="filteredDiscussions.length === 0"
              class="flex flex-col items-center justify-center py-16 text-zinc-500"
            >
              <svg
                class="mb-3 h-10 w-10 text-zinc-700"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 13.44V11.5a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-7.5z"
                />
              </svg>
              <p class="text-[12px]">Belum ada diskusi di kategori ini</p>
              <button
                class="mt-3 rounded-md bg-[#238636] px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-[#2ea043] transition"
              >
                Mulai diskusi baru
              </button>
            </div>
          </div>
        </template>

        <!-- ── DETAIL VIEW ── -->
        <template v-else>
          <!-- Back bar -->
          <div
            class="flex flex-shrink-0 items-center gap-2 border-b border-zinc-800 bg-[#0d1117] px-4 py-2.5"
          >
            <button
              @click="backToList"
              class="flex items-center gap-1.5 text-[11px] text-[#58a6ff] hover:underline"
            >
              <svg
                class="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali ke Discussions
            </button>
            <span class="text-[11px] text-zinc-600">/</span>
            <span
              class="max-w-[240px] truncate text-[11px] text-zinc-400"
              >{{ selectedDiscussion.title }}</span
            >
          </div>

          <!-- Detail scroll -->
          <div class="flex-1 overflow-y-auto px-4 py-4 space-y-4">

            <!-- OP Post -->
            <div>
              <div class="mb-2 flex items-center gap-2">
                <span
                  class="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400"
                  >{{ selectedDiscussion.categoryLabel }}</span
                >
                <span
                  v-if="selectedDiscussion.answered"
                  class="rounded-full border border-[#2ea043] px-2 py-0.5 text-[10px] font-semibold text-[#3fb950]"
                  >Answered</span
                >
              </div>

              <h2 class="mb-3 text-[15px] font-semibold text-[#e6edf3] leading-snug">
                {{ selectedDiscussion.title }}
              </h2>

              <!-- Author + body -->
              <div class="flex gap-3">
                <img
                  :src="selectedDiscussion.authorAvatar"
                  class="h-9 w-9 flex-shrink-0 rounded-full"
                />
                <div class="min-w-0 flex-1 rounded-md border border-zinc-700 bg-[#161b22] overflow-hidden">
                  <!-- comment header -->
                  <div
                    class="flex items-center gap-2 border-b border-zinc-800 bg-[#1c2128] px-3 py-2"
                  >
                    <span class="text-[11px] font-semibold text-[#e6edf3]">{{
                      selectedDiscussion.author
                    }}</span>
                    <span
                      v-if="selectedDiscussion.isAdmin"
                      class="rounded-full border border-[#388bfd] px-1.5 py-0.5 text-[9px] font-semibold text-[#58a6ff]"
                      >Admin</span
                    >
                    <span class="ml-auto text-[10px] text-zinc-500">{{
                      selectedDiscussion.timeAgo
                    }}</span>
                    <button class="text-zinc-500 hover:text-zinc-300">
                      <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                        <path
                          d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <!-- body -->
                  <div class="px-3 py-2.5">
                    <p class="text-[11px] leading-relaxed text-zinc-300">
                      {{ selectedDiscussion.body }}
                    </p>
                  </div>
                  <!-- reactions -->
                  <div class="flex items-center gap-2 border-t border-zinc-800 px-3 py-2">
                    <button
                      class="flex items-center gap-1 rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400 hover:bg-zinc-800 transition"
                    >
                      👍 {{ selectedDiscussion.upvotes }}
                    </button>
                    <button
                      class="flex items-center gap-1 rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400 hover:bg-zinc-800 transition"
                    >
                      + Reaksi
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Replies -->
            <div
              v-if="selectedDiscussion.replies.length"
              class="border-t border-zinc-800 pt-3 space-y-3"
            >
              <p class="text-[11px] font-semibold text-zinc-500">
                {{ selectedDiscussion.replies.length }} komentar
              </p>

              <div
                v-for="reply in selectedDiscussion.replies"
                :key="reply.id"
                class="flex gap-3"
              >
                <div class="flex flex-col items-center">
                  <img
                    :src="reply.avatar"
                    class="h-8 w-8 flex-shrink-0 rounded-full"
                  />
                  <div class="mt-1 w-px flex-1 bg-zinc-800" />
                </div>
                <div
                  :class="[
                    'mb-2 min-w-0 flex-1 overflow-hidden rounded-md border',
                    reply.isAnswer
                      ? 'border-[#2ea043]'
                      : 'border-zinc-700',
                    'bg-[#161b22]',
                  ]"
                >
                  <!-- reply header -->
                  <div
                    :class="[
                      'flex items-center gap-2 border-b px-3 py-2',
                      reply.isAnswer
                        ? 'border-[#2ea043] bg-[#0f2a18]'
                        : 'border-zinc-800 bg-[#1c2128]',
                    ]"
                  >
                    <span class="text-[11px] font-semibold text-[#e6edf3]">{{
                      reply.author
                    }}</span>
                    <span
                      v-if="reply.isAnswer"
                      class="flex items-center gap-1 rounded-full bg-[#0d2818] px-2 py-0.5 text-[9px] font-semibold text-[#3fb950]"
                    >
                      <svg class="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                      </svg>
                      Marked as answer
                    </span>
                    <span class="ml-auto text-[10px] text-zinc-500">{{
                      reply.timeAgo
                    }}</span>
                  </div>
                  <!-- reply body -->
                  <div class="px-3 py-2.5">
                    <p class="text-[11px] leading-relaxed text-zinc-300">
                      {{ reply.body }}
                    </p>
                  </div>
                  <!-- reply reactions -->
                  <div class="flex items-center gap-2 border-t border-zinc-800 px-3 py-1.5">
                    <button
                      class="flex items-center gap-1 rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400 hover:bg-zinc-800 transition"
                    >
                      👍 {{ reply.upvotes }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reply input -->
            <div class="flex gap-3 border-t border-zinc-800 pt-3">
              <div
                class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1f6feb]/30 text-[11px] font-bold text-[#58a6ff]"
              >
                Y
              </div>
              <div
                class="min-w-0 flex-1 rounded-md border border-zinc-700 bg-[#161b22]"
              >
                <div class="border-b border-zinc-800 px-3 py-1.5 flex gap-3">
                  <button class="text-[11px] text-zinc-400 hover:text-zinc-200 border-b border-zinc-400 pb-1">Write</button>
                  <button class="text-[11px] text-zinc-500 hover:text-zinc-200">Preview</button>
                </div>
                <div class="px-3 py-2.5">
                  <p class="text-[11px] text-zinc-600">Leave a comment...</p>
                </div>
                <div class="flex items-center justify-end gap-2 border-t border-zinc-800 px-3 py-2">
                  <button
                    class="rounded-md bg-[#238636] px-3 py-1 text-[11px] font-semibold text-white hover:bg-[#2ea043] transition"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>