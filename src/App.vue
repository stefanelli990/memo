<template>
  <header class="p-4 flex justify-between items-center bg-white text-darkColor">
      <RouterLink to="/" class="text-3xl font-bold"><span class="text-primaryColor">Notes</span> App</RouterLink>
      <nav class="space-x-4">
        <RouterLink to="/">Notes</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>
