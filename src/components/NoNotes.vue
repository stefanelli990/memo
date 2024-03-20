<template>
    <div class="contents">
        <Icon icon="ic:round-search-off" width="200" height="200" class="mx-auto opacity-5"/>
        <h3 class="text-xl font-semibold text-center max-w-lg mx-auto truncate whitespace-pre-wrap">There are no {{ noteType }} for "{{ storeNotes.searchTerm }}"</h3>
    </div>
</template>

<script setup>

import { useStoreNotes } from "../stores/storeNotes.js"
import { Icon } from '@iconify/vue'

const storeNotes = useStoreNotes()

const props = defineProps(['noteType'])

</script>