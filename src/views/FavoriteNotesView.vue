<template>
    <main>
        <p v-if="storeNotes.favNotes.length === 0 && !storeNotes.searchTerm" class="text-lg max-w-md mx-auto text-center font-semibold">Favorite notes will appear here</p>
        <NoNotes v-if="!storeNotes.filterFavNotes.length && storeNotes.searchTerm" note-type="favorite notes"/>
        <ul v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NoteItem v-for="favNote in storeNotes.filterFavNotes" 
            :key="favNote.id"
            :title="favNote.title"
            :description="favNote.description"
            :color="favNote.color"
            :date="favNote.date"
            :id="favNote.id"
            :favorite="favNote.isFav"/>
        </ul>
    </main>
</template>

<script setup>

import NoteItem from '../components/NoteItem.vue'
import { useStoreNotes } from "../stores/storeNotes"
import NoNotes from '../components/NoNotes.vue'

const storeNotes = useStoreNotes()

</script>