import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GameStartPage from '../views/GameStartPage.vue';
import AccountingPage from '../components/AccountingPage.vue';
// import NewsPage from '../components/NewsPage.vue';
// import TrainingPage from '../components/TrainingPage.vue';
import ContactsPage from '../components/ContactsPage.vue';

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
    path: '/news-page', // HERE
    name: 'NewsPage',
    // component: NewsPage
    component: GameStartPage
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
