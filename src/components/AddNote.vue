<template>
    <li @click="storeNotes.addNoteModal" class="bg-white text-primaryColor mx-auto h-60 w-full rounded-2xl flex items-center justify-center flex-col space-y-4 cursor-pointer shadow-md shadow-slate-200/50 dark:bg-slate-800 dark:shadow-slate-900/50" :class="!storeNotes.filterNotes.length ? 'max-w-sm' : ''">
      <Icon icon="bi:plus-circle-dotted" width="75" height="75" />
      <span class="text-lg font-bold">Add New Note</span>
    </li>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes'
import { Icon } from '@iconify/vue'

const storeNotes = useStoreNotes()

</script>