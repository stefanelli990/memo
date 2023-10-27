<template>
  <SearchNotes />
  <ul class="grid grid-cols-4 gap-4 px-4">
    <AddNote @open-modal="openModal" @close-modal="closeModal" />
    <NoteItem v-for="note in storeNotes.notes" :key="note.id" :note="note"  @edit="editNote"/>
  </ul>
  <AppModal v-if="modalIsVisible" @close-modal="closeModal">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-xl font-semibold">{{ !isEditing ? 'Add new notes' : 'Edit notes'}}</h2>
          <button @click="closeModal">
            <Icon
              icon="iconamoon:close"
              width="28"
              height="28"
              class="text-gray-400"
            />
          </button>
        </div>
        <form @submit.prevent="addNewNote">
          <div class="flex flex-col mb-4">
            <label for="title" class="mb-1">Title</label>
            <input
              v-model="inputTitle"
              id="title"
              name="title"
              type="text"
              class="bg-gray-100 p-4 rounded-md outline-primaryColor"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="description" class="mb-1">Description</label>
            <textarea
              v-model="inputDescription"
              name="description"
              id="description"
              rows="8"
              class="bg-gray-100 p-4 resize-none rounded-md outline-primaryColor"
            ></textarea>
          </div>
          <AppBtn v-if="!isEditing" caption="Add Note" />
          <AppBtn v-else caption="Update Note" />
        </form>
      </AppModal>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Icon } from '@iconify/vue';
import { useStoreNotes } from "../stores/storeNotes";
import SearchNotes from "../components/SearchNotes.vue";
import AddNote from "../components/AddNote.vue";
import NoteItem from "../components/NoteItem.vue";
import AppModal from "../components/AppModal.vue";
import AppBtn from '../components/AppBtn.vue';

const inputTitle = ref('');
const inputDescription = ref('');

const storeNotes = useStoreNotes();
const modalIsVisible = ref(false);
const isEditing = ref(false);

const currentNoteId = ref(null);

const openModal = () => {
  modalIsVisible.value = true;
};

const editNote = (noteId, noteTitle, noteDesc) => {
  modalIsVisible.value = true;
  isEditing.value = true;
  inputTitle.value = noteTitle;
  inputDescription.value = noteDesc;
  currentNoteId.value = noteId
}

const closeModal = () => {
  modalIsVisible.value = false;
  isEditing.value = false;
  inputTitle.value = '';
  inputDescription.value = '';
};

const addNewNote = () => {
    if(!isEditing.value && inputTitle.value && inputDescription.value) {
        const options = { day: "numeric", month: "long", year: "numeric" };
        const note = {
            id: uuidv4(),
            title: inputTitle.value,
            description: inputDescription.value,
            date: new Date().toLocaleDateString(undefined, options),
        }
        storeNotes.addNote(note);
        inputTitle.value = '';
        inputDescription.value = '';
        closeModal();
    } else if(isEditing.value && inputTitle.value && inputDescription.value) {
      storeNotes.updateNote(currentNoteId.value,inputTitle.value,inputDescription.value);
      closeModal();
    }
};

</script>
