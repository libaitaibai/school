<template>
  <div>
    <router-view />

    <mt-header title="学生信息收集">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back">返回</mt-button> -->
      </router-link>
<!--      <mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>

    <mt-cell title="学校" v-on:click.native="popup.school = true"  is-link>
      <input class="text-hui" v-model="school" placeholder="请选择学校" />
    </mt-cell>
    <mt-cell title="年级" v-on:click.native="checkgrade()"  is-link >
      <input class="text-hui" v-model="grade" placeholder="请选择年级"/>
    </mt-cell>
    <mt-cell title="班级" v-on:click.native="checkclass()"  is-link >
      <input class="text-hui" v-model="classes" placeholder="请选择班级"/>
    </mt-cell>
    <mt-field label="学生姓名" placeholder="请输入学生姓名" type="tel" v-model="form.phone"></mt-field>
    <mt-field label="家长手机号" placeholder="请输入手机号" type="tel" v-model="form.name"></mt-field>

    <mt-button type="primary" size="normal" @click="submits">点击提交</mt-button>

    <mt-popup v-model="popup.school" popup-transition="popup-fade" position="bottom" class="picker-toolbar-select">
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="popup.school = !popup.school">取消</div>
            <div class="">请选择学校</div>
            <div class="usi-btn-sure" @click="popup.school = !popup.school">确定</div>
          </div>
          <mt-picker :slots="popup.schoolData" @change="onSchoolChange"></mt-picker>
    </mt-popup>

    <mt-popup v-model="popup.grade" popup-transition="popup-fade" position="bottom" class="picker-toolbar-select">
      <div class="picker-toolbar-title">
        <div class="usi-btn-cancel" @click="popup.grade = !popup.grade">取消</div>
        <div class="">请选择年级</div>
        <div class="usi-btn-sure" @click="popup.grade = !popup.grade">确定</div>
      </div>
      <mt-picker :slots="popup.gradeData" @change="onGradeChange"></mt-picker>
    </mt-popup>

    <mt-popup v-model="popup.classes" popup-transition="popup-fade" position="bottom" class="picker-toolbar-select">
      <div class="picker-toolbar-title">
        <div class="usi-btn-cancel" @click="popup.classes = !popup.classes">取消</div>
        <div class="">请选择班级</div>
        <div class="usi-btn-sure" @click="popup.classes = !popup.classes">确定</div>
      </div>
      <mt-picker :slots="popup.classData" @change="onClassChange"></mt-picker>
    </mt-popup>

  </div>
</template>

<script>
    import { Cell,Picker ,Popup ,Header ,MessageBox } from 'mint-ui';
    import homeApi from '@/api/home'
    export default {
        data(){
            return {
              needFetchInCreated: false,
              school:'请选择学校',
              classes:'请选择年级',
              grade:'请选择班级',
              schoolData:[],
              gradeData:[],
              classData:[],
              form:{
                  schoolid:'',
                  gradeid:'',
                  classid:'',
                  phone:'',
                  name:'',
              },
              popup:{
                  school:false,
                  classes:false,
                  grade:false,
                  schoolData:[],
                  gradeData:[],
                  classData:[]
              },
            }
        },
        methods:{
            async Datainit(){
                this.schoolData = await homeApi.getSchool()
                this.gradeData = await homeApi.getGrade()
                this.classData = await homeApi.getCalss()

                let schooltemp = this.schoolData.map(function(val){return val.name})
                this.popup.schoolData = [{values:schooltemp}]
            },
            onSchoolChange(picker, values) {
                this.school=values;
                let schooldata = this.schoolData.filter(v => v.name == values[0])[0];
                if(!schooldata){
                    return ;
                }
                this.form.schoolid = schooldata.id
                let schooltemp = this.gradeData.filter(v => v.schoolid === schooldata.id)
                let schooltemp1 = schooltemp.map(function(val){return val.name})
                this.popup.gradeData = [{values:schooltemp1}]
            },
            onGradeChange(picker, values) {
                this.grade=values;
                let gradedata = this.gradeData.filter(v => v.name == values[0])[0];
                if(!gradedata){
                    return ;
                }
                this.form.gradeid = gradedata.id
                let gradetemp = this.classData.filter(v => v.gradeid === gradedata.id)
                let gradetemp1 = gradetemp.map(function(val){return val.name})
                this.popup.classData = [{values:gradetemp1}]
            },
            onClassChange(picker, values) {
                this.classes=values;
                let classdata = this.classData.filter(v => v.name == values[0])[0];
                if(!classdata){
                    return ;
                }
                this.form.classid = classdata.id;
            },
            checkgrade(){
                if(this.form.schoolid){
                    this.popup.grade = true
                }else{
                    MessageBox('提示', '请先选择学校!');
                }
            },
            checkclass(){
                if(this.form.gradeid){
                    this.popup.classes = true
                }else{
                    MessageBox('提示', '请先选择年级!');
                }
            },
          submits(){
            console.log(this.form)
          }
        },
        mounted(){
            this.Datainit()
        }
    }
</script>

<style lang="less" scoped>
  .picker-toolbar-select{
    width: 100%;
  }
  .picker-toolbar-title{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    line-height: 40px;
    font-size: 16px;
  }
  .usi-btn-cancel,.usi-btn-sure{
    color: #FF6600
  }
  .mint-button--normal{
    margin:0 auto;
    margin-top:60px;
    display: block;
  }
</style>
