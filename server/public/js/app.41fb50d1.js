(function(t){function e(e){for(var n,i,u=e[0],o=e[1],s=e[2],l=0,p=[];l<u.length;l++)i=u[l],a[i]&&p.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var o=r[u];0!==a[o]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=o;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"1ca8":function(t,e,r){"use strict";var n=r("5bfc"),a=r.n(n);a.a},2666:function(t,e,r){},"26c2":function(t,e,r){"use strict";var n=r("37d3"),a=r.n(n);a.a},"30e2":function(t,e,r){},"37d3":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("ProductList")],1)},c=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("h1",[t._v("Amazon Price Check")])])}],o={name:"Header"},s=o,d=(r("a740"),r("2877")),l=Object(d["a"])(s,i,u,!1,null,null,null),p=l.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("AddProduct",{on:{"add-product":t.addProduct}}),r("table",[t._m(0),t._l(t.products,function(e){return r("tr",{key:e.id},[e.title.length>=60?r("td",[t._v(t._s(e.title.substring(0,60)))]):r("td",[t._v(t._s(e.title))]),r("td",{class:[t.formatPrice(e.price)>e.maxPrice?"over":"under"]},[t._v(t._s(e.price))]),r("td",[t._v(t._s(e.date))]),r("td",[r("i",{staticClass:"fa fa-minus-circle",on:{click:function(r){return t.removeProduct(e.id)}}})])])})],2),r("UpdatePrice",{attrs:{products:t.products},on:{"update-product":t.updateProduct}})],1)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Price")]),r("th",[t._v("Last Updated")]),r("th",[t._v("Remove")])])}],h=(r("a481"),r("c5f6"),r("20d6"),r("75fc")),v=r("f499"),g=r.n(v),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"addForm",on:{submit:function(e){return e.preventDefault(),t.addProduct(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.asin,expression:"asin"}],attrs:{type:"text",name:"asin",placeholder:"ASIN"},domProps:{value:t.asin},on:{input:function(e){e.target.composing||(t.asin=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],attrs:{type:"number",name:"maxPrice",min:"100",max:"10000",step:"100",placeholder:"Max Price"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}}),r("input",{staticClass:"btn",attrs:{type:"submit",value:"Add Product"}})])},b=[],_=(r("96cf"),r("3b8d")),x=r("bc3a"),w=r.n(x),y={name:"AddProduct",data:function(){return{asin:"",maxPrice:"",product:{}}},methods:{addProduct:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new Date,t.next=3,w.a.get("api/product/"+this.asin).then(function(t){var n=t.data,a={id:r.asin,title:n.title,price:n.offerPrice,maxPrice:r.maxPrice,date:e.toISOString().substring(0,10)+" "+(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()};r.$emit("add-product",a)});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},O=y,S=(r("cbc2"),Object(d["a"])(O,P,b,!1,null,"653c0b7a",null)),j=S.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"updatePrice"},[r("div",{staticClass:"progressBar"},[r("div",{staticClass:"progress",style:{width:t.computedWidth}})]),r("button",{staticClass:"updateBtn",on:{click:t.updatePrices}},[t._v("Update Prices")])])},$=[],C=(r("ac6a"),{name:"UpdatePrice",components:{},data:function(){return{width:"0%"}},props:{products:Array},computed:{computedWidth:function(){return this.width}},methods:{changePercentage:function(t){this.width=t+"%"},updatePrices:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=new Date,r=regeneratorRuntime.mark(function t(r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=a.products[r],t.next=3,w.a.get("api/product/"+n.id).then(function(t){var c=t.data,i={id:n.id,title:c.title,price:c.offerPrice,maxPrice:a.maxPrice,date:e.toISOString().substring(0,10)+" "+(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()};a.$emit("update-product",i);var u=a.calculateStep();setTimeout(function(){a.changePercentage(u*(r+1))},2e3*r)});case 3:case"end":return t.stop()}},t)}),n=0;case 3:if(!(n<this.products.length)){t.next=8;break}return t.delegateYield(r(n),"t0",5);case 5:n++,t.next=3;break;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),calculateStep:function(){var t=this.products.length,e=(100/t).toFixed(2);return e}}}),I=C,M=(r("26c2"),Object(d["a"])(I,k,$,!1,null,"ff3fbf2c",null)),A=M.exports,E={name:"ProductList",components:{AddProduct:j,UpdatePrice:A},data:function(){return{products:[]}},methods:{removeProduct:function(t){this.products=this.products.filter(function(e){return e.id!==t}),localStorage.setItem("savedProducts",g()(this.products))},addProduct:function(t){this.products=[].concat(Object(h["a"])(this.products),[t]),localStorage.setItem("savedProducts",g()(this.products))},updateProduct:function(t){var e=this.products.findIndex(function(e){return e.id==t.id});this.$set(this.products[e],"price",t.price),this.$set(this.products[e],"date",t.date),localStorage.setItem("savedProducts",g()(this.products))},formatPrice:function(t){return Number(t.replace(/[^0-9.]+/g,""))}},created:function(){if(null!=localStorage.getItem("savedProducts"))for(var t=JSON.parse(localStorage.getItem("savedProducts")),e=0;e<t.length;e++)this.products.push(t[e])}},H=E,R=(r("1ca8"),Object(d["a"])(H,f,m,!1,null,"37b8aa03",null)),N=R.exports,U={name:"app",components:{Header:p,ProductList:N}},L=U,T=(r("034f"),Object(d["a"])(L,a,c,!1,null,null,null)),D=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(D)}}).$mount("#app")},"5bfc":function(t,e,r){},"64a9":function(t,e,r){},a740:function(t,e,r){"use strict";var n=r("2666"),a=r.n(n);a.a},cbc2:function(t,e,r){"use strict";var n=r("30e2"),a=r.n(n);a.a}});
//# sourceMappingURL=app.41fb50d1.js.map