<template>
<div>

<!--  <mt-range v-model="rangeValue"-->

<!--            :step="50"-->
<!--            :bar-height="10">-->
<!--&lt;!&ndash;    <div slot="start">0</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div slot="end">100</div>&ndash;&gt;-->
<!--  </mt-range>-->


  <p class="page-range-header">基本功能</p>


  <mt-cell title="使用周期" :label=" periodrangeValue" >
    <div class="wind_range">
      <mt-range v-model="periodrange"
                @change="period()"
                :step="40"
                :bar-height="8">
  <!--      <div slot="start">包月</div>-->
  <!--      <div slot="end">包年</div>-->
      </mt-range>
    </div>
  </mt-cell>


  <mt-cell title="标题文字" value="说明文字"></mt-cell>

  <mt-button type="primary" @click="submit">primary</mt-button>

</div>
</template>


<script>
import { Range,CellSwipe,Cell,Toast   } from 'mint-ui';
import storage from 'good-storage'
import homeApi from '@/api/wechat/home'
import wx from 'weixin-js-sdk'
export default {
    data(){
        return {
            form:{
                period:1,
                openid:storage.get('Openid')
            },
            periodrange:0,
            periodrangeValue:'包月￥3',
        }
    },
    methods:{
        period(){
            switch(this.periodrange) {
                case 0:
                    this.periodrangeValue = '包月￥3'
                    this.form.period = 1
                    break;
                case 33:
                    this.periodrangeValue = '包季￥12'
                    this.form.period = 2
                    break;
                case 67:
                    this.periodrangeValue = '包学期￥15'
                    this.form.period = 3
                    break;
                default:
                    this.periodrangeValue = '包年￥33'
                    this.form.period = 4
            }
        },
        async submit() {
            let wechatdata = await homeApi.createOrder(this.form)
            if(!wechatdata){
                return ;
            }

            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId":wechatdata.appId,     //公众号名称，由商户传入
                    "timeStamp":wechatdata.timeStamp,         //时间戳，自1970年以来的秒数
                    "nonceStr":wechatdata.nonceStr, //随机串
                    "package":wechatdata.package,
                    "signType":wechatdata.signType,         //微信签名方式：
                    "paySign":wechatdata.paySign //微信签名
                },
                function(res){
                    alter(res.err_msg)
                    console.log(55555555555,res)
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                        // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    }
                });
            return ;


            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wechatdata.appId, // 必填，公众号的唯一标识
                timestamp: wechatdata.timestamp, // 必填，生成签名的时间戳
                nonceStr: wechatdata.nonceStr, // 必填，生成签名的随机串
                signature: wechatdata.signType,// 必填，签名，见附录1
                jsApiList: ['chooseWXPay']
            })

            // 处理验证失败的信息
            wx.error(function (res) {
                console.error(res)
            })

            //判断当前客户端版本是否支持指定JS接口
            wx.checkJsApi({
                jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function(res) {
                    console.log(99999999999,res)
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                }
            });
            wx.ready(function(){
                wx.chooseWXPay({
                    appId: wechatdata.appId,
                    timestamp: wechatdata.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: wechatdata.nonceStr, // 支付签名随机串，不长于 32 位
                    package: wechatdata.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                    signType: wechatdata.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: wechatdata.paySign, // 支付签名
                    success: function (res) {
                        console.log(55555555555,res)
                        // 这里写成功后的动作 我试过跳转路由好像不灵 或者是执行太快后端处理订单未变化呢 我改成了这个   window.location.href="你所要跳转的页面";
                    },
                    cancel: function (res) {
                        alert('已取消支付');
                    },
                    fail: function (res) {
                        console.log(77777777,res)
                        alert('购买失败，请重新创建订单')
                    }
                });
            });


        }
    }
}
</script>

<style>
  /*width:calc(100%);*/
  .wind_range{height:100%;width:200px;margin-right:10px;}
</style>
