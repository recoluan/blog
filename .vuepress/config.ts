import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/head.png',
    // logo: '/hero_black.png',
    author: 'reco_luan',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/recoluan/recoluan.github.io',
    docsBranch: 'gh-pages-source',
    lastUpdatedText: '',
    navbar: [
      {
        text: '首页',
        link: '/'
      }，
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
    }
  }),
  lang: 'zh-CN',
})
