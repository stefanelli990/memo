<template>
    <ul class="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NoteItem v-for="note in storeNotes.filterNotes" :key="note.id" :title="note.title" :description="note.description" :color="note.color" :date="note.date" :id="note.id"/>
    </ul>
</template>

<script setup>
import NoteItem from './NoteItem.vue'
import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes()

</script>