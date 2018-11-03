(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{189:function(s,t,a){"use strict";a.r(t);var n=a(0),c=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("项目中有这么一个需求，就是按需启动mock功能。考虑到mock只是在特定情况下，所以考虑通过 "),a("code",[s._v("cross-env")]),s._v(" 来处理。")])]),s._v(" "),a("h3",{attrs:{id:"cross-env修改生产环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-env修改生产环境变量","aria-hidden":"true"}},[s._v("#")]),s._v(" cross-env修改生产环境变量")]),s._v(" "),a("ol",[a("li",[s._v("我想要的最终效果是npm run dev:mock 来启动mock，所以先安装 cross-env")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save cross-env\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("找到 "),a("code",[s._v("/config/dev.evn.js")]),s._v(" ，添加MOCK变量")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token constant"}},[s._v("MOCK")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token constant"}},[s._v("MOCK")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'false'")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("在package.json中配置变量")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"dev:mock"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"cross-env MOCK=true webpack --config build/webpack.config.js"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("使用变量")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token constant"}},[s._v("MOCK")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'true'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  fetchMock"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("post")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'https://xxx/user/login'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loginAPI"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("启动MOCK")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev:mock\n")])])])])}],!1,null,null,null);c.options.__file="110301.md";t.default=c.exports}}]);