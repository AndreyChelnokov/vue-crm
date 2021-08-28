import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail',
    name: 'DetailRecord',
    meta: {layout: 'main'},
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/histore',
    name: 'Histore',
    meta: {layout: 'main'},
    component: () => import('../views/Histore.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registr',
    name: 'Registr',
    meta: {layout: 'empty'},
    component: () => import('../views/Registr.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
