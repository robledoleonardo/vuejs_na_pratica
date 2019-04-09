(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)s=i[m],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("64a9"),r=o.n(a);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("router-view")],1)},n=[],s=(o("034f"),o("2877")),i={},c=Object(s["a"])(i,r,n,!1,null,null,null),l=c.exports,u=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("h3",[t._v("Lista de contatos")]),o("router-link",{staticClass:"btn btn-primary pull-right mt-3 mb-3",attrs:{to:{name:"cadastrar"}}},[o("i",{staticClass:"fa fa-plus"}),t._v(" Cadastrar")]),o("table",{staticClass:"table table-bordered"},[t._m(0),o("tbody",[t._l(t.contatos,function(e){return o("tr",[o("td",[t._v(t._s(e.nome))]),o("td",{staticClass:"text-center"},[t._v(t._s(e.telefone))]),o("td",{staticClass:"text-center"},[o("router-link",{staticClass:"btn btn-info btn-sm mr-1",attrs:{to:{name:"editar",params:{email:e.email}}}},[o("i",{staticClass:"fa fa-pencil"})]),o("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(o){return t.remover(e.email)}}},[o("i",{staticClass:"fa fa-trash"})])],1)])}),0==t.contatos.length?o("tr",[o("td",{staticClass:"text-center",attrs:{colspan:"3"}},[o("strong",[t._v("\n\t\t\t\t\t\tSem contato cadastrado. "),o("router-link",{attrs:{to:{name:"cadastrar"}}},[t._v("Cadastrar")])],1)])]):t._e()],2)])],1)},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Nome")]),o("th",{staticClass:"text-center",attrs:{width:"200"}},[t._v("Telefone")]),o("th",{attrs:{width:"100"}})])])}],f={name:"Home",data:function(){return{contatos:[]}},created:function(){this.load()},methods:{load:function(){this.$localStorage.hasKey("contatos")||this.$localStorage.set("contatos",[]),this.contatos=this.$localStorage.get("contatos")},remover:function(t){var e=this.$localStorage.get("contatos");e=e.filter(function(e){return e.email!=t}),this.$localStorage.set("contatos",e),this.load()}}},p=f,v=Object(s["a"])(p,m,d,!1,null,null,null),g=v.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Cadastrar contato")]),o("formulario",{on:{submit:t.salvar}})],1)},b=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.salvar()}}},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"nome"}},[t._v("Nome")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.nome,expression:"contato.nome"}],staticClass:"form-control",attrs:{type:"text",id:"nome",required:"required"},domProps:{value:t.contato.nome},on:{input:function(e){e.target.composing||t.$set(t.contato,"nome",e.target.value)}}})]),o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.email,expression:"contato.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"required",disabled:"editar"==t.tipo},domProps:{value:t.contato.email},on:{input:function(e){e.target.composing||t.$set(t.contato,"email",e.target.value)}}})]),o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"telefone"}},[t._v("Telefone")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.telefone,expression:"contato.telefone"}],staticClass:"form-control",attrs:{type:"text",id:"telefone",required:"required"},domProps:{value:t.contato.telefone},on:{input:function(e){e.target.composing||t.$set(t.contato,"telefone",e.target.value)}}})]),o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"cep"}},[t._v("CEP")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.cep,expression:"contato.cep"}],staticClass:"form-control",attrs:{type:"text",id:"cep"},domProps:{value:t.contato.cep},on:{input:function(e){e.target.composing||t.$set(t.contato,"cep",e.target.value)}}})]),o("div",{staticClass:"form-group col-8 col-md-6"},[o("label",{attrs:{for:"endereco"}},[t._v("Endereço")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.endereco,expression:"contato.endereco"}],staticClass:"form-control",attrs:{type:"text",id:"endereco"},domProps:{value:t.contato.endereco},on:{input:function(e){e.target.composing||t.$set(t.contato,"endereco",e.target.value)}}})]),o("div",{staticClass:"form-group col-4 col-md-2"},[o("label",{attrs:{for:"numero"}},[t._v("Número")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.numero,expression:"contato.numero"}],staticClass:"form-control",attrs:{type:"text",id:"numero"},domProps:{value:t.contato.numero},on:{input:function(e){e.target.composing||t.$set(t.contato,"numero",e.target.value)}}})]),o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.bairro,expression:"contato.bairro"}],staticClass:"form-control",attrs:{type:"text",id:"bairro"},domProps:{value:t.contato.bairro},on:{input:function(e){e.target.composing||t.$set(t.contato,"bairro",e.target.value)}}})]),o("div",{staticClass:"form-group col-12 col-md-4"},[o("label",{attrs:{for:"cidade"}},[t._v("Cidade")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.cidade,expression:"contato.cidade"}],staticClass:"form-control",attrs:{type:"text",id:"cidade"},domProps:{value:t.contato.cidade},on:{input:function(e){e.target.composing||t.$set(t.contato,"cidade",e.target.value)}}})])]),o("input",{staticClass:"btn btn-success mr-3",attrs:{type:"submit",value:"Salvar"}}),o("router-link",{staticClass:"btn btn-light",attrs:{to:{name:"home"}}},[t._v("Voltar")])],1)},C=[],y={name:"Formulario",props:{tipo:{type:String,default:"cadastrar"},contato:{type:Object,default:function(){return{}}}},methods:{salvar:function(){this.$emit("submit",this.contato)}}},$=y,w=Object(s["a"])($,_,C,!1,null,null,null),x=w.exports,S={name:"Cadastrar",methods:{salvar:function(t){if(this.verificarEmail(t.email))return alert("Email ja cadastrado"),!1;var e=this.$localStorage.get("contatos");e.push(t),this.$localStorage.set("contatos",e),this.$router.push({name:"home"})},verificarEmail:function(t){var e=this.$localStorage.get("contatos");return!!e.filter(function(e){return e.email==t}).length}},components:{Formulario:x}},j=S,O=Object(s["a"])(j,h,b,!1,null,null,null),E=O.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Editar contato")]),o("formulario",{attrs:{contato:t.contato,tipo:"editar"},on:{submit:t.salvar}})],1)},N=[],k=(o("7514"),{name:"Editar",data:function(){return{contato:{}}},created:function(){var t=this,e=this.$localStorage.get("contatos");this.contato=e.find(function(e){return e.email==t.$route.params.email})},methods:{salvar:function(t){var e=this,o=this.$localStorage.get("contatos");o=o.map(function(o){return o.email==e.$route.params.email?t:o}),this.$localStorage.set("contatos",o),this.$router.push({name:"home"})}},components:{Formulario:x}}),q=k,F=Object(s["a"])(q,P,N,!1,null,null,null),T=F.exports;a["a"].use(u["a"]);var M=new u["a"]({routes:[{path:"/",name:"home",component:g},{path:"/cadastrar",name:"cadastrar",component:E},{path:"/editar/:email",name:"editar",component:T}]}),A=o("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var B=o("80f1"),J=o.n(B);a["a"].use(J.a),a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.320345d2.js.map