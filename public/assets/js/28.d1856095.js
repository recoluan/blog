(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{227:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("img",{staticStyle:{margin:"auto",width:"100%"},attrs:{src:"https://upload-images.jianshu.io/upload_images/4660406-6f17422b25cb55fe.jpg"}}),t._v(" "),t._m(3),t._v(" "),s("img",{staticStyle:{margin:"auto",width:"100%"},attrs:{src:"https://upload-images.jianshu.io/upload_images/4660406-06860ca91a538f3c.jpg"}}),t._v(" "),t._m(4),t._v(" "),s("img",{staticStyle:{margin:"auto",width:"100%"},attrs:{src:"https://upload-images.jianshu.io/upload_images/4660406-96940c2bc2472f12.jpg"}}),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),s("p",[s("strong",[t._v("如果觉得还可以，欢迎给个 "),s("a",{attrs:{href:"https://github.com/recoluan/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("个人博客："),s("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("午后南杂")]),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("ol",[e("li",[this._v("这是一个vuepress主题，目的是增加博客所需要的分类、标签墙、分页、评论等\b功能；"),e("br")]),this._v(" "),e("li",[this._v("主题本身追求极简，是在vuepress默认主题的基础上进行修改的。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"效果预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果预览","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果预览")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"首页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首页","aria-hidden":"true"}},[this._v("#")]),this._v(" 首页")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 分类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"标签墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签墙","aria-hidden":"true"}},[this._v("#")]),this._v(" 标签墙")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装和使用")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-theme-reco -dev--save\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n\nyarn add vuepress-theme-reco\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 修改 /docs/.vuepress/config.js\n\nmodule.exports = {\n  theme: 'reco'\n}\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"增加分类功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加分类功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 增加分类功能")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("假如想增加一个 "),e("code",[this._v("前端")]),this._v(" 和 "),e("code",[this._v("后端")]),this._v(" 分类，需要进行以下几步操作：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("在顶部导航添加一个分类的下拉按钮")]),t._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 修改 /docs/.vuepress/config.js\n\nmodule.exports = {\n  theme: 'reco',\n  themeConfig: {\n    nav: [\n      { text: '分类', \n        items: [\n          { text: '前端', link: '/categories/frontEnd' },\n          { text: '后端', link: '/categories/backEnd' }\n        ]\n      }\n    ]\n  }  \n}  \n")])])])]),t._v(" "),s("li",[s("p",[t._v("添加前端和后端的分类所需要的文件")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("/docs/categories/frontEnd.md")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("--- \ntitle: 前端  \nisCategories: true  \nsidebar: false  \n---\n\n## 前端\n")])])]),s("p",[s("strong",[s("code",[t._v("/docs/categories/backEnd.md")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\ntitle: 后端\nisCategories: true\nsidebar: false\n---\n\n## 后端\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("为什么\b设置sidebar: false，因为启用分类功能，那就跟自定义侧边栏功能有些冲突了，所以全局开启了自动生成侧边栏功能，然后在这种不需要侧标兰的地方关闭")])])]),t._v(" "),s("li",[s("p",[t._v("写文章时添加分类")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\ntitle: 【vue】跨域解决方案之proxyTable  \ndate: 2017-12-28 23:39:45\ncategories: frontEnd\n---\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"添加标签云功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加标签云功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加标签云功能")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("在顶部导航添加一个按钮")]),t._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 修改 /docs/.vuepress/config.js\n\nmodule.exports = {\n  theme: 'reco',\n  themeConfig: {\n    nav: [\n      { text: 'Tags', link: '/tags/' }\n    ]\n  }    \n}  \n")])])])]),t._v(" "),s("li",[s("p",[t._v("添加所需要的文件")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("/docs/tags/README.md")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\nisTags: true\nsidebar: false\n---\n\n## 标签墙\n")])])])]),t._v(" "),s("li",[s("p",[t._v("写文章时添加标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\ntitle: 【vue】跨域解决方案之proxyTable  \ndate: 2017-12-28 23:39:45  \ntags:\n- vue\n- webpack\n---\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"评论功能-valine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论功能-valine","aria-hidden":"true"}},[this._v("#")]),this._v(" 评论功能(valine)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("主题内置valine评论功能，如果想开启此功能，\b仅需配置一下 "),e("code",[this._v("config.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javscript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 修改 /docs/.vuepress/config.js\n\nmodule.exports = {\n  theme: 'reco',\n  themeConfig: {\n    // valine配置\n    valineConfig: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }  \n}  \n")])])])}],!1,null,null,null);n.options.__file="100801.md";e.default=n.exports}}]);