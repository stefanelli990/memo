import { createRouter, createWebHistory } from 'vue-router'
import {useStoreAuth } from '../stores/storeAuth'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'
import AboutView from '../views/AboutView.vue'
import AuthView from '../views/AuthView.vue'

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
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    }
  ]
})

// redirecting to the auth page when user is logged out and tries reaching to te other page via url

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth();
  if(!storeAuth.user.id && to.name !== 'auth') {
    return { name: 'auth'}
  }
  if(storeAuth.user.id && to.name === 'auth') {
    return false;
  }
})

export default router
