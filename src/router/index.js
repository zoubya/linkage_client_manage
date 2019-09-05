import Vue from 'vue'
import Router from 'vue-router'
import Navi from '@/components/Navi'
import Head from '@/components/Head'
import User from '@/components/user/User'
import Index from '@/components/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Navi',
      name: 'Navi',
      component: Navi
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
  ]
})
