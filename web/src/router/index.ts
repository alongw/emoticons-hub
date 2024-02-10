import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/Page/Home/Home.vue')
    },
    {
      path: '/:hash',
      name: 'Item',
      component: () => import('@/Page/Item/Item.vue')
    }
  ]
})

export default router
