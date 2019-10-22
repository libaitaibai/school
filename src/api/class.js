
import http from '@/api/http'
import base from '@/api/base-model'
export default class classgrade extends base
{
    static class_url = '/class'
    static list_url = '/focus-area/list'
    static async created (params) {
        try {
            var res
            await http.post(this.class_url,params).then(function (response) {
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
    static async edit (params) {
        try {
            var res = await http.put(this.class_url+'/'+params.id,params)
            return res.data
        }catch(error){
            throw error
        }
    }
    static async getAllItems(params) {
        return await super.findAll(params, this.class_url)
    }
    
    static async getItems(params) {
        return await  super.getAll(params, this.class_url)
    }

    static async delete(id) {
        const ret = await http({
          url: this.class_url + '/' + id,
          method: 'delete'
        })
        return ret.data
    }
}

  
   

