webpackJsonp([6],{X8i4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),r=n.n(a),i=n("Xxa5"),o=n.n(i),s=n("exGp"),l=n.n(s),c=n("uXiC"),u={data:function(){return{formLabelWidth:"60px",dialogTableVisible:!1,dialogFormVisible:!1,form:{name:""},tableData:[],tableHeaders:[{label:"id",prop:"id"},{label:"名称",prop:"name"}],currentPage:1}},computed:{params:function(){return{page:this.currentPage,pageSize:20}}},methods:{clear:function(){this.form={name:""},this.dialogFormVisible=!1},submit:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.form.id){t.next=6;break}return t.next=3,c.a.edit(e.form);case 3:n=t.sent,t.next=9;break;case 6:return t.next=8,c.a.create(e.form);case 8:n=t.sent;case 9:200==n.code?(e.dialogFormVisible=!1,e.clear(),e.$message.success("提交成功!"),e.find()):e.$message.error(n.data.message);case 10:case"end":return t.stop()}},t,e)}))()},find:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getAllItems(e.params);case 2:n=t.sent,e.tableData=n,console.log(n);case 5:case"end":return t.stop()}},t,e)}))()},pageChange:function(e){var t=this;return l()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.currentPage=e,t.find();case 2:case"end":return n.stop()}},n,t)}))()},handleEdit:function(e){this.dialogFormVisible=!0,this.form.name=e.name,this.form.id=e.id,this.find();r()({},this.form)},handleDel:function(e,t){var n=this;return l()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.delete(e);case 2:t.sent,n.find(),n.$message.success("删除成功!");case 5:case"end":return t.stop()}},t,n)}))()}},mounted:function(){this.find()}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-button",{attrs:{type:"success",icon:"el-icon-plus",size:"small"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("创建学校名称")])],1),e._v(" "),n("el-dialog",{attrs:{title:"填写内容",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.clear()}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("确 定")])],1)],1),e._v(" "),n("base-table",{attrs:{currentPage:e.currentPage,tableData:e.tableData,tableHeaders:e.tableHeaders},on:{"page-change":e.pageChange}},[n("el-table-column",{staticClass:"action",attrs:{slot:"action",fixed:"right",label:"操作"},slot:"action",scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleDel(t.row.id,t.$index)}}},[n("span",{staticStyle:{color:"red"}},[e._v("删除")])])]}}])})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,f,!1,function(e){n("nKBE")},null,null);t.default=d.exports},nKBE:function(e,t){}});
//# sourceMappingURL=6.7c91b2e81a56df983b80.js.map