<template>
  <ul class="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <TransitionGroup>
      <NoteItem
        v-for="note in storeNotes.filterNotes"
        :key="note.id"
        :title="note.title"
        :description="note.description"
        :color="note.color"
        :date="note.date"
        :id="note.id"
      />
    </TransitionGroup>
  </ul>
</template>

<script setup>
import NoteItem from "./NoteItem.vue";
import { useStoreNotes } from "../stores/storeNotes";

const storeNotes = useStoreNotes();
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
  scale: .5;
}

.v-enter-to {
  opacity: 1;
  scale: 1;
}

.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 0.3s;
}

.v-leave-active {
  position: absolute;
}

.v-leave-from {
  opacity: 1;
  scale: 1;
}
.v-leave-to {
  opacity: 0;
  scale: .5;
}
</style>
