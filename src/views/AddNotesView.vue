<template>
    <main>
        <NoNotes v-if="!storeNotes.filterNotes.length && storeNotes.searchTerm"/>
        <NoteList v-else/>
    </main>
</template>

<script setup>
import NoNotes from '../components/NoNotes.vue'
import NoteList from '../components/NoteList.vue'

import { useStoreNotes } from "../stores/storeNotes"

const storeNotes = useStoreNotes()

</script>