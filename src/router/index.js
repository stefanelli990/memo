// router index.js

import { createRouter, createWebHistory } from 'vue-router'
import AddNotesView from '../views/AddNotesView.vue'
import FavoriteNotesView from '../views/FavoriteNotesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'add-notes',
      component: AddNotesView,
    },
    {
      path: '/favorite-notes',
      name: 'favorite-notes',
      component: FavoriteNotesView,
    }
  ]
})

export default router