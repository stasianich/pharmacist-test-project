import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
