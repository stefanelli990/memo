import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
