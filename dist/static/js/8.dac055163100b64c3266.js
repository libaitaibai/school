webpackJsonp([8],{"1CtV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),o=a.n(s),n=a("exGp"),r=a.n(n),c=a("wSez"),i=a("Zx67"),l=a.n(i),p=a("Zrlr"),u=a.n(p),h=a("wxAW"),d=a.n(h),v=a("zwoO"),f=a.n(v),m=a("yEsh"),g=a.n(m),_=a("Pf15"),k=a.n(_),b=a("Y8t/"),C=function(t){function e(){return u()(this,e),f()(this,(e.__proto__||l()(e)).apply(this,arguments))}return k()(e,t),d()(e,null,[{key:"create",value:function(){var t=r()(o.a.mark(function t(e){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post(this.home_rul,e).then(function(t){a=t}).catch(function(t){a=t.response});case 3:return t.abrupt("return",a.data);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()},{key:"getSchool",value:function(){var t=r()(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()(e.__proto__||l()(e),"getAll",this).call(this,a,this.SCHOOL);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getGrade",value:function(){var t=r()(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()(e.__proto__||l()(e),"getAll",this).call(this,a,this.GRADE);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getCalss",value:function(){var t=r()(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()(e.__proto__||l()(e),"getAll",this).call(this,a,this.CLASS);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(a("LHCP").a);C.SCHOOL="/school/mallschool",C.GRADE="/grade/mallgrade",C.CLASS="/class/mallclass",C.home_rul="/home";var x=C,D={data:function(){return{needFetchInCreated:!1,school:"请选择学校",classes:"请选择年级",grade:"请选择班级",schoolData:[],gradeData:[],classData:[],form:{schoolid:"",gradeid:"",classid:"",phone:"",name:""},popup:{school:!1,classes:!1,grade:!1,schoolData:[],gradeData:[],classData:[]},showToolbar:!0,message:"请选择代理区域",slots:[{values:["城市选择","苏州","常州","杭州","湖州","上海","南京"]}]}},methods:{Datainit:function(){var t=this;return r()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getSchool();case 2:return t.schoolData=e.sent,e.next=5,x.getGrade();case 5:return t.gradeData=e.sent,e.next=8,x.getCalss();case 8:t.classData=e.sent,a=t.schoolData.map(function(t){return t.name}),t.popup.schoolData=[{values:a}];case 11:case"end":return e.stop()}},e,t)}))()},onSchoolChange:function(t,e){this.school=e;var a=this.schoolData.filter(function(t){return t.name==e[0]})[0];if(a){this.form.schoolid=a.id;var s=this.gradeData.filter(function(t){return t.schoolid===a.id}).map(function(t){return t.name});this.popup.gradeData=[{values:s}]}},onGradeChange:function(t,e){this.grade=e;var a=this.gradeData.filter(function(t){return t.name==e[0]})[0];if(a){this.form.gradeid=a.id;var s=this.classData.filter(function(t){return t.gradeid===a.id}).map(function(t){return t.name});this.popup.classData=[{values:s}]}},onClassChange:function(t,e){this.classes=e;var a=this.classData.filter(function(t){return t.name==e[0]})[0];a&&(this.form.classid=a.id)},checkgrade:function(){this.form.schoolid?this.popup.grade=!0:Object(c.MessageBox)("提示","请先选择学校!")},checkclass:function(){this.form.gradeid?this.popup.classes=!0:Object(c.MessageBox)("提示","请先选择年级!")},submits:function(){console.log(this.form)}},mounted:function(){this.Datainit()}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),t._v(" "),a("mt-header",{attrs:{title:"学生信息收集"}},[a("router-link",{attrs:{slot:"left",to:"/"},slot:"left"})],1),t._v(" "),a("mt-cell",{attrs:{title:"学校","is-link":""},nativeOn:{click:function(e){t.popup.school=!0}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.school,expression:"school"}],staticClass:"text-hui",attrs:{placeholder:"请选择学校"},domProps:{value:t.school},on:{input:function(e){e.target.composing||(t.school=e.target.value)}}})]),t._v(" "),a("mt-cell",{attrs:{title:"年级","is-link":""},nativeOn:{click:function(e){return t.checkgrade()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.grade,expression:"grade"}],staticClass:"text-hui",attrs:{placeholder:"请选择年级"},domProps:{value:t.grade},on:{input:function(e){e.target.composing||(t.grade=e.target.value)}}})]),t._v(" "),a("mt-cell",{attrs:{title:"班级","is-link":""},nativeOn:{click:function(e){return t.checkclass()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.classes,expression:"classes"}],staticClass:"text-hui",attrs:{placeholder:"请选择班级"},domProps:{value:t.classes},on:{input:function(e){e.target.composing||(t.classes=e.target.value)}}})]),t._v(" "),a("mt-field",{attrs:{label:"学生姓名",placeholder:"请输入学生姓名",type:"tel"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),a("mt-field",{attrs:{label:"家长手机号",placeholder:"请输入手机号",type:"tel"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("mt-button",{attrs:{type:"primary",size:"normal"},on:{click:t.submits}},[t._v("点击提交")]),t._v(" "),a("mt-popup",{staticClass:"picker-toolbar-select",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popup.school,callback:function(e){t.$set(t.popup,"school",e)},expression:"popup.school"}},[a("div",{staticClass:"picker-toolbar-title"},[a("div",{staticClass:"usi-btn-cancel",on:{click:function(e){t.popup.school=!t.popup.school}}},[t._v("取消")]),t._v(" "),a("div",{},[t._v("请选择学校")]),t._v(" "),a("div",{staticClass:"usi-btn-sure",on:{click:function(e){t.popup.school=!t.popup.school}}},[t._v("确定")])]),t._v(" "),a("mt-picker",{attrs:{slots:t.popup.schoolData},on:{change:t.onSchoolChange}})],1),t._v(" "),a("mt-popup",{staticClass:"picker-toolbar-select",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popup.grade,callback:function(e){t.$set(t.popup,"grade",e)},expression:"popup.grade"}},[a("div",{staticClass:"picker-toolbar-title"},[a("div",{staticClass:"usi-btn-cancel",on:{click:function(e){t.popup.grade=!t.popup.grade}}},[t._v("取消")]),t._v(" "),a("div",{},[t._v("请选择年级")]),t._v(" "),a("div",{staticClass:"usi-btn-sure",on:{click:function(e){t.popup.grade=!t.popup.grade}}},[t._v("确定")])]),t._v(" "),a("mt-picker",{attrs:{slots:t.popup.gradeData},on:{change:t.onGradeChange}})],1),t._v(" "),a("mt-popup",{staticClass:"picker-toolbar-select",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popup.classes,callback:function(e){t.$set(t.popup,"classes",e)},expression:"popup.classes"}},[a("div",{staticClass:"picker-toolbar-title"},[a("div",{staticClass:"usi-btn-cancel",on:{click:function(e){t.popup.classes=!t.popup.classes}}},[t._v("取消")]),t._v(" "),a("div",{},[t._v("请选择班级")]),t._v(" "),a("div",{staticClass:"usi-btn-sure",on:{click:function(e){t.popup.classes=!t.popup.classes}}},[t._v("确定")])]),t._v(" "),a("mt-picker",{attrs:{slots:t.popup.classData},on:{change:t.onClassChange}})],1)],1)},staticRenderFns:[]};var y=a("VU/8")(D,w,!1,function(t){a("Fu20")},"data-v-3b9527a4",null);e.default=y.exports},Fu20:function(t,e){}});
//# sourceMappingURL=8.dac055163100b64c3266.js.map