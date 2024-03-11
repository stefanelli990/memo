<template>
  <ul class="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    />
  </ul>
</template>

<script setup>
import NoteItem from "./NoteItem.vue"
import { useStoreNotes } from "../stores/storeNotes"
import AddNote from "./AddNote.vue"

const storeNotes = useStoreNotes()
</script>
