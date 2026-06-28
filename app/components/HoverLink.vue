<template>
  <NuxtLink
    :to="to"
    :target="target"
    :external="external"
    class="text-sm text-zinc-900 dark:text-zinc-100 hover:text-primary-500 transition-colors"
    @mouseenter="startShuffle"
  >
    {{ displayText }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['label', 'to', 'target', 'external'])
const displayText = ref(props.label)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'

const startShuffle = () => {
  let iterations = 0
  const interval = setInterval(() => {
    displayText.value = props.label
      .split('')
      .map((letter, index) => {
        if (index < iterations) return props.label[index]
        return characters[Math.floor(Math.random() * characters.length)]
      })
      .join('')

    if (iterations >= props.label.length) clearInterval(interval)
    iterations += 1 / 3 // Kecepatan efek (semakin kecil semakin lambat)
  }, 50)
}
</script>