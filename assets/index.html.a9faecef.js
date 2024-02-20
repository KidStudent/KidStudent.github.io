import{_ as r,r as a,o as i,c,a as e,b as t,d as n,w as l,e as s}from"./app.e1e31e76.js";const p="/images/guide/RABC/RABC-introduce.png",h="/images/guide/RABC/RABC-btn-permission.png",u={},m=s('<h1 id="rabc-权限" tabindex="-1"><a class="header-anchor" href="#rabc-权限" aria-hidden="true">#</a> RABC 权限</h1><p><code>RABC</code> （Role Based Access Control）权限指的是基于角色的访问控制</p><p><img src="'+p+'" alt="RABC-introduce"></p><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2><p>在 <code>系统管理</code> 中创建用户，并且关联角色</p><h2 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h2><p>在 <code>系统管理</code> 中创建角色，并且配置权限</p><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><p>整体分为 <a href="#%E7%B2%97%E7%B2%92%E5%BA%A6%E6%9D%83%E9%99%90">粗粒度权限</a> 和 <a href="#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%9D%83%E9%99%90">细粒度权限</a></p><h3 id="粗粒度权限" tabindex="-1"><a class="header-anchor" href="#粗粒度权限" aria-hidden="true">#</a> 粗粒度权限</h3><h4 id="菜单权限" tabindex="-1"><a class="header-anchor" href="#菜单权限" aria-hidden="true">#</a> 菜单权限</h4>',11),b=e("h4",{id:"按钮权限",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#按钮权限","aria-hidden":"true"},"#"),t(" 按钮权限")],-1),g={href:"http://192.168.1.123:10080/platform/qsdi/web-basic/-/blob/master/src/directives/permission.js",target:"_blank",rel:"noopener noreferrer"},v=s('<h5 id="传参解析" tabindex="-1"><a class="header-anchor" href="#传参解析" aria-hidden="true">#</a> 传参解析</h5><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th><th><strong>是否必传</strong></th></tr></thead><tbody><tr><td><code>route</code></td><td>接口所在菜单路由</td><td><code>string</code></td><td>是</td></tr><tr><td><code>permission</code></td><td>权限标识</td><td><code>string</code></td><td>是</td></tr><tr><td><code>mutually</code></td><td>是否互斥</td><td><code>boolean</code></td><td>否</td></tr></tbody></table><h5 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h5><p>第一步：在 <code>系统管理</code> 中添加按钮权限，如下图所示</p><p><img src="'+h+`" alt="RABC-btn-permission"></p><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>是否必填</strong></th></tr></thead><tbody><tr><td><code>按钮名称</code></td><td>中文名称</td><td>是</td></tr><tr><td><code>权限标识</code></td><td>route-permission</td><td>是</td></tr><tr><td><code>资源编码</code></td><td>随意填写 3 位数字</td><td>否</td></tr><tr><td><code>操作类型</code></td><td>操作类型</td><td>否</td></tr><tr><td><code>接口地址</code></td><td>完整接口地址</td><td>否</td></tr></tbody></table><p>第二部：在 vue 文件中使用，举个🌰</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    route: &#39;login&#39;,
    permission: &#39;add&#39;,
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  在login页面 有 &#39;add&#39; 权限可见
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(B,k){const d=a("RouterLink"),o=a("ExternalLinkIcon");return i(),c("div",null,[m,e("p",null,[t("登录时由后端返回有权限的菜单路由 "),n(d,{to:"/guide/routerMenu/#%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E8%B7%AF%E7%94%B1"},{default:l(()=>[t("动态添加到路由列表中")]),_:1})]),b,e("p",null,[t("通过 "),e("a",g,[t("v-permission"),n(o)]),t(" 指令实现")]),v])}const x=r(u,[["render",_],["__file","index.html.vue"]]);export{x as default};
