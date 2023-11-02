<template>
  <div class="bg-white w-72 min-h-screen z-30 fixed top-0 left-0 shadow-lg p-10 flex justify-between flex-col -translate-x-full transition-all duration-300 lg:translate-x-0" :class="{'translate-x-0': storeNotes.sidebar}" v-if="storeAuth.user.id">
    <div>
      <button @click="storeNotes.slideOut" class="lg:hidden">
        <Icon icon="simple-line-icons:close" width="32" height="32"/>
      </button>
      <AppLogo class="my-8 lg:my-0 lg:mb-10"/>
      <nav class="flex flex-col">
        <RouterLink
          to="/"
          :class="[
            $route.path === '/' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-10 -mr-10 font-medium border-l-8',
          ]"
        >
          Notes
        </RouterLink>
        <RouterLink
          to="/stats"
          :class="[
            $route.path === '/stats' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-10 -mr-10 font-medium border-l-8',
          ]"
        >
          Stats
        </RouterLink>
        <RouterLink
          to="/about"
          :class="[
            $route.path === '/about' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-10 -mr-10 font-medium border-l-8',
          ]"
        >
          About
        </RouterLink>
      </nav>
    </div>
    <AppBtn
      v-if="storeAuth.user.id"
      @click="storeAuth.logoutUser"
      type="btn-primary"
    ><Icon icon="tabler:logout" width="20" height="20"/><span>Log Out</span></AppBtn>
  </div>
  <div class="fixed min-h-screen top-0 left-0 right-0 bottom-0 bg-black/50 z-10 transition-all duration-300 lg:hidden" :class="[storeNotes.sidebar ? 'visible opacity-100' : 'invisible opacity-0']"></div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { useStoreAuth } from "../stores/storeAuth";
import { useStoreNotes } from "../stores/storeNotes";
import AppBtn from "./AppBtn.vue";
import AppLogo from "./AppLogo.vue";

const storeAuth = useStoreAuth();
const storeNotes = useStoreNotes();


</script>
