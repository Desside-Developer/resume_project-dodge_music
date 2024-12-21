import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Auth from '../pages/Auth.vue';
import PlayerPage from '../pages/PlayerPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/player', component: PlayerPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;