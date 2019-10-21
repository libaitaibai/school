<template>
<div>

    <el-form :inline="true" :model="searchForm"  class="demo-form-inline">

        <el-form-item label="学校">
          <el-select clearable :label-width="formLabelWidth" v-model="searchForm.schoolid" placeholder="请输入学校" @change="handleSchoolChange" size="small">
            <el-option v-for="item in commonSchool"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>  

        <el-form-item label="年级">
          <el-select clearable v-model="searchForm.gradeid" placeholder="请输入年级" @change="handleGradeChange" size="small">
            <el-option v-for="item in filterGradeBySchoolid(searchForm.schoolid)"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>  

        <el-form-item label="班级">
          <el-select clearable v-model="searchForm.classid" placeholder="请输入班级" size="small ">
            <el-option v-for="item in filterClassByGrade(searchForm.gradeid)"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>  

        <el-form-item label="姓名">
          <el-input v-model="searchForm.nickname" placeholder="请输入姓名" size="small"></el-input>
        </el-form-item>  

        <el-button size="small"  type="primary" @click="find()" >查询</el-button>
    </el-form>
    <el-row>
        <el-button type="success" icon="el-icon-plus" size="small" @click="create()">创建</el-button>
    </el-row>

<!-- :currentPage="currentPage"  @page-change="pageChange"-->
  <base-table :currentPage="currentPage" :tableData="tableData"  :tableHeaders="tableHeaders"  @page-change="pageChange">
    <el-table-column  class="action"  fixed="right"  label="操作"  slot="action"  >
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
import userApi from '@/api/user'
import { LoadingMixins,SchoolDataMixins } from '@/mixins/index'
export default {
    mixins: [SchoolDataMixins,LoadingMixins],
    data(){
        return {
            formLabelWidth:'60px',
            searchForm:{
                schoolid:'',
                gradeid:'',
                classid:'',
                nickname:''
            },
            tableData:[],
            tableHeaders: [
              { label: 'id', prop: 'id' },
              { label: '姓名', prop: 'nickname' },
              { label: '手机号', prop: 'phone' },
              { label: '学校', prop: 'school' },
              { label: '年级', prop: 'grade' },
              { label: '班级', prop: 'class' },
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
        create(){
          this.$router.push({ name: 'account-create' })
        },
        async pageChange(page){
          console.log('11111')
          this.currentPage = page
          this.find();
        },
        async find(){
          let params = Object.assign({}, this.searchForm,this.params);
          params = this.check(params)
          const res = await userApi.getAllItems(params)
          this.tableData = res
          console.log(res)
        },
        async handleDel(id, index){
          const res = await userApi.delete(id)
          this.find();
          this.$message.success('删除成功!');
        },
        handleEdit(data){
          this.$router.push({ name: 'account-edit', params: { userId: data.id } })
          // this.$router.push({ name: 'account-edit/'+ data.id})
          console.log(data.id)
        },
        check(params){
          for(let i in params){
            if(!params[i]){
              delete params[i]
            }
          }
          return params;
        }
    },
    mounted(){
      this.find()
    }
}
</script>

<style>

</style>