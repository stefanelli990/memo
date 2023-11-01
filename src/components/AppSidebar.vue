<template>
  <div
    class="bg-white w-72 min-h-screen fixed top-0 left-0 shadow-xl p-10 lg:flex justify-between flex-col hidden" v-if="storeAuth.user.id"
  >
    <div>
      <div 
        class="text-2xl font-bold flex items-center space-x-2 mb-16"
        ><Icon icon="mdi:notes" class="text-primaryColor" /><span
          class="text-primaryColor"
          >Notes</span
        >
        App</div>
      
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
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { useStoreAuth } from "../stores/storeAuth";
import AppBtn from "./AppBtn.vue";

const storeAuth = useStoreAuth();

</script>
