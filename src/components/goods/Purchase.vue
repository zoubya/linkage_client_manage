<template>
<div class="module-class"> 
 <el-form ref="form" :model="form" label-width="100px">
  <el-row> 
    <el-col :span="5">
     <h3 class="module-title-class">进货信息录入</h3>
    </el-col> 
  </el-row>
  <el-form-item label="商品名称" prop="gid">
    <el-col :span="5">
        <el-select v-model="form.gid"  placeholder="请选择">
        <el-option
            v-for="item in goods"
            :label="item.brand==null?item.gname:'('+item.brand+')'+item.gname"
            :key="item.gid"
            :value="item.gid" > 
        </el-option>
        </el-select>
    </el-col> 
  </el-form-item>
  <el-form-item label="进货数量" prop="shouldamount">
     <el-col :span="5">
      <el-input v-model="form.shouldamount"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="实进数量" prop="amount">
     <el-col :span="5">
      <el-input v-model="form.amount"></el-input>
    </el-col>
  </el-form-item>
   <el-form-item label="单价" prop="price">
     <el-col :span="5">
      <el-input v-model="form.price"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="负责人" prop="agent">
     <el-col :span="5">
      <el-input v-model="form.agent"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
     <el-col :span="5">
      <el-input v-model="form.phone"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="酬金" prop="pay">
      <el-col :span="5">
      <el-input v-model="form.pay"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="备注" prop="note">
    <el-col :span="10">
     <el-input type="textarea" v-model="form.note"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button @click="resetForm('form')" >重 置</el-button>
    <el-button type="primary" @click="add">确定</el-button>
  </el-form-item>
    </el-form>

</div>
</template>


<script>
import Goods from '../../api/Goods'
import Purchase from '../../api/Purchase'
export default {
  data() {
    return {
      form: {
        gid:'',
        shouldamount:'',
        amount:'',
        agent:'',
        pay:'',
        phone:'',
        price:'',
        note:'',
      },
      goods: [],        
    }
  },
  mounted(){
    //接收商品id
    this.form.gid=this.$route.params.gid;
    //商品下拉框数据
    this.goodsSelect();

  },
  methods:{ 
      add(){
        Purchase.add(this.form).then(response=>{
          if(response.data.code==100){
            //进货成功返回商品界面
             this.$router.push({name:'Goods'});
          }else{
             this.$message({message:response.data.msg,type:"warning"})    
          }  
        }).catch(err=>{

        })
      },
      goodsSelect(){
        Goods.goodsSelect().then(response=>{
          console.info(response.data);
          this.goods = response.data
        })
      },
    //重置模态框
      resetForm(formName) {  
        this.$refs[formName].resetFields() 
      },


  },
}
</script>

<style>
.module-class{
   border-radius: 8px;
   background:#fff;
   padding:25px 25px;
   min-height: 86vh;
}
.module-title-class{
  float: left;
  margin-top: 0px;  
}

</style>
