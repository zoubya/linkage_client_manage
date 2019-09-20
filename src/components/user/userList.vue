<template>
<div>
<!-- 用户搜索 -->
  <el-card>
    <el-form  label-width="80px"> 
      <el-col :span="5">
        <el-form-item label="用户名" >     
          <el-input v-model="search.username"  size="medium" placeholder="请输入用户名"></el-input>   
        </el-form-item>  
      </el-col> 
      <el-col :span="5">
        <el-form-item label="姓名" >     
          <el-input v-model="search.name"  size="medium" placeholder="请输入姓名"></el-input>   
        </el-form-item>  
      </el-col> 
      <el-col :span="1" >
        <el-form-item>     
         <el-button type="primary" size="medium" @click="list">查询</el-button>  
        </el-form-item>  
      </el-col> 
    </el-form>
  </el-card>

<!-- 用户表 -->
  <div class="user-div-class">
    <h3 class="module-title-class">用户信息</h3>
    <el-button type="primary" size="small"  style="float:right;" @click="tryModel=true,title='新增用户'">新增</el-button>  
    <el-table  border :data="tableData" >     
      <el-table-column  type="index"    label=" "      width="60px" />
      <el-table-column  prop="userid"   label="用户ID"  />
      <el-table-column  prop="username" label="用户名" />
      <el-table-column  prop="name"     label="姓名"  />
      <el-table-column  prop="phone"    label="电话" />
      <el-table-column  prop="status"   label="状态">
       <template slot-scope="scope">
         <div v-if="scope.row.status=='0'">已禁用</div>
         <div v-else>正常</div>
       </template>
      </el-table-column>
      <el-table-column  prop="itime"    label="日期" sortable width="200px"/>
      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button type="info"    size="small" @click="info(scope.row.userid),tryModel=true,title='编辑用户'">编辑</el-button>
          <el-button type="warning" size="small"  v-if="scope.row.status=='1'" @click="off(scope.row.userid,0)">冻结</el-button>
          <el-button type="success" size="small"  v-if="scope.row.status=='0'" @click="off(scope.row.userid,1)">启用</el-button>
          <el-button type="danger"  size="small" @click="del(scope.row.userid)">删除</el-button>
         </template>
      </el-table-column>
    </el-table>
  </div>

<!-- 新增/编辑用户 -->

  <el-dialog  :title= title :visible.sync="tryModel">
      <el-form  :model="form"  ref="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
            <el-col :span="10">
                <el-input  v-model="form.username"  placeholder="请输入用户名"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="10">
              <el-input  v-model="form.password"  show-password></el-input>
          </el-col>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
            <el-col :span="10">
              <el-input  v-model="form.name" ></el-input>
            </el-col>
      </el-form-item>
      <el-form-item label="电话"  prop="phone">
            <el-col :span="10">
              <el-input  v-model="form.phone"></el-input>
            </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm('form')" >重 置</el-button>
      <el-button type="primary" @click="add"  v-if="title=='新增用户'">确 定</el-button>
      <el-button type="primary" @click="edit" v-if="title=='编辑用户'">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>


<script>
import User from '../../api/User'
export default {
  data() {
    return {
      search:{
        username:'',
        password:'',
      },
      form: {
        userid:'',
        username:'',
        password:'',
        name:'',
        iphone:'',
        status:'',
      },
      tryModel:false,
      tableData: [],
      title:'',
    }
  },
  mounted(){
    this.list()
  },
  methods:{
      resetForm(formName) {         
              this.$refs[formName].resetFields();
            },
      list(){
        User.list(this.search).then(response=>{
          this.tableData = response.data.data;
          console.info(this.tableData);
        }).catch(err=>{

        })
      },
      add(){
        User.add(this.form).then(response=>{
          this.$message({
                    message:response.data.msg,
                    type:"success"
                  })
          this.tryModel=false;//销毁模态框
          this.list();//刷新页面
        }).catch(err=>{

        })
      },
      info(userid){
        User.info(userid).then(response =>{
            this.form = response.data.data
        })
      },
      off(userid,status){      
        this.form.userid = userid;
        this.form.status = status;
        this.edit();
       }, 
      edit(){
        console.info(this.form)
        User.update(this.form).then(response=>{
          this.$message({
                    message:response.data.msg,
                    type:"success"
                  })
          this.tryModel=false;//销毁模态框
          this.list();//刷新页面
        })
      },
      del(userid){
        User.del(userid).then(response=>{
          this.$message({
                    message:response.data.msg,
                    type:"success"
                  })
          this.list();//刷新页面
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
   background:#fff;
   padding:25px 20px;
   min-height: 76vh;
}
.module-title-class{
  float: left;
  margin-top: 0px;  
}
</style>
