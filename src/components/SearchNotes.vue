<template>
      <div class="relative w-full max-w-[400px]">
        <input v-model="storeNotes.searchTerm" type="text" class="max-w-5xl w-full py-3 pl-10 pr-12 rounded-full bg-slate-100 text-sm focus:ring-2 focus:ring-primaryColor text-darkColor placeholder-darkColor/40 border-none truncate dark:bg-slate-700 dark:placeholder:text-white dark:text-white" placeholder="Search notes...">
        <Icon icon="mdi:magnify" class="text-darkColor/40 absolute left-4 top-1/2 -translate-y-1/2 dark:text-white" width="20" height="20" />
        <button @click="resetSearchInput" v-show="storeNotes.searchTerm" class="absolute right-4 top-1/2 -translate-y-1/2 text-primaryColor text-xl">
          <Icon icon="carbon:close-filled" />
        </button>
      </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes()

const resetSearchInput = () => {
  storeNotes.searchTerm = ''
}

</script>