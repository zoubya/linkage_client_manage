<template>
 <div id="app">  

    <!--布局容器-->
    <el-container class="app-container-class" direction="vertical">

      <!--顶部栏-->
      <el-header  class="app-header-class" style="height:46px;">
        <!-- <span style="float:right;">
          <el-color-picker v-model="themeColor" ></el-color-picker>
        </span>  -->
        <Head  @transfer="collapseStatus"></Head>
      </el-header> 

        <el-container style="height:100%">
            <!--左侧侧边栏-->
            <el-aside
             style="border: 1px solid red;"
             width="auto"
             @mouseenter.native="collapseOpen"
             @mouseleave.native="collapseClose" >
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
        themeColor: '#409EFF',
        collapseBtnClick: false,
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
                    if (this.collapseBtnClick) return;
                    this.isCollapse = false;
            },
            collapseClose() {
                    if (this.collapseBtnClick) return;
                    this.isCollapse = true;
            }
          }
}
</script>

<style>
  #app,body,.app-container-class{
    margin: 0;
    padding: 0;
    width: 100%;
    background: lightgrey
  }
  .el-main-div-class{
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid red
  }
  .app-header-class{ 
    padding: 0px;
    background:#252729;  
  }

</style>
