<template>
    <button @click="toggleDark()" class="btn-circle">
        <Icon v-if="!isDark" icon="f7:moon-stars-fill" width="20" height="20"/>
        <Icon v-else icon="fluent:weather-sunny-28-filled" width="20" height="20"/>
    </button>
</template>

<script setup>

import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>