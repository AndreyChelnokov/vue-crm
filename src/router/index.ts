import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Categories from '../views/Categories.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: Categories
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
