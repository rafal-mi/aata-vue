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
import Exe08 from '@/views/03-groups/Exe08'
import Exe10 from '@/views/03-groups/Exe10'
import Exe15 from '@/views/03-groups/Exe15'
import Exe19 from '@/views/03-groups/Exe19'
import Exe20 from '@/views/03-groups/Exe20'
import Exe21 from '@/views/03-groups/Exe21'
import Exe22 from '@/views/03-groups/Exe22'
import Exe23 from '@/views/03-groups/Exe23'
import Exe24 from '@/views/03-groups/Exe24'
import Exe26 from '@/views/03-groups/Exe26'

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
        path: 'exe-08',
        component: Exe08
      },
      {
        path: 'exe-10',
        component: Exe10
      },
      {
        path: 'exe-15',
        component: Exe15
      },
      {
        path: 'exe-19',
        component: Exe19
      },
      {
        path: 'exe-20',
        component: Exe20
      },
      {
        path: 'exe-21',
        component: Exe21
      },
      {
        path: 'exe-22',
        component: Exe22
      },
      {
        path: 'exe-23',
        component: Exe23
      },
      {
        path: 'exe-24',
        component: Exe24
      },
      {
        path: 'exe-26',
        component: Exe26
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
