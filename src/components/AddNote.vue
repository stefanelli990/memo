<template>
    <li @click="$emit('open-modal')" class="bg-primaryColor-dark rounded-lg h-60 p-4 text-white flex items-center justify-center flex-col space-y-2 cursor-pointer hover:bg-primaryColor-dark/75">
      <Icon icon="simple-line-icons:plus" width="40" height="40"/>
      <h2 class="text-xl font-semibold">Add new note</h2>
    </li>
</template>

<script setup>

import { Icon } from '@iconify/vue';

</script>