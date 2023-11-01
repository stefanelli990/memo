<template>
    <div class="px-4 lg:px-10">
      <div class="my-8 sm:mt-24 sm:mb-16 max-w-lg mx-auto relative">
        <input v-model="storeNotes.searchTerm" type="text" class="py-4 px-6 pl-12 rounded-md bg-primaryColor-dark outline-none w-full text-white placeholder-white placeholder:font-normal" placeholder="Search notes...">
        <Icon icon="mdi:magnify" class="text-white absolute left-3 top-1/2 -translate-y-1/2" width="28" height="28" />
      </div>
  </div>
</template>

<script setup>

import { Icon } from '@iconify/vue';
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();


</script>