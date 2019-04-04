import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Cadastrar from '@/components/Cadastrar'
import Editar from '@/components/Editar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/editar/:email',
      name: 'editar',
      component: Editar
    }
  ]
})
