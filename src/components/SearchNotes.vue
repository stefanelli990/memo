<template>
      <div class="max-w-lg mx-auto my-8 sm:my-16 relative">
        <input v-model="storeNotes.searchTerm" type="text" class="py-4 px-6 pl-10 rounded-2xl bg-gray-100 focus:ring-2 focus:ring-primaryColor w-full text-darkColor placeholder-darkColor border-none dark:bg-slate-800 dark:placeholder:text-slate-600 dark:text-white" placeholder="Search notes...">
        <Icon icon="mdi:magnify" class="text-darkColor absolute left-3 top-1/2 -translate-y-1/2 dark:text-slate-600" width="24" height="24" />
        <button @click="resetSearchInput" v-show="storeNotes.searchTerm" class="absolute right-4 top-1/2 -translate-y-1/2 text-primaryColor text-xl">
          <Icon icon="carbon:close-filled" />
        </button>
      </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes();

const resetSearchInput = () => {
  storeNotes.searchTerm = ''
}

</script>