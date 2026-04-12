<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#09090b] selection:bg-primary/30 flex flex-col items-center">
    <div class="w-full max-w-7xl mx-auto border-x border-gray-200 dark:border-white/10 flex flex-col flex-grow min-h-screen relative">
      <AppHeader />

      <UMain class="flex-grow">
        <UContainer>
          <UPage>
            <template #left>
              <UPageAside>
                <template #top>
                  <UContentSearchButton :collapsed="false" />
                </template>

                <UContentNavigation
                  :navigation="navigation"
                  highlight
                />
              </UPageAside>
            </template>

            <slot />
          </UPage>
        </UContainer>
      </UMain>

      <AppFooter class="border-t border-gray-200 dark:border-white/10" />
    </div>
  </div>
</template>
