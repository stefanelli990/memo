<template>
    <div class="text-center ">
        <h3 class="text-2xl font-semibold" v-if="!storeNotes.filterNotes.length && storeNotes.searchTerm">There are no notes for "{{ storeNotes.searchTerm }}"</h3>
        <div class="w-full flex flex-col items-center space-y-5" v-else-if="!storeNotes.filterNotes.length && !storeNotes.searchTerm">
            <img class="w-40 sm:w-52" src="../assets/notes-illustration.svg" alt="">
            <h3 class="text-lg max-w-md font-semibold">Ready to capture your ideas? Create your note and begin your note-taking journey!</h3>
        </div>
    </div>
</template>

<script setup>

import { useStoreNotes } from '../stores/storeNotes'

const storeNotes = useStoreNotes()

</script>