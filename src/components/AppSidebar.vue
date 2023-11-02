<template>
  <div class="bg-white w-72 min-h-screen z-10 fixed top-0 left-0 shadow-lg p-10 lg:flex justify-between flex-col hidden" v-if="storeAuth.user.id">
    <div>
      <AppLogo class="mb-16"/>
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
import AppLogo from "./AppLogo.vue";

const storeAuth = useStoreAuth();

</script>
