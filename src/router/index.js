import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JSXGraph from '@/components/JSXGraph.vue'
import Exe03 from '@/views/ch03groups/Exe03.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jsxgraph',
    name: 'JSXGraph',
    component: JSXGraph
  },
  {
    path: '/groups/exe-03',
    name: 'Exe03',
    component: Exe03
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
