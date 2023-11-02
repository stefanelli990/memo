<template>
    <header v-if="storeAuth.user.id" class="fixed top-0 left-0 right-0 z-10 p-4 lg:py-3 lg:px-10 flex justify-between items-center shadow-lg bg-white text-darkColor lg:ml-72 transition-all duration-300">
        
        <button @click="storeNotes.slideIn" class="lg:hidden">
            <Icon icon="ci:hamburger-md" width="40" height="40"/>
        </button>
        <h1 class="text-2xl font-bold capitalize hidden lg:block">Welcome, {{ storeAuth.user.firstName }}</h1>
        <div class="items-center space-x-2 flex">
          <div class="flex flex-col text-right">
          <div class="capitalize font-semibold">
          {{ storeAuth.user.firstName }}
        </div>
        <div class="text-sm"> {{ storeAuth.user.email }}</div>
        </div>
        <div class="h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center">
          <span class="text-primaryColor font-medium text-2xl leading-none">{{ storeAuth.user.firstName[0] }}</span>
        </div>
        </div>
  </header>
</template>

<script setup>

import { Icon } from "@iconify/vue";
import { useStoreAuth } from '../stores/storeAuth';
import { useStoreNotes } from '../stores/storeNotes';

const storeAuth = useStoreAuth();
const storeNotes = useStoreNotes();

</script>