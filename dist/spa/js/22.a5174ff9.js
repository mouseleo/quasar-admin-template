(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{cebe:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("coadmin-dialog",{ref:"search",attrs:{title:"查找","no-max":"",seamless:""},on:{"before-hide":function(t){e.filterTable=""}}},[a("q-input",{staticClass:"q-ml-sm q-mr-sm q-mt-none q-mb-sm",attrs:{placeholder:"在当前页查找",dense:"",outlined:"",clearable:""},model:{value:e.filterTable,callback:function(t){e.filterTable=t},expression:"filterTable"}})],1),a("coadmin-dialog",{ref:"formDialog",attrs:{value:e.crud.status.cu>0,title:e.crud.status.title,"no-backdrop-dismiss":"","card-style":"width:800px; max-width:95vw;"},on:{"before-hide":e.crud.cancelCU}},[a("coadmin-form",{ref:"form",staticClass:"q-pa-md row q-col-gutter-x-xl q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"center"}},[e.form.id?a("coadmin-form-item",{staticClass:"col-12",attrs:{"form-label":"ID"}},[a("div",{staticClass:"q-mt-xs"},[e._v(e._s(e.form.id))])]):e._e(),a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"name",disable:!!e.crud.status.view,rules:[function(e){return e&&e.length>=3||"请输入3个以上字符"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"title"}})]},proxy:!0}]),model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"fat",disable:!!e.crud.status.view},model:{value:e.form.fat,callback:function(t){e.$set(e.form,"fat",t)},expression:"form.fat"}})],1),a("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",flat:""}}),e.crud.status.view?e._e():a("q-btn",{attrs:{label:"保存",icon:"check",color:"primary",loading:e.crud.status.cu===e.crud.STATUS_PROCESSING,disable:e.crud.status.cu===e.crud.STATUS_PROCESSING},on:{click:e.crud.submitCU}})],1)],1),a("coadmin-table",{ref:"table",attrs:{"row-key":"id","sticky-last-column":"","sticky-header":"",flat:"",dense:"",data:e.crud.data,columns:e.crud.columns,"visible-columns":e.crud.visibleColumns,loading:e.crud.loading,selection:"multiple",selected:e.crud.selections,filter:e.filterTable,"selected-rows-label":function(e){return"选了 "+e}},on:{"update:selected":function(t){return e.$set(e.crud,"selections",t)},"row-click":function(t,a,r){return e.crud.selections=[a]}},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"row q-col-gutter-x-md q-col-gutter-y-xs full-width"},[a("crud-operation",{attrs:{permission:e.permission,"label-del":"","icon-view":"","no-edit":"",outline:""},scopedSlots:e._u([{key:"end",fn:function(){return[a("q-btn",{attrs:{dense:"",label:"导出",outline:""}})]},proxy:!0}],null,!0)}),a("coadmin-input",{staticClass:"col",attrs:{clearable:"",filled:"",placeholder:"查询","input-class":"text-center"},on:{click:function(t){return e.$refs.searchPopup.show()},clear:function(t){return e.crud.resetQuery()}},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{dense:"",color:"primary",icon:"search",label:"查询"},on:{click:e.crud.toQuery}}),a("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{dense:"",color:"primary",icon:"apps","auto-close":""}},[a("crud-more",{attrs:{tableSlotTopProps:t},scopedSlots:e._u([{key:"start",fn:function(){return[a("q-btn",{attrs:{flat:"",align:"left",label:"在当前页查找",icon:"find_in_page"},nativeOn:{click:function(t){return e.$refs.search.show()}}}),a("q-separator")]},proxy:!0}],null,!0)})],1)]},proxy:!0}],null,!0),model:{value:e.queryModel,callback:function(t){e.queryModel=t},expression:"queryModel"}},[a("coadmin-dialog",{ref:"searchPopup",attrs:{seamless:"","card-style":"width:700px; max-width:95vw;"}},[a("coadmin-form",{ref:"searchform",staticClass:"q-pa-md row q-col-gutter-x-lg q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"right"}},[a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"名字"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),a("coadmin-date-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"date",placeholder:"日期单选",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}],null,!0),model:{value:e.query.dateSingle,callback:function(t){e.$set(e.query,"dateSingle",t)},expression:"query.dateSingle"}}),a("coadmin-tree-select",{staticClass:"col-12",attrs:{"form-label":"Tree",placeholder:"Tree多选",nodes:e.treeData,"node-key":"id","label-key":"name",ticked:e.query.ticked,"tick-strategy":"leaf-all-only-parent","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.query,"ticked",t)},"ticked-label":function(t){return e.queryTickedLabels=t}}})],1),a("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"center"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"关闭",flat:""}}),a("q-btn",{attrs:{label:"查询(不关闭)",color:"primary",icon:"search",loading:e.crud.loading,disable:e.crud.loading},on:{click:e.crud.toQuery}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"查询",color:"primary",icon:"search",loading:e.crud.loading,disable:e.crud.loading},on:{click:e.crud.toQuery}})],1)],1)],1)],1)]}},{key:"body-cell-action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("crud-row",{attrs:{"no-wrap":"",data:t.row,type:e.$q.screen.gt.xs?"button":"menu",permission:e.permission,"color-edit":"green","label-del":"删","icon-del":"delete_sweep","no-add":"",tooltip:"",msg:"真的删？"},scopedSlots:e._u([{key:"end",fn:function(){return[a("q-btn",{attrs:{dense:"",label:"导出"}})]},proxy:!0}],null,!0)})],1)]}},{key:"pagination",fn:function(){return[a("crud-pagination",{attrs:{input:""}})]},proxy:!0}])})],1)},l=[],n=(a("a15b"),a("b0c0"),a("b64b"),a("ded3")),o=a.n(n),s=a("993a"),c=a("ee0e"),i=a("73e3"),d=a("4124"),u=a("7387"),m=a("bcc3"),p=a("486f"),f=a("5ec7"),b={name:"PageCrudCustom",components:{crudOperation:c["a"],crudMore:u["a"],crudPagination:i["a"],crudRow:d["a"]},cruds:function(){return Object(s["b"])({query:{name:"nnn"},columns:f["a"],visibleColumns:f["d"],idField:"id",title:"演示",sort:["name,asc","id,desc"],url:"api/demo",crudMethod:o()({},m["a"])})},mixins:[Object(s["f"])(),Object(s["d"])(),Object(s["c"])(f["c"]),Object(s["a"])()],data:function(){return{permission:{add:["admin","user:add"],edit:["admin","user:edit"],del:["admin","user:del"]},filterTable:"",querysLabel:"",queryTickedLabels:null,treeData:p["a"].content}},created:function(){this.query.name="Demo"},mounted:function(){this.$refs.searchPopup.show(),this.$nextTick((function(){this.$refs.searchPopup.hide()}))},computed:{queryModel:{get:function(){for(var e=[],t=0,a=Object.keys(this.query);t<a.length;t++){var r=a[t];if("ticked"===r)this.queryTickedLabels&&e.push("["+this.queryTickedLabels.join(",")+"]");else{var l=this.query[r];l&&e.push(l)}}return e.join(", ")},set:function(e){e||(this.queryTickedLabels=null)}}}},y=b,q=a("2877"),h=a("27f9"),k=a("0016"),g=a("4b7e"),w=a("9c40"),v=a("f20b"),x=a("eb85"),C=a("db86"),S=a("7f67"),T=a("eebe"),_=a.n(T),$=Object(q["a"])(y,r,l,!1,null,null,null);t["default"]=$.exports;_()($,"components",{QInput:h["a"],QIcon:k["a"],QCardActions:g["a"],QBtn:w["a"],QBtnDropdown:v["a"],QSeparator:x["a"],QTd:C["a"]}),_()($,"directives",{ClosePopup:S["a"]})}}]);