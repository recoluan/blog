(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("说明:其实第一步的引入并不是唯一的办法,还可以通过js创建script的方式,我认为上面的方法是最简洁的.")]),t._v(" "),s("p",[t._v("个人博客："),s("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("午后南杂")]),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("在使用vue-cli进行项目构建时,有时是需要引用外部cdn资源的,生产环境中可以直接在index.html的头部引用,但是编译时会报错,因为脚手架无法识别这个外部资源.下面以引用腾讯地图api为例,介绍如何正确引用外部cdn资源.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("在index.html头部引用"),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://map.qq.com/api/js?v=2.exp&key=yourkey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("修改webpack.base.cong.js"),s("div",{staticClass:"language-ecmascript 6 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 因为腾讯地图的api都放在qq变量下输出的,所以配置的value应该是'qq'\nmodule.exports = {\n  externals: {\n    'qq': 'qq'\n  }\n}\n")])])])]),t._v(" "),s("li",[t._v("引用"),s("div",{staticClass:"language-ecmascript 6 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import qq from 'qq'\n")])])])])])}],!1,null,null,null);n.options.__file="010101.md";a.default=n.exports}}]);