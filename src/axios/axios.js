//axiso 二次封装统一处理机制
import axios from 'axios'
import Qs from 'qs'
import { Message,Loading} from 'element-ui';//引入elm组件
import router from "../router";//引入路由控制器
 
 
let loadingInstance;//定时器
let host = '';
if (process.env.NODE_ENV === 'development') {
   host = 'http://192.168.10.123:8888'//开发环境下的地址
}else{
   host = 'http://localhost:8081';//生产环境下地址
}

//请求的URL地址
// export const test = host + '/user/userInfo' 
 
// 请求拦截器，相应之前显示加载动画
axios.interceptors.request.use((config) => {
  loadingInstance = Loading.service({
    lock: true,
    text: '努力拉取中 ~>_<~',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config
}, (error) => {
  return Promise.reject(error)
})
 
//响应拦截器即异常处理并关闭加载动画
axios.interceptors.response.use(response => {
  loadingInstance.close();
  console.log("response:" + response);
  if (response.data.code == -1) {
    //用户身份过期，跳转首页
    router.push({
      path: "/Login"
    });
  } else if (!response.data.status) {
    //错误信息提示
    Message.error(response.data.message)
  }
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }
  alert(err.message)
})
// axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))
 
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
export default {
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      baseURL: host,
      data: Qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).catch(function (error) {
      // 由网络或者服务器抛出的错误
      alert(error.toString())
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url: url,
      baseURL: host,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).catch(function (error) {
      // 由网络或者服务器抛出的错误
      alert(error.toString())
    })
  },
  uploadFile(url, data) {
    return axios({
      method: 'post',
      url: url,
      baseURL: host,
      data: Qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
      }
    }).catch(function (error) {
      // 由网络或者服务器抛出的错误
      alert(error.toString())
    })
  },
}
// export default instance