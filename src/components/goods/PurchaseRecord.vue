<template>
<div>
<!-- 进货记录搜索 -->
  <el-card>
    <el-form  label-width="80px"> 
    <el-col :span="4">
      <el-form-item label="商品名称" prop="gid">  
        <el-select v-model="search.gid" size="medium" placeholder="请选择">
        <el-option
            v-for="item in goods"
            :label="item.brand==null?item.gname:'('+item.brand+')'+item.gname"
            :key="item.gid"
            :value="item.gid" > 
        </el-option>
        </el-select>
      </el-form-item>
    </el-col> 

    <el-col :span="8"> 
        <el-form-item label="日期" prop="starttime">      
        <el-date-picker size="medium"
          v-model="search.starttime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="开始时间">
        </el-date-picker>
          <el-date-picker size="medium"
          v-model="search.endtime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="结束时间">
        </el-date-picker>
        </el-form-item> 
    </el-col>
     
      <el-col :span="1" >
        <el-form-item>     
          <el-button type="primary" size="medium" @click="list">查询</el-button>  
        </el-form-item>  
      </el-col> 
  
    </el-form>
  </el-card>

<!-- 进货明细 -->
  <div class="primary-module-class">
    <h3 class="module-title-class">进货明细</h3>
    <el-table  border :data="tableData" >     
      <el-table-column  type="index"    label=" "      width="60px" />
      <el-table-column  prop="rid"    label="记录ID"  />
      <el-table-column  prop="brand"    label="品牌名称" />
      <el-table-column  prop="gname"  label="商品名称" />
      <el-table-column  prop="shouldamount" label="应进数量" />
      <el-table-column  prop="amount"   label="实进数量"  />
      <el-table-column  prop="agent"   label="负责人"  />
      <el-table-column  prop="phone"   label="电话"  />
      <el-table-column  prop="itime"  label="进货日期" sortable width="170px"/>
      <el-table-column  prop="note"   label="备注"  />
     
      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button size="small"   @click="info(scope.row.gid),tryModel=true">查看详情</el-button>
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

  <!-- 详情 -->
  <el-dialog  title='进货详情' :visible.sync="tryModel">
      
    
  </el-dialog>


</div>
</template>


<script>
import Goods from '../../api/Goods'
import Purchase from '../../api/Purchase'
export default {
  data() {
    return {
      search:{
        gid:'',
        starttime:'',
        endtime:'',
        page:1,
        pageSize:10,
      },
      goods: [],
      tryModel:false,
      tableData: [],
      total:1,
    }
  },
  mounted(){
    //商品下拉框数据
    this.goodsSelect();
    this.list();   
  },
  methods:{
      list(){
        Purchase.list(this.search).then(response=>{
          this.tableData.splice(0, this.tableData.length) //先清空
          response.data.data.forEach(item => this.tableData.push(item))//赋值
          this.total = response.data.total;
          console.info(this.tableData);
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
            this.form = response.data.data
        })
      },
  
      goodsSelect(){
        Goods.goodsSelect().then(response=>{
          console.info(response.data);
          this.goods = response.data
        })
      },
        //重置模态框
      resetForm(formName) {  
        this.$refs[formName].resetFields() 
      },
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
