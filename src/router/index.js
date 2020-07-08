import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JSXGraph from '@/components/JSXGraph.vue'

import Ch03Groups from '@/views/03-groups/Ch03Groups'
import Ch03Index from '@/views/03-groups/Ch03Index'
import Exe03 from '@/views/03-groups/Exe03'
import Exe04 from '@/views/03-groups/Exe04'
import Exe05 from '@/views/03-groups/Exe05'
import Exe06 from '@/views/03-groups/Exe06'
import Exe07 from '@/views/03-groups/Exe07'

import ch03groups from './03-groups'

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

  //...ch03groups

  {
    path: '/03-groups',
    component: Ch03Groups,
    children: [
      {
        path: 'index',
        component: Ch03Index
      },
      {
        path: 'exe-03',
        component: Exe03
      },
      {
        path: 'exe-04',
        component: Exe04
      },
      {
        path: 'exe-05',
        component: Exe05
      },
      {
        path: 'exe-06',
        component: Exe06
      },
      {
        path: 'exe-07',
        component: Exe07
      },
      {
        path: '',
        component: Ch03Index
      }
    ]

  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
