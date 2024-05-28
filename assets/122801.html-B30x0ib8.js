import{_ as n,r as c,o as r,c as l,a as e,b as t,d as a,e as i}from"./app-01lAtpvS.js";const s={},p={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},d=e("strong",null,"http-proxy-middleware",-1),m=e("code",null,"config/index.js",-1),g=i(`<p>如果接口是<code>www.aaa.com/get/getList</code>，那么有两种配置方案：</p><ul><li>方法一</li></ul><pre><code class="language-ecmascript">proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;/get&#39;
    }
  }
}
</code></pre><p>这个时候我们请求<code>/api/getList</code>就是请求<code>www.aaa.com/get/getList</code></p><ul><li>方法二</li></ul><pre><code class="language-ecmascript">proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;&#39;
    }
  }
}
</code></pre><p>这个时候我们请求<code>/api/get/getList</code>就是请求<code>www.aaa.com/get/getList</code></p>`,7),_={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},u=e("strong",null,"午后南杂",-1);function h(w,f){const o=c("ExternalLinkIcon");return r(),l("div",null,[e("blockquote",null,[e("p",null,[t("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"),e("a",p,[d,a(o)]),t("，我们只需要在"),m,t("中的proxyTable 配置即可。")])]),g,e("p",null,[t("个人博客："),e("a",_,[u,a(o)])])])}const x=n(s,[["render",h],["__file","122801.html.vue"]]),T=JSON.parse('{"path":"/blogs/frontEnd/2017/122801.html","title":"跨域解决方案之proxyTable","lang":"zh-CN","frontmatter":{"title":"跨域解决方案之proxyTable","date":"2017-12-28T00:00:00.000Z","tags":["vue","webpack"],"categories":["frontEnd"]},"headers":[],"git":{"createdTime":1716921053000,"updatedTime":1716921053000,"contributors":[{"name":"Reco","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/122801.md"}');export{x as comp,T as data};
