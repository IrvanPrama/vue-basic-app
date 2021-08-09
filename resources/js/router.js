import Vue from 'vue'
import Router from 'vue-router'
import firstPage from './components/pages/MyFirstVuePage.vue'
import newRoute from './components/pages/NewRoute.vue'
import hooks from './components/pages/basic/Hooks.vue'
import methods from './components/pages/basic/Methods.vue'

Vue.use(Router)

const routes = [
    {
        path: '/my-new-vue-router',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoute
    },

    // vue hooks 
    {
        path: '/hooks',
        component: hooks
    },

    // methods 
    {
        path: '/methods',
        component: methods
    },

]

export default new Router({
    mode: 'history',
    routes
})