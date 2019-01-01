(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{226:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("首先了解一下GitLab Pages运行的原理。与GitHub不同的是，GitLab需要上传一个 "),e("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，同时生成的项目文件必须要到 "),e("code",[t._v("/public")]),t._v(" 目录中，见"),e("a",{attrs:{href:"https://about.gitlab.com/features/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),e("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("你可以将vuepress安装到全局，也可以将其安装到项目中，我建议选择第二种，后面介绍一下原因")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._m(8),t._v(" "),e("p",[t._v("其实到这里只是简单的启动了一个vuepress项目，但是你还应该花点时间去仔细阅读一下官网的主题配置，去配置你自己的各种导航，并注意下的页面的设置（主要是主页）。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("另外vuepress适合撸项目文档，至于你要用它来写博客，它并没有分类、标签这样的配置，需要你去修改主题，有两种方式：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),e("p",[t._v("这儿和开发一个正常的 Vue 应用程序是一样的。完全取决于你如何组织你的主题。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),e("p",[t._v("郑重推荐 "),e("strong",[t._v("vuepress-theme-reco")]),t._v(" ，查看 "),e("a",{attrs:{href:"http://recoluan.gitlab.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("展示"),e("OutboundLink")],1),t._v(" 既没有脱离默认主题的简洁，又增加了分类、分页、标签等功能。")]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("个人博客："),e("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("午后南杂")]),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("最近在给公司架构一个新的项目，要求同时写出一个完整的文档，由于正好在浏览vue的GitHub浏览相关项目时，看到了 "),s("code",[this._v("Vuepress")]),this._v("，所以尝试了一把，所以把开发中的积累写下来。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gitlab-pages-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-原理","aria-hidden":"true"}},[this._v("#")]),this._v(" GitLab Pages 原理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("## .gitlab-ci.yml\n\nimage: node:9.11.1\n\npages:\n cache:\n   paths:\n   - node_modules/\n\n script:\n - npm install\n - npm run docs:build\n artifacts:\n   paths:\n   - public\n only:\n - master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuepress")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 创建并进入工程")]),this._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" project-name\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" project-name\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("创建"),s("code",[this._v("package.json")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.14.2"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\nyarn "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 npm install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并进入docs目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个 markdown 文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.md\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动项目")]),t._v("\nyarn docs:dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 npm run docs:dev")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译项目至 '/project-name/public' 中")]),t._v("\nyarn docs:dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 npm run docs:dev")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"遇到的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到的坑","aria-hidden":"true"}},[this._v("#")]),this._v(" 遇到的坑")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("valine 的引用必须放到mounted中，否则无法编译，报错，window is undefined")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"修改主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("将主题文件放到 "),s("code",[this._v("project-name/docs/.vuepress/theme")]),this._v(" 中，然后创建一个 "),s("code",[this._v("Layout.vue")]),this._v(" 文件：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ theme\n      └─ Layout.vue\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("从依赖中引用主题，要使用 npm 依赖项的主题，请在 "),s("code",[this._v(".vuepress/config.js")]),this._v(" 中提供一个 theme 选项：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("module.exports = {\n  theme: 'reco'\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 安装")]),this._v("\nyarn add vuepress-theme-reco "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# npm install vuepress-theme-reco")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"持续更新中。。。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持续更新中。。。","aria-hidden":"true"}},[this._v("#")]),this._v(" 持续更新中。。。")])}],!1,null,null,null);n.options.__file="090901.md";s.default=n.exports}}]);