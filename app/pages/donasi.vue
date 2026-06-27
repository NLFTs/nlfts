<template>
  <main class="page">
    <!-- Import Poppins -->
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Support our work</p>
          <h1 class="hero-title">
            Bantu kami terus<br />
            <span class="muted">membangun hal yang bermakna.</span>
          </h1>
          <p class="hero-desc">
            Setiap kontribusi — berapapun — membantu kami menjaga proyek ini tetap hidup, terbuka, dan berkembang.
          </p>
        </div>
        <div class="hero-visual">
          <img
            src="/images/donasi.png"
            alt="Ilustrasi support"
            class="hero-image"
          />
        </div>
      </div>
    </section>

    <!-- GRID PLATFORM -->
    <section class="platforms-section">
      <div class="section-header">
        <span class="section-label">Pilih Platform</span>
        <div class="section-line" />
      </div>

      <div class="platforms-grid">
        <a
          v-for="(p, i) in platforms"
          :key="p.id"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="platform-card"
          :class="{ 'card-featured': i === 0 }"
        >
          <!-- Index / number -->
          <span class="card-num">0{{ i + 1 }}</span>

          <!-- Icon area -->
          <div class="card-icon-wrap">
            <svg
              v-if="p.id === 'kreate'"
              class="card-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <svg
              v-else-if="p.id === 'saweria'"
              class="card-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <svg
              v-else-if="p.id === 'bmc'"
              class="card-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <svg
              v-else-if="p.id === 'afdian'"
              class="card-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <svg
              v-else-if="p.id === 'github'"
              class="card-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>

          <!-- Content -->
          <div class="card-body">
            <h3 class="card-name">{{ p.name }}</h3>
            <p class="card-desc">{{ p.desc }}</p>
          </div>

          <!-- Footer -->
          <div class="card-footer">
            <span class="card-tag">{{ p.tag }}</span>
            <svg class="arrow-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </a>
      </div>
    </section>

    <!-- CALLOUT BOTTOM -->
    <section class="callout-section">
      <div class="callout-grid">
        <div class="callout-left">
          <p class="callout-label">Transparansi</p>
          <h2 class="callout-title">
            Dana digunakan untuk<br />infrastruktur & pengembangan.
          </h2>
        </div>
        <div class="callout-right">
          <div class="callout-stat">
            <span class="stat-num">100%</span>
            <span class="stat-desc">masuk ke biaya operasional proyek</span>
          </div>
          <div class="callout-stat">
            <span class="stat-num">Open</span>
            <span class="stat-desc">kode sumber bebas diakses siapa saja</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER NOTE -->
    <footer class="page-footer">
      <p class="footer-text">
        NLFTs — Startup berbasis komunitas ·
        <a href="https://nlfts.dev" class="footer-link">nlfts.dev</a>
      </p>
    </footer>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Donasi — NLFTs',
  description: 'Dukung pengembangan NLFTs melalui berbagai platform donasi. Setiap kontribusi membantu kami terus membangun teknologi terbuka.',
  ogTitle: 'Donasi — NLFTs',
  ogDescription: 'Dukung kami melalui Kreate, Saweria, Buy Me a Coffee, Afdian, atau GitHub Sponsors.',
  ogImage: 'https://nlfts.dev/og/donasi.png',
  twitterCard: 'summary_large_image',
})

const platforms = [
  {
    id: 'kreate',
    name: 'Kreate.gg',
    desc: 'Platform kreator lokal Indonesia. Dukung kami dengan top-up virtual yang fleksibel.',
    url: 'https://kreate.gg/nlfts',
    tag: 'Local · IDR',
  },
  {
    id: 'saweria',
    name: 'Saweria',
    desc: 'Cara paling mudah mendukung kreator Indonesia. Transfer langsung, langsung terima.',
    url: 'https://saweria.co/nlfts',
    tag: 'Local · IDR',
  },
  {
    id: 'bmc',
    name: 'Buy Me a Coffee',
    desc: 'Platform donasi global yang populer. Dukung sekali atau berlangganan bulanan.',
    url: 'https://buymeacoffee.com/nlfts',
    tag: 'Global · USD',
  },
  {
    id: 'afdian',
    name: 'Afdian',
    desc: 'Platform dukungan kreator populer di Asia. Cocok untuk pendukung dari kawasan Asia.',
    url: 'https://afdian.com/nlfts',
    tag: 'Asia · CNY',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    desc: 'Dukung langsung lewat GitHub. Gratis fee, 100% masuk ke pengembang.',
    url: 'https://github.com/sponsors/nlfts',
    tag: 'Global · USD',
  },
]
</script>

<style scoped>
.page {
  --donasi-bg: #fcfdfc;
  --donasi-surface: #ffffff;
  --donasi-surface-hover: #f7faf7;
  --donasi-border: #e5e7eb;
  --donasi-border-strong: #d1d5db;
  --donasi-text: #0f172a;
  --donasi-text-muted: #475569;
  --donasi-text-soft: #64748b;
  --donasi-accent: #111827;
  --donasi-shine: rgba(15, 23, 42, 0.06);

  font-family: 'Poppins', sans-serif;
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--donasi-shine) 40%, transparent), transparent 40%),
    var(--donasi-bg);
  color: var(--donasi-text);
  min-height: 100vh;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

