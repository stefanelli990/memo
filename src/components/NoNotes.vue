<template>
    <h3  class="text-xl font-semibold text-center max-w-lg mx-auto truncate">There are no notes for "{{ storeNotes.searchTerm }}"</h3>
</template>

<script setup>
import { useStoreNotes } from "../stores/storeNotes.js"
const storeNotes = useStoreNotes()

</script>