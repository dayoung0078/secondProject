import { createRouter, createWebHistory } from 'vue-router'
import OrderReceipt from '../views/OrderReceipt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'receipt',
      component: OrderReceipt
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/OrderReceipt.vue')
    }
  ]
})

export default router
