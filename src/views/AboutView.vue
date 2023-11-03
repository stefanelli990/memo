<template>
  <main class="text-lg">
    <p>Hello, and welcome to Notes App! </p>
    <br>
    <p>I built this app using Vue.js and Tailwind CSS to ensure a seamless and responsive user experience. The backend is powered by Firebase, a robust cloud platform, to ensure secure data storage and real-time updates.</p><br>
    <p>Building this app has been an incredible journey. My objective was to create a user-friendly note-taking experience. I encountered challenges and learned invaluable lessons along the way, and I'm incredibly proud of the result. I hope you find using this app as enjoyable as I found creating it.</p><br>
    <p>I'm continuously working on updates to enhance your experience, so please feel free to reach out and share your suggestions on how I can make this app even better.</p>
    <ul class="mt-10 flex space-x-8">
      <li class="flex items-center space-x-2"><Icon icon="mdi:github" width="32" height="32"/><a target="_blank" href="https://github.com/stefanelli990/notes-app" class="hover:underline">Code Preview</a></li>
      <li class="flex items-center space-x-2"><Icon icon="clarity:email-solid" width="32" height="32"/><a href="mailto:stefan.mohenski@gmail.com" class="hover:underline">Email Me</a></li>
    </ul>
  </main>
</template>

<script setup>

import { Icon } from '@iconify/vue';

</script>