:global(html.dark) .page,
:global(.dark) .page {
  --donasi-bg: #04070b;
  --donasi-surface: #0b1118;
  --donasi-surface-hover: #111827;
  --donasi-border: rgba(255, 255, 255, 0.11);
  --donasi-border-strong: rgba(255, 255, 255, 0.16);
  --donasi-text: #f8fafc;
  --donasi-text-muted: #cbd5e1;
  --donasi-text-soft: #94a3b8;
  --donasi-accent: #ffffff;
  --donasi-shine: rgba(255, 255, 255, 0.07);
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .page {
    --donasi-bg: #04070b;
    --donasi-surface: #0b1118;
    --donasi-surface-hover: #111827;
    --donasi-border: rgba(255, 255, 255, 0.11);
    --donasi-border-strong: rgba(255, 255, 255, 0.16);
    --donasi-text: #f8fafc;
    --donasi-text-muted: #cbd5e1;
    --donasi-text-soft: #94a3b8;
    --donasi-accent: #ffffff;
    --donasi-shine: rgba(255, 255, 255, 0.07);
  }
}

.hero {
  border-bottom: 1px solid var(--donasi-border);
  padding: 112px 48px 24px;
}

.hero-inner {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  align-items: end;
  gap: 40px;
  position: relative;
}

.hero-copy {
  max-width: 620px;
  padding-top: 8px;
}

.hero-visual {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: -1px;
  padding-top: 24px;
}

.hero-image {
  width: min(100%, 360px);
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
}

.eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--donasi-text-soft);
  margin: 0 0 24px;
}

.hero-title {
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
  color: var(--donasi-text);
}

.hero-title .muted {
  color: var(--donasi-text-soft);
  font-weight: 300;
}

.hero-desc {
  font-size: 15px;
  font-weight: 400;
  color: var(--donasi-text-muted);
  line-height: 1.65;
  margin: 0;
  max-width: 480px;
}

.platforms-section {
  padding: 64px 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.section-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--donasi-text-soft);
  white-space: nowrap;
}

.section-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--donasi-border), transparent);
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--donasi-border);
  border-radius: 24px;
  overflow: hidden;
  background: var(--donasi-surface);
  box-shadow: 0 12px 40px var(--donasi-shine);
}

@media (max-width: 900px) {
  .platforms-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .hero-visual {
    justify-content: flex-start;
  }

  .hero-image {
    width: min(100%, 300px);
  }
}

@media (max-width: 560px) {
  .platforms-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 88px 24px 20px;
  }

  .platforms-section {
    padding: 48px 24px;
  }

  .callout-section {
    padding: 56px 24px;
  }

  .hero-image {
    width: 100%;
    max-width: 260px;
  }
}

.platform-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 36px 32px;
  border-right: 1px solid var(--donasi-border);
  border-bottom: 1px solid var(--donasi-border);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
  background: var(--donasi-surface);
}

.platform-card:nth-child(3n) {
  border-right: none;
}

.platform-card:nth-last-child(-n+3) {
  border-bottom: none;
}

.platform-card:hover,
.platform-card:focus-visible {
  background: var(--donasi-surface-hover);
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 var(--donasi-border-strong);
}

.platform-card:hover .arrow-icon {
  transform: translateX(3px);
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--donasi-accent), transparent);
}

.card-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--donasi-text-soft);
  font-variant-numeric: tabular-nums;
  margin-bottom: 28px;
  display: block;
}

.card-icon-wrap {
  margin-bottom: 20px;
}

.card-icon {
  width: 22px;
  height: 22px;
  color: var(--donasi-accent);
}

.card-body {
  flex: 1;
}

.card-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--donasi-text);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 13px;
  font-weight: 400;
  color: var(--donasi-text-muted);
  line-height: 1.6;
  margin: 0;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--donasi-border);
}

.card-tag {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--donasi-text-soft);
}

.arrow-icon {
  width: 16px;
  height: 16px;
  color: var(--donasi-accent);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.callout-section {
  border-top: 1px solid var(--donasi-border);
  border-bottom: 1px solid var(--donasi-border);
  padding: 72px 48px;
  background: color-mix(in srgb, var(--donasi-surface) 70%, transparent);
}

.callout-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

@media (max-width: 760px) {
  .callout-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.callout-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--donasi-text-soft);
  margin: 0 0 16px;
}

.callout-title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.025em;
  color: var(--donasi-text);
  margin: 0;
}

.callout-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 4px;
}

.callout-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--donasi-border);
}

.callout-stat:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.stat-num {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--donasi-text);
  line-height: 1;
}

.stat-desc {
  font-size: 13px;
  font-weight: 400;
  color: var(--donasi-text-muted);
}

.page-footer {
  padding: 28px 48px;
  border-top: 1px solid var(--donasi-border);
}

.footer-text {
  font-size: 12px;
  font-weight: 400;
  color: var(--donasi-text-soft);
  margin: 0;
  text-align: center;
}

.footer-link {
  color: var(--donasi-text-soft);
  text-decoration: none;
}

.footer-link:hover {
  color: var(--donasi-accent);
}
</style>