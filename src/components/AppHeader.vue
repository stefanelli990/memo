<template>
    <header class="bg-white shadow-lg shadow-slate-100 dark:bg-slate-800 dark:shadow-slate-900/50">
      <div class="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 class="text-2xl font-bold">MemoVue</h1>
        <button @click="toggleDark()" class="flex items-center space-x-1 dark:text-white text-sm">
          <Icon class="text-yellow-400" v-if="!isDark" icon="material-symbols-light:dark-mode-rounded" width="24" height="24"/>
          <Icon class="text-yellow-400" v-else icon="fluent:weather-sunny-28-filled" width="24" height="24"/>
          <span class="font-semibold">{{ !isDark ? 'Dark' : 'Light' }} Mode</span>
        </button>
      </div>
    </header>
</template>

<script setup>

import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

