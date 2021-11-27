import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GameStartPage from '../views/GameStartPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/start-game',
    name: 'GameStartPage',
    component: GameStartPage
  },
  {
    path: '/accounting-page', // HERE
    name: 'AccountingPage',
    component: GameStartPage
  },
  {
    path: '/news-page', // HERE
    name: 'NewsPage',
    component: GameStartPage
  },
  {
    path: '/training-page', // HERE
    name: 'TraiiningPage',
    component: GameStartPage
  },
  {
    path: '/contacts-page', // HERE
    name: 'ContactsPage',
    component: GameStartPage
  },
  {
    path: '/start-game/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
