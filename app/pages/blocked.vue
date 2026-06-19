<script setup lang="ts">
useSeoMeta({
  title: 'Access blocked',
  description: 'Akses ke situs ini diblokir karena deteksi sebagai bot atau agen otomatis.'
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
    <div class="max-w-2xl w-full rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl p-12 text-center">
      <p class="text-sm uppercase tracking-[0.35em] text-rose-300/90">Access blocked</p>
      <h1 class="mt-5 text-4xl font-semibold">Akses ditolak</h1>
      <p class="mt-4 text-slate-300">Permintaan Anda terdeteksi sebagai bot atau agen otomatis. Jika ini adalah kesalahan, coba akses kembali dari browser biasa.</p>
      <div class="mt-8">
        <a href="/" class="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Kembali ke Beranda</a>
      </div>
    </div>
  </div>
</template>
