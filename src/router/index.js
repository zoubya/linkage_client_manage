import Vue from 'vue'
import Router from 'vue-router'

import Navi from '@/components/Navi'
import Head from '@/components/Head'
import Home from '@/components/Home'
import test from '@/components/test'
import UserList from '@/components/user/UserList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/UserList',
      name: 'UserList',
      component: UserList
    },
  ]
})
