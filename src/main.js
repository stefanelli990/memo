// main.js 

import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStoreNotes } from './stores/storeNotes' 

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const storeNotes = useStoreNotes()
storeNotes.loadFromLocalStorage() // Load todos from local storage

app.mount('#app')