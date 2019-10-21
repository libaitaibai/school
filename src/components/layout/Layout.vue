<template>
  <div>

<el-container>

  <el-header class="header">
    <div class="headerbg">上海市城运平台管理系统</div>
      <el-dropdown
        @command="handleCommand"
        class="name"
      >
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </el-header>

<el-main>
  <el-container>
    <el-aside width="200px"  clss="aside">
      <div class="slidebar">
        <el-col :span="24">
          <el-menu
            router 
            class = "el-menu-vertical-demo"
            @open = "handleOpen"
            @close = "handleClose"
            >
        
            <el-menu-item index="/school/school-list">
              <i class="el-icon-location"></i>
              <span slot="title">school</span>
            </el-menu-item>
      
            <el-menu-item index="/grade/grade-list">
              <i class="el-icon-setting"></i>
              <span slot="title">grade</span>
            </el-menu-item>

            <el-menu-item index="/class/class-list">
              <i class="el-icon-menu"></i>
              <span slot="title">class</span>
            </el-menu-item>
            <el-menu-item index="/student/student-list" >
              <i class="el-icon-document"></i>
              <span slot="title">student</span>
            </el-menu-item>
            <el-menu-item index="/account/account-list">
              <i class="el-icon-user"></i>
              <span slot="title">account</span>
            </el-menu-item>

          </el-menu>
        </el-col>
      </div>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-main>

</el-container>


  </div>
</template>

<script>
import UserApi from '@/api/user'
import { mapMutations, mapGetters } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({ username: 'username' })
    },
    methods:{
      async logout() {
        this.resetUser()
      },
      handleCommand(command) {
        this.logout()
      },
      ...mapMutations({resetUser:'logout'}),

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="less" scoped>
  .header{
    position: relative;
    background-color: #409eff;
    color: #333;
    line-height: 60px;
    text-align: left;
    .headerbg{
      padding: 0;
      margin: 0;
      width: 360px;
      text-align: left; 
      font-size: 30px;
      color: #eaecef;
    }
    .name {
      position: absolute;
      right: 20px;
      top: 12px;
      padding: 0 10px;
      line-height: 30px;
      color: #190cd8;
      cursor: pointer;
    }
  }
  .aside{
    width: 200px;
    height: 500px;

    .slidebar{
        height: 100%;
        overflow: hidden;
        background: #f6f6f6;
    }
  }



</style>