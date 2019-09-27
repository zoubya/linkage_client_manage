import axios from 'axios'
import qs from 'querystring'

export default {
  list(data){ 
      return axios.post('user/userList',qs.stringify(data));
  },

  add(data){
    return axios.post('user/addUser',qs.stringify(data));
  },

  info(id){
    return axios.get('user/userInfo',{
      params:{
        userid:id
      }
    });
  },

  update(data){
    return axios.post('user/editUser',qs.stringify(data));
  },
  
  del(id){
    return axios.post('user/delUser',qs.stringify({
      'userid':id
    }))
  }

}