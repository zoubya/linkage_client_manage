<template>
<div>

<!-- 商品搜索 -->
  <el-card>
    <el-form  label-width="80px"> 
      <el-col :span="5">
        <el-form-item label="商品名称" >     
          <el-input v-model="search.gname"  size="medium" placeholder="请输入商品名称"></el-input>   
        </el-form-item>  
      </el-col> 

      <el-col :span="1" >
        <el-form-item>     
         <el-button type="primary" size="medium" @click="list">查询</el-button>  
        </el-form-item>  
      </el-col> 
    </el-form>
  </el-card>

<!-- 商品列表 -->
  <div class="primary-module-class">
    <h3 class="module-title-class">商品信息</h3>
    <el-button type="primary" size="small"  style="float:right;" @click="tryModel=true,title='新增商品'">新增</el-button>  
    <el-table  border :data="tableData" >     
      <el-table-column  type="index"    label=" "      width="60px" />
      <el-table-column  prop="gid"    label="商品ID"  width="100px"/>
      <el-table-column  prop="brand"  label="品牌名称" />
      <el-table-column  prop="gname"  label="商品名称" />
      <el-table-column  prop="price"  label="单价(元)"  />
      <el-table-column  prop="number" label="库存(件)" />
      <el-table-column  prop="itime"  label="添加日期" sortable width="170px"/>
      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button size="small"   @click="info(scope.row.gid),tryModel=true,title='编辑商品信息'">编辑</el-button>

          <el-dropdown trigger="click">
            <el-button type="primary" size="small" plain>
              进货<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-truck" @click.native="jump('Purchase',scope.row.gid)">进货</el-dropdown-item>
              <el-dropdown-item icon="el-icon-search">进货记录</el-dropdown-item>
              <el-dropdown-item icon="el-icon-search">出货记录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-button type="danger"  size="small" @click="del(scope.row.gid)">删除</el-button>
         </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-class">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="this.search.pagesize"
        :current-page="this.search.page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total">
      </el-pagination>
    </div>
  </div>

<!-- 新增/编辑商品 -->
  <el-dialog  :title= title :visible.sync="tryModel">
      <el-form  :model="form"  ref="form" label-width="80px">
         <el-form-item label="品牌名称" prop="brand">
            <el-col :span="10">
                <el-input  v-model="form.brand"  placeholder="请输入品牌名称"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="商品名称" prop="gname">
            <el-col :span="10">
                <el-input  v-model="form.gname"  placeholder="请输入商品名称"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="单价" prop="price">
            <el-col :span="10">
                <el-input  v-model="form.price"  placeholder="请输入商品单价"></el-input>
            </el-col>
        </el-form-item>
    
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm('form')" >重 置</el-button>
      <el-button type="primary" @click="add"  v-if="title=='新增商品'">确 定</el-button>
      <el-button type="primary" @click="edit" v-if="title=='编辑商品信息'">确 定</el-button>
    </div>
  </el-dialog>

</div>

</template>


<script>
import Goods from '../../api/Goods'
export default {
  data() {
    return {
      search:{
        gname:'',
        page:1,
        pageSize:10,
      },
      form: {
        gid:'',
        brand:'',
        gname:'',
        price:'',
        number:'',
      },
      tryModel:false,
      tableData: [],
      title:'',
      total:1,
    }
  },
  mounted(){
    this.list();   
  },
  methods:{
      list(){
        Goods.list(this.search).then(response=>{
          this.tableData.splice(0, this.tableData.length) //先清空
          response.data.data.forEach(item => this.tableData.push(item))//赋值
          this.total = response.data.total;
          console.info(this.tableData);
        }).catch(err=>{

        })
      },
      add(){
        Goods.add(this.form).then(response=>{
          if(response.data.code==100){
            this.tryModel=false;//销毁模态框
            this.list();//刷新页面   
          }else{
             this.$message({
                    message:response.data.msg,
                    type:"warning"
             })
          }  
        }).catch(err=>{

        })
      },
      info(id){
        Goods.info(id).then(response =>{
            this.form = response.data
        })
      },
      edit(){
        console.info(this.form)
        Goods.update(this.form).then(response=>{
          if(response.data.code==100){
             this.$message({ message:response.data.msg,type:"success" });                                                                          
             this.tryModel=false;//销毁模态框
             this.list();//刷新页面
          }else{
            this.$message({ message:response.data.msg,type:"warning" });
          }
        })
      },
      del(gid){
        Goods.del(gid).then(response=>{
          if(response.data.code==100){
              this.$message({ message:response.data.msg,type:"success" });
              this.list();//刷新页面
          }else{
              this.$message({ message:response.data.msg,type:"warning" });
          }
        })
      },
      jump(path,gid){
          this.$router.push({name:path, params:{ gid:gid }});
      },
       //重置模态框
      resetForm(formName) {  
        this.$refs[formName].resetFields() 
      },
      //分页
      handleCurrentChange (val) {
        this.search.page = val
        this.list()
      },
      handleSizeChange (val) {
        this.search.pageSize = val
        this.list()
      },
   
   
  },
}
</script>

<style>
.primary-module-class{
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
.pagination-class{
  text-align:center;
  margin-top: 10px;
}
</style>
