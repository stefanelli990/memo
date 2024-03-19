<template>
    <div v-show="storeNotes.mobileSearchIsVisible" class="bg-white fixed top-0 left-0 right-0 p-4 h-[72px] flex items-center justify-between md:hidden dark:bg-slate-800">
        <SearchNotes/>
        <button @click="storeNotes.closeMobileSearch" class="py-3 pl-3 text-sm text-primaryColor font-semibold">Cancel</button>
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes'
import SearchNotes from './SearchNotes.vue'

const storeNotes = useStoreNotes()

</script>