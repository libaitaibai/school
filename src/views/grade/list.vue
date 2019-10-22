<template>
<div>
    <!-- 点击创建 -->
    <div class="created">
        <el-button size="small" type="success" icon="el-icon-plus" @click="dialogVisible = true">创建年级名称</el-button>
    </div>
    <!-- 对话框 -->
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <el-form ref="form" :model="searchForm" label-width="80px">
             <el-form-item label="学校名称">
                <el-select clearable :label-width="formLabelWidth" v-model="searchForm.schoolid" placeholder="请输入学校" size="small">
                    <el-option v-for="item in commonSchool"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年级名称">
                <el-input  v-model="searchForm.name" placeholder="请输入" size="small"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogfalse()">取 消</el-button>
            <el-button type="primary" @click="dialogture()">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 带分页的table tableData是表格数据,tableHeaders是表格头-->
    <base-table :currentPage="currentPage" :tableData="tableData" :tableHeaders="tableHeaders" @page-change="pageChange">
        <el-table-column label="操作"  class="action"  fixed="right" slot="action" width="180">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-edit"  @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete"  @click="handleDel(scope.row.id,scope.$index)">删除</el-button>
            </template>
        </el-table-column>
    </base-table>
</div>
</template>

<script>
import gradeApi from '@/api/grade'
import { LoadingMixins,SchoolDataMixins } from '@/mixins/index'
export default {
    mixins: [SchoolDataMixins,LoadingMixins],
    data(){
        return {
            formLabelWidth:'60px',
            tableData: [],
            dialogVisible: false,
            tableHeaders: [
                { label: 'id', prop: 'id' },
                { label: '学校名称', prop: 'school.name' },
                { label: '年级名称', prop: 'name' }
            ],
            currentPage: 1,
            searchForm:{
                schoolid:'',
                name:''
            },
        }
    },
    computed:{
        params () {
            return {
                page: this.currentPage,
                pageSize: 20
            }
        }
    },
    methods:{
        created(){

        },
        // 异步当确定时判断是不是有id了如果有就修改信息edit如果没有就创建信息create
        async dialogture () {
            if(this.searchForm.id){
                var res = await gradeApi.edit(this.searchForm)
            }else{
                var res = await gradeApi.created(this.searchForm)
            }

            if(res.code == 200){
                this.dialogfalse();
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
                this.find()
            }else{
                this.$message.error(res.data.message);
            }
        },
        // 退出时让form.name清空关闭本页面
        dialogfalse () {
            this.dialogVisible = false;
            this.searchForm = {
              'name':'',
            }
        },
        async pageChange(page){
            this.currentPage = page
            this.find();
        },
        async find () {
            const res = await gradeApi.getAllItems(this.params)
            this.tableData = res
            console.log(res)
        },
        handleEdit (data) {
            console.log(data)
            this.dialogVisible = true
            this.searchForm.name = data.name
            this.searchForm.id = data.id
            this.searchForm.schoolid = data.schoolid
            // 改变this.searchForm.schoolid 要改变this.find()内获取的数据
            this.find()
            let formData = Object.assign({},this.searchForm)
        },
        async handleDel(id, index){
            const res = await gradeApi.delete(id)
            this.find();
            this.$message.success('删除成功!');
        }
    },
    mounted () {
      this.find()
    }
}
</script>

<style scoped>
    .tables{
        margin-top:20px;
    }
    .el-button--mini, .el-button--mini.is-round {
        padding: 5px 7px;
    }
</style>
