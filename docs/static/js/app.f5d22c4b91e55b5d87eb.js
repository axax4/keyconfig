webpackJsonp([0],{"0uT0":function(t,e){},"0yQV":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-back",style:t.backStyle,attrs:{id:t.id,tabindex:"-1"}},[n("div",{staticClass:"dialog-body",style:t.bodyStyle},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._t("header")],2),n("div",{staticClass:"modal-body"},[t._t("default")],2),n("div",{staticClass:"modal-footer"})])])])},s=[],o={render:i,staticRenderFns:s};e.a=o},"1Au7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("hello")],1)},s=[],o={render:i,staticRenderFns:s};e.a=o},"1K5H":function(t,e,n){"use strict";e.a={name:"keybox",components:{},props:{pkey:String},data:function(){return{}},mounted:function(){},computed:{},methods:{onkey:function(t){if(console.log(t.key),"Tab"!==t.key){var e=void 0;if(" "===t.key)return void(e="Space");e=t.key,this.$emit("change",e)}}}}},"5AjW":function(t,e,n){"use strict";e.a={name:"MyDialog",mounted:function(){this.calc(),window.addEventListener("resize",this.calc)},data:function(){return{bodyWidth:600,bodyHeight:400,backStyle:"",bodyStyle:""}},props:{id:"",title:""},computed:{},methods:{calc:function(){this.backStyle="height:"+window.innerHeight+"px;",this.bodyStyle="top:"+.05*window.innerHeight+"px;left:"+(window.innerWidth/2-this.bodyWidth/2)+"px;width:"+this.bodyWidth+"px;height:"+this.bodyHeight+"px"}}}},"5lq+":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("p",[t._v("キーコンフィグのデモページです")]),n("p",[t._v("Escキーを押すとキーコンフィグを開きます")]),n("div",[n("h4",[t._v("設定値")]),t._l(t.keys,function(e){return n("div",[n("div",[n("span",[t._v(t._s(e.label)+":")]),n("span",[t._v(t._s(e.key))])])])})],2),n("h1",{staticClass:"display"},[t._v(t._s(t.display))]),t.showDialog?n("MyDialog",{attrs:{id:"configModal",title:"キーコンフィグ"}},[n("div",{staticClass:"panel"},[n("div",t._l(t.keys,function(e){return n("div",[t._v(t._s(e.label)),n("KeyBox",{attrs:{pkey:e.key},on:{change:function(n){t.onchange(n,e)}}})],1)})),n("div",{staticClass:"preset"},[n("div",[t._v("プリセット")]),n("button",{on:{click:function(e){t.preset("wasd")}}},[t._v("wasd")]),n("button",{on:{click:function(e){t.preset("cursor")}}},[t._v("カーソル")])])]),n("div",{staticClass:"message"},[t._v(t._s(t.msg))]),n("div",{staticStyle:{position:"absolute",bottom:"10px","margin-left":"200px"}},[n("button",{on:{click:function(e){t.showDialog=!1}}},[t._v("閉じる(Esc)")])])]):t._e()],1)},s=[],o={render:i,staticRenderFns:s};e.a=o},Eo8H:function(t,e,n){"use strict";function i(t){n("g9LU")}var s=n("1K5H"),o=n("u0qA"),a=n("VU/8"),c=i,r=a(s.a,o.a,!1,c,"data-v-7d922ba8",null);e.a=r.exports},KUt2:function(t,e){},M93x:function(t,e,n){"use strict";function i(t){n("KUt2")}var s=n("xJD8"),o=n("1Au7"),a=n("VU/8"),c=i,r=a(s.a,o.a,!1,c,null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n("/5sW"),i=n("M93x");e.a.config.productionTip=!1,t._app=new e.a({el:"#app",render:function(t){return t(i.a)}})}.call(e,n("DuR2"))},ZzzE:function(t,e,n){"use strict";function i(t){n("zTIq")}var s=n("5AjW"),o=n("0yQV"),a=n("VU/8"),c=i,r=a(s.a,o.a,!1,c,null,null);e.a=r.exports},g9LU:function(t,e){},pMZz:function(t,e,n){"use strict";var i=n("ZzzE"),s=n("Eo8H");e.a={name:"hello",components:{MyDialog:i.a,KeyBox:s.a},data:function(){return{msg:"",display:"",showDialog:!1,keys:[{label:"上移動",key:"w"},{label:"左移動",key:"a"},{label:"下移動",key:"s"},{label:"右移動",key:"d"}],preset_data:{wasd:"wasd".split(""),cursor:["ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]}}},mounted:function(){var t=this;document.addEventListener("keydown",function(e){if(console.log(e.key,t.keyobj),"Escape"===e.key)t.showDialog=!t.showDialog;else{var n=t.keyobj[e.key];n&&(t.display=n)}}),document.addEventListener("keyup",function(e){t.display=""})},computed:{keyobj:function(){return console.log("create keyobj"),this.keys.reduce(function(t,e){return t[e.key]=e.label,t},{})}},methods:{checkkey:function(t){return!this.keys.some(function(e){return e.key===t})},onchange:function(t,e){console.log("onchange",t,e),this.msg="",e.key!==t&&(this.checkkey(t)?e.key=t:this.msg="すでに使われているキーです")},preset:function(t){var e=this.preset_data[t];if(e)for(var n=0;n<4;n++)this.keys[n].key=e[n]}}}},qSdX:function(t,e,n){"use strict";function i(t){n("0uT0")}var s=n("pMZz"),o=n("5lq+"),a=n("VU/8"),c=i,r=a(s.a,o.a,!1,c,"data-v-6480478c",null);e.a=r.exports},u0qA:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"input",domProps:{value:t.pkey},on:{keyup:function(e){e.preventDefault(),t.onkey(e)},keydown:function(t){t.preventDefault()}}})},s=[],o={render:i,staticRenderFns:s};e.a=o},xJD8:function(t,e,n){"use strict";var i=n("qSdX");e.a={name:"app",components:{Hello:i.a}}},zTIq:function(t,e){}},["NHnr"]);