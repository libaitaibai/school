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
            if (!state.school) {
              const [metaSchool] = await Promise.all([CommonData.getSchool(),])
              commit('setSchool', metaSchool)
              return
            }

            if(!state.grade){
              const [metaGrade] = await Promise.all([CommonData.getGrade(),])
              commit('setGrade', metaGrade)
              return
            }

            if(!state.class){
              const [metaClass] = await Promise.all([CommonData.getCalss()])
              commit('setClass', metaClass)
              return
            }
          }
    }
}
