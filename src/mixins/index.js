import { mapActions, mapGetters } from 'vuex'

export const LoadingMixins = {
    data(){
        return {
            pageLoading:false
        }
    },
    methods:{
        async _fetchData(method = 'fetchData', params = {}) {
            if(!this[method]) return 

            try{
                await this[method](parames)
                this.pageLoading = false
            }catch(error){
                console.error(error)
                this.pageLoading = false
            }
        }
    },
    watch:{
        currentPage() {
            this._fetchData()
        }
    }
}

export const SchoolDataMixins = {
    data(){
        return {
            needFetchInCreated: true
        }
    },
    created() {
        this.needFetchInCreated && this.fetchSchool()
    },
    computed: {
        ...mapGetters([
          'commonSchool',
          'commonGrade',
          'commonClass',
        ])
      },
    methods:{
        handleSchoolChange() {
            this.searchForm.gradeid = ''
            this.searchForm.classid = ''
        },
        handleGradeChange() {
            this.searchForm.classid = ''
        },
        SchoolChange() {
            this.form.gradeid = ''
            this.form.classid = ''
        },
        GradeChange() {
            this.form.classid = ''
        },
        filterGradeBySchoolid(schoolId) {
            if (!schoolId) {
              return []
            }
            return this.commonGrade.filter(v => v.schoolid === schoolId)
        },
        filterClassByGrade(GradeId) {
            if (!GradeId) {
              return []
            }
            return this.commonClass.filter(v => v.gradeid === GradeId)
        },
        ...mapActions(['fetchSchool'])
    }
}