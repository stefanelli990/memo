<template>
    <button class="btn" :class="type">
        <slot></slot>
    </button>
</template>

<script setup>

const props = defineProps(['type'])

</script>