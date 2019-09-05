<template>
<div style="height:100%">
  <el-menu 
    class="el-menu-vertical-demo"
    default-active="1" 
    active-text-color="#ffd04b"
    background-color="#252729"
    text-color="white"
    @select="handleSelect"
    :collapse="isCollapseValue"
    >
    <el-submenu index="1">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</p></span>
      </template>
      <el-menu-item-group  >
          <el-menu-item index="1-1">人员</el-menu-item>
          <el-menu-item index="1-2">商品</el-menu-item>
          <el-menu-item index="1-3">选择3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
      </template>
      <el-menu-item-group>
          <el-menu-item index="2-1">选择1</el-menu-item>
          <el-menu-item index="2-2">选择2</el-menu-item>
          <el-menu-item index="2-3">选择3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu >
</div>
</template>

<script>
 export default {
  data() {
      return {
        
      }
    },
  components: {
    
   },
  props:['isCollapseValue'],
  methods:{
   handleSelect(key, keyPath){
    switch(key){
      case '1-1':
        this.$router.push('/');
        this.breadcrumbItems  = ['导航一']
        break;
     case '1-2':
        this.$router.push('/Navi');
        this.breadcrumbItems  = ['导航二']
        break;
    }
   },
 },
}
</script>

<style>
.el-menu-vertical-demo{
    min-height:100vh;
}
   
</style>
