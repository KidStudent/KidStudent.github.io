import{_ as n,o as s,c as a,e}from"./app.9b5e849f.js";const t="/images/guide/theme/dataskin-create.png",p={},c=e(`<h1 id="换肤" tabindex="-1"><a class="header-anchor" href="#换肤" aria-hidden="true">#</a> 换肤</h1><p>换肤是基于 <code>scss</code> 实现的，通过 <code>documentElement</code> 中的 <code>data-skin</code> 来切换不同的主题</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
├──  theme # 存储皮肤的文件夹
│      ├── index.scss # 引入皮肤以及全局公用变量
│      ├── dark.scss # 深色系皮肤
│      ├── light.scss # 浅色系皮肤
│      └── ...
└── handle.scss # 用来处理换肤

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handle-scss-如何处理" tabindex="-1"><a class="header-anchor" href="#handle-scss-如何处理" aria-hidden="true">#</a> handle.scss 如何处理</h3><p>通过使用 <code>scss</code> 的语法 <code>@mixin</code> 和 <code>@function</code> 完成 css 的处理</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/**
*   在_themes.scss里面定义好自己需要的东西在该文件夹下面进行遍历和定义
**/</span>
<span class="token keyword">@import</span> <span class="token string">&#39;./themes/index.scss&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//遍历主题map</span>
<span class="token keyword">@mixin</span> <span class="token selector">themeify </span><span class="token punctuation">{</span>
  <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$theme-name</span>, <span class="token variable">$theme-map</span> in <span class="token variable">$themes</span> </span><span class="token punctuation">{</span>
    <span class="token comment">//!global 把局部变量强升为全局变量</span>
    <span class="token property"><span class="token variable">$theme-map</span></span><span class="token punctuation">:</span> <span class="token variable">$theme-map</span> !global<span class="token punctuation">;</span>
    <span class="token comment">//判断html的data-skin的属性值  #{}是sass的插值表达式</span>
    <span class="token comment">//&amp; sass嵌套里的父容器标识   @content是混合器插槽，像vue的slot</span>
    <span class="token selector">[data-skin=&#39;<span class="token variable">#{$theme-name}</span>&#39;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
      <span class="token keyword">@content</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取background-color背景颜色</span>
<span class="token keyword">@mixin</span> <span class="token function">background</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token selector">themeify </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">themed</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统中是如何使用皮肤" tabindex="-1"><a class="header-anchor" href="#系统中是如何使用皮肤" aria-hidden="true">#</a> 系统中是如何使用皮肤</h2><h3 id="在-document-中创建皮肤变量" tabindex="-1"><a class="header-anchor" href="#在-document-中创建皮肤变量" aria-hidden="true">#</a> 在 document 中创建皮肤变量</h3><p>在 <code>App.vue</code> 中</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//  获取localStorage中存进去的type</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token doc-comment comment">/**
   *  判断 localStorage 中的 type 是否为空，如果为空的话，就给默认的颜色（页面初始化的颜色），如
   *  果不为空的话就将对应获取到的值给到 data-skin
   **/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>
      <span class="token string">&#39;data-skin&#39;</span><span class="token punctuation">,</span>
      localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-skin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时在 dom 中可以看到如下图所示</p><p><img src="`+t+`" alt="dataskin-create"></p><h3 id="全局引入皮肤变量" tabindex="-1"><a class="header-anchor" href="#全局引入皮肤变量" aria-hidden="true">#</a> 全局引入皮肤变量</h3><p>在 <code>vite.config.js</code> 中 通过 css 的配置使皮肤变量全局可用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &#39;@/style/handle.scss&#39;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何创建一个新的皮肤" tabindex="-1"><a class="header-anchor" href="#如何创建一个新的皮肤" aria-hidden="true">#</a> 如何创建一个新的皮肤</h2><p>在 theme 中创建一个需要的皮肤文件，例如 <code>dark.scss</code>，之后在 <code>index.scss</code> 中引入该文件并且在 <code>index.scss</code> 中的 <code>$themes</code> 中使用该变量就完成了该皮肤在系统中的配置</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&#39;./dark.scss&#39;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$themes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> <span class="token variable">$dark</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dark-scss-填写" tabindex="-1"><a class="header-anchor" href="#dark-scss-填写" aria-hidden="true">#</a> dark.scss 填写</h3><p>声明各个颜色的变量 <br><code>命名规范： 功能名称(btnPrimary) + 样式名称(Bg) + 样式状态(Hover) 采用驼峰式命名</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$dark</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">btnPrimaryBg</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>180deg<span class="token punctuation">,</span> #2b84e2 0%<span class="token punctuation">,</span> #083a78 100%<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-scss-中皮肤变量的使用" tabindex="-1"><a class="header-anchor" href="#在-scss-中皮肤变量的使用" aria-hidden="true">#</a> 在 scss 中皮肤变量的使用</h3><p>这里以更改 <code>iview</code> 中的组件 <code>button</code> 为例</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.ivu-btn-primary </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 22px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">background</span><span class="token punctuation">(</span><span class="token string">&#39;btnPrimaryBg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[c];function o(l,u){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};
