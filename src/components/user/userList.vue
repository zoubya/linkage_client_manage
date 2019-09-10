<template>
<div>
  <el-card>
    <el-form ref="form" label-width="80px"> 
      <el-col :span="6">
        <el-form-item label="用户名" >     
          <el-input   type="text" size="medium" placeholder="请输入用户名"></el-input>   
        </el-form-item>  
      </el-col> 
        <el-col :span="6">
        <el-form-item label="用户名" >     
          <el-input   size="medium" placeholder="请输入用户名"></el-input>   
        </el-form-item>  
      </el-col> 
   </el-form>
  </el-card>

  <div class="user-class">
     
      <h3 class="module-title-class">员工信息</h3>
      <el-button type="primary" size="medium"  style="float:right" >添加</el-button>
    
      <el-table  
        border
        class="user-table-class"
        :data="tableData"
        >
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
 
  </div>
</div>
</template>


<script>
export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
}
</script>

<style>
.user-class{
   border-radius: 4px;
   margin-top: 10px;
   /* min-height: 67.8vh; */
   background:#fff;
   padding:25px 20px;
}
.module-title-class{
  float: left;
  margin: 0;
  
}
.user-table-class{
  margin-top: 10px;
}

 
</style>
