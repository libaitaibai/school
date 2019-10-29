
import http from '@/api/http'
import base from '@/api/base-model'

export default class home extends base
{
    static home_rul = '/home'
    static list_url = '/focus-area/list'
    static async create(params)
    {
        try{
            var res
            await http.post(this.home_rul,params).then(function (response) {
                res = response 
            })
            .catch(function (error) {
                res = error.response 
            })
            return res.data
        }catch(error){
            throw error
        }
    }
}