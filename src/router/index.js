import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = () => import('../components/index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
