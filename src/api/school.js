import http from '@/api/http'
import base from '@/api/base-model'

export default class school extends base
{
    static school_rul = '/school'
    static list_url = '/focus-area/list'

    static async create(params)
    {
        try{
            var res
            await http.post(this.school_rul,params).then(function (response) {
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

    static async getAllItems(params) {
        return await  super.findAll(params, this.school_rul)
    }

    static async getItems(params) {
        return await  super.getAll(params, this.school_rul)
    }

    static async delete(id) {
        const ret = await http({
          url: this.school_rul + '/' + id,
          method: 'delete'
        })
        return ret.data
    }

    static async edit(params) {
        try{
            const res = await http.put(this.school_rul+'/' + params.id,params)
            return res.data
        }catch(error){
            throw error
        }
    }
}