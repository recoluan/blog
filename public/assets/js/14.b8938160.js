(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,e,a){"use strict";a.r(e);var n=a(1),i=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("blockquote",[a("p",[t._v("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"),a("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("http-proxy-middleware")]),a("OutboundLink")],1),t._v("，我们只需要在"),a("code",[t._v("config/index.js")]),t._v("中的proxyTable 配置即可。")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("个人博客："),a("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("午后南杂")]),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果接口是"),e("code",[this._v("www.aaa.com/get/getList")]),this._v("，那么有两种配置方案：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("方法一")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-ecmascript 6 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("proxyTable: {\n  '/api': {\n    target: 'www.aaa.com',\n    pathRewrite: {\n      '^/api': '/get'\n    }\n  }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这个时候我们请求"),e("code",[this._v("/api/getList")]),this._v("就是请求"),e("code",[this._v("www.aaa.com/get/getList")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("方法二")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-ecmascript 6 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("proxyTable: {\n  '/api': {\n    target: 'www.aaa.com',\n    pathRewrite: {\n      '^/api': ''\n    }\n  }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这个时候我们请求"),e("code",[this._v("/api/get/getList")]),this._v("就是请求"),e("code",[this._v("www.aaa.com/get/getList")])])}],!1,null,null,null);i.options.__file="122801.md";e.default=i.exports}}]);