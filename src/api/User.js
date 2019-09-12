import axios from 'axios'
import qs from 'querystring'

export default {
  list(data){ 
    console.info(data)
      return axios.get('user/userList',{
        params:{
          username: data.username,
          name: data.name
        }
      })
  },

}