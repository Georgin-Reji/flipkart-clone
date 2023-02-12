import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'productList',
    component:  () => import('../views/productList.vue')
  },
  {
    path: '/product',
    name: 'productDisplay',
    component:  () => import ('../views/product.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import ('../views/cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
