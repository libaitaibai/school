import BaseMoel from './base-model'

export default class CommonData extends BaseMoel
{
    static SCHOOL = '/school/allschool'
    static GRADE = '/grade/allgrade'
    static CLASS = '/class/allclass'

    static getSchool(params) {
        return super.getAll(params, this.SCHOOL)
    }

    static getGrade(params) {
        return super.getAll(params, this.GRADE)
    }

    static getCalss(params) {
        return super.getAll(params, this.CLASS)
    }
}
