import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Component from '../pages/component.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
