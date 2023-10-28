<template>
  <header class="p-4 flex justify-between items-center bg-white text-darkColor">
      <RouterLink to="/" class="text-3xl font-bold"><span class="text-primaryColor">Notes</span> App</RouterLink>
      <nav class="hidden md:flex space-x-4">
        <RouterLink to="/">Notes</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/about">About App</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { useStoreNotes } from './stores/storeNotes';
import { onMounted } from 'vue';

const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
})

</script>
