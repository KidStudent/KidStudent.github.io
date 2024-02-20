import{_ as p,r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app.e1e31e76.js";const l="/images/guide/FAQ/FAQ-error.png",u="/images/guide/FAQ/FAQ-watch-warning.png",r="/images/guide/FAQ/FAQ-router-warning.png",d={},k=t('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="项目出现报错-access-is-denied-windows-常见" tabindex="-1"><a class="header-anchor" href="#项目出现报错-access-is-denied-windows-常见" aria-hidden="true">#</a> 项目出现报错 <code>Access is denied</code>（<code>windows</code> 常见）</h2><p>解决办法：请遵循平台要求，安装对应的 <code>node</code> 和 <code>pnpm</code> 版本 ( <code>node</code> 16 版本及以上、<code>pnpm</code> 6 版本及以上)</p><h2 id="项目首次启动-cmd-中出现错误-cannot-assign-to-xxx-because-it-is-a-constant" tabindex="-1"><a class="header-anchor" href="#项目首次启动-cmd-中出现错误-cannot-assign-to-xxx-because-it-is-a-constant" aria-hidden="true">#</a> 项目首次启动 <code>cmd</code> 中出现错误 Cannot assign to &quot;xxx&quot; because it is a constant</h2><p><img src="'+l+'" alt="FAQ-error"></p><p>声明对象时使用了 <code>const</code> 但是又更改了它的值，使用 <code>let</code> 代替它</p><h2 id="项目警告-invalid-watch-source" tabindex="-1"><a class="header-anchor" href="#项目警告-invalid-watch-source" aria-hidden="true">#</a> 项目警告 <code>Invalid watch source</code></h2><p><img src="'+u+`" alt="FAQ-watch-warning"></p><p><code>vue3</code> watch 函数必须监听的是 <code>getter/effect function, a ref, a reactive object, or an array of these types</code> 举个🌰</p><details class="custom-container details"><summary>点击查看</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">isCollapsed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 错误示例</span>
<span class="token function">watch</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>isCollapsed<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 正确示例</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>isCollapsed<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="vue3-的-script-setup-写法-虽然会依据它的文件名来自动推断组件名称-name-但这也约束了我们的写法-不算灵活-如何解决" tabindex="-1"><a class="header-anchor" href="#vue3-的-script-setup-写法-虽然会依据它的文件名来自动推断组件名称-name-但这也约束了我们的写法-不算灵活-如何解决" aria-hidden="true">#</a> <code>vue3</code> 的 <code>&lt;script setup&gt;</code> 写法，虽然会依据它的文件名来自动推断组件名称 <code>name</code>，但这也约束了我们的写法，不算灵活，如何解决？</h2>`,11),v={href:"https://www.npmjs.com/package/unplugin-vue-define-options",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"setup",-1),b=n("code",null,"name",-1),h=t(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ui-menu&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-语法糖不起作用" tabindex="-1"><a class="header-anchor" href="#ref-语法糖不起作用" aria-hidden="true">#</a> <code>$ref</code> 语法糖不起作用</h2><div class="custom-container warning"><p class="custom-container-title">警告</p><p>Vue 3.4 及以上版本中被移除，最新的前端框架中已弃用</p></div><p>响应性语法糖目前默认是关闭状态，需要你显式选择启用。。</p>`,4),g={href:"https://cn.vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="children-不存在怎么办" tabindex="-1"><a class="header-anchor" href="#children-不存在怎么办" aria-hidden="true">#</a> <code>$children</code> 不存在怎么办？</h2><p>可以在父组件中声明一个数组通过 <code>provide</code> 注入，在子组件中通过 <code>inject</code> 获取后，在 <code>Onmounted</code>中 向数组中添加子组件中的方法或者属性，这样在父组件中就可以获取到子组件中的方法或者属性了。下面是一个🌰</p><p>ui-menu.vue</p><details class="custom-container details"><summary>点击查看</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> menuItemSlot <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;UiMenu&#39;</span><span class="token punctuation">,</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> menuItemSlot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>menu-item.vue</p><details class="custom-container details"><summary>点击查看</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUUID <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/common&#39;</span>

<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu-item&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> active <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> rootMenu <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;UiMenu&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">getUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handleUpdateActiveName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    active <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    active <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> menuItem <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> props<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    handleUpdateActiveName<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  rootMenu<span class="token punctuation">.</span>menuItemSlot<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>menuItem<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="通过-createapp-方法创建的组件无法识别全局组件" tabindex="-1"><a class="header-anchor" href="#通过-createapp-方法创建的组件无法识别全局组件" aria-hidden="true">#</a> 通过 <code>createApp</code> 方法创建的组件无法识别全局组件</h2><p>由于通过 <code>createApp</code> 创建的组件并不是在 APP 下进行渲染，无法使用 APP 下的环境（全局组件，全局指令，原型属性函数）</p><p>所以当需要用到其他组件等，需要再次引入</p><h2 id="jsx-创建的组件样式不起作用" tabindex="-1"><a class="header-anchor" href="#jsx-创建的组件样式不起作用" aria-hidden="true">#</a> <code>jsx</code> 创建的组件样式不起作用</h2>`,10),_=n("code",null,"vue3",-1),y=n("code",null,"scoped",-1),w={href:"https://cn.vuejs.org/api/sfc-css-features.html#css-modules",target:"_blank",rel:"noopener noreferrer"},x={href:"http://192.168.1.123:10080/platform/qsdi/web-basic/-/blob/master/src/components/ui-confirm/index.vue#L54",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"v-model-在-vue3-中的更改",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v-model-在-vue3-中的更改","aria-hidden":"true"},"#"),s(),n("code",null,"v-model"),s(" 在 "),n("code",null,"vue3"),s(" 中的更改")],-1),A={href:"https://cn.vuejs.org/guide/components/events.html#usage-with-v-model",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"_404-路由必要性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_404-路由必要性","aria-hidden":"true"},"#"),s(" 404 路由必要性")],-1),F=n("p",null,"如果没有对不存在的路由进行匹配，登录系统会有如下警告：",-1),I=n("p",null,[n("img",{src:r,alt:"FAQ-router-warning"})],-1),B={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"全局路由警卫",-1),U={href:"http://192.168.1.123:10080/platform/qsdi/web-basic/-/blob/master/src/router/guard.js#L95",target:"_blank",rel:"noopener noreferrer"},q=t(`<details class="custom-container details"><summary>点击查看</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 由于路由是动态创建的，初次进入时还未载入，这时会进入到404页面中
 * 路由动态添加完成后需要重新载入要进入的路由，
 * 如果是重定向路由，从缓存的路由列表中找到需要重定向进入的路由
 * 如果是指定路由则替换即可
 */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> redirectRoute <span class="token operator">=</span> accessRoutes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> row<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>redirectRoute<span class="token punctuation">,</span>
    <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> to<span class="token punctuation">.</span>fullPath<span class="token punctuation">,</span>
    <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> to<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function C(M,P){const a=o("ExternalLinkIcon");return c(),i("div",null,[k,n("p",null,[n("a",v,[s("unplugin-vue-define-options"),e(a)]),s(" 可以在一个 "),m,s(" 里加入 "),b,s(" ，很方便。用法如下")]),h,n("p",null,[s("官方解答 "),n("a",g,[s("显式启用"),e(a)])]),f,n("p",null,[s("由于在 "),_,s(" 中带有 "),y,s(" 的 style 标签只能作用域 vue 文件。所以这里需要用到 "),n("a",w,[s("CSS Modules"),e(a)])]),n("p",null,[s("具体例子可参考 "),n("a",x,[s("src/components/ui-confirm/index.vue"),e(a)])]),j,n("p",null,[s("见"),n("a",A,[s("官方示例"),e(a)])]),E,F,I,n("p",null,[s("这是由于系统中的路由是由后端生成的，初始化未登录时还没有在路由列表中生成路由造成的，这时需要由一个 "),n("a",B,[s("404 路由匹配"),e(a)])]),n("p",null,[s("此时会有一个问题，登录系统后由于还未动态生成其他路由，系统会跳转到 404 路由，动态添加路由成功后未继续跳转真正需要跳转的路由，需要在 "),Q,s(" 中跳转，以下为"),n("a",U,[s("核心代码"),e(a)])]),q])}const N=p(d,[["render",C],["__file","index.html.vue"]]);export{N as default};
