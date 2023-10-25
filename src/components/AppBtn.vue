<template>
    <button class="w-full px-4 py-3 bg-primaryColor text-white rounded-md hover:opacity-90 font-medium">{{ caption }}</button>
</template>

<script setup>

const props = defineProps(['caption'])

</script>