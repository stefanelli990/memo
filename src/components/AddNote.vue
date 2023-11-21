<template>
    <button @click="storeNotes.addNoteModal" class="bg-primaryColor h-20 w-20 fixed bottom-8 right-8 rounded-full shadow-md text-white flex items-center justify-center cursor-pointer hover:opacity-80">
      <Icon width="40" height="40" icon="fluent:tab-add-20-filled"/>
    </button>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes'
import { Icon } from '@iconify/vue';

const storeNotes = useStoreNotes()

</script>