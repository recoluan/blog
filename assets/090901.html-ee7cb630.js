import{_ as t,r as l,o as c,c as o,f as d,a as n,b as s,d as a,e as i}from"./app-577c4561.js";const p={},r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("最近在给公司架构一个新的项目，要求同时写出一个完整的文档，由于正好在浏览vue的GitHub浏览相关项目时，看到了 "),n("code",null,"Vuepress"),s("，所以尝试了一把，所以把开发中的积累写下来。")])],-1),u=n("h2",{id:"gitlab-pages-原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-pages-原理","aria-hidden":"true"},"#"),s(" GitLab Pages 原理")],-1),v=n("code",null,".gitlab-ci.yml",-1),m=n("code",null,"/public",-1),b={href:"https://about.gitlab.com/features/pages/",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## .gitlab-ci.yml</span>

<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>9.11.1

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
 <span class="token key atrule">cache</span><span class="token punctuation">:</span>
   <span class="token key atrule">paths</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> node_modules/

 <span class="token key atrule">script</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> npm install
 <span class="token punctuation">-</span> npm run docs<span class="token punctuation">:</span>build
 <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
   <span class="token key atrule">paths</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> public
 <span class="token key atrule">only</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> Vuepress</h2><p>你可以将vuepress安装到全局，也可以将其安装到项目中，我建议选择第二种，后面介绍一下原因</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建并进入工程</span>

<span class="token function">mkdir</span> project-name
<span class="token builtin class-name">cd</span> project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code> package.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.14.2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">yarn</span> <span class="token function">install</span> <span class="token comment"># 或 npm install</span>

<span class="token comment"># 创建并进入docs目录</span>
<span class="token function">mkdir</span> docs
<span class="token builtin class-name">cd</span> docs

<span class="token comment"># 创建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 启动项目</span>
<span class="token function">yarn</span> docs:dev <span class="token comment"># 或 npm run docs:dev</span>

<span class="token comment"># 编译项目至 &#39;/project-name/public&#39; 中</span>
<span class="token function">yarn</span> docs:dev <span class="token comment"># 或 npm run docs:dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遇到的坑" tabindex="-1"><a class="header-anchor" href="#遇到的坑" aria-hidden="true">#</a> 遇到的坑</h2><p>其实到这里只是简单的启动了一个vuepress项目，但是你还应该花点时间去仔细阅读一下官网的主题配置，去配置你自己的各种导航，并注意下的页面的设置（主要是主页）。</p><ul><li>valine 的引用必须放到mounted中，否则无法编译，报错，window is undefined</li></ul><h2 id="修改主题" tabindex="-1"><a class="header-anchor" href="#修改主题" aria-hidden="true">#</a> 修改主题</h2><p>另外vuepress适合撸项目文档，至于你要用它来写博客，它并没有分类、标签这样的配置，需要你去修改主题，有两种方式：</p><ol><li>将主题文件放到 <code>project-name/docs/.vuepress/theme</code> 中，然后创建一个 <code>Layout.vue</code> 文件：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
└─ .vuepress
   └─ theme
      └─ Layout.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这儿和开发一个正常的 Vue 应用程序是一样的。完全取决于你如何组织你的主题。</p><ol start="2"><li>从依赖中引用主题，要使用 npm 依赖项的主题，请在 <code>.vuepress/config.js</code> 中提供一个 theme 选项：</li></ol><div class="language-javscript line-numbers-mode" data-ext="javscript"><pre class="language-javscript"><code>module.exports = {
  theme: &#39;reco&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),h=n("strong",null,"vuepress-theme-reco",-1),g={href:"http://recoluan.gitlab.io/",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">yarn</span> <span class="token function">add</span> vuepress-theme-reco <span class="token comment"># npm install vuepress-theme-reco</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="持续更新中。。。" tabindex="-1"><a class="header-anchor" href="#持续更新中。。。" aria-hidden="true">#</a> 持续更新中。。。</h4>`,2),f={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"午后南杂",-1);function y(q,j){const e=l("ExternalLinkIcon");return c(),o("div",null,[r,d(" more "),u,n("p",null,[s("首先了解一下GitLab Pages运行的原理。与GitHub不同的是，GitLab需要上传一个 "),v,s(" 的文件，同时生成的项目文件必须要到 "),m,s(" 目录中，见"),n("a",b,[s("详情"),a(e)]),s("。")]),k,n("p",null,[s("郑重推荐 "),h,s(" ，查看 "),n("a",g,[s("展示"),a(e)]),s(" 既没有脱离默认主题的简洁，又增加了分类、分页、标签等功能。")]),_,n("p",null,[s("个人博客："),n("a",f,[x,a(e)])])])}const V=t(p,[["render",y],["__file","090901.html.vue"]]);export{V as default};
