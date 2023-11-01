<template>
  <AppHeader/>
  <AppSidebar/>
</template>

<script setup>

import { useStoreAuth } from './stores/storeAuth';
import { onMounted } from 'vue';
import AppSidebar from './components/AppSidebar.vue';
import AppHeader from './components/AppHeader.vue';

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
})

</script>
