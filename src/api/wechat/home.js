import http from '@/api/wechat/wechat'
import { Toast   } from 'mint-ui';

export default class home
{
  static wechat_order_rul = '/wechat/pay'

    static async createOrder(params)
    {
      try{
        var res
        await http.post(this.wechat_order_rul,params).then(function (response) {
          res = response
        }).catch(function (error) {
            res = error.response
        })
        if(res.data.code != 200){
          Toast(res.data.data.message);
          return
        }else{
          return res.data.data
        }
      }catch(error){
        throw error
      }
  }



}
