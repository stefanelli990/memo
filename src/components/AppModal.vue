<template>
    <div class="bg-black/50 fixed top-0 left-0 right-0 bottom-0 min-h-screen w-full flex justify-center items-center" @click.self="emits('close-modal')">
        <div class="bg-white rounded-lg p-8 max-w-md w-full">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-xl font-semibold">Add new note</h2>
                <button @click="emits('close-modal')">
                    <Icon icon="iconamoon:close" width="28" height="28" class="text-gray-400"/>
                </button>
            </div>
            <form @submit.prevent="addNewNote">
                <div class="flex flex-col mb-4">
                    <label for="title" class="mb-1">Title</label>
                    <input v-model="inputTitle" id="title" name="title" type="text" class="bg-gray-100 p-4 rounded-md outline-primaryColor">
                </div>
                <div class="flex flex-col mb-4">
                    <label for="description" class="mb-1">Description</label>
                    <textarea v-model="inputDescription" name="description" id="description" rows="8" class="bg-gray-100 p-4 resize-none rounded-md outline-primaryColor"></textarea>
                </div>
                <AppBtn caption="Add Note"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from "uuid"
import { Icon } from '@iconify/vue';
import AppBtn from './AppBtn.vue';
import { useStoreNotes } from '../stores/storeNotes';

const inputTitle = ref('');
const inputDescription = ref('');


const emits = defineEmits(['close-modal']);

const storeNotes = useStoreNotes();

const addNewNote = () => {
    if(inputTitle.value && inputDescription.value) {
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
        emits('close-modal');
    }
}

</script>