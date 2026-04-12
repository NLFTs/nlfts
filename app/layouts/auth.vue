<template>
  <div class="min-h-screen bg-white dark:bg-[#09090b] selection:bg-primary/30 flex flex-col items-center">
    <div class="w-full max-w-7xl mx-auto border-x border-gray-200 dark:border-white/10 flex flex-col flex-grow min-h-screen relative items-center justify-center p-6 sm:p-12">
      <UButton
        icon="i-lucide-chevron-left"
        to="/"
        size="xl"
        color="neutral"
        variant="subtle"
        class="absolute left-8 top-8 rounded-full z-10"
      />

      <UPageCard
        variant="subtle"
        class="max-w-sm w-full"
      >
        <slot />
      </UPageCard>
    </div>
  </div>
</template>
