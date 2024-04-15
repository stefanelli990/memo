<template>
  <li class="w-full rounded-2xl h-60 p-4 flex flex-col relative text-darkColor" :class="color">
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <h2 class="text-2xl font-semibold mb-4 truncate">{{ title }}</h2>
        <button @click="toggleDropdown" ref="toggle">
          <Icon icon="tabler:dots" width="24" height="24"/>
        </button>
      </div>
      <div class="inline-grid">
        <p class="truncate whitespace-break-spaces">{{ description }}</p>
      </div>
    </div>
    <div class="border-t border-t-darkColor/10 pt-2 text-sm">
      {{ date }}
      </div>
      <Transition>
        <div class="absolute right-4 top-10 bg-white border border-gray-300 rounded-md overflow-hidden" v-show="dropdownIsVisible" ref="dropdown"> 
        <button class="flex items-center space-x-2 font-semibold p-2 w-full text-sm hover:bg-gray-100" ref="editButton" @click="storeNotes.editModal(id)"><Icon icon="tabler:edit" width="20"/><span>Edit</span></button>
        <button class="flex items-center space-x-2 font-semibold p-2 w-full text-sm hover:bg-gray-100" @click="storeNotes.deleteNote(id)"><Icon icon="ph:trash-bold" width="20"/><span>Delete</span></button>
        <button class="flex items-center space-x-2 font-semibold p-2 w-full text-sm hover:bg-gray-100" @click="storeNotes.addToFav(id)">
          <Icon v-if="favorite" icon="uim:favorite" width="20" height="20"/>
          <Icon v-else icon="ph:star-bold" width="20" height="20"/>
          <span>{{ favorite ? 'Unfavorite' : 'Favorite' }}</span>
        </button>
      </div>
      </Transition>
  </li>
</template>

<script setup>

import { onClickOutside } from '@vueuse/core'
import { Icon } from "@iconify/vue"
import { ref } from 'vue'
import { useStoreNotes } from '../stores/storeNotes'

const dropdownIsVisible = ref(false)
const dropdown = ref(null)
const toggle = ref(null)
const editButton = ref(null)

const storeNotes = useStoreNotes()

const props = defineProps(['title','description','color','date','id','favorite'])

const toggleDropdown = () => {
  dropdownIsVisible.value = !dropdownIsVisible.value
};

onClickOutside([dropdown,editButton], () => {
  dropdownIsVisible.value = false
}, {
  ignore: [toggle]
})

</script>

<style scoped>

.v-enter-from,
.v-leave-to {
    transform: scale(.5);
    transform-origin: top right;
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 200ms ease all;
}

</style>
