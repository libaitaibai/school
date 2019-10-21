import BaseMoel from './base-model'

export default class CommonData extends BaseMoel
{
    static SCHOOL = '/school'
    static GRADE = '/grade'
    static CLASS = '/class'

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
