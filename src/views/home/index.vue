<template>
<div>

  <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="">
          <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
      </el-form-item>
  </el-form>

  <div>lanlan</div>

</div>
</template>

<script>
export default {
    data(){
        return {
            title : '管理系统',
            rules:{
              'username' : {required: true, message: '账号', trigger: 'blur' },
              'password' : {required: true, message: '密码', trigger: 'blur' }
            },
            form:{
              'username':'',
              'password':'',
            },
        }
    },
}
</script>

<style>

</style>
