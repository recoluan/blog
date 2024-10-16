import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  bundler: viteBundler({}),
  theme: recoTheme({
    logo: '/head.png',
    // logo: '/hero_black.png',
    author: 'reco_luan',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/recoluan/recoluan.github.io',
    docsBranch: 'gh-pages-source',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '联系',
        children: [
          { text: 'GitHub', link: 'https://github.com/recoluan' },
        ]
      }
    ],
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
        appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        // notify: true, //
        recordIP: true,
        // hideComments: true
      },
    },
    autoAddCategoryToNavbar: {
      location: 1,
      categoryText: '分类',
      tagText: '标签'
    },
    tip: '提示',
    info: '信息',
    danger: '危险',
    warning: '警告',
    details: '详情',
    tagsText: '标签',
    backToHome: '返回首页',
    categoriesText: '分类',
    catalogTitle: '页面导航',
    selectLanguageText: '语言',
    editLinkText: '编辑当前页面',
    lastUpdatedText: '最后更新时间',
    selectLanguageName: '简体中文',
    notFound: '哇哦，没有发现这个页面！',
  }),
  lang: 'zh-CN',
})
