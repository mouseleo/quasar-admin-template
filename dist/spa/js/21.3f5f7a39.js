(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"4c66":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("coadmin-dialog",{ref:"formDialog",attrs:{value:e.crud.status.cu>0,title:e.crud.status.title,"no-backdrop-dismiss":"","content-style":"width:800px; max-width:95vw;"},on:{"before-hide":e.crud.cancelCU}},[a("coadmin-form",{ref:"form",staticClass:"q-pa-md",attrs:{"label-width":"small","label-position":"center"}},[a("div",{staticClass:"row q-col-gutter-x-xl q-col-gutter-y-md"},[a("coadmin-form-item",{staticClass:"col-12",attrs:{"form-label":"ID"}},[a("q-field",{attrs:{dense:"",borderless:""},scopedSlots:e._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[e._v(e._s(e.form.id))])]},proxy:!0}])})],1),a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"name",disable:!!e.crud.status.view,rules:[function(e){return e&&e.length>=3||"请输入3个以上字符"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"title"}})]},proxy:!0}]),model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"fat",disable:!!e.crud.status.view},model:{value:e.form.fat,callback:function(t){e.$set(e.form,"fat",t)},expression:"form.fat"}})],1)]),a("q-card-actions",{attrs:{align:"right"}},[e.crud.status.view?e._e():a("q-btn",{attrs:{label:"确认",icon:"check",color:"primary",loading:e.crud.status.cu===e.crud.STATUS_PROCESSING,disable:e.crud.status.cu===e.crud.STATUS_PROCESSING},on:{click:e.crud.submitCU}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",flat:""}})],1)],1),a("coadmin-table",{ref:"table",staticClass:"q-pt-sm",attrs:{"row-key":"id",data:e.crud.data,columns:e.crud.columns,"visible-columns":e.crud.visibleColumns,loading:e.crud.loading,selection:"multiple",selected:e.crud.selections},on:{"update:selected":function(t){return e.$set(e.crud,"selections",t)}},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"row q-col-gutter-x-md q-col-gutter-y-xs full-width"},[a("crud-operation",{attrs:{permission:e.permission}}),a("coadmin-input",{staticClass:"col",attrs:{clearable:"",filled:"",placeholder:"查询","input-class":"text-center"},on:{click:function(t){return e.$refs.searchPopup.show()},clear:function(t){return e.crud.resetQuery()}},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{dense:"",color:"primary",icon:"search"},on:{click:e.crud.toQuery}}),a("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{dense:"",color:"primary",icon:"apps","auto-close":""}},[a("crud-more",{attrs:{tableSlotTopProps:t}})],1)]},proxy:!0}],null,!0),model:{value:e.queryModel,callback:function(t){e.queryModel=t},expression:"queryModel"}},[a("coadmin-dialog",{ref:"searchPopup",attrs:{seamless:"","content-style":"width:700px; max-width:95vw;"}},[a("coadmin-form",{ref:"searchform",staticClass:"q-pa-md",attrs:{"label-width":"small","label-position":"right"}},[a("div",{staticClass:"row q-col-gutter-x-lg q-col-gutter-y-md"},[a("coadmin-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"名字"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),a("coadmin-date-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"date",placeholder:"日期单选",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}],null,!0),model:{value:e.query.dateSingle,callback:function(t){e.$set(e.query,"dateSingle",t)},expression:"query.dateSingle"}})],1)]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{label:"查询",color:"primary",icon:"search",loading:e.crud.loading,disable:e.crud.loading},on:{click:e.crud.toQuery}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"关闭",flat:""}})],1)],1)],1)],1)]}},{key:"body-cell-action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("crud-row",{attrs:{data:t.row,flat:"",permission:e.permission}})],1)]}},{key:"pagination",fn:function(){return[a("crud-pagination")]},proxy:!0}])})],1)},o=[],s=(a("a15b"),a("b64b"),a("ded3")),n=a.n(s),c=a("993a"),l=a("ee0e"),i=a("73e3"),d=a("4124"),u=a("7387"),m=a("bcc3"),p=a("5ec7"),f={name:"PageCrud",components:{crudOperation:l["a"],crudMore:u["a"],crudPagination:i["a"],crudRow:d["a"]},cruds:function(){return Object(c["b"])({columns:p["a"],visibleColumns:p["d"],idField:"id",title:"演示",url:"api/demo",crudMethod:n()({},m["a"])})},mixins:[Object(c["f"])(),Object(c["d"])(),Object(c["c"])(p["c"]),Object(c["a"])()],data:function(){return{permission:{add:["admin","user:add"],edit:["admin","user:edit"],del:["admin","user:del"]},querysLabel:""}},mounted:function(){this.$refs.searchPopup.show(),this.$nextTick((function(){this.$refs.searchPopup.hide()}))},computed:{queryModel:{get:function(){for(var e=[],t=0,a=Object.keys(this.query);t<a.length;t++){var r=a[t],o=this.query[r];o&&e.push(o)}return e.join(", ")},set:function(e){}}}},b=f,y=a("2877"),h=a("8572"),q=a("0016"),w=a("4b7e"),g=a("9c40"),v=a("f20b"),x=a("db86"),k=a("7f67"),C=a("eebe"),S=a.n(C),_=Object(y["a"])(b,r,o,!1,null,null,null);t["default"]=_.exports;S()(_,"components",{QField:h["a"],QIcon:q["a"],QCardActions:w["a"],QBtn:g["a"],QBtnDropdown:v["a"],QTd:x["a"]}),S()(_,"directives",{ClosePopup:k["a"]})}}]);