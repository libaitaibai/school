import CommonData from '@/api/common-data'

export default {
    state:{
        school:[],
        grade:[],
        class:[]
    },
    getters:{
        commonSchool: state => state.school,
        commonGrade: state => state.grade,
        commonClass: state => state.class,
    },
    mutations:{
        setSchool(state, list) {
            state.school = list
        },
        setGrade(state, list) {
            state.grade = list
        },
        setClass(state, list) {
            state.class = list
        }
    },
    actions:{
        async fetchSchool({ commit, state }) {

            if (state.school.length > 0) {
                return
            }
            const [metaSchool,metaGrade, metaClass] = await Promise.all([
                CommonData.getSchool(),
                CommonData.getGrade(),
                CommonData.getCalss()
            ])

            commit('setSchool', metaSchool)
            commit('setGrade', metaGrade)
            commit('setClass', metaClass)
          }
    }
}