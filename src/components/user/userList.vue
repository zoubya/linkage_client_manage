<template>
<div>
  <!-- 用户搜索 -->
  <el-card>
    <el-form ref="form" label-width="80px"> 
      <el-col :span="5">
        <el-form-item label="用户名" >     
          <el-input v-model="form.username"  size="medium" placeholder="请输入用户名"></el-input>   
        </el-form-item>  
      </el-col> 
      <el-col :span="5">
        <el-form-item label="姓名" >     
          <el-input v-model="form.name"  size="medium" placeholder="请输入姓名"></el-input>   
        </el-form-item>  
      </el-col> 
      <el-col :span="1" >
        <el-form-item>     
         <el-button type="primary" size="medium" @click="list">查询</el-button>  
        </el-form-item>  
      </el-col> 
    </el-form>
  </el-card>

  <div class="user-div-class">  
    <h3 class="module-title-class">用户信息</h3>
    <el-button type="primary" size="small"  style="float:right;">新增</el-button>  
   <!-- 用户表 -->
    <el-table  border :data="tableData" >    
      <el-table-column  type="index"    label=" "      width="60px" />
      <el-table-column  prop="userid"   label="用户ID"  />
      <el-table-column  prop="username" label="用户名"/>
      <el-table-column  prop="name"     label="姓名"/>
      <el-table-column  prop="status"   label="状态">
       <template slot-scope="scope">
         <div v-if="scope.row.status=='0'">已禁用</div>
         <div v-else>正常</div>
       </template>
      </el-table-column>
      <el-table-column  prop="itime"    label="日期" sortable/>
      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button  size="small" @click="info(scope.row.userid)">编辑</el-button>
          <el-button type="warning" size="small"  v-if="scope.row.status=='1'" @click="update(scope.row.userid,0)">禁用</el-button>
          <el-button type="success" size="small"  v-if="scope.row.status=='0'" @click="update(scope.row.userid,1)">启用</el-button>
          <el-button type="danger"  size="small" @click="del(scope.row.userid)">删除</el-button>
         </template>
      </el-table-column>
    </el-table>
  </div>

</div>
</template>


<script>
import User from '../../api/User'
export default {
  data() {
    return {
      form: {
        username:'',
        name:'',
      },
      tableData: []
    }
  },
  mounted(){
    this.list()
  },
  methods:{
    list(){
      User.list(this.form).then(response=>{
        this.tableData = response.data.data;
        console.info(this.tableData);
      }).catch(err=>{

      })
    },
   
  },
}
</script>

<style>
.user-div-class{
   border-radius: 4px;
   margin-top: 10px;
   /* min-height: 67.8vh; */
   background:#fff;
   padding:25px 20px;
}
.module-title-class{
  float: left;
  margin-top: 0px;  
}

</style>
