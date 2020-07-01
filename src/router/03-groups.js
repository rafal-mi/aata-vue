import Exe03 from '@/views/03-groups/Exe03.vue'

const prefix = "03-groups"

const routes = [{
    path: '/exe-03',
    name: 'Exe03',
    component: Exe03
  },
]

routes.forEach(r => r.path = `/${prefix}${r.path}`);

export default routes;

