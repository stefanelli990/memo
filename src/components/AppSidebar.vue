<template>
  <div class="bg-white w-72 min-h-screen z-30 fixed top-0 left-0 shadow-lg p-4 lg:p-10 flex justify-between flex-col -translate-x-full transition-all duration-300 lg:translate-x-0" :class="{'translate-x-0': storeNotes.sidebar}" v-if="storeAuth.user.id">
    <div>
      <div class="flex justify-between items-center">
        <AppLogo class="my-8 lg:my-0 lg:mb-10"/>
        <button @click="storeNotes.slideOut" class="lg:hidden">
          <Icon icon="simple-line-icons:close" width="28" height="28"/>
        </button>
      </div>
      <nav class="flex flex-col">
        <RouterLink @click="storeNotes.slideOut();"
          to="/"
          :class="[
            $route.path === '/' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-4 -mr-4 lg:-ml-10 lg:-mr-10 font-medium border-l-8',
          ]"
        >
          Notes
        </RouterLink>
        <RouterLink @click="storeNotes.slideOut();"
          to="/stats"
          :class="[
            $route.path === '/stats' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-4 -mr-4 lg:-ml-10 lg:-mr-10 font-medium border-l-8',
          ]"
        >
          Stats
        </RouterLink>
        <RouterLink @click="storeNotes.slideOut();"
          to="/about"
          :class="[
            $route.path === '/about' ? 'bg-gray-200 border-l-primaryColor' : 'border-l-white',
            'text-darkColor p-5 pl-10 -ml-4 -mr-4 lg:-ml-10 lg:-mr-10 font-medium border-l-8',
          ]"
        >
          About
        </RouterLink>
      </nav>
    </div>
    <AppBtn 
      v-if="storeAuth.user.id"
      @click="logoutAndSlideOut"
      type="btn-primary"
    ><Icon icon="tabler:logout" width="20" height="20"/><span>Log Out</span></AppBtn>
  </div>
  <div @click="storeNotes.slideOut" class="fixed min-h-screen top-0 left-0 right-0 bottom-0 bg-black/50 z-10 transition-all duration-300 lg:hidden" :class="[storeNotes.sidebar ? 'visible opacity-100' : 'invisible opacity-0']"></div>
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

const logoutAndSlideOut = () => {
  storeAuth.logoutUser(); // Call the logoutUser function
  storeNotes.slideOut();  // Call the slideOut function
};

</script>
