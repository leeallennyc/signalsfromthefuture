import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../components/Map.vue'
import Application from '../views/Application.vue'
import BaseMap from '../components/InteractiveMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/application',
    name: 'Application',
    component: Application
  },
  {
    path: '/interactive',
    name: 'BaseMap',
    component: BaseMap
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
