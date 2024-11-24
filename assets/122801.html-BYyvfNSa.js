import{_ as l,c as t,b as n,d as s,e as i,a as r,o as d,r as o}from"./app-C99nLWlX.js";const p={},c={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},m={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"};function u(v,e){const a=o("ExternalLinkIcon");return d(),t("div",null,[n("blockquote",null,[n("p",null,[e[1]||(e[1]=s("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了")),n("a",c,[e[0]||(e[0]=n("strong",null,"http-proxy-middleware",-1)),i(a)]),e[2]||(e[2]=s("，我们只需要在")),e[3]||(e[3]=n("code",null,"config/index.js",-1)),e[4]||(e[4]=s("中的proxyTable 配置即可。"))])]),e[7]||(e[7]=r(`<p>如果接口是<code>www.aaa.com/get/getList</code>，那么有两种配置方案：</p><ul><li>方法一</li></ul><div class="language-ecmascript line-numbers-mode" data-highlighter="prismjs" data-ext="ecmascript" data-title="ecmascript"><pre><code><span class="line">proxyTable: {</span>
<span class="line">  &#39;/api&#39;: {</span>
<span class="line">    target: &#39;www.aaa.com&#39;,</span>
<span class="line">    pathRewrite: {</span>
<span class="line">      &#39;^/api&#39;: &#39;/get&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/getList</code>就是请求<code>www.aaa.com/get/getList</code></p><ul><li>方法二</li></ul><div class="language-ecmascript line-numbers-mode" data-highlighter="prismjs" data-ext="ecmascript" data-title="ecmascript"><pre><code><span class="line">proxyTable: {</span>
<span class="line">  &#39;/api&#39;: {</span>
<span class="line">    target: &#39;www.aaa.com&#39;,</span>
<span class="line">    pathRewrite: {</span>
<span class="line">      &#39;^/api&#39;: &#39;&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/get/getList</code>就是请求<code>www.aaa.com/get/getList</code></p>`,7)),n("p",null,[e[6]||(e[6]=s("个人博客：")),n("a",m,[e[5]||(e[5]=n("strong",null,"午后南杂",-1)),i(a)])])])}const g=l(p,[["render",u],["__file","122801.html.vue"]]),w=JSON.parse('{"path":"/blogs/frontEnd/2017/122801.html","title":"跨域解决方案之proxyTable","lang":"zh-CN","frontmatter":{"title":"跨域解决方案之proxyTable","date":"2017-12-28T00:00:00.000Z","tags":["vue","webpack"],"categories":["frontEnd"]},"headers":[],"git":{"createdTime":1536508429000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/122801.md"}');export{g as comp,w as data};
