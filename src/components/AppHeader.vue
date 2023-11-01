<template>
    <header v-if="storeAuth.user.id" class="px-4 py-4 lg:px-10 flex justify-between items-center bg-white text-darkColor lg:ml-72">
        <div 
        class="text-2xl font-bold flex items-center space-x-2 lg:hidden"
        ><Icon icon="mdi:notes" class="text-primaryColor" />
        <span class="text-primaryColor">Notes</span> App</div>
        <button class="lg:hidden">
            <Icon icon="ci:hamburger-md" width="40" height="40"/>
        </button>
        <h1 class="text-2xl font-bold capitalize hidden lg:block">Welcome, {{ storeAuth.user.firstName }}</h1>
        <div class="items-center space-x-4 hidden lg:flex">
          <div class="flex flex-col text-right">
          <div class="capitalize font-semibold">
          {{ storeAuth.user.firstName }}
        </div>
        <div class="text-sm"> {{ storeAuth.user.email }}</div>
        </div>
        <div class="h-14 w-14 rounded-full bg-gray-200 flex justify-center items-center">
          <span class="text-primaryColor font-medium text-2xl leading-none">{{ storeAuth.user.firstName[0] }}</span>
        </div>
        </div>
  </header>
</template>

<script setup>

import { useStoreAuth } from '../stores/storeAuth';
import { Icon } from "@iconify/vue";

const storeAuth = useStoreAuth();

</script>