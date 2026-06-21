<template>
  <div class="min-h-screen flex flex-col font-sans bg-white text-zinc-900 dark:bg-black dark:text-white">

    <!-- Banner Header -->
    <header class="w-full">
      <img
        src="/images/station.png"
        alt="Banner"
        class="w-full h-80 md:h-96 object-cover pointer-events-none select-none"
        style="-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;"
        oncontextmenu="return false;"
      />
    </header>

    <!-- Main Container -->
    <div class="max-w-[1120px] w-full mx-auto p-8 md:p-16 lg:p-20 flex flex-col flex-grow">

      <!-- Hero -->
      <header class="flex flex-col md:flex-row justify-between items-start gap-8">
        <h1
          class="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-[-0.03em] leading-[1.08] max-w-[540px]"
        >
          NLFTs membebaskan Developer untuk
          <br class="hidden sm:inline" />
          mengirim apa yang akan datang
        </h1>

        <div class="flex flex-col items-start gap-5 max-w-[340px] pt-1">
          <p class="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            NLFTs adalah perusahaan sekaligus komunitas developer yang berfokus
            pada Developer Experience (DX) dan adopsi teknologi modern. Kami
            berada di persimpangan antara building products dan building people
          </p>

          <button
            class="cursor-pointer bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2"
          >
            <svg
              class="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="6" y="6" width="12" height="14" rx="2" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
            Bergabung dengan kami
          </button>
        </div>
      </header>

      <!-- Features -->
      <section
        class="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
      >
        <article>
          <div
            class="flex items-center gap-2 text-[11px] font-mono tracking-[0.1em] mb-2 uppercase text-zinc-500 dark:text-zinc-500"
          >
            <span class="opacity-70">●●●</span>
            Relasi
          </div>

          <p class="text-base leading-relaxed text-zinc-900 dark:text-zinc-100">
            NLFTs adalah tempat bagi developer untuk membangun relasi yang
            bermakna
          </p>
        </article>

        <article>
          <div
            class="flex items-center gap-2 text-[11px] font-mono tracking-[0.1em] mb-2 uppercase text-zinc-500"
          >
            <span class="font-mono text-xs">&gt;_</span>
            Kolaborasi
          </div>

          <p class="text-base leading-relaxed text-zinc-900 dark:text-zinc-100">
            Berkolaborasi dengan developer lain untuk membangun produk, proyek
            open source, dan inisiatif komunitas
          </p>
        </article>

        <article>
          <div
            class="flex items-center gap-2 text-[11px] font-mono tracking-[0.1em] mb-2 uppercase text-zinc-500"
          >
            <span class="text-xs">⟳</span>
            Chat Public
          </div>

          <p class="text-base leading-relaxed text-zinc-900 dark:text-zinc-100">
            Berdiskusi dan berkolaborasi dengan komunitas developer melalui
            chat publik, 24/7, di Discord
          </p>
        </article>
      </section>

      <!-- Exhibitor Section -->
      <section
        class="mt-24 md:mt-32 p-8 md:p-16 rounded-xl max-w-6xl mx-auto border bg-white border-zinc-200 dark:bg-black dark:border-zinc-800"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <!-- Left -->
          <div class="flex flex-col gap-6">

            <div
              class="w-full h-72 rounded-lg overflow-hidden border bg-zinc-100 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
            >
              <img
                src="/images/studio.png"
                alt="Exhibitor Area"
                class="w-full h-full object-cover pointer-events-none select-none"
                style="-webkit-user-drag:none;user-drag:none;"
                oncontextmenu="return false;"
              />
            </div>

            <h2 class="text-3xl font-bold">
              Daftar Exhibitor
            </h2>

            <p
              class="text-sm leading-relaxed max-w-sm text-zinc-600 dark:text-zinc-400"
            >
              Punya produk untuk Komunitas Developer? Daftarkan diri kamu
              sebagai exhibitor di NLFTs dan tunjukkan produkmu ke ratusan
              developer yang hadir di event nanti.
            </p>

            <button
              class="w-fit px-6 py-2 rounded-full font-semibold transition bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Pesan Booth
            </button>

          </div>

          <!-- Right -->
          <div class="flex flex-col gap-6">

            <div
              class="flex items-center gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800"
            >
              <div
                class="w-16 h-16 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/264552738?s=200&v=4"
                  alt="Sponsor"
                  class="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 class="font-semibold">
                  Daftar Sponsor
                </h3>

                <p class="text-xs mb-2 text-zinc-600 dark:text-zinc-400">
                  Brand Kamu akan sangat membantu komunitas developer.
                </p>

                <button
                  class="text-xs px-3 py-1 rounded border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Sponsor us
                </button>
              </div>
            </div>

            <div
              class="flex items-center gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800"
            >
              <div
                class="w-16 h-16 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/287043454?s=200&v=4"
                  alt="Media"
                  class="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 class="font-semibold">
                  Daftar Media Partner
                </h3>

                <p class="text-xs mb-2 text-zinc-600 dark:text-zinc-400">
                  Bantu kami menyebarkan berita dan update terkini tentang event
                  ini.
                </p>

                <button
                  class="text-xs px-3 py-1 rounded border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Join as Media
                </button>
              </div>
            </div>

            <div
              class="bg-hatch mt-4 p-6 rounded-lg text-center border border-dashed border-zinc-300 dark:border-zinc-700"
            >
              <p class="text-sm mb-4">
                Space ini kami siapkan untuk partner yang tepat. Apakah itu
                kamu?
              </p>

              <button
                class="text-sm font-semibold px-4 py-2 border transition border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
              >
                Become a Partner
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.bg-hatch {
  background-image: linear-gradient(
    45deg,
    rgba(113, 113, 122, 0.15) 10%,
    transparent 10%,
    transparent 50%,
    rgba(113, 113, 122, 0.15) 50%,
    rgba(113, 113, 122, 0.15) 60%,
    transparent 60%,
    transparent
  );

  background-size: 20px 20px;
}
</style>