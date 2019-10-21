import http from '@/api/http'
import base from '@/api/base-model'

export default class grade extends base
{
    static grade_rul = '/grade'
    static list_url = '/focus-area/list'

    static async created(params)
    {
        try{
            const res = await http.post(this.grade_rul,params)
            console.log(res)
            return res.data
        }catch(error){
            throw error
        }
    }

    static async getAllItems(params) {
        return await  super.findAll(params, this.grade_rul)
    }

    static async getItems(params) {
        return await  super.getAll(params, this.grade_rul)
    }

    static async delete(id) {
        const ret = await http({
          url: this.grade_rul + '/' + id,
          method: 'delete'
        })
        return ret.data
    }

    static async edit(params) {
        try{
            const res = await http.put(this.grade_rul+'/' + params.id,params)
            return res.data
        }catch(error){
            throw error
        }
    }
}