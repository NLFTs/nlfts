<template>
  <div class="min-h-screen bg-white dark:bg-[#09090b] selection:bg-primary/30 flex flex-col items-center">
    <!-- Main Content Frame -->
    <div class="w-full max-w-7xl mx-auto border-x border-zinc-200/80 dark:border-zinc-800 flex flex-col flex-grow min-h-screen relative">
      <AppHeader />

      <UMain class="flex-grow">
        <slot />
      </UMain>

      <AppFooter class="border-t border-zinc-200/80 dark:border-zinc-800" />
    </div>
  </div>
</template>

<style scoped>
/* Ensure smooth vertical scrolling and consistent aesthetic */
:deep(body) {
  scroll-behavior: smooth;
}
</style>
