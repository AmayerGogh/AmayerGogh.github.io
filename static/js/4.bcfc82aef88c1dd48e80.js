webpackJsonp([4],{357:function(t,e,n){function a(t){n(516)}var i=n(229)(n(434),n(572),a,null,null);t.exports=i.exports},369:function(t,e,n){"use strict";e.a={requireService:function(t){if(!t)throw console.trace(),String("模块引入错误, 请输入service模块名");return console.log(abp.services),console.log(t),abp.services.KuMaDao[t]}}},376:function(t,e,n){function a(t){n(384)}var i=n(229)(n(379),n(387),a,null,null);t.exports=i.exports},379:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{treeData:Array,plugins:Array,context:Object,onItemClick:Function,onDragStop:Function,contextMenu:Object|Function},data:function(){return{}},created:function(){},activated:function(){this.$emit("update:context",this)},methods:{init:function(){var t=this;this.$nextTick(function(){$(t.$refs.container).jstree("destroy"),$(t.$refs.container).on("changed.jstree",function(e,n){var a=void 0;a=n.instance.get_node(n.selected[0]);for(var i in t.treeData){var r=t.treeData[i];if(a.id==r.id){a.displayName=r.displayName;break}}t.onItemClick&&t.onItemClick(a)}).jstree({core:{data:t.treeData,check_callback:!0},dnd:{inside_pos:2},types:{"#":{max_children:1,max_depth:4,valid_children:["root"]},root:{icon:"/static/3.3.4/assets/images/tree_icon.png",valid_children:["default"]},default:{valid_children:["default","file"]},file:{icon:"glyphicon glyphicon-file",valid_children:[]}},checkbox:{keep_selected_style:!1,three_state:!1,cascade:""},contextmenu:{items:t.contextMenu},plugins:t.plugins||[]}),$(document).on("dnd_stop.vakata",function(e,n){t.onDragStop&&t.onDragStop(n.data.nodes[0],$(t.$refs.container).jstree("get_parent",n.data.nodes[0]))})})},get_selected:function(){return $(this.$refs.container).jstree("get_selected")}},components:{}}},383:function(t,e,n){e=t.exports=n(348)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"JsTree.vue",sourceRoot:""}])},384:function(t,e,n){var a=n(383);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(349)("4d6eb794",a,!0)},387:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",{ref:"container",staticClass:"jstree--container"},[t._v("\n    加载中...\n")])},staticRenderFns:[]}},409:function(t,e,n){"use strict";var a=n(369),i=a.a.requireService("organizationUnit");e.a=i},413:function(t,e,n){"use strict";var a=n(369),i=a.a.requireService("commonLookup");e.a=i},420:function(t,e,n){"use strict";function a(){return{filter:void 0,maxResultCount:15,skipCount:0,page:1}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),r=n.n(i),s=n(37),o=n.n(s);e.default={props:{visible:Boolean,selectedUserCb:Function,getUserFn:Function},data:function(){return{total:0,loading:!1,fetchParam:a(),data:[],dialogVisible:!1}},watch:{visible:function(t){t!=this.dialogVisible&&(this.dialogVisible=t)},dialogVisible:function(t){this.$emit("update:visible",t)}},activated:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},mounted:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleCurrentChange:function(t){this.fetchParam.skipCount=Math.abs(t-1)*this.fetchParam.maxResultCount,this.fetchData()},handleSizeChange:function(t){this.fetchParam.maxResultCount=t,this.fetchData()},fetchData:function(){var t=this;this.getUserFn(this.fetchParam).then(function(e){t.total=e.totalCount,t.data=e.items})},handleOpen:function(){this.fetchParam=a(),this.fetchData()},selectUser:function(t){this.selectedUserCb(t)}},components:{}}},434:function(t,e,n){"use strict";function a(){return{id:void 0,maxResultCount:15,skipCount:0,page:1,sorting:void 0}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),r=n.n(i),s=n(37),o=n.n(s),l=n(376),c=n.n(l),d=n(409),u=n(413),g=n(538),p=n.n(g);e.default={data:function(){return{orignTreeData:[],treeData:[],loading:!1,dialogAddOrgan:{isShow:!1,parentId:0,displayName:void 0,type:"add"},selectedOrgan:{},userList:{id:void 0,total:0,data:[],loading:!1,fetchParam:a()},dialogUser:{isShow:!1}}},created:function(){},activated:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{fetchData:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,d.a.getOrganizationUnits();case 3:t.orignTreeData=e.sent.items,t.initTree(),t.loading=!1,abp.view.setContentLoading(!1);case 7:case"end":return e.stop()}},e,t)}))()},initTree:function(){this.orignTreeData.map(function(t){t.text=t.displayName+" ("+t.memberCount+")",t.parent=t.parentId||"#",t.state={opened:!0}}),this.treeData=this.orignTreeData,this.$refs.jstree.init()},dragStop:function(t,e){var n=this;abp.message.confirm(lang.L("OrganizationUnitMoveConfirmMessage"),function(){var a=o()(r.a.mark(function a(i){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(i){a.next=3;break}return n.$refs.jstree.init(),a.abrupt("return");case 3:return a.prev=3,n.loading=!0,a.next=7,d.a.moveOrganizationUnit({id:t,newParentId:e});case 7:abp.notify.success(lang.L("SavedSuccessfully"),lang.L("Success"));case 8:return a.prev=8,n.loading=!1,a.finish(8);case 11:case"end":return a.stop()}},a,n,[[3,,8,11]])}));return function(t){return a.apply(this,arguments)}}())},saveOrgan:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("add"!==t.dialogAddOrgan.type){e.next=5;break}return e.next=3,d.a.createOrganizationUnit(t.dialogAddOrgan);case 3:e.next=7;break;case 5:return e.next=7,d.a.updateOrganizationUnit(t.dialogAddOrgan);case 7:abp.notify.success(lang.L("SavedSuccessfully"),lang.L("Success")),t.dialogAddOrgan.isShow=!1,t.fetchData();case 10:case"end":return e.stop()}},e,t)}))()},showDialogAddOrgan:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add",a=arguments[3];this.dialogAddOrgan.parentId=t,this.dialogAddOrgan.displayName=e,this.dialogAddOrgan.isShow=!0,this.dialogAddOrgan.type=n,this.dialogAddOrgan.id=a,this.dialogAddOrgan.title="add"===n?lang.L("NewOrganizationUnit"):lang.L("Edit")+": "+e},treeContextMenu:function(t){var e=this;return{addSubUnit:{label:lang.L("AddSubUnit"),action:function(n){e.showDialogAddOrgan(t.id,null,"add")},icon:"el-icon-plus"},editUnit:{label:lang.L("Edit"),action:function(n){e.showDialogAddOrgan(null,t.displayName,"edit",t.id)},icon:"el-icon-edit"},delUnit:{label:lang.L("Delete"),action:function(n){var a=this;abp.message.confirm(lang.L("OrganizationUnitDeleteWarningMessage",t.displayName),function(){var n=o()(r.a.mark(function n(i){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,d.a.deleteOrganizationUnit({id:t.id});case 4:e.fetchData(),abp.notify.success(lang.L("SuccessfullyDeleted"),lang.L("Success"));case 6:case"end":return n.stop()}},n,a)}));return function(t){return n.apply(this,arguments)}}())},icon:"el-icon-delete2"}}},fetchData4Users:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getOrganizationUnitUsers(t.userList.fetchParam);case 2:n=e.sent,t.userList.data=n.items,t.userList.total=n.totalCount,t.userList.loading=!1;case 6:case"end":return e.stop()}},e,t)}))()},orgaizationTreeclick:function(t){var e=this;return o()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.userList.loading=!0,e.selectedOrgan=t,e.userList.fetchParam=a(),e.userList.fetchParam.id=t.id,e.fetchData4Users();case 5:case"end":return n.stop()}},n,e)}))()},handleCurrentChange:function(t){this.userList.fetchParam.skipCount=Math.abs(t-1)*this.userList.fetchParam.maxResultCount,this.fetchData4Users()},handleSizeChange:function(t){this.userList.fetchParam.maxResultCount=t,this.fetchData4Users()},getUsers:function(t){return u.a.findUsers(t)},selectedUser:function(t){var e=this;return o()(r.a.mark(function n(){var a,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=0;case 1:if(!(a<e.userList.data.length)){n.next=9;break}if(i=e.userList.data[a],i.id!=t.value){n.next=6;break}return abp.notify.error(lang.L("UserIsAlreadyInTheOrganizationUnit"),lang.L("Error")),n.abrupt("return");case 6:a++,n.next=1;break;case 9:return n.next=11,d.a.addUserToOrganizationUnit({userId:t.value,organizationUnitId:e.selectedOrgan.id});case 11:e.dialogUser.isShow=!1,e.fetchData4Users(),abp.notify.success(lang.L("SavedSuccessfully"),lang.L("Success")),e.fetchData();case 15:case"end":return n.stop()}},n,e)}))()},delUser:function(t,e){var n=this;abp.message.confirm(lang.L("RemoveUserFromOuWarningMessage",e.userName,this.selectedOrgan.displayName),function(){var a=o()(r.a.mark(function a(i){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(i){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,d.a.removeUserFromOrganizationUnit({userId:e.id,organizationUnitId:n.selectedOrgan.id});case 4:abp.notify.success(lang.L("SuccessfullyDeleted"),lang.L("Success")),n.userList.data.splice(t,1),n.fetchData();case 7:case"end":return a.stop()}},a,n)}));return function(t){return a.apply(this,arguments)}}())}},components:{JsTree:c.a,DialogUserlist:p.a}}},459:function(t,e,n){e=t.exports=n(348)(!0),e.push([t.i,".dialog-userlist--container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px}.dialog-userlist--container .search>section>span,.dialog-userlist--container .search>section i{margin-right:2px}.dialog-userlist--container .search>section>*{vertical-align:middle;display:inline-block;max-height:36px}.dialog-userlist--container .search .el-input{width:auto}.dialog-userlist--container .el-dialog{padding-bottom:15px}.dialog-userlist--container .search{margin-bottom:12px}","",{version:3,sources:["C:/Code/Y.AbpProjectTemplate2/YoYo/KuMaDao.AbpProjectTemplate.Web/Assets/src/components/dialog/UserList.vue"],names:[],mappings:"AACA,4CACE,iBAAkB,AAClB,mBAAoB,AACpB,qBAAsB,AACtB,iBAAmB,CACpB,AACD,+FACI,gBAAkB,CACrB,AACD,8CACI,sBAAuB,AACvB,qBAAsB,AACtB,eAAiB,CACpB,AACD,8CACE,UAAY,CACb,AACD,uCACE,mBAAqB,CACtB,AACD,oCACE,kBAAoB,CACrB",file:"UserList.vue",sourcesContent:["\n.dialog-userlist--container .search > section {\n  margin-left: 10px;\n  margin-bottom: 14px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.dialog-userlist--container .search > section > span, .dialog-userlist--container .search > section i {\n    margin-right: 2px;\n}\n.dialog-userlist--container .search > section > * {\n    vertical-align: middle;\n    display: inline-block;\n    max-height: 36px;\n}\n.dialog-userlist--container .search .el-input {\n  width: auto;\n}\n.dialog-userlist--container .el-dialog {\n  padding-bottom: 15px;\n}\n.dialog-userlist--container .search {\n  margin-bottom: 12px;\n}\n"],sourceRoot:""}])},477:function(t,e,n){e=t.exports=n(348)(!0),e.push([t.i,".right-top-btnContainer{position:absolute;right:0;top:-50px}.right-top-btnContainer.header-button>.el-button i{margin-right:5px}.right-top-btnContainer.header-button>.el-button i:before{position:relative;top:-1px}em,i{font-style:normal}.administration-organizationUnits-container{background:transparent;margin:0!important}.administration-organizationUnits-container .left-tree .left-header,.administration-organizationUnits-container .right-list .right-header{border-bottom:1px solid #eee;font-size:22px;padding-bottom:8px;margin-bottom:8px}.administration-organizationUnits-container .left-tree .left-header .el-button,.administration-organizationUnits-container .right-list .right-header .el-button{float:right}.administration-organizationUnits-container .left-tree{padding:15px}.administration-organizationUnits-container .left-tree .el-card__body{padding:0}.administration-organizationUnits-container .right-list{margin-left:3%;padding:15px}.administration-organizationUnits-container .right-list .el-card__body{padding:0}.administration-organizationUnits-container .right-list .el-pagination{float:right;margin-top:10px}","",{version:3,sources:["C:/Code/Y.AbpProjectTemplate2/YoYo/KuMaDao.AbpProjectTemplate.Web/Assets/src/views/administration/OrganizationUnits.vue"],names:[],mappings:"AACA,wBACE,kBAAmB,AACnB,QAAS,AACT,SAAW,CACZ,AACD,mDACI,gBAAkB,CACrB,AACD,0DACM,kBAAmB,AACnB,QAAU,CACf,AACD,KACE,iBAAmB,CACpB,AACD,4CACE,uBAAwB,AACxB,kBAAqB,CACtB,AACD,0IACI,6BAA8B,AAE9B,eAAgB,AAChB,mBAAoB,AACpB,iBAAmB,CACtB,AACD,gKACM,WAAa,CAClB,AACD,uDACI,YAAc,CACjB,AACD,sEACM,SAAW,CAChB,AACD,wDACI,eAAgB,AAChB,YAAc,CACjB,AACD,uEACM,SAAW,CAChB,AACD,uEACM,YAAa,AACb,eAAiB,CACtB",file:"OrganizationUnits.vue",sourcesContent:["\n.right-top-btnContainer {\n  position: absolute;\n  right: 0;\n  top: -50px;\n}\n.right-top-btnContainer.header-button > .el-button i {\n    margin-right: 5px;\n}\n.right-top-btnContainer.header-button > .el-button i:before {\n      position: relative;\n      top: -1px;\n}\ni, em {\n  font-style: normal;\n}\n.administration-organizationUnits-container {\n  background: transparent;\n  margin: 0 !important;\n}\n.administration-organizationUnits-container .left-tree .left-header, .administration-organizationUnits-container .right-list .right-header {\n    border-bottom: 1px solid #eee;\n    /*height: ;*/\n    font-size: 22px;\n    padding-bottom: 8px;\n    margin-bottom: 8px;\n}\n.administration-organizationUnits-container .left-tree .left-header .el-button, .administration-organizationUnits-container .right-list .right-header .el-button {\n      float: right;\n}\n.administration-organizationUnits-container .left-tree {\n    padding: 15px;\n}\n.administration-organizationUnits-container .left-tree .el-card__body {\n      padding: 0;\n}\n.administration-organizationUnits-container .right-list {\n    margin-left: 3%;\n    padding: 15px;\n}\n.administration-organizationUnits-container .right-list .el-card__body {\n      padding: 0;\n}\n.administration-organizationUnits-container .right-list .el-pagination {\n      float: right;\n      margin-top: 10px;\n}\n"],sourceRoot:""}])},498:function(t,e,n){var a=n(459);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(349)("ee2af34a",a,!0)},516:function(t,e,n){var a=n(477);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(349)("1e045d16",a,!0)},538:function(t,e,n){function a(t){n(498)}var i=n(229)(n(420),n(554),a,null,null);t.exports=i.exports},554:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{ref:"dialog",staticClass:"dialog-userlist--container",attrs:{title:t.L("SelectAUser"),visible:t.dialogVisible,size:"tiny"},on:{open:t.handleOpen,"update:visible":function(e){t.dialogVisible=e}}},[n("article",{staticClass:"search"},[n("i",[t._v(t._s(t.L("Search")))]),t._v(" "),n("el-input",{attrs:{size:"mini",placeholder:t.L("Search")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.fetchData(e)}},model:{value:t.fetchParam.filter,callback:function(e){t.fetchParam.filter=e},expression:"fetchParam.filter"}})],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"data-table",attrs:{data:t.data,fit:!0,border:""}},[n("el-table-column",{attrs:{"min-width":"120",prop:"name",label:t.L("UserName")}}),t._v(" "),n("el-table-column",{attrs:{width:"100",label:t.L("Action")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.selectUser(e.row)}}},[n("i",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle","font-size":"12px"},attrs:{title:t.L("Select")}},[t._v("done")]),t._v("\n                    "+t._s(t.L("Select"))+"\n                ")])]}}])})],1),t._v(" "),n("el-pagination",{staticClass:"pagin",attrs:{"current-page":t.fetchParam.page,"page-size":t.fetchParam.maxResultCount,"page-sizes":[15,30,60,100],layout:"sizes,total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]}},572:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"administration-organizationUnits-container row"},[n("el-card",{staticClass:"left-tree col-lg-5"},[n("div",{staticClass:"left-header"},[t._v("\n            "+t._s(t.L("OrganizationTree"))+"\n            "),t.HasP("ManageOrganizationTree")?n("el-button",{attrs:{icon:"plus",size:"small"},on:{click:function(e){t.showDialogAddOrgan(null)}}},[t._v("\n                "+t._s(t.L("AddRootUnit"))+"\n            ")]):t._e()],1),t._v(" "),n("JsTree",{ref:"jstree",attrs:{treeData:t.treeData,onDragStop:t.dragStop,onItemClick:t.orgaizationTreeclick,contextMenu:t.treeContextMenu,plugins:t.HasP("ManageOrganizationTree")?["dnd","types","wholerow","contextmenu"]:[]}}),t._v(" "),n("el-dialog",{attrs:{title:t.dialogAddOrgan.title,visible:t.dialogAddOrgan.isShow,size:"tiny"},on:{"update:visible":function(e){t.dialogAddOrgan.isShow=e}}},[n("el-input",{attrs:{placeholder:t.L("Name")},model:{value:t.dialogAddOrgan.displayName,callback:function(e){t.dialogAddOrgan.displayName=e},expression:"dialogAddOrgan.displayName"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogAddOrgan.isShow=!1}}},[t._v(t._s(t.L("Cancel")))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.saveOrgan}},[t._v(t._s(t.L("Save")))])],1)],1)],1),t._v(" "),n("el-card",{staticClass:"col-lg-6 right-list"},[n("div",{staticClass:"right-header"},[t._v("\n            ["+t._s(t.L("Members"))+"] "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.selectedOrgan.displayName,expression:"selectedOrgan.displayName"}]},[t._v(t._s(":"+t.selectedOrgan.displayName))]),t._v(" "),n("el-button",{attrs:{disabled:!t.selectedOrgan.id,icon:"plus",size:"small"},on:{click:function(e){t.dialogUser.isShow=!0}}},[t._v("\n                "+t._s(t.L("AddMember"))+"\n            ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.userList.loading,expression:"userList.loading"}],staticClass:"data-table",attrs:{data:t.userList.data,fit:!0,border:""}},[n("el-table-column",{attrs:{"min-width":"120",label:t.L("UserName")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",[t._v(t._s(e.row.userName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"150",prop:"lastLoginTime",label:t.L("AddedTime")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",[t._v(t._s(t._f("date2str")(e.row.addedTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"80",label:t.L("Action")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"material-icons",staticStyle:{cursor:"pointer"},attrs:{title:t.L("Delete")},on:{click:function(n){t.delUser(e.$index,e.row)}}},[t._v("delete_forever")])]}}])})],1),t._v(" "),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.userList.total>0,expression:"userList.total > 0"}],staticClass:"pagin",attrs:{"current-page":t.userList.fetchParam.page,"page-size":t.userList.fetchParam.maxResultCount,"page-sizes":[15,30,60,100],layout:"sizes,total, prev, pager, next",total:t.userList.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),n("DialogUserlist",{attrs:{selectedUserCb:t.selectedUser,visible:t.dialogUser.isShow,getUserFn:t.getUsers},on:{"update:visible":function(e){t.dialogUser.isShow=e}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.bcfc82aef88c1dd48e80.js.map