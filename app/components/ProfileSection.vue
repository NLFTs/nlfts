<template>
  <section class="py-24 bg-white dark:bg-[#09090b] transition-colors duration-300">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="tracking-[0.3em] text-blue-500">tentang kami 😃</h2>
            <h3 class="text-4xl md:text-5xl font-light tracking-tighter text-zinc-900 dark:text-zinc-100">
              Membangun masa depan <br />lewat kolaborasi terbuka.
            </h3>
          </div>

          <div class="space-y-4 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            <p>
              Kami adalah komunitas startup yang berfokus pada inovasi teknologi perangkat lunak. 
              Dengan prinsip kolaborasi terbuka, kami memastikan setiap inovasi memiliki 
              hak kepemilikan intelektual yang jelas dan terstruktur.
            </p>
            <p>
              Di sini, kami menggabungkan efisiensi workflow modern dengan ekosistem 
              yang mendukung keberlanjutan teknologi di Indonesia.
            </p>
          </div>
        </div>

        <div class="sticky top-24 w-full">
          <div class="relative w-full aspect-[4/3] overflow-hidden dark:border-white/10">
            <img 
              src="/location/indo.webp" 
              alt="Tim sedang berkolaborasi" 
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-zinc-900 dark:border-white"></div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-zinc-900 dark:border-white"></div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>