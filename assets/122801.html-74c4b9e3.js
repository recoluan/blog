import{_ as s,r as l,o as t,c,a as e,b as i,d as a,f as r,e as d}from"./app-577c4561.js";const o={},m={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},u=e("strong",null,"http-proxy-middleware",-1),v=e("code",null,"config/index.js",-1),p=d(`<p>如果接口是<code>www.aaa.com/get/getList</code>，那么有两种配置方案：</p><ul><li>方法一</li></ul><div class="language-ecmascript line-numbers-mode" data-ext="ecmascript"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;/get&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/getList</code>就是请求<code>www.aaa.com/get/getList</code></p><ul><li>方法二</li></ul><div class="language-ecmascript line-numbers-mode" data-ext="ecmascript"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/get/getList</code>就是请求<code>www.aaa.com/get/getList</code></p>`,7),b={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"午后南杂",-1);function g(h,w){const n=l("ExternalLinkIcon");return t(),c("div",null,[e("blockquote",null,[e("p",null,[i("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"),e("a",m,[u,a(n)]),i("，我们只需要在"),v,i("中的proxyTable 配置即可。")])]),r(" more "),p,e("p",null,[i("个人博客："),e("a",b,[_,a(n)])])])}const f=s(o,[["render",g],["__file","122801.html.vue"]]);export{f as default};
