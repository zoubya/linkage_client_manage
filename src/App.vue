<template>
 <div id="app">  

    <!--布局容器-->
    <el-container class="app-container-class" >

      <!--顶部栏-->
      <el-header  class="app-header-class" style="height:46px;">
       <Head  @transfer="collapseStatus"></Head>
      </el-header> 

        <el-container>
            <!--左侧侧边栏-->
            <el-aside width="auto">           
               <Navi :isCollapseValue="this.isCollapse"></Navi>
            </el-aside>

            <!--主要区域容器-->
              <el-main>  
                <div class="el-main-div-class">                
                 <router-view/>  
                </div> 
              </el-main>
               
        </el-container>
    </el-container>

  </div>
</template>

<script>
import Navi from '@/components/Navi'
import Head from '@/components/Head'
import User from '@/components/user/User'
export default {
  name: 'App',
  data() {
      return {       
              isCollapse: true,
            }
  },
  components: {
              Navi,
              Head,
              User
   },
  methods: {
            collapseStatus(msg){                   
                     this.isCollapse=msg;
            },
            collapseOpen() {                 
                    this.isCollapse = false;
            },
            collapseClose() {             
                    this.isCollapse = true;
            }
          }
}
</script>

<style>
  #app,body,.app-container-class{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: lightgrey;
  }
  .app-header-class{ 
    padding: 0px;
    background:#252729;  
  }
  .el-main-div-class{
    /*flex 布局*/
     display: flex;
     /*实现垂直居中*/
     align-items: center;
     /*实现水平居中*/
     justify-content: center;
     width: 100%;
     height: 100%;
  }
 

</style>
