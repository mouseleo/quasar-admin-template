(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"45a8":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-dialog",{attrs:{"content-class":"coadmin-dialog",maximized:e.dialogFullscreen,persistent:"","no-esc-dismiss":!1},model:{value:e.dialogData,callback:function(t){e.dialogData=t},expression:"dialogData"}},[a("coadmin-card",{directives:[{name:"drag",rawName:"v-drag",value:{dragOutY:45},expression:"{dragOutY:45}"}],staticStyle:{"max-width":"none"},attrs:{id:"dragableDialog"}},[a("q-toolbar",[a("q-avatar",[a("q-icon",{attrs:{name:"edit"}})],1),a("q-toolbar-title",[a("div",[e._v("菜单")])]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.dialogFullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.dialogFullscreen=!e.dialogFullscreen}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-form",{staticClass:"coadmin-form"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-12 col-sm-6"},[a("label",[e._v("姓名")]),a("q-input",{attrs:{outlined:"",dense:"",placeholder:"place","no-error-icon":"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("div",{staticClass:"col-12 col-sm-6"},[a("label",[e._v("性别")]),a("q-input",{attrs:{outlined:"","no-error-icon":"",dense:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("div",{staticClass:"col-12 col-sm-6"},[a("label",[e._v("手机")]),a("q-input",{attrs:{outlined:"","no-error-icon":"",rules:[function(e){return!!e||"不能空"},function(e){return 11===e.length||"请输入11个字符"}],dense:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)])])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Decline",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Accept",color:"primary"}})],1)],1)],1),a("coadmin-table",{attrs:{dense:"","wrap-cells":!1,data:e.data,columns:e.columns,"row-key":"id","visible-columns":e.visibleColumns,selection:"multiple",selected:e.selected,loading:e.loading},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"row q-col-gutter-x-md q-col-gutter-y-xs",staticStyle:{width:"100%"}},[a("q-input",{staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2",attrs:{dense:"",placeholder:"姓名"},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}}),a("q-input",{staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2",attrs:{dense:"",placeholder:"姓名"},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}}),e.searchToggle?[a("q-input",{staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2",attrs:{dense:"",placeholder:"姓名"},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}}),a("q-input",{staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2",attrs:{dense:"",placeholder:"姓名"},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}}),a("q-input",{staticClass:"col-xs-6 col-sm-4 col-md-3 col-lg-2",attrs:{dense:"",placeholder:"姓名"},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}})]:e._e(),a("q-btn-group",{staticClass:"col",attrs:{outline:""}},[a("q-btn",{attrs:{dense:"",outline:"",color:"primary",label:"查询"}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{dense:"",outline:"",color:"primary",label:"Reset"}})],1)],2),a("q-toolbar",{staticClass:"no-padding"},[a("div",{staticClass:"q-gutter-sm no-wrap"},[a("q-btn",{attrs:{dense:"",color:"primary",icon:"add"},on:{click:e.rowViewClick}}),a("q-btn",{attrs:{dense:"",color:"primary",icon:"edit"}}),a("q-btn",{attrs:{dense:"",color:"primary",icon:"delete"}})],1),a("q-space"),a("q-btn-group",{attrs:{outline:""}},[a("q-btn",{attrs:{dense:"",outline:!e.searchToggle,color:"primary",icon:"search"},on:{click:function(t){e.searchToggle=!e.searchToggle}}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{dense:"",outline:"",color:"primary",icon:"autorenew"},on:{click:function(t){e.loading=!e.loading}}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{dense:"",outline:"",color:"primary",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{"auto-close":"",outline:"",dense:"","no-icon-animation":"",color:"primary",icon:"apps"}},[a("div",{staticClass:"row no-wrap q-pa-sm"},[a("div",{staticClass:"column"},e._l(e.columns,(function(t){return a("q-toggle",{key:t.name,attrs:{val:t.name,label:t.label},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}})})),1)])])],1)],1)]}},{key:"no-data",fn:function(t){var l=t.icon,o=t.message,n=t.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:n?"filter_b_and_w":l}}),a("span",{staticStyle:{"font-size":"2em"}},[e._v("\n          "+e._s(o)+"\n        ")])],1)]}},{key:"body-cell-name",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-badge",{attrs:{color:"purple",label:e.value}})],1)])]}},{key:"body-cell-action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn-dropdown",{attrs:{label:"",dense:"",flat:""}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",dense:""},on:{click:function(a){return e.rowViewClick(t.row)}}},[a("q-item-section",[a("q-item-label",[e._v("查看")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",dense:""}},[a("q-item-section",[a("q-item-label",[e._v("修改")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",dense:""}},[a("q-item-section",[a("q-item-label",[e._v("删除")])],1)],1),a("q-separator"),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",dense:""},on:{click:function(t){return e.rowLooooooongButtonClick()}}},[a("q-item-section",[a("q-item-label",[e._v("一个长长的按钮")])],1)],1)],1)],1)],1)]}},{key:"pagination",fn:function(){return[a("q-pagination",{attrs:{max:5e4,"direction-links":!0,"boundary-links":!1,input:"","input-class":"text-orange-10"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("q-select",{attrs:{dense:"","options-dense":"",outlined:"",options:e.numberPerPageOptions,"emit-value":"","map-options":""},model:{value:e.numberPerPage,callback:function(t){e.numberPerPage=t},expression:"numberPerPage"}})]},proxy:!0}])})],1)},o=[],n={name:"PageTableNoData",data:function(){return{text:"",textSearch:"",currentPage:0,numberPerPage:10,numberPerPageOptions:[{label:"10/页",value:10},{label:"20/页",value:20},{label:"30/页",value:30},{label:"40/页",value:40},{label:"50/页",value:50},{label:"100/页",value:100}],searchToggle:!1,loading:!1,dialogData:!1,dialogFullscreen:!1,selected:[],visibleColumns:["calories","name","protein","sodium","iron","action"],columns:[{name:"id",label:"ID",field:"id"},{name:"name",field:"name",required:!0,label:"名称",align:"left",format:function(e){return"".concat(e)},sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:function(e,t){return parseInt(e,10)-parseInt(t,10)}},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:function(e,t){return parseInt(e,10)-parseInt(t,10)}},{name:"action",label:"操作",align:"center"}],data:[]}},watch:{"$q.screen.gt.xs":function(e){console.log("$q.screen.gt.xs="+this.$q.screen.gt.xs+", val="+e)}},methods:{rowViewClick:function(e){this.dialogData=!0},rowLooooooongButtonClick:function(){}}},r=n,s=a("2877"),c=a("24e8"),i=a("65c6"),u=a("cb32"),d=a("0016"),p=a("6ac5"),m=a("9c40"),b=a("a370"),g=a("0378"),v=a("27f9"),f=a("4b7e"),q=a("e7a9"),x=a("eb85"),w=a("2c91"),h=a("f20b"),k=a("9564"),C=a("db86"),y=a("58a8"),S=a("1c1c"),Q=a("66e5"),P=a("4074"),_=a("0170"),D=a("3b16"),I=a("ddd8"),T=a("7f67"),F=a("eebe"),N=a.n(F),B=Object(s["a"])(r,l,o,!1,null,null,null);t["default"]=B.exports;N()(B,"components",{QDialog:c["a"],QToolbar:i["a"],QAvatar:u["a"],QIcon:d["a"],QToolbarTitle:p["a"],QBtn:m["a"],QCardSection:b["a"],QForm:g["a"],QInput:v["a"],QCardActions:f["a"],QBtnGroup:q["a"],QSeparator:x["a"],QSpace:w["a"],QBtnDropdown:h["a"],QToggle:k["a"],QTd:C["a"],QBadge:y["a"],QList:S["a"],QItem:Q["a"],QItemSection:P["a"],QItemLabel:_["a"],QPagination:D["a"],QSelect:I["a"]}),N()(B,"directives",{ClosePopup:T["a"]})}}]);