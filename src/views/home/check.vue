<template>
  <div>

    <mt-button type="danger" size="large" @click="addstudent">添加信息</mt-button>

    <mt-button type="primary" size="large" @click="showlist">查看信息</mt-button>

</div>
</template>

<script>
import { Button } from 'mint-ui'
import { mapMutations,mapGetters,mapState } from 'vuex'
import storage from 'good-storage'
import Store from '@/store/store'
  export default {
    data(){
        return {

        }
    },
    computed:{
        // ...mapGetters(['Openid']),
        ...mapState({Openid:state=>state.wechat.Openid})
    },
    methods:{
      checkopen(data){
          if(!data.query.openid){
              let url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
                  "appid=wxef3c3c5c81f4e723" +
                  "&redirect_uri=https://school.rongxingzhileng.cn" +
                  "&response_type=code" +
                  "&scope=snsapi_userinfo" +
                  "&state=STATE#wechat_redirect"
              window.location.href = url;
          }
      },
      addstudent(){
          this.checkopen(this.$route)
          this.$router.push('home-student')
      },
      showlist(){
            this.checkopen(this.$route)
    console.log(9999,this.Openid)

      },
    ...mapMutations(['setOpenid']),

    },
    mounted(){
        this.setOpenid(this.$route.query)
    }
  }
</script>

<style>

</style>

