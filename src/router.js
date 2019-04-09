import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cadastrar from './views/Cadastrar.vue'
import Editar from './views/Editar.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
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
