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
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/SingleCategory.vue')
    },
    {
      path: '/single/:id',
      name: 'single',
      component: () => import('../views/singlepro.vue')
    },
  ]
})

export default router
