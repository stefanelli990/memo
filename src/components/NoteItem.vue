<template>
  <li class="bg-white rounded-lg h-60 p-4 flex flex-col relative text-darkColor">
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <h2 class="text-xl font-semibold mb-4">{{ note.title }}</h2>
        <button @click="toggleDropdown" ref="toggle">
          <Icon icon="tabler:dots" width="24" height="24" />
        </button>
      </div>
      <p class="font-normal">{{ note.description }}</p>
    </div>
    <div class="border-t border-t-gray-300 pt-2 text-sm text-gray-500 font-normal">
      {{ note.date }}
      </div>
    <div class="absolute right-4 top-10 bg-white border border-gray-300 rounded-md overflow-hidden" v-show="dropdownIsVisible" ref="dropdown"> 
      <button class="flex items-center space-x-2 font-semibold p-2 w-full text-sm hover:bg-gray-100" ref="editButton" @click="$emit('edit',note.id, note.title, note.description)"><Icon icon="tabler:edit" width="20"/><span>Edit</span></button>
      <button class="flex items-center space-x-2 font-semibold p-2 w-full text-sm hover:bg-gray-100" @click="storeNotes.deleteNote(note.id)"><Icon icon="ph:trash-bold" width="20"/><span>Delete</span></button>
    </div>
  </li>
</template>

<script setup>

import { onClickOutside } from '@vueuse/core'
import { Icon } from "@iconify/vue";
import { ref } from 'vue';
import { useStoreNotes } from '../stores/storeNotes';

const dropdownIsVisible = ref(false);
const dropdown = ref(null);
const toggle = ref(null);
const editButton = ref(null)

const storeNotes = useStoreNotes();

const props = defineProps(["note"]);
const emits = defineEmits(['edit']);

const toggleDropdown = () => {
  dropdownIsVisible.value = !dropdownIsVisible.value;
};

onClickOutside([dropdown,editButton], () => {
  dropdownIsVisible.value = false
}, {
  ignore: [toggle]
});



</script>

