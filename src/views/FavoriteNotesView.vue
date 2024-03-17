<template>
    <main>
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NoteItem v-for="favNote in storeNotes.favNotes" 
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

const storeNotes = useStoreNotes()

</script>