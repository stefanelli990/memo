<template>
    <li class="bg-white rounded-lg h-60 p-4 flex flex-col">
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-semibold mb-4">{{ note.title }}</h2>
          <Icon icon="tabler:dots" width="24" height="24"/>
        </div>
        <p>{{ note.description }}</p>
      </div>
      <span class="border-t border-t-gray-300 pt-2 text-sm">{{ note.date }}</span>
    </li>
</template>

<script setup>

import { Icon } from '@iconify/vue';

const props = defineProps(['note'])

</script>