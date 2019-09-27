// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://192.168.10.123:8888'
axios.interceptors.response.use(response => response, err => console.log(err))

Vue.use(ElementUI)

//引用公共js
import common from '../src/api/common.js'
Vue.prototype.common = common;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
