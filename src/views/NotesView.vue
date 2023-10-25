<template>
  <SearchNotes/>
  <ul class="grid grid-cols-4 gap-4 px-4">
    <AddNote @open-modal="openModal" @close-modal="closeModal"/>
    <NoteItem v-for="note in storeNotes.notes" :key="note.id" :note="note"/>
    <AppModal v-show="modalIsVisible" @close-modal="closeModal"/>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '../stores/storeNotes';
import SearchNotes from '../components/SearchNotes.vue';
import AddNote from '../components/AddNote.vue';
import NoteItem from '../components/NoteItem.vue';
import AppModal from '../components/AppModal.vue';

const storeNotes = useStoreNotes();
const modalIsVisible = ref(false);

const openModal = () => {
  modalIsVisible.value = true;
}

const closeModal = () => {
  modalIsVisible.value = false;
}

</script>
