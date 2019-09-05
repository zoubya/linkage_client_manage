<template>

  <el-menu 
     mode="vertical"
     class="el-menu-vertical-demo"
     text-color="white"
     background-color="#252729"
     @select="handleSelect"
     :collapse="isCollapseValue"
    >
    <el-submenu index="1">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一  &#12288; &#12288; &#12288; &#12288; &#12288; </span>
      </template>
      <el-menu-item-group>
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
        this.$router.push('/User');
        this.breadcrumbItems  = ['导航一']
        break;
     case '1-2':
        this.$router.push('/index');
        this.breadcrumbItems  = ['导航二']
        break;
    }
   },

 },
}
</script>

<style>
.el-menu-vertical-demo{
   height: 100%;
}
/* 鼠标悬浮时，子菜单的样式： */
.el-menu-item:hover{
    outline: 0 !important;
    color: #409EFF !important;
}
.el-menu-item.is-active {
    color: #fff !important;
    background: #409EFF !important;
}
/* 鼠标悬浮时，主菜单的样式 */
.el-submenu__title:focus, .el-submenu__title:hover{
    outline: 0 !important;
    color: #409EFF !important;
    background: none !important;
}
  
</style>
