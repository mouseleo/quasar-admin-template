(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"874b":function(e,t,i){},"9fa8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{},[i("coadmin-table",{attrs:{title:"Invoices",flat:"",data:e.data,"hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",grid:"grid"==e.mode,filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[i("q-btn",{staticClass:"q-mr-xs",attrs:{outline:"",color:"primary",label:"Add New"},on:{click:function(t){e.invoice_dialog=!0}}}),i("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[i("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n        ")])],1):e._e(),t.inFullscreen?e._e():i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[i("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid")+"\n        ")])],1),i("q-btn",{attrs:{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""},on:{click:e.exportTable}})]}},{key:"body-cell-status",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("q-chip",{staticClass:"text-weight-bolder",staticStyle:{width:"85px"},attrs:{color:"Active"==t.row.status?"green":"Inactive"==t.row.status?"red":"grey","text-color":"white",dense:"",square:""}},[e._v(e._s(t.row.status)+"\n        ")])],1)]}}])}),i("q-dialog",{model:{value:e.invoice_dialog,callback:function(t){e.invoice_dialog=t},expression:"invoice_dialog"}},[i("q-card",{staticStyle:{width:"600px","max-width":"60vw"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("\n          Add new invoice\n          "),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"float-right",attrs:{round:"",flat:"",dense:"",icon:"close",color:"grey-8"}})],1)]),i("q-separator",{attrs:{inset:""}}),i("q-card-section",{staticClass:"q-pt-none"},[i("q-form",{staticClass:"q-gutter-md"},[i("q-list",[i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Account")]),i("q-input",{attrs:{dense:"",outlined:"",label:"Account"},model:{value:e.invoice.account,callback:function(t){e.$set(e.invoice,"account",t)},expression:"invoice.account"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Amount")]),i("q-input",{attrs:{dense:"",outlined:"",label:"Amount"},model:{value:e.invoice.amount,callback:function(t){e.$set(e.invoice,"amount",t)},expression:"invoice.amount"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Invoice Date")]),i("q-input",{attrs:{dense:"",outlined:"",mask:"date",label:"Invoice Date"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[i("q-popup-proxy",{ref:"invoiceDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{on:{input:function(){return e.$refs.invoiceDateProxy.hide()}},model:{value:e.invoice.invoice_date,callback:function(t){e.$set(e.invoice,"invoice_date",t)},expression:"invoice.invoice_date"}})],1)],1)]},proxy:!0}]),model:{value:e.invoice.invoice_date,callback:function(t){e.$set(e.invoice,"invoice_date",t)},expression:"invoice.invoice_date"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Due Date")]),i("q-input",{attrs:{dense:"",outlined:"",mask:"date",label:"Due Date"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[i("q-popup-proxy",{ref:"dueDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{on:{input:function(){return e.$refs.dueDateProxy.hide()}},model:{value:e.invoice.due_date,callback:function(t){e.$set(e.invoice,"due_date",t)},expression:"invoice.due_date"}})],1)],1)]},proxy:!0}]),model:{value:e.invoice.due_date,callback:function(t){e.$set(e.invoice,"due_date",t)},expression:"invoice.due_date"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Invoice Type")]),i("q-input",{attrs:{dense:"",outlined:"",label:"Invoice Type"},model:{value:e.invoice.invoice_type,callback:function(t){e.$set(e.invoice,"invoice_type",t)},expression:"invoice.invoice_type"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"q-pb-xs"},[e._v("Status")]),i("q-input",{attrs:{dense:"",outlined:"",label:"Status"},model:{value:e.invoice.status,callback:function(t){e.$set(e.invoice,"status",t)},expression:"invoice.status"}})],1)],1)],1)],1)],1),i("q-card-actions",{staticClass:"text-teal",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Save",type:"submit",color:"primary"}})],1)],1)],1)],1)},a=[],o=(i("99af"),i("a15b"),i("d81d"),i("b0c0"),i("ac1f"),i("1276"),i("a357"));function c(e,t){var i=void 0!==t?t(e):e;return i=void 0===i||null===i?"":String(i),i=i.split('"').join('""'),'"'.concat(i,'"')}var s={name:"SalesInvoices",data:function(){return{filter:"",mode:"list",invoice:{},invoice_dialog:!1,columns:[{name:"invoice_id",align:"left",label:"#",field:"invoice_id",sortable:!0},{name:"account",required:!0,label:"Account",align:"left",field:"account",sortable:!0},{name:"amount",align:"left",label:"Amount",field:"amount",sortable:!0},{name:"invoice_date",align:"left",label:"Invoice Date",field:"invoice_date",sortable:!0},{name:"due_date",align:"left",label:"Due Date",field:"due_date",sortable:!0},{name:"invoice_type",align:"left",label:"Invoice Type",field:"invoice_type",sortable:!0},{name:"status",align:"left",label:"Status",field:"status",sortable:!0}],data:[{invoice_id:"INV 002",account:"Kiley Ibbotson",amount:"$ 1900",invoice_type:"Onetime",status:"Active",invoice_date:"09-02-2019",due_date:"10-02-2019"},{invoice_id:"INV 003",account:"Leslie Tecklenburg",amount:"$ 1200",invoice_type:"Onetime",status:"Active",invoice_date:"03-25-2019",due_date:"04-25-2019"},{invoice_id:"INV 004",account:"Lia Whitledge",amount:"$ 1550",invoice_type:"Onetime",status:"Active",invoice_date:"03-18-2019",due_date:"04-18-2019"},{invoice_id:"INV 005",account:"Sam Wileman",amount:"$ 1800",invoice_type:"Onetime",status:"Inactive",invoice_date:"04-09-2019",due_date:"05-09-2019"},{invoice_id:"INV 006",account:"Edgar Colmer",amount:"$ 1000",invoice_type:"Onetime",status:"Active",invoice_date:"09-03-2019",due_date:"10-03-2019"},{invoice_id:"INV 007",account:"Kaiden Rozelle",amount:"$ 1200",invoice_type:"Onetime",status:"Active",invoice_date:"01-12-2019",due_date:"02-12-2019"},{invoice_id:"INV 008",account:"Leslie Stopher",amount:"$ 1500",invoice_type:"Onetime",status:"Active",invoice_date:"04-15-2019",due_date:"05-15-2019"},{invoice_id:"INV 009",account:"Miguel Subasic",amount:"$ 2000",invoice_type:"Onetime",status:"Active",invoice_date:"11-09-2019",due_date:"12-09-2019"},{invoice_id:"INV 010",account:"Reese Vandygriff",amount:"$ 1450",invoice_type:"Onetime",status:"Inactive",invoice_date:"01-01-2019",due_date:"02-01-2019"},{invoice_id:"INV 011",account:"Griffin Troglen",amount:"$ 1200",invoice_type:"Onetime",status:"Active",invoice_date:"04-12-2019",due_date:"06-12-2019"},{invoice_id:"INV 012",account:"Zachary Wehrley",amount:"$ 1400",invoice_type:"Onetime",status:"Active",invoice_date:"10-09-2019",due_date:"11-09-2019"},{invoice_id:"INV 013",account:"Kyle Wahlert",amount:"$ 1200",invoice_type:"Onetime",status:"Active",invoice_date:"01-02-2019",due_date:"02-02-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"},{invoice_id:"INV 014",account:"John Subasic",amount:"$ 1234",invoice_type:"Onetime",status:"Active",invoice_date:"07-06-2019",due_date:"08-06-2019"}],pagination:{rowsPerPage:10}}},methods:{exportTable:function(){var e=this,t=[this.columns.map((function(e){return c(e.label)}))].concat(this.data.map((function(t){return e.columns.map((function(e){return c("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})).join(",")}))).join("\r\n"),i=Object(o["a"])("invoices.csv",t,"text/csv");!0!==i&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}},u=s,l=(i("ac88"),i("2877")),d=i("9c40"),r=i("27f9"),v=i("0016"),p=i("05c0"),m=i("db86"),_=i("b047"),b=i("24e8"),f=i("f09f"),y=i("a370"),q=i("eb85"),g=i("0378"),h=i("1c1c"),I=i("66e5"),x=i("4074"),$=i("0170"),A=i("7cbe"),S=i("52ee"),N=i("4b7e"),w=i("7f67"),O=i("eebe"),V=i.n(O),k=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=k.exports;V()(k,"components",{QBtn:d["a"],QInput:r["a"],QIcon:v["a"],QTooltip:p["a"],QTd:m["a"],QChip:_["a"],QDialog:b["a"],QCard:f["a"],QCardSection:y["a"],QSeparator:q["a"],QForm:g["a"],QList:h["a"],QItem:I["a"],QItemSection:x["a"],QItemLabel:$["a"],QPopupProxy:A["a"],QDate:S["a"],QCardActions:N["a"]}),V()(k,"directives",{ClosePopup:w["a"]})},ac88:function(e,t,i){"use strict";i("874b")}}]);