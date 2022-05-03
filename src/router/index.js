import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '@/components/Product'
import ProductsList from '@/components/ProductsList'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: ProductsList
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
