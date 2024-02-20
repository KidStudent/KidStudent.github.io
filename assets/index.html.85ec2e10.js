import{_ as a,o as s,c as n,e as t}from"./app.e1e31e76.js";const e="/images/sdk/xiaozhi/deployment.png",p={},c=t(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="静态页面" tabindex="-1"><a class="header-anchor" href="#静态页面" aria-hidden="true">#</a> 静态页面</h2><p>一、创建一个 <code>index.html</code>，引入打包后 <code>dist</code> 目录中的 <code>xiaozhi.css</code> 和 <code>xiaozhi.umd.cjs</code></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>dist</code> 目录中的 <code>xiaozhi.js</code> 是 <code>js</code> 的 <code>module</code> 模式下运行的，<code>xiaozhi.umd.cjs</code> 是在正常静态引入 <code>js</code> 运行的</p><p><code>xiaozhi.umd.cjs</code> 可以手动更名为 <code>xiaozhi.js</code></p></div><details class="custom-container details"><summary>点击查看</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./xiaozhi.css?v=10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>小智<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./xiaozhi.js?v=10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>二、启动一个 <code>nginx</code> 服务器，将第一步中创建的 <code>index.html</code> 映射到对应的地址上，并且放入 <code>dist</code> 目录中的文件，如下图：</p><p><img src="`+e+'" alt="xiaozhi-deployment"></p><h2 id="其他系统引入" tabindex="-1"><a class="header-anchor" href="#其他系统引入" aria-hidden="true">#</a> 其他系统引入</h2><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h3><p>在 <code>index.html</code> 文件中引入 <code>dist</code> 目录中的 <code>xiaozhi.css</code> 和 <code>xiaozhi.umd.cjs</code> 即可</p>',10),o=[c];function l(i,u){return s(),n("div",null,o)}const r=a(p,[["render",l],["__file","index.html.vue"]]);export{r as default};
