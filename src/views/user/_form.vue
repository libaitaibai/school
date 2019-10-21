<template>
  <div>
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <template>   
        <p class="title">账号信息</p>
            <el-form-item label="账号" prop="username" >
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item  label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item prop="type" label="角色">
                <el-select v-model="form.type" clearable  placeholder="选择角色">
                    <el-option v-for="item in roles"
                        :key="item.key"
                        :label="item.name"
                        :value="item.key">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="schoolid" label="学校">
                <el-select v-model="form.schoolid" clearable @change="SchoolChange" filterable placeholder="选择学校">
                    <el-option v-for="item in commonSchool"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年级">
                <el-select v-model="form.gradeid"  clearable @change="GradeChange" filterable placeholder="选择年级">
                    <el-option v-for="item in filterGradeBySchoolid(form.schoolid)"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="班级">
                <el-select v-model="form.classid" clearable  filterable placeholder="选择班级">
                    <el-option v-for="item in filterClassByGrade(form.gradeid)"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </template>

        <template>  
        <p class="title">用户信息</p>
            <el-form-item prop="nickname" label="姓名">
                <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
        </template>


        <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">确 定</el-button>
            <el-button @click="rollback">取 消</el-button>
        </el-form-item>
      </el-form>
      

  </div>
</template>

<script>
import schoolApi from '@/api/school'
import userApi from '@/api/user'
import { LoadingMixins,SchoolDataMixins } from '@/mixins/index'
export default {
    props: ['id'],
    mixins: [SchoolDataMixins,LoadingMixins],
    data(){
        return {
            formLabelWidth: '100px',
            dialogTableVisible: false,
            dialogFormVisible: false,
            roles:[
                {'name':'校长','key':1},
                {'name':'年级长','key':2},
                {'name':'班主任','key':3},
            ],
            form:{
              'username':'',
              'password':'',
              'phone':'',
              'nickname':'',
              'type':'',
              'schoolid':'',
              'gradeid':'',
              'classid':'',
            },
            rules: {
                username:{required: true, message: '请输入账号', trigger: 'blur'},
                password:{required: true, message: '请输入密码', trigger: 'blur'},
                type:{required: true, message: '请输入角色', trigger: 'blur'},
                nickname:{required: true, message: '请输入姓名', trigger: 'blur'},
                schoolid:{required: true, message: '学校', trigger: 'blur'},
            }
        }
    },
    computed:{
        method() {
            return this.id ? 'update' : 'create'
        },
      params(){
        return {
          page:this.currentPage,
          pageSize:20
        }
      }
    },
    methods:{
        async onSubmit(form){
            let check = false
            const  valid = await this.$refs.form.validate( (valid) => {
                check = valid
            })

            if(check){
                const method = this.id ? 'update' : 'create'
                var res =[];
                if(method == 'create'){
                    const UserModel = new userApi({
                        ...this.form
                    }) 
                    res = await UserModel[method]()
                }else{
                    res = await userApi.edit(this.form)
                }
         
                if (res.code ==200) {
                    this.$router.push({ name: 'account-list' })
                }else{
                    this.$message.error(res.data.message);
                }
            }

        },
        async rollback(){
            this.$router.push({ name: 'account-list' })
        },
        async getUserDetail() {
            const res = await userApi.getDetail(this.id)

            let school = this.commonSchool.filter(v => v.schoolid === res.schoolid)
            // school = school.length == 0 ? '' :school ;

            let grade = this.commonGrade.filter(v => v.gradeid === res.gradeid)
            // grade = grade.length == 0 ? '' :grade ;

            let classone = this.commonClass.filter(v => v.classid === res.classid)
            // classone = classone.length == 0 ? '' :classone ;

            let type = this.roles.filter(v => v.type === res.type)
            // type = type.length == 0 ? '' :type ;

            this.form = {
                username:res.username,
                password:res.username,
                phone:res.phone,
                nickname:res.nickname,
                id:res.id,
                type:type,
                schoolid:classone,
                gradeid:classone,
                classid:classone,
            }
        },

    },
    mounted(){
        if(this.id){
            this.getUserDetail(this.id)
        }
    }
}
</script>

<style>

</style>