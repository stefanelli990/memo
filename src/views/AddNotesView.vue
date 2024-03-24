<template>
    <main>
        <NoNotes v-if="!storeNotes.filterNotes.length && storeNotes.searchTerm" note-type="notes"/>
        <ul v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div v-if="!storeNotes.filterNotes.length" class="col-span-3">
            <AddNote/>
            <h3 class="mt-8 text-lg max-w-md mx-auto text-center font-semibold">Ready to capture your ideas? Create your note and begin your note-taking journey!</h3>
            </div>
            <AddNote v-else/>
            <NoteItem
            v-for="note in storeNotes.filterNotes"
            :key="note.id"
            :title="note.title"
            :description="note.description"
            :color="note.color"
            :date="note.date"
            :id="note.id"
            :favorite="note.isFav"
            />
        </ul>
    </main>
</template>

<script setup>

import NoNotes from '../components/NoNotes.vue'
import NoteItem from "../components/NoteItem.vue"
import AddNote from "../components/AddNote.vue"
import { useStoreNotes } from "../stores/storeNotes"

const storeNotes = useStoreNotes()

</script>