<template>
  <div class="min-h-screen bg-white dark:bg-[#060606] text-zinc-900 dark:text-white px-6 py-24 transition-colors duration-300">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      
      <!-- Sisi Kiri: Judul dan Gambar -->
      <div class="relative space-y-8">
        <h1 class="text-5xl md:text-6xl font-light tracking-tight">Pertanyaan yang Sering Ditanya</h1>
        <p class="text-zinc-600 dark:text-zinc-400 text-lg">Jawaban untuk pertanyaan seputar teknis, sistem, dan operasional.</p>
        
        <!-- Gambar (Tampil di Desktop, Hilang di Mobile) -->
        <div class="hidden md:block w-full max-w-[400px] opacity-80 dark:opacity-40 select-none">
          <img 
            src="/images/mas.png" 
            alt="Ilustrasi Pertanyaan" 
            class="w-full h-auto object-contain" 
            onerror="this.style.display='none'"
          />
        </div>
        
      </div>

      <!-- Sisi Kanan: Accordion FAQ -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-[#0a0a0a] overflow-hidden transition-all duration-300"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors"
          >
            <span class="font-medium text-zinc-900 dark:text-zinc-200">{{ faq.question }}</span>
            <span class="text-zinc-500 text-xl transition-transform" :class="activeIndex === index ? 'rotate-180' : ''">
              +
            </span>
          </button>
          
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed border-t border-zinc-200 dark:border-zinc-900 pt-4"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = ref([
  {
    question: "Apa itu komunitas NLFTs?",
    answer: "NLFTs adalah komunitas teknologi yang berfokus pada pengembangan perangkat lunak, open-source, kolaborasi proyek, serta berbagi pengetahuan antar developer."
  },
  {
    question: "Apakah saya harus sudah mahir coding untuk bergabung?",
    answer: "Tidak. Komunitas ini terbuka untuk semua level, mulai dari pemula yang baru belajar hingga developer berpengalaman yang ingin berbagi ilmu dan berkolaborasi."
  },
  {
    question: "Teknologi apa saja yang dibahas di komunitas ini?",
    answer: "Kami membahas berbagai teknologi seperti JavaScript, TypeScript, Vue, Nuxt, React, Node.js, Golang, DevOps, Cloud Computing, hingga keamanan aplikasi."
  },
  {
    question: "Bagaimana cara berkontribusi pada proyek open-source?",
    answer: "Anda dapat bergabung ke repositori proyek yang aktif, memilih issue yang tersedia, lalu mengirimkan pull request setelah mengikuti panduan kontribusi yang berlaku."
  },
  {
    question: "Apakah komunitas ini mengadakan event atau workshop?",
    answer: "Ya. Kami secara berkala mengadakan diskusi teknis, workshop, code review session, sharing pengalaman industri, dan kegiatan komunitas lainnya."
  },
  {
    question: "Apakah ada program mentoring untuk pemula?",
    answer: "Tentu. Anggota yang lebih berpengalaman dapat membantu memberikan arahan belajar, review kode, dan berbagi praktik terbaik dalam pengembangan perangkat lunak."
  },
  {
    question: "Bagaimana cara bergabung dengan komunitas?",
    answer: "Anda cukup mendaftar melalui platform komunitas yang tersedia dan bergabung ke kanal diskusi untuk mulai berinteraksi dengan anggota lainnya."
  },
  {
    question: "Apakah keanggotaan komunitas ini berbayar?",
    answer: "Sebagian besar aktivitas komunitas dapat diikuti secara gratis. Beberapa program khusus atau kegiatan tertentu mungkin memiliki ketentuan tersendiri."
  }
]);
</script>