(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/GlD":function(t,a,s){"use strict";var n=s("w48C"),i=s.n(n),e=s("cWtb"),o={data:function(){return{transaction:{label:null,date:null,amount:0},flatPickrConfig:{enableTime:!0,altInput:!0,altFormat:"j M, Y \\a\\t G:i K"},money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},components:{FlatPickr:i.a,Money:e.Money},methods:{submitTransaction:function(){var t=this;this.$http.post("transactions",this.transaction).then((function(a){var s=a.data;t.transaction={label:null,date:null,amount:0},t.$emit("transaction-added",{data:s.transaction})}))}}},r=s("KHd+"),l=Object(r.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"modal-add-transaction","uk-modal":"container: .balance-menu"}},[s("div",{staticClass:"uk-modal-dialog"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submitTransaction(a)}}},[t._m(0),t._v(" "),s("div",{staticClass:"uk-modal-body"},[s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"label-add"}},[t._v("Label")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.label,expression:"transaction.label"}],staticClass:"uk-input uk-form-large",attrs:{type:"text",id:"label-add"},domProps:{value:t.transaction.label},on:{input:function(a){a.target.composing||t.$set(t.transaction,"label",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"date-add"}},[t._v("Date")]),t._v(" "),s("flat-pickr",{staticClass:"uk-input uk-form-large",attrs:{config:t.flatPickrConfig,id:"date-add",required:""},model:{value:t.transaction.date,callback:function(a){t.$set(t.transaction,"date",a)},expression:"transaction.date"}})],1),t._v(" "),s("div",{staticClass:"uk-width-1-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"amount-add"}},[t._v("Amount")]),t._v(" "),s("money",t._b({staticClass:"uk-input uk-form-large",attrs:{id:"amount-add",required:""},model:{value:t.transaction.amount,callback:function(a){t.$set(t.transaction,"amount",a)},expression:"transaction.amount"}},"money",t.money,!1))],1)])]),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-header"},[a("h6",{staticClass:"uk-modal-title"},[this._v("Add Balance Entry")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-modal-footer"},[a("div",{staticClass:"uk-button-group"},[a("button",{staticClass:"uk-button uk-button-large uk-button-light-blue uk-modal-close",attrs:{type:"button"}},[this._v("Cancel")]),this._v(" "),a("button",{staticClass:"uk-button uk-button-large uk-button-primary",attrs:{type:"submit"}},[this._v("Save Entry")])])])}],!1,null,null,null);a.a=l.exports},"/JSx":function(t,a,s){"use strict";(function(t){var n=s("/GlD"),i=s("4B4S");a.a={props:["totalBalance"],components:{AddTransaction:n.a},mixins:[i.a],methods:{addTransaction:function(){t.modal("#modal-add-transaction").show()},closeModal:function(){t.modal("#modal-add-transaction").hide()}}}}).call(this,s("gyNX"))},0:function(t,a,s){s("bUC5"),t.exports=s("zWCp")},"4B4S":function(t,a,s){"use strict";a.a={methods:{prettyFormat:function(t){var a=Math.sign(t),s=0===a||1===a,n=parseFloat(t.toString().replace("-","")).toFixed(2).split("."),i=n[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e="<span>".concat(n[1],"</span>");return{value:"$".concat(i,".").concat(e),sign:s?"positive":"negative"}},plainFormat:function(t){return parseFloat(t).toFixed(2)}}}},"77x1":function(t,a,s){"use strict";s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return o}));var n=s("wd/R"),i=s.n(n);function e(t){var a=i()(),s=i()().subtract(1,"day"),n=i()(t);return n.isSame(a,"day")?"Today":n.isSame(s,"day")?"Yesterday":n.format("ddd, D MMMM")}function o(t){var a=i()(t).local();return a.format("D MMMM, YYYY")+" at "+a.format("h:mm A")}},"9Wh1":function(t,a,s){"use strict";(function(t,a){var n=s("Jjxz"),i=s.n(n),e=s("vDqi"),o=s.n(e),r=s("XuX8"),l=s.n(r),c=s("L2JU"),u=s("p/7L"),d=s.n(u),m=s("77x1");try{window.$=window.jQuery=t}catch(t){}var v="".concat(location.protocol,"//").concat(location.hostname);location.port&&(v=v+":"+location.port),o.a.defaults.baseURL="".concat(v,"/api"),l.a.use(c.a),l.a.use(d.a,o.a),a.use(i.a),l.a.filter("groupDate",m.a),l.a.filter("transactionDate",m.b)}).call(this,s("EVdn"),s("gyNX"))},RnhZ:function(t,a,s){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function i(t){var a=e(t);return s(a)}function e(t){if(!s.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=e,t.exports=i,i.id="RnhZ"},bUC5:function(t,a,s){"use strict";s.r(a);s("9Wh1");var n=new(s("L2JU").a.Store)({state:{},getters:{},mutations:{},actions:{}}),i=s("XuX8"),e=s.n(i),o={},r=s("KHd+"),l=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-left"},[a("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[a("img",{attrs:{src:"/img/logo.svg",alt:"YourBalance"}}),this._v(" "),a("span",[this._v("Your")]),this._v("Balance\n    ")])]),this._v(" "),a("div",{staticClass:"uk-navbar-right"},[a("div",{staticClass:"uk-navbar-item"},[a("a",{staticClass:"notifications",attrs:{href:"#"}},[a("img",{attrs:{src:"/img/alarm.svg",alt:"Notifications"}})]),this._v(" "),a("a",{staticClass:"user",attrs:{href:"#"}},[a("img",{staticClass:"uk-img-rounded",attrs:{src:"/img/avatar.png",alt:"User Name"}}),this._v(" "),a("span",[this._v("Molly Green")])])])])])}],!1,null,null,null).exports,c=s("/JSx").a,u=Object(r.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"balance-menu uk-background-secondary uk-section-small"},[s("div",{staticClass:"uk-container"},[s("div",{staticClass:"uk-flex-middle",attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-expand@s uk-width-1-1 balance-actions"},[s("div",{staticClass:"uk-flex uk-flex-middle"},[s("p",[t._v("Your Balance")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary add-button",on:{click:t.addTransaction}},[s("img",{attrs:{src:"/img/add.svg"}}),t._v("\n            Add Entry\n          ")]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"uk-width-auto@s uk-width-1-1 balance-details"},[s("small",[t._v("TOTAL BALANCE")]),t._v(" "),s("p",{staticClass:"balance",class:t.prettyFormat(t.totalBalance).sign,domProps:{innerHTML:t._s(t.prettyFormat(t.totalBalance).value)}})])])]),t._v(" "),s("add-transaction",t._g({on:{"transaction-added":t.closeModal}},t.$listeners))],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"uk-button uk-button-primary import-button"},[a("img",{attrs:{src:"/img/import.svg"}}),this._v("\n            Import CSV\n          ")])}],!1,null,null,null).exports,d=s("w48C"),m=s.n(d),v=s("cWtb"),p=s("4B4S"),k={data:function(){return{edit:!1,flatPickrConfig:{enableTime:!0,altInput:!0,altFormat:"j M, Y \\a\\t G:i K"},money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},mixins:[p.a],props:{transaction:{type:Object}},components:{FlatPickr:m.a,Money:v.Money},methods:{editTransaction:function(){this.edit=!this.edit},updateTransaction:function(){var t=this;this.$http.put("transactions/".concat(this.transaction.id),this.transaction).then((function(a){var s=a.data;t.editTransaction(),t.$emit("transaction-edited",{transaction:s.transaction})}))},deleteTransaction:function(){var t=this;this.$http.delete("transactions/".concat(this.transaction.id)).then((function(a){var s=a.data;return t.$emit("transaction-deleted",{transaction:s.transaction})}))}}},b=Object(r.a)(k,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"transaction uk-border-rounded uk-margin-bottom"},[s("section",{staticClass:"transaction--details"},[s("div",{staticClass:"uk-flex-middle uk-flex-between",attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-expand@s uk-width-1-1"},[s("p",{staticClass:"name",domProps:{textContent:t._s(t.transaction.label)}}),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(t._f("transactionDate")(t.transaction.date)))])]),t._v(" "),s("div",{staticClass:"uk-width-small@s uk-width-1-1 invisible"},[s("ul",{staticClass:"uk-subnav"},[s("li",[s("a",{on:{click:t.editTransaction}},[t._v("EDIT")])]),t._v(" "),s("li",[s("a",{on:{click:t.deleteTransaction}},[t._v("DELETE")])])])]),t._v(" "),s("div",{staticClass:"uk-width-auto@s uk-width-1-1"},[s("span",{staticClass:"amount",class:t.prettyFormat(t.transaction.amount).sign,domProps:{innerHTML:t._s(t.prettyFormat(t.transaction.amount).value)}})])])]),t._v(" "),t.edit?s("section",{staticClass:"uk-section uk-section-small transaction--edit"},[s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"label-add"}},[t._v("Label")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.label,expression:"transaction.label"}],staticClass:"uk-input uk-form-large",attrs:{type:"text",id:"label-add"},domProps:{value:t.transaction.label},on:{input:function(a){a.target.composing||t.$set(t.transaction,"label",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"uk-width-2-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"date-add"}},[t._v("Date")]),t._v(" "),s("flat-pickr",{staticClass:"uk-input uk-form-large",attrs:{config:t.flatPickrConfig,id:"date-add",required:""},model:{value:t.transaction.date,callback:function(a){t.$set(t.transaction,"date",a)},expression:"transaction.date"}})],1),t._v(" "),s("div",{staticClass:"uk-width-1-5"},[s("label",{staticClass:"uk-form-label",attrs:{for:"amount-add"}},[t._v("Amount")]),t._v(" "),s("money",t._b({staticClass:"uk-input uk-form-large",attrs:{id:"amount-add",required:""},model:{value:t.transaction.amount,callback:function(a){t.$set(t.transaction,"amount",a)},expression:"transaction.amount"}},"money",t.money,!1))],1)])]):t._e(),t._v(" "),t.edit?s("section",{staticClass:"uk-section uk-section-small transaction--submit"},[s("div",{staticClass:"uk-flex uk-flex-right"},[s("button",{staticClass:"uk-button uk-button-large uk-button-light-blue",on:{click:t.editTransaction}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-large uk-button-primary",on:{click:t.updateTransaction}},[t._v("Update Entry")])])]):t._e()])}),[],!1,null,null,null).exports,f={data:function(){return{groupValue:[]}},props:["pagination","groups"],mixins:[p.a],computed:{onFirstPage:function(){return 1===this.pagination.current_page},hasMorePages:function(){return this.pagination.current_page<this.pagination.last_page}},components:{Transaction:b},methods:{paginate:function(t){this.$emit("paginate-list",{page:t})}}},g={data:function(){return{totalBalance:0,pagination:[],groups:[]}},components:{NavBar:l,BalanceMenu:u,TransactionList:Object(r.a)(f,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"transaction-list uk-section"},[s("div",{staticClass:"uk-container"},[t.groups.length?s("div",{staticClass:"uk-child-width-1-1",attrs:{"uk-grid":""}},[t._l(t.groups,(function(a,n){return s("section",{key:n,staticClass:"transaction-group"},[s("header",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-margin-bottom"},[s("span",{staticClass:"date"},[t._v("\n            "+t._s(t._f("groupDate")(a.date))+"\n          ")]),t._v(" "),s("span",{staticClass:"balance",class:t.prettyFormat(a.balance).sign,domProps:{innerHTML:t._s(t.prettyFormat(a.balance).value)}})]),t._v(" "),s("section",t._l(a.transactions,(function(a){return s("transaction",t._g({key:a.id,attrs:{transaction:a}},t.$listeners))})),1)])})),t._v(" "),t.pagination.last_page>1?s("section",{staticClass:"uk-flex uk-flex-center"},[s("button",{staticClass:"uk-button uk-button-small uk-button-default",attrs:{disabled:t.onFirstPage},on:{click:function(a){return t.paginate(t.pagination.current_page-1)}}},[s("span",{attrs:{"uk-icon":"chevron-left"}}),t._v("Prev\n        ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-small uk-button-default",attrs:{disabled:""}},[t._v("Page "+t._s(t.pagination.current_page))]),t._v(" "),s("button",{staticClass:"uk-button uk-button-small uk-button-default",attrs:{disabled:!t.hasMorePages},on:{click:function(a){return t.paginate(t.pagination.current_page+1)}}},[t._v("\n          Next"),s("span",{attrs:{"uk-icon":"chevron-right"}})])]):t._e()],2):s("div",{staticClass:"uk-child-width-1-1",attrs:{"uk-grid":""}},[t._m(0)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"uk-flex-center uk-child-width-1-2",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-alert-primary uk-border-radius uk-text-center",attrs:{"uk-alert":""}},[a("p",[this._v("No Entries Found")])])])])}],!1,null,null,null).exports},methods:{getTotalBalance:function(){var t=this;this.$http.get("dashboard").then((function(a){var s=a.data;t.totalBalance=parseFloat(s.total_balance)}))},getTransactions:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("transactions",{params:{page:a}}).then((function(a){var s=a.data;t.pagination=s.pagination,t.groups=s.groups}))},getDashboardData:function(){this.getTotalBalance(),this.getTransactions()},paginateList:function(t){this.getTransactions(t.page)}},created:function(){this.getDashboardData()}},h=Object(r.a)(g,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-bar"),t._v(" "),s("balance-menu",{attrs:{"total-balance":t.totalBalance},on:{"transaction-added":t.getDashboardData}}),t._v(" "),s("transaction-list",{attrs:{pagination:t.pagination,groups:t.groups},on:{"transaction-deleted":t.getDashboardData,"transaction-edited":t.getDashboardData,"paginate-list":t.paginateList}})],1)}),[],!1,null,null,null).exports;new e.a({store:n,render:function(t){return t(h)}}).$mount("#app")},zWCp:function(t,a){}},[[0,1,2]]]);
//# sourceMappingURL=app.js.map