
import http from '@/api/http'
import base from '@/api/base-model'

export default class home extends base
{
    //获取所有的学校班级等信息
    static SCHOOL = '/school/mallschool'
    static GRADE = '/grade/mallgrade'
    static CLASS = '/class/mallclass'

    static home_rul = '/home'

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

    static async getSchool(params) {
      return await super.getAll(params, this.SCHOOL)
    }

    static async getGrade(params) {
      return await super.getAll(params, this.GRADE)
    }

    static async getCalss(params) {
      return await super.getAll(params, this.CLASS)
    }

}
