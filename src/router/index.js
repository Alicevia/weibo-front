import { createRouter as CreateRouter, createWebHistory } from 'vue-router'

const router = new CreateRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('views/login/login.vue'),
    },
    {
      path: '/register',
      component: () => import('views/register/register.vue'),
    },
    {
      path: '/',
      component: () => import('@/layout/baseLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('views/home/home.vue'),
        },
        {
          path: '/setting',
          component: () => import('views/setting/setting.vue'),
        },
        {
          path: '/profile/:userName',
          component: () => import('views/profile/profile.vue'),
        },
      ],
    },
  ],
})

export default router
