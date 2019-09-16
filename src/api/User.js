import axios from 'axios'
import qs from 'querystring'

export default {
  list(data){ 
      return axios.get('user/userList',{
        params:{
          username: data.username,
          name: data.name
        }
      })
  },
  add(data){
    return axios.post('user/addUser',qs.stringify(data));
  },
  del(userid){
    return axios.post('user/delUser',qs.stringify(userid));

  }

}