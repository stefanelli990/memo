<template>
    <Teleport to="body">
        <Transition name="backdrop">
            <div v-if="storeNotes.modalIsVisible" class="bg-black/50 fixed inset-0 grid place-items-center overflow-auto p-4">
                <Transition name="modal" appear>
                    <div class="bg-white rounded-3xl px-8 py-10 max-w-md w-full">
                        <slot></slot>
                    </div>
                </Transition>
            </div>  
        </Transition>
    </Teleport>
</template>

<script setup>

import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes()

</script>

<style scoped>

.backdrop-enter-from {
opacity: 0;
}

.backdrop-enter-to {
opacity: 1;
}

.backdrop-leave-from {
opacity: 1;
}

.backdrop-leave-to {
opacity: 0;
}

.backdrop-enter-active,
.backdrop-leave-active {
transition: all 0.2s ease;
}


.modal-enter-from {
opacity: 0;
transform: translateY(-100%);
}

.modal-enter-to {
opacity: 1;
transform: translateY(0%);
}

.modal-leave-from {
opacity: 1;
transform: translateY(0%);
}

.modal-leave-to {
opacity: 0;
transform: translateY(-100%);
}

.modal-enter-active,
.modal-leave-active {
transition: all 0.4s ease;
}
</style>