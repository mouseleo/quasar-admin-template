(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"73ad":function(e,t,a){"use strict";a.r(t);var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("coadmin-card",{staticClass:"q-ma-none q-pa-md q-gutter-md"},[a("coadmin-tree-select",{attrs:{placeholder:"leaf（只有叶子节点）","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.popupTreeTicked,expanded:e.popupTreeExpanded,"tick-strategy":"leaf","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){e.popupTreeTicked=t},"update:expanded":function(t){e.popupTreeExpanded=t}}}),a("coadmin-tree-select",{attrs:{placeholder:"strict（选谁是谁）","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked1,expanded:e.tree.expanded1,"tick-strategy":"strict","filter-key-like":"nameLetter","filter-key-equal":"id","tree-style":"width:350px; max-height:60vh;","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked1",t)},"update:expanded":function(t){return e.$set(e.tree,"expanded1",t)}}}),a("coadmin-tree-select",{attrs:{placeholder:"leaf-any-with-parent（任意叶子节点选中就包含父节点）","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked2,expanded:e.tree.expanded2,"tick-strategy":"leaf-any-with-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:"","no-ticked-expand":""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked2",t)},"update:expanded":function(t){return e.$set(e.tree,"expanded2",t)}}}),a("coadmin-tree-select",{attrs:{placeholder:"leaf-all-only-parent（选中所有叶子节点就只包含父节点）","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked3,expanded:e.tree.expanded3,"tick-strategy":"leaf-all-only-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked3",t)},"update:expanded":function(t){return e.$set(e.tree,"expanded3",t)}}}),a("coadmin-tree-select",{attrs:{placeholder:"leaf-all-with-parent（选中所有叶子节点就包含父节点）","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked4,expanded:e.tree.expanded4,"tick-strategy":"leaf-all-with-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked4",t)},"update:expanded":function(t){return e.$set(e.tree,"expanded4",t)}}}),a("coadmin-tree-select",{attrs:{placeholder:"（单选）","node-key":"id","label-key":"name",nodes:e.treeDatas,expanded:e.tree.expanded4,"filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:"",selectable:""},on:{"update:expanded":function(t){return e.$set(e.tree,"expanded4",t)}}})],1)],1)},n=[],r=a("486f"),l={name:"PageTreeSelect",data:function(){return{popupTreeExpanded:[],popupTreeTicked:[],tree:{}}},mounted:function(){},computed:{treeDatas:function(){return r["a"].content}},watch:{popupTreeExpanded:function(e){console.log("pageTreeSelect.popupTreeExpanded",this.popupTreeExpanded)},popupTreeTicked:function(e){console.log("pageTreeSelect.popupTreeTicked",this.popupTreeTicked)}},methods:{}},p=l,i=a("2877"),c=Object(i["a"])(p,d,n,!1,null,null,null);t["default"]=c.exports}}]);