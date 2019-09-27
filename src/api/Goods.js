import axios from 'axios'
import qs from 'querystring'

export default {
  list(data){ 
      return axios.post('goods/list',qs.stringify(data));
  },

  add(data){
    return axios.post('goods/add',qs.stringify(data));
  },

  info(id){
    return axios.get('goods/info',{
      params:{
        gid:id
      }
    });
  },

  update(data){
    return axios.post('goods/edit',qs.stringify(data));
  },
  
  del(id){
    return axios.post('goods/del',qs.stringify({
      'gid':id
    }))
  },

  goodsSelect(){
    return axios.get('goods/goodsSelect');
  }

}