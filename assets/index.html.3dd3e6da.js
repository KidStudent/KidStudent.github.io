import{_ as p,r as i,o as l,c as d,a as s,d as a,w as c,b as n,e}from"./app.e1e31e76.js";const r={},u=e(`<h1 id="新建文档" tabindex="-1"><a class="header-anchor" href="#新建文档" aria-hidden="true">#</a> 新建文档</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>菜单具体链接路由必须以 <code>/</code> 开头和结尾</p></div><h2 id="新建目录" tabindex="-1"><a class="header-anchor" href="#新建目录" aria-hidden="true">#</a> 新建目录</h2><p>在 <code>docs/theme/configs/nav</code> 中的 <code>navbar.js</code> 和 <code>sidebar.js</code> 分别创建目录</p><table><thead><tr><th>属性名</th><th>描述</th></tr></thead><tbody><tr><td>text</td><td>中文名称</td></tr><tr><td>link</td><td>具体链接路由</td></tr></tbody></table><h3 id="一级菜单" tabindex="-1"><a class="header-anchor" href="#一级菜单" aria-hidden="true">#</a> 一级菜单</h3><p>在 <code>navbar.js</code> 中 <code>navbar</code> 数组中添加，举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>在 <code>sidebar.js</code> 中 <code>sidebar</code> 对象中添加，举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;/guide/&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><code>key</code> 为 <code>navbar</code> 数组中声明的 <code>link</code>的值</p><h3 id="子菜单" tabindex="-1"><a class="header-anchor" href="#子菜单" aria-hidden="true">#</a> 子菜单</h3><p>在 <code>navbar.js</code> 中 <code>navbar</code> 数组中找到对应的父级菜单，在 <code>children</code> 中添加如一级菜单中的对象，举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;介绍&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/introduction/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>在 <code>sidebar.js</code> 中 <code>sidebar</code> 对象中找到对应的父级菜单，有两种方式</p><h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h4><p>在其 <code>children</code> 添加如一级菜单中的对象，举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;介绍&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/introduction/&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h4><p>在其 <code>children</code> 中添加 <code>navbar</code> 数组中声明的 <code>link</code>的值，举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/request/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>此两种方法的区别为：</p>`,22),v=s("code",null,"text",-1),m=e(`<p><code>docs/doc-document/introduction/README.md</code></p><details class="custom-container details"><summary>点击查看</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 介绍</span>

组件库 doc 是以 vuepress v2.0.0-beta.53 + vue3 + iview-ui-plus 生成的文档库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),k=s("code",null,"navbar.js",-1),b=s("code",null,"text",-1),h=s("code",null,"README.md",-1),g={href:"https://v2.vuepress.vuejs.org/zh/guide/page.html#frontmatter",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"Frontmatter",-1),_=s("code",null,"title",-1),x=e(`<p><code>docs/doc-document/catalogue/README.md</code></p><details class="custom-container details"><summary>点击查看</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 目录结构
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2022-11-10</span>
<span class="token key atrule">permalink</span><span class="token punctuation">:</span> /doc<span class="token punctuation">-</span>document/catalogue/</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> 目录结构</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="如何展示-demo" tabindex="-1"><a class="header-anchor" href="#如何展示-demo" aria-hidden="true">#</a> 如何展示 demo</h2>`,3),f=s("code",null,"md",-1),j={href:"http://192.168.1.123:10080/platform/qsdi/web-basic-doc/-/blob/packages/theme/configs/plugins.js#L19",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"mdPlugin",-1),E=e(`<p>举个 🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:::demo
label/basic
::：(这里：替换为:，文档中写三个:会有问题)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>其中 <code>:::demo</code> 是已经封装的语法，<code>label/basic</code> 是文件夹 <code>theme/examples</code> 中对应的文件路径</p>`,3);function B(N,R){const t=i("RouterLink"),o=i("ExternalLinkIcon");return l(),d("div",null,[u,s("p",null,[a(t,{to:"/doc-document/create/#%E6%96%B9%E6%B3%95%E4%B8%80"},{default:c(()=>[n("方法一")]),_:1}),n("： 中已经写了中文名和具体路由，所以中文名字将为其声明的 "),v,n("，举个 🌰")]),m,s("p",null,[a(t,{to:"/doc-document/create/#%E6%96%B9%E6%B3%95%E4%BA%8C"},{default:c(()=>[n("方法二")]),_:1}),n("： 由于只写了匹配的文件路径，中文名字将匹配 "),k,n(" 中的 "),b,n("， 如果 "),h,n(" 文件中写了 "),s("a",g,[n("Frontmatter"),a(o)]),n(" 则使用 "),y,n(" 中的 "),_,n(" ，举个 🌰")]),x,s("p",null,[n("已经封装了 "),f,n(" 的命令 在 "),s("a",j,[n("theme/configs/plugins"),a(o)]),n(" 中的 "),w]),E])}const L=p(r,[["render",B],["__file","index.html.vue"]]);export{L as default};
