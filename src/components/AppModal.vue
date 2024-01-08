<template>
    <Teleport to="body">
        <div v-if="storeNotes.modalIsVisible" class="bg-black/50 fixed inset-0 grid place-items-center overflow-auto p-4">
            <div class="bg-white rounded-3xl px-8 py-10 max-w-md w-full border dark:bg-slate-900 dark:border-slate-800">
                <slot></slot>
            </div>
        </div>  
    </Teleport>
</template>

<script setup>

import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes()

</script>