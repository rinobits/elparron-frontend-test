(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SaborMasa"],{"11a7":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"SucursalPicker"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.sucursal_id,expression:"sucursal_id"}],staticClass:"button",attrs:{name:"sucursalPicker",id:"sucursalPicker"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.sucursal_id=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Sucursales")]),t._l(t.sucursales,(function(a,r){return e("option",{key:r,domProps:{value:t.$store.state.sucursal_id,textContent:t._s(t.Sucursal)}})}))],2)])},n=[],o=(e("4360"),e("bc3a")),s=e.n(o),c={name:"SucursalPicker",data:function(){return{uri:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_URI}},props:["whoCalls"],methods:{getSucursales:function(){"TipoMasa"==this.whoCalls&&(this.whoCalls="masaTipo"),"SaborTorta"==this.whoCalls&&(this.whoCalls="sabor"),"SaborMasa"==this.whoCalls&&(this.whoCalls="masaSabor");var t="".concat(this.whoCalls),a="getall",e="".concat(this.uri,"/").concat(t,"/").concat(a),r={headers:{authorization:localStorage.getItem("accessToken")}};s.a.get(e,r).then(console.log).catch(console.log)}},created:function(){this.getSucursales()}},i=c,u=e("2877"),l=Object(u["a"])(i,r,n,!1,null,"30d5b7db",null);a["a"]=l.exports},3910:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Registrar"}},[e("button",{staticClass:"registrar",on:{click:function(a){return t.putAllData()}}},[t._v(" Registrar ")])])},n=[],o=e("bc3a"),s=e.n(o),c=e("4360");function i(t,a){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=u(t))||a&&t&&"number"===typeof t.length){e&&(t=e);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==e.return||e.return()}finally{if(c)throw o}}}}function u(t,a){if(t){if("string"===typeof t)return l(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,a):void 0}}function l(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=t[e];return r}var d={name:"Registrar",data:function(){return{uri:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_URI}},props:["sucursal_id","tableName","method","data"],methods:{callPutData:function(){var t=this;return new Promise((function(a,e){var r,n={},o={headers:{authorization:localStorage.getItem("accessToken")}},u=c["a"].state["".concat(t.data)],l="",d=i(u);try{for(d.s();!(r=d.n()).done;){var m=r.value;l="".concat(t.uri,"/").concat(t.tableName,"/").concat(t.method,"/").concat(m.id),n="tortas"===t.data?{masaTipo_id:m.masaTipo_id,masaSabor_id:m.masaSabor_id,sabor_id:m.sabor_id}:{nombre:m.nombre},s.a.put(l,n,o).then(console.log).catch(console.log)}}catch(f){d.e(f)}finally{d.f()}a()}))},putAllData:function(){this.callPutData(this.sucursal_id).then(console.log).catch(console.log)}}},m=d,f=e("2877"),h=Object(f["a"])(m,r,n,!1,null,"729c4f7f",null);a["a"]=h.exports},"3deb":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"SaborMasa"}},[e("div",{staticClass:"header"},[t._m(0),e("div",{staticClass:"buttons"},[e("SucursalPicker",{staticClass:"sucursal",attrs:{whoCalls:"SaborMasa"}}),e("Buscar",{staticClass:"buscar",attrs:{sucursal_id:"1",tableName:"masaSabor",method:"getall",data:"masaSabores"}}),e("Registrar",{staticClass:"registrar",attrs:{sucursal_id:"1",tableName:"masaSabor",method:"update",data:"masaSabores"}})],1)]),e("div",{staticClass:"content"},[e("table",[e("h1",[t._v("Sabores de Masas")]),t._l(t.masaSabores,(function(a,r){return e("div",{key:r},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nombre,expression:"tipo.nombre"}],attrs:{type:"text",value:"tipo.nombre"},domProps:{value:a.nombre},on:{input:function(e){e.target.composing||t.$set(a,"nombre",e.target.value)}}})])}))],2)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("h3",[t._v("Sabores de Masas")])])}],o=e("11a7"),s=e("732d"),c=e("3910"),i=e("4360"),u=e("bc3a"),l=e.n(u);function d(t,a,e,r,n,o,s){try{var c=t[o](s),i=c.value}catch(u){return void e(u)}c.done?a(i):Promise.resolve(i).then(r,n)}function m(t){return function(){var a=this,e=arguments;return new Promise((function(r,n){var o=t.apply(a,e);function s(t){d(o,r,n,s,c,"next",t)}function c(t){d(o,r,n,s,c,"throw",t)}s(void 0)}))}}var f={name:"SaborMasa",components:{SucursalPicker:o["a"],Buscar:s["a"],Registrar:c["a"]},data:function(){return{masaSabores:i["a"].state.masaSabores,sucursal_id:i["a"].sucursal_id,uri:Object({NODE_ENV:"production",BASE_URL:""}).API}},methods:{getSaborMasa:function(t){var a=this;return new Promise((function(t,e){var r="masasabor",n="getall",o="".concat(a.uri,"/").concat(r,"/").concat(n),s={headers:{authorization:localStorage.getItem("accessToken")}};l.a.get(o,s).then((function(a){t(a)})).catch((function(t){e(t)}))}))},callSaborMasa:function(){var t=this;this.getSaborMasa(this.sucursal_id).then((function(a){i["a"].state.masaSabores=a.data,t.masaSabores=i["a"].state.masaSabores})).catch(console.log)}},mounted:function(){var t=this;return m(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.callSaborMasa();case 2:case"end":return a.stop()}}),a)})))()}},h=f,b=(e("5241"),e("2877")),v=Object(b["a"])(h,r,n,!1,null,"60ef4e92",null);a["default"]=v.exports},5241:function(t,a,e){"use strict";var r=e("8c6b"),n=e.n(r);n.a},"732d":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Buscar"}},[e("button",{staticClass:"buscar",on:{click:function(a){return t.callGetData()}}},[t._v(" Buscar ")])])},n=[],o=e("4360"),s=e("bc3a"),c=e.n(s),i={name:"Buscar",data:function(){return{uri:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_URI}},props:["tableName","method","data"],methods:{getData:function(){var t=this;return new Promise((function(a,e){var r="".concat(t.uri,"/").concat(t.tableName,"/").concat(t.method),n={headers:{authorization:localStorage.getItem("accessToken")}};c.a.get(r,n).then((function(t){a(t.data)})).catch((function(t){return e(t)}))}))},callGetData:function(){var t=this;this.getData().then((function(a){o["a"].state["".concat(t.data)]=a})).catch(console.log)}}},u=i,l=e("2877"),d=Object(l["a"])(u,r,n,!1,null,"cdf312bc",null);a["a"]=d.exports},"8c6b":function(t,a,e){}}]);
//# sourceMappingURL=SaborMasa.d89fc671.js.map