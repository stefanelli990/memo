<template>
  <header v-if="storeAuth.user.id" class="p-4 flex justify-between items-center bg-white text-darkColor">
      
      <RouterLink to="/" class="text-3xl font-bold"><span class="text-primaryColor">Notes</span> App</RouterLink>
      <nav class="hidden md:flex space-x-4">
        <h1>Hello, {{ storeAuth.user.firstName }}</h1>
        <AppBtn v-if="storeAuth.user.id" @click="storeAuth.logoutUser" type="btn-primary" caption="Log Out"/>
        <RouterLink to="/">Notes</RouterLink>
        <!-- <RouterLink to="/favorite-notes">Favorite Notes</RouterLink> -->
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/about">About App</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { useStoreAuth } from './stores/storeAuth';
import { onMounted } from 'vue';
import AppBtn from './components/AppBtn.vue';

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
})

</script>
