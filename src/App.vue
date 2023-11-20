<template>
  <AppHeader/>
  <SearchNotes />
  <AddNote @open-modal="openModal" @close-modal="closeModal" />
  <NoteList/>
  <AppModal v-if="modalIsVisible" @close-modal="closeModal">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-xl font-semibold">{{ !isEditing ? 'Add New Note' : 'Edit Note'}}</h2>
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
          class="bg-gray-100 p-4 rounded-2xl outline-primaryColor border-none"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="description" class="mb-1">Description</label>
        <textarea
          v-model="inputDescription"
          name="description"
          id="description"
          rows="4"
          class="bg-gray-100 p-4 resize-none rounded-2xl outline-primaryColor"
        ></textarea>
      </div>
      <div class=" mb-8">
        <label class="mb-1">Color</label>
        <div class="flex space-x-4 mt-2">
          <label>
            <input type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightYellow text-lightYellow bg-lightYellow border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-white" name="radio" checked/>
          </label>
          <label>
            <input type="radio" class="h-12 w-12 cursor-pointer  checked:bg-lightBlue   text-lightBlue bg-lightBlue border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-white" name="radio"/>
          </label>
          <label>
            <input type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightPink text-lightPink bg-lightPink border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-white" name="radio">
          </label>
          <label>
            <input type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightGreen text-lightGreen bg-lightGreen border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-white" name="radio">
          </label>
          <label>
            <input type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightLavander text-lightLavander bg-lightLavander border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-white" name="radio">
          </label>
          <div class="h-12 w-12 rounded-full bg-lightYellow"></div>
          <div class="h-12 w-12 rounded-full bg-lightBlue"></div>
          <div class="h-12 w-12 rounded-full bg-lightPink"></div>
          <div class="h-12 w-12 rounded-full bg-lightGreen"></div>
          <div class="h-12 w-12 rounded-full bg-lightLavander"></div>
        </div>
      </div>
      <div class="flex space-x-4">
        <AppBtn v-if="!isEditing" type="btn-primary">Add Note</AppBtn>
        <AppBtn v-else type="btn-primary">Update Note</AppBtn>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import { ref } from "vue"
import { v4 as uuidv4 } from "uuid"
import { Icon } from '@iconify/vue'
import { useStoreNotes } from "./stores/storeNotes"
import SearchNotes from "./components/SearchNotes.vue"
import AddNote from "./components/AddNote.vue"
import AppModal from "./components/AppModal.vue"
import AppBtn from './components/AppBtn.vue'
import NoteList from './components/NoteList.vue'

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

