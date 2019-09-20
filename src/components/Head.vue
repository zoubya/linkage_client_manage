<template>
<div>  

    <span>
         <el-button  @click="collapseStatus"  style="background:#252729" class="btn-class" >   
           <i class="el-icon-d-arrow-right" v-if="isCollapse"></i>
           <i class="el-icon-d-arrow-left"  v-if="!isCollapse"></i>
         </el-button>
    </span>
    <span style="color:white;" >
         后台管理
    </span>
    <span class="head-person-class">
         <el-dropdown trigger="click">
         <span class="el-dropdown-link"  style="color:white" >
            {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
         </span>
         <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
         </el-dropdown-menu>
         </el-dropdown>
    </span>

</div>
</template>

<script>
 export default {
   data () {
     return {
        collapseBtnClick: false,
        isCollapse: true,
        username:'',
     }
   },
   mounted() {
      this.username = sessionStorage.getItem('username')
   },
   methods: {
        collapseStatus() {
                this.isCollapse = !this.isCollapse;
                this.$emit('transfer',this.isCollapse);//将值绑定到transfer上传递过去
            },   
        }
   }
</script>

<style>
.head-person-class{
     float:right;
     padding-top:10px;
     margin-right:1%
}
.el-icon-d-arrow-left{
     font-size: 20px;   
     font-weight: bold;   
}
.el-icon-d-arrow-right{
     font-size: 20px;   
     font-weight: bold;   
}
.btn-class{
     border: none; 
}

</style>
