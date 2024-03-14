<template>
  <AppHeader/>
  <main>
    
    <AppModal>
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xl font-semibold">{{ !storeNotes.isEditing ? 'Add New Note' : 'Edit Note'}}</h2>
        <button @click="storeNotes.closeModal">
          <Icon
            icon="iconamoon:close"
            width="28"
            height="28"
            class="text-gray-400"
          />
        </button>
      </div>
      <form @submit.prevent="storeNotes.addNote">
        <div class="flex flex-col mb-4">
          <label for="title" class="mb-1 text-sm">Title</label>
          <input
            v-model="storeNotes.inputTitle"
            id="title"
            name="title"
            type="text"
            class="bg-gray-100 p-4 w-full rounded-2xl focus:ring-2 focus:ring-primaryColor border-none dark:bg-slate-800"
          />
          <ErrorMsg v-show="storeNotes.errorTitle" message="Please enter a title."/>
        </div>
        <div class="flex flex-col mb-4">
          <label for="description" class="mb-1 text-sm">Description</label>
          <textarea
            v-model="storeNotes.inputDescription"
            name="description"
            id="description"
            rows="4"
            class="bg-gray-100 p-4 w-full resize-none rounded-2xl focus:ring-2 focus:ring-primaryColor border-none dark:bg-slate-800"
          ></textarea>
          <ErrorMsg v-show="storeNotes.errorDesc" message="Please, enter a description."/>
        </div>
        <div class=" mb-8">
          <label class="mb-1 text-sm">Color</label>
          <div class="flex gap-4 mt-2 flex-wrap">
            <label>
              <input v-model="storeNotes.pickedColor" value="bg-lightYellow" type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightYellow text-lightYellow bg-lightYellow border border-gray-100 checked:ring-2 checked:ring-offset-2  checked:ring-primaryColor active:ring-transparent checked:active:ring-primaryColor focus:ring-transparent checked:focus:ring-primaryColor dark:checked:ring-offset-slate-900 dark:active:ring-offset-slate-900" name="radio"/>
            </label>
            <label>
              <input v-model="storeNotes.pickedColor" value="bg-lightBlue" type="radio" class="h-12 w-12 cursor-pointer  checked:bg-lightBlue   text-lightBlue bg-lightBlue border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-transparent checked:active:ring-primaryColor focus:ring-transparent checked:focus:ring-primaryColor dark:checked:ring-offset-slate-900 dark:active:ring-offset-slate-900" name="radio"/>
            </label>
            <label>
              <input v-model="storeNotes.pickedColor" value="bg-lightPink" type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightPink text-lightPink bg-lightPink border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-transparent checked:active:ring-primaryColor focus:ring-transparent checked:focus:ring-primaryColor dark:checked:ring-offset-slate-900 dark:active:ring-offset-slate-900" name="radio">
            </label>
            <label>
              <input v-model="storeNotes.pickedColor" value="bg-lightGreen" type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightGreen text-lightGreen bg-lightGreen border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-transparent checked:active:ring-primaryColor focus:ring-transparent checked:focus:ring-primaryColor dark:checked:ring-offset-slate-900 dark:active:ring-offset-slate-900" name="radio">
            </label>
            <label>
              <input v-model="storeNotes.pickedColor" value="bg-lightLavander" type="radio" class="h-12 w-12 cursor-pointer checked:bg-lightLavander text-lightLavander bg-lightLavander border border-gray-100 checked:ring-2 checked:ring-offset-2 checked:ring-primaryColor active:ring-transparent checked:active:ring-primaryColor focus:ring-transparent checked:focus:ring-primaryColor dark:checked:ring-offset-slate-900 dark:active:ring-offset-slate-900" name="radio">
            </label>
          </div>
        </div>
        <div class="flex space-x-4">
          <AppBtn v-if="!storeNotes.isEditing" type="btn-primary">Add Note</AppBtn>
          <AppBtn v-else type="btn-primary">Update Note</AppBtn>
        </div>
      </form>
    </AppModal>
  </main>
  <RouterView />
</template>

<script setup>

import AppHeader from './components/AppHeader.vue'
import AppModal from "./components/AppModal.vue"
import AppBtn from './components/AppBtn.vue'
import { Icon } from '@iconify/vue'
import ErrorMsg from './components/ErrorMsg.vue'

import { useStoreNotes } from "./stores/storeNotes"

const storeNotes = useStoreNotes()

</script>