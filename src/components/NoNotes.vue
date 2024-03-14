<template>
    <div class="flex items-center flex-col">
        <Icon icon="ic:round-search-off" width="200" height="200" class="opacity-5"/>
        <h3  class="text-xl font-semibold text-center max-w-lg mx-auto truncate">There are no notes for "{{ storeNotes.searchTerm }}"</h3>
    </div>
</template>

<script setup>

import { useStoreNotes } from "../stores/storeNotes.js"
import { Icon } from '@iconify/vue'
const storeNotes = useStoreNotes()

</script>