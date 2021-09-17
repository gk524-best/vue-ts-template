import { createRouter, createWebHistory } from 'vue-router';

const Home = import('@views/home.vue');
const Lit = import('@views/list.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/list',
      component: Lit,
    },
  ],
});

export default router;
