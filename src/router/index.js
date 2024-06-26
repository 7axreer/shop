import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/basket.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/favorite.vue')
    },
  ]
})

export default router
