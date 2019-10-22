<template>
<div>

  <el-row>
      <el-button type="success" icon="el-icon-plus" size="small" @click="dialogFormVisible = true">创建学校名称</el-button>
  </el-row>

<el-dialog title="填写内容" :visible.sync="dialogFormVisible" width="30%">
  <el-form :model="form">
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input  v-model="form.name"  autocomplete="off"></el-input>
    </el-form-item>
    <!-- <el-form-item label="区域" :label-width="formLabelWidth">
      <el-input  v-model="form.districtNo"  autocomplete="off"></el-input>
    </el-form-item> -->
    <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
  </el-form>
  <div slot="footer" >
    <el-button @click="clear()">取 消</el-button>
    <el-button type="primary" @click="submit()">确 定</el-button>
  </div>
</el-dialog>

  <base-table :currentPage="currentPage" :tableData="tableData"  :tableHeaders="tableHeaders" @page-change="pageChange">
    <el-table-column  class="action"  fixed="right"  label="操作"  slot="action">
      <template slot-scope="scope">
        <el-button  @click="handleEdit(scope.row)" type="text">编辑</el-button>
        <el-button  @click="handleDel(scope.row.id,scope.$index)" type="text">
          <span style="color:red">删除</span>
        </el-button>
      </template>
    </el-table-column>
  </base-table>


</div>
</template>

<script>
  import schoolApi from '@/api/school'
  export default {
    data(){
        return {
            formLabelWidth: '60px',
            dialogTableVisible: false,
            dialogFormVisible: false,
            form:{
              'name':'',
            },

            tableData:[],
            tableHeaders: [
              { label: 'id', prop: 'id' },
              { label: '名称', prop: 'name' },
            ],

            currentPage: 1,
        }
    },
    computed:{
      params(){
        return {
          page:this.currentPage,
          pageSize:20
        }
      }
    },
    methods:{
      clear(){
        this.form = {
          'name':'',
        }
        this.dialogFormVisible = false
      },
      async submit(){
        if(this.form.id){
          var res = await schoolApi.edit(this.form)
        }else{
          var res = await schoolApi.create(this.form)
        }
        if(res.code == 200){
          this.dialogFormVisible = false
          this.clear()
          this.$message.success('提交成功!');
          this.find();
        }else{
          this.$message.error(res.data.message);
        }
      },
    
      async find(){
        const res = await schoolApi.getAllItems(this.params)
        this.tableData = res
        console.log(res)
      },
      async pageChange(page){
        // console.log('111111111111111111')
        this.currentPage = page
        this.find();
      },
      handleEdit (data) {
        this.dialogFormVisible = true
        this.form.name = data.name
        this.form.id = data.id
        // 改变this.searchForm.schoolid 要改变this.find()内获取的数据
        this.find()
        let formData = Object.assign({},this.form)
      },
      async handleDel(id, index){
        const res = await schoolApi.delete(id)
        this.find();
        this.$message.success('删除成功!');
      }
    },
    mounted(){
      this.find()
    }

}
</script>

<style>

</style>