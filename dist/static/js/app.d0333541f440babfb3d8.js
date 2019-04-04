webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},n,!1,function(t){a("QduI")},null,null).exports,r=a("/ocq"),i={name:"Index",data:function(){return{contatos:[]}},created:function(){this.load()},methods:{load:function(){this.$localStorage.hasKey("contatos")||this.$localStorage.set("contatos",[]),this.contatos=this.$localStorage.get("contatos"),console.log(this.contatos,"=")},remover:function(t){var e=this.contatos.filter(function(e){return e.email!=t});this.$localStorage.set("contatos",e),this.load()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("h3",[t._v("Listagem de contatos")]),t._v(" "),a("router-link",{staticClass:"btn btn-sm btn-primary pull-right mt-2 mb-2",attrs:{to:{name:"cadastrar"}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Cadastrar")]),t._v(" "),a("table",{staticClass:"table table-bordered "},[t._m(0),t._v(" "),a("tbody",[t._l(t.contatos,function(e){return a("tr",[a("td",[t._v(t._s(e.nome))]),t._v(" "),a("td",[t._v(t._s(e.telefone))]),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-sm btn-info",attrs:{to:{name:"editar",params:{email:e.email}}}},[a("i",{staticClass:"fa fa-pencil"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return t.remover(e.email)}}},[a("i",{staticClass:"fa fa-trash"})])],1)])}),t._v(" "),0==t.contatos.length?a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"3"}},[a("strong",[t._v("Sem contato cadastado. "),a("router-link",{attrs:{to:{name:"cadastrar"}}},[t._v("Cadastrar")])],1)])]):t._e()],2)])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Nome")]),this._v(" "),e("th",{staticClass:"text-center",attrs:{width:"200"}},[this._v("Telefone")]),this._v(" "),e("th",{attrs:{width:"100"}})])])}]},c=a("VU/8")(i,l,!1,null,null,null).exports,m={data:function(){return{contato:{nome:null,email:null,telefone:null}}},methods:{salvar:function(){if(this.verificarEmail())return alert("Email já cadastrado"),!1;var t=this.$localStorage.get("contatos");t.push(this.contato),this.$localStorage.set("contatos",t),this.$router.push({name:"index"})},verificarEmail:function(){var t=this;return this.$localStorage.get("contatos").filter(function(e){return e.email==t.contato.email}).length}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Cadastro de contato")]),t._v(" "),a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.salvar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"nome"}},[t._v("Nome")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.nome,expression:"contato.nome"}],staticClass:"form-control",attrs:{type:"text",id:"nome",required:"required"},domProps:{value:t.contato.nome},on:{input:function(e){e.target.composing||t.$set(t.contato,"nome",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.email,expression:"contato.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"required"},domProps:{value:t.contato.email},on:{input:function(e){e.target.composing||t.$set(t.contato,"email",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"telefone"}},[t._v("Telefone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.telefone,expression:"contato.telefone"}],staticClass:"form-control",attrs:{type:"text",id:"telefone",required:"required"},domProps:{value:t.contato.telefone},on:{input:function(e){e.target.composing||t.$set(t.contato,"telefone",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Salvar"}}),t._v(" "),a("router-link",{staticClass:"btn btn-light",attrs:{to:{name:"index"}}},[t._v("Voltar")])],1)])])])},staticRenderFns:[]},d=a("VU/8")(m,u,!1,null,null,null).exports,v={data:function(){return{contato:{nome:null,email:null,telefone:null}}},created:function(){var t=this,e=this.$localStorage.get("contatos");console.log(e),this.contato=e.find(function(e){return e.email==t.$route.params.email})},methods:{salvar:function(){var t=this,e=this.$localStorage.get("contatos");this.$localStorage.set("contatos",e.map(function(e){return e.email==t.contato.email?t.contato:e})),this.$router.push({name:"index"})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Editar contato")]),t._v(" "),a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.salvar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"nome"}},[t._v("Nome")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.nome,expression:"contato.nome"}],staticClass:"form-control",attrs:{type:"text",id:"nome",required:"required"},domProps:{value:t.contato.nome},on:{input:function(e){e.target.composing||t.$set(t.contato,"nome",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.email,expression:"contato.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",disabled:"disabled"},domProps:{value:t.contato.email},on:{input:function(e){e.target.composing||t.$set(t.contato,"email",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"telefone"}},[t._v("Telefone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contato.telefone,expression:"contato.telefone"}],staticClass:"form-control",attrs:{type:"text",id:"telefone",required:"required"},domProps:{value:t.contato.telefone},on:{input:function(e){e.target.composing||t.$set(t.contato,"telefone",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Salvar"}}),t._v(" "),a("router-link",{staticClass:"btn btn-light",attrs:{to:{name:"index"}}},[t._v("Voltar")])],1)])])])},staticRenderFns:[]},p=a("VU/8")(v,f,!1,null,null,null).exports;o.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"index",component:c},{path:"/cadastrar",name:"cadastrar",component:d},{path:"/editar/:email",name:"editar",component:p}]}),h=a("1TRy"),g=a.n(h);o.a.use(g.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},QduI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d0333541f440babfb3d8.js.map