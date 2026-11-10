<script setup lang="ts">
import type { IconName } from './icons/types'

withDefaults(defineProps<{ icon: IconName; size?: number | string }>(), { size: 19 })
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" :style="{ width: size, height: size }">
    <template v-if="icon === 'grid'"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></template>
    <template v-else-if="icon === 'folder'"><path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h4l2 2h6A2.5 2.5 0 0 1 20.5 9v8A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7Z"/><path d="M3.5 9.5h17"/></template>
    <template v-else-if="icon === 'chart'"><path d="M4 19.5h16M6.5 16v-4m5 4V6m5 10V9"/><circle cx="6.5" cy="10" r="1"/><circle cx="11.5" cy="4" r="1"/><circle cx="16.5" cy="7" r="1"/></template>
    <template v-else-if="icon === 'document'"><path d="M6.5 3.5h7l4 4v11a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"/><path d="M13.5 3.5v4h4M8 12h6M8 15.5h7"/></template>
    <template v-else-if="icon === 'settings'"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .32 1.76l.05.05-1.8 3.12-.07-.02a1.6 1.6 0 0 0-1.69.6l-.04.06h-3.6l-.03-.07a1.6 1.6 0 0 0-1.5-1.02 1.6 1.6 0 0 0-1.5 1.02l-.03.07h-3.6l-.04-.06a1.6 1.6 0 0 0-1.69-.6l-.07.02-1.8-3.12.05-.05A1.6 1.6 0 0 0 2.68 15l-.06-.03v-3.6l.06-.03a1.6 1.6 0 0 0 .68-2.78l-.05-.05 1.8-3.12.07.02a1.6 1.6 0 0 0 1.69-.6l.04-.06h3.6l.03.07a1.6 1.6 0 0 0 3 0l.03-.07h3.6l.04.06a1.6 1.6 0 0 0 1.69.6l.07-.02 1.8 3.12-.05.05a1.6 1.6 0 0 0 .68 2.78l.06.03v3.6l-.06.03Z" transform="translate(1.35 -0.35) scale(.89)"/></template>
  </svg>
</template>

<style scoped>
svg { display: block; flex-shrink: 0; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
</style>
