<template>
    <button @click="$emit('open-modal')" class="bg-primaryColor h-20 w-20 fixed bottom-8 right-8 rounded-full text-white flex items-center justify-center cursor-pointer hover:bg-primaryColor-dark/75">
      <Icon width="40" height="40" icon="fluent:tab-add-20-filled"/>
    </button>
</template>

<script setup>

import { Icon } from '@iconify/vue';

</script>