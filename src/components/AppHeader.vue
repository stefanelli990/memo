<template>
    <header class="bg-white text-sm shadow-lg shadow-slate-100 dark:bg-slate-800 dark:shadow-slate-900/50">
      <div class="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div class="flex items-center space-x-4 flex-1">
          <button class="md:hidden"><Icon icon="solar:hamburger-menu-linear" width="32px" height="32px" /></button>
          <RouterLink to="/" class="text-2xl font-extrabold whitespace-nowrap"><span class="text-primaryColor">Memo</span> Vue</RouterLink>
          <SearchNotes class="hidden md:block"/>
        </div>
        <button class="text-primaryColor flex items-center justify-center h-12 w-12 bg-primaryColor-light rounded-full dark:bg-slate-700 md:hidden">
          <Icon icon="streamline:magnifying-glass-solid" width="18" height="18" />
        </button>
        <div class="pl-4 hidden items-center space-x-8 font-semibold md:flex ">
          <nav class="space-x-4">
            <RouterLink to="/" active-class="active-link">Add Notes</RouterLink>
            <RouterLink to="/favorite-notes" active-class="active-link">Favorite Notes</RouterLink>
          </nav>
          <div class="flex space-x-3">
            <button @click="toggleDark()" class="text-primaryColor flex items-center justify-center h-12 w-12 bg-primaryColor-light rounded-full dark:bg-slate-700">
              <Icon v-if="!isDark" icon="f7:moon-stars-fill" width="24" height="24"/>
              <Icon v-else icon="fluent:weather-sunny-28-filled" width="24" height="24"/>
            </button>
            <a href="https://github.com/stefanelli990/memo-vue" target="_blank" class="text-primaryColor flex items-center justify-center h-12 w-12 bg-primaryColor-light rounded-full dark:bg-slate-700">
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SearchNotes from "../components/SearchNotes.vue"
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

