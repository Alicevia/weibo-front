import { createRouter as CreateRouter, createWebHistory } from 'vue-router'

const router = new CreateRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('views/home/home.vue'),
    },
    {
      path: '/login',
      component: () => import('views/login/login.vue'),
    },
  ],
})

export default router
