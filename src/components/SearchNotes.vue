<template>
      <div class="max-w-lg mx-auto mb-14 relative">
        <input v-model="storeNotes.searchTerm" type="text" class="py-4 px-6 pl-12 rounded-2xl bg-gray-100 focus:ring-2 focus:ring-primaryColor w-full text-darkColor placeholder-darkColor border-none" placeholder="Search notes...">
        <Icon icon="mdi:magnify" class="text-darkColor absolute left-3 top-1/2 -translate-y-1/2" width="28" height="28" />
      </div>
</template>

<script setup>

import { Icon } from '@iconify/vue';
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();


</script>