<template>
    <Teleport to="body">
        <div class="bg-black/50 fixed top-0 left-0 right-0 bottom-0 min-h-screen w-full"  @click="$emit('close-modal')"></div>
        <div class="bg-white rounded-lg p-8 max-w-md w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <slot></slot>
        </div>
    </Teleport>
</template>

<script setup>

const emits = defineEmits(['close-modal']);

</script>