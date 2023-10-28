<template>
    <button class="btn" :class="type">{{ caption }}</button>
</template>

<script setup>

const props = defineProps(['caption','type'])

</script>