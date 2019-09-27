import Vue from 'vue'
import Router from 'vue-router'

import Navi from '@/components/Navi'
import Head from '@/components/Head'
import Home from '@/components/Home'
import Login from '@/components/Login'
import test from '@/components/test'
import User from '@/components/user/User'
import Goods from '@/components/goods/Goods'
import PurchaseRecord from '@/components/goods/PurchaseRecord'
import Purchase from '@/components/goods/Purchase'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
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
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/PurchaseRecord',
      name: 'PurchaseRecord',
      component: PurchaseRecord
    },
    {
      path: '/Purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
  ]
})
