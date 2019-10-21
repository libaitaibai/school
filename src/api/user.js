
import http from '@/api/http'
import base from '@/api/base-model'


const USER_MANAGE = '/user'

export default class User extends base
{
    static LOFIN_URL = '/user/login'
    static LOGOUT_URL = '/auth/logout'
    static user_url = '/user'

    static async login(params)
    {
        try {
            var res
            await http.post(this.LOFIN_URL,params).then(function (response) {
                res = response 
            })
            .catch(function (error) {
                res = error.response 
            })
            return res.data;
        } catch (error) {
            throw error
        }
    }

    get createUrl() {
        return USER_MANAGE
    }

    static async logout(params)
    {
        try {
            const  res = await http.post(this.LOGOUT_URL,params)
            return res.data;
        } catch (error) {
            throw error
        }
    }
    
    static async getDetail(id) {
        const ret = await http({
          url: this.user_url + '/' + id,
          method: 'get'
        })
        return ret.data.data
    }

    static async getAllItems(params) {
        return await  super.findAll(params, this.user_url)
    }

    static async delete(id) {
        const ret = await http({
          url: this.user_url + '/' + id,
          method: 'delete'
        })
        return ret.data
    }

    static async edit(params) {
        try{
            const res = await http.put(this.user_url+'/' + params.id,params)
            return res.data
        }catch(error){
            throw error
        }
    }
}
