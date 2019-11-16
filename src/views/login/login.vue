<template>
  <div class = 'login'>

    <div class="form-wrapper">
      <div class='title'>{{title}}</div>
      <div>shan</div>
      <div class= 'form'>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class = "login-btn" type="primary" @click="login(form)">登录</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
        <div class='footer'>
            <img src="./loginBg.png" >
            <span class="ct_copyright">开发工具开发</span>
        </div>
  </div>
</template>

<script>
import UserApi from '@/api/user'
import { mapMutations } from 'vuex'
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
    methods:{
        async login (formData) {
          var check = false
          const  valid = this.$refs.form.validate( (valid) => {
             check = valid
          })
          if (check) {
            var data = await UserApi.login(formData)
            if(data.code == 200){
              this.setUser(data.data)
              this.$router.push({ name: 'student-list' })
            }else{
              this.$message.error(data.data.message);
            }
          }
        },
        ...mapMutations(['setUser'])
    },
}
</script>

<style lang="less" scoped>
.login {
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  .login-btn {
    border-radius: 4px;
    width: 80%;
    background: linear-gradient(to left, #2aa98b, #5ed0ba);
    color: #fff;
    box-shadow: 0 4px 10px 2px rgba(152, 152, 152, 0.4);
  }
}

.footer {
  font-size: 0;
  position: relative;
    img {
      width: 100%;
    }
    .ct_copyright {
    position: absolute;
    font-size: 12px;
    color: #989898;
    bottom: 16px;
    right: 29px;
  }
}

.form-wrapper {
  width: 600px;
  padding-top: 10%;
  .form {
    width: 460px;
    margin: 20px auto;
  }
  .login-btn{
    width: 75%;
    height: 50%;
  }
}

.title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 600;
  color: #409eff;
}

</style>
