import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GameStartPage from '../views/GameStartPage.vue';
import AccountingPage from '../components/Pages/AccountingPage.vue';
import NewsPage from '../components/Pages/NewsPage.vue';
// import TrainingPage from '../components/Pages/TrainingPage.vue';
import ContactsPage from '../components/Pages/ContactsPage.vue';

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
    path: '/accounting-page',
    name: 'AccountingPage',
    component: AccountingPage
  },
  {
    path: '/news-page',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/training-page', // HERE
    name: 'TraiiningPage',
    // component: TrainingPage
    component: GameStartPage
  },
  {
    path: '/contacts-page',
    name: 'ContactsPage',
    component: ContactsPage
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
