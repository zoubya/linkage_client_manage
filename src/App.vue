<template>
 <div id="app">  

    <!--布局容器-->
    <el-container class="app-container-class">

      <!--顶部栏-->
      <el-header  class="app-header-class" style="height:46px;">
       <Head  @transfer="collapseStatus"></Head>
      </el-header> 

        <el-container style="height:100vh">
            <!--左侧侧边栏-->
            <el-aside width="auto">           
               <Navi :isCollapseValue="this.isCollapse"></Navi>
            </el-aside>

            <!--主要区域容器-->          
              <el-main class="main-class">                                     
                <el-scrollbar class="scrollbar-class">           
                  <router-view/>
                </el-scrollbar>                                                                                  
              </el-main>       
        </el-container>
    </el-container>

  </div>
</template>

<script>
import Navi from '@/components/Navi'
import Head from '@/components/Head'
import Home from '@/components/Head'
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
              Home,       
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
    background: rgb(229, 226, 226);
    height: 100vh;
    /* 解决模块框出现页面右侧空白间隙 */
    padding-right:0 !important;
  }
  .app-header-class{ 
    padding: 0px;
    background:#252729;  
  }
  .main-class{
    padding: 15px;
    height: 100%;
  }
  .scrollbar-class{
    height: 100%;
    width: 100%;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden!important; 
  }


</style>
