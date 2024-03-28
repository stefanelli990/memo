<template>
    <header class="bg-white text-sm shadow-lg shadow-slate-100 dark:bg-slate-800 dark:shadow-slate-900/50">
      <div class="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div class="flex items-center flex-1">
          <button @click="openSideMenu" class="mr-2 md:hidden">
            <Icon icon="solar:hamburger-menu-linear" width="32px" height="32px" />
          </button>
          <RouterLink to="/" class="flex items-center whitespace-nowrap space-x-1 md:mr-4">
            <Icon class="text-primaryColor" icon="solar:notes-bold" width="36" height="36" />
            <h1 class="text-2xl font-extrabold text-primaryColor">Memo</h1></RouterLink>
          <SearchNotes class="hidden md:block"/>
        </div>
        
        <div class="ml-4 mr-2 hidden items-center space-x-4 font-semibold md:flex ">
          <nav class="space-x-4">
            <RouterLink to="/" active-class="active-link">Add Notes</RouterLink>
            <RouterLink to="/favorite-notes" active-class="active-link">Favorite Notes({{ storeNotes.favNotes.length }})</RouterLink>
          </nav>
        </div>
        <div class="flex space-x-2">
          <button @click="storeNotes.openMobileSearch" class="btn-circle md:hidden">
            <Icon icon="streamline:magnifying-glass-solid" width="16" height="16" />
          </button>
          <ToggleDark/>
        </div>
      </div>
    </header>

    <!-- side menu -->
    <div class="bg-white fixed top-0 left-0 h-full flex flex-col w-9/12 duration-300 p-4 z-20 md:hidden dark:bg-slate-800" :class="sideMenuIsVisible ? 'translate-x-0' : '-translate-x-full'">
      <button @click="closeMenu">
        <Icon icon="iconamoon:close" width="32" height="32" />
      </button>
      <nav class="flex flex-col space-y-4 mt-8 font-semibold flex-1">
        <RouterLink @click="closeMenu" to="/" active-class="active-link">Add Notes</RouterLink>
        <RouterLink @click="closeMenu" to="/favorite-notes" active-class="active-link">Favorite Notes({{ storeNotes.favNotes.length }})</RouterLink>
      </nav>
    </div>
    <div @click="closeMenu" class="bg-black/25 fixed top-0 right-0 h-full w-full duration-300 z-10 md:hidden" :class="sideMenuIsVisible ? 'visible opacity-100' : 'invisible opacity-0'"></div>
    <RouterView v-slot="{ Component }">
      <Transition name="page-transition" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </RouterView>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterView, useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useStoreNotes } from "../stores/storeNotes"
import SearchNotes from "../components/SearchNotes.vue"
import ToggleDark from './ToggleDark.vue';

const storeNotes = useStoreNotes()
const router = useRouter()

const sideMenuIsVisible = ref(false)

const openSideMenu = () => {
  sideMenuIsVisible.value = true
}

const closeMenu = () => {
  sideMenuIsVisible.value = false
}

router.beforeEach(() => {
  storeNotes.searchTerm = ''
})


</script>

<style>

.page-transition-enter-active,
.page-transition-leave-active {
  transition: 400ms ease all
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateX(-75px);
}

</style>

