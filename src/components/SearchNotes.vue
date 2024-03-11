<template>
      <div class="max-w-lg mx-auto my-8 sm:my-16 relative">
        <input v-model="storeNotes.searchTerm" type="text" class="py-4 pl-10 pr-12 rounded-2xl bg-white shadow-md shadow-slate-200/50 focus:ring-2 focus:ring-primaryColor w-full text-darkColor placeholder-darkColor border-none truncate dark:bg-slate-800 dark:placeholder:text-white dark:text-white dark:shadow-slate-900/50" placeholder="Search notes...">
        <Icon icon="mdi:magnify" class="text-darkColor absolute left-3 top-1/2 -translate-y-1/2 dark:text-white" width="24" height="24" />
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