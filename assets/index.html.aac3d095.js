import{_ as n,r as i,o as r,c as d,a,b as e,d as t,w as c,e as o}from"./app.cc3919a2.js";const h="/images/chrome-extension/step1.png",p="/images/chrome-extension/step2.png",l="/images/chrome-extension/step3.png",m="/images/chrome-extension/step4.png",u="/images/chrome-extension/step5.png",_="/images/chrome-extension/step6.png",g={},x=a("h1",{id:"开始",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开始","aria-hidden":"true"},"#"),e(" 开始")],-1),b=a("h2",{id:"开发环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开发环境","aria-hidden":"true"},"#"),e(" 开发环境")],-1),f=o(`<h2 id="本地开发" tabindex="-1"><a class="header-anchor" href="#本地开发" aria-hidden="true">#</a> 本地开发</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="浏览器中安装" tabindex="-1"><a class="header-anchor" href="#浏览器中安装" aria-hidden="true">#</a> 浏览器中安装</h3><p>需要在 <code>chrome</code>、<code>edge</code>、<code>sarfari</code> 等 <code>webkit</code> 内核的浏览器中安装</p><p>这里以chrome浏览器安装为例</p><h4 id="打开chrome浏览器中的扩展程序" tabindex="-1"><a class="header-anchor" href="#打开chrome浏览器中的扩展程序" aria-hidden="true">#</a> 打开chrome浏览器中的扩展程序</h4><p><img src="`+h+'" alt="step1"></p><h4 id="开启开发者模式" tabindex="-1"><a class="header-anchor" href="#开启开发者模式" aria-hidden="true">#</a> 开启开发者模式</h4><p><img src="'+p+'" alt="step2"></p><h4 id="加载已解压的扩展程序-也就是我们打包出来的dist" tabindex="-1"><a class="header-anchor" href="#加载已解压的扩展程序-也就是我们打包出来的dist" aria-hidden="true">#</a> 加载已解压的扩展程序-也就是我们打包出来的dist</h4><p><img src="'+l+'" alt="step3"></p><h4 id="此时我们的插件就安装完成了" tabindex="-1"><a class="header-anchor" href="#此时我们的插件就安装完成了" aria-hidden="true">#</a> 此时我们的插件就安装完成了</h4><p><img src="'+m+'" alt="step4"></p><h4 id="固定插件到快捷栏方便使用" tabindex="-1"><a class="header-anchor" href="#固定插件到快捷栏方便使用" aria-hidden="true">#</a> 固定插件到快捷栏方便使用</h4><p><img src="'+u+'" alt="step5"></p><h4 id="可以开始调试了" tabindex="-1"><a class="header-anchor" href="#可以开始调试了" aria-hidden="true">#</a> 可以开始调试了</h4><p><img src="'+_+'" alt="step6"></p><h3 id="更新程序" tabindex="-1"><a class="header-anchor" href="#更新程序" aria-hidden="true">#</a> 更新程序</h3><p>每次更新需要重新执行打包</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>打包完成后 <code>popup</code> 弹框重新打开会自动更新为最新的包，但 <code>content</code> 中向当前html注入的脚本需要在 <code>扩展程序</code> 中重新加载扩展程序， 并且需要在注入的页面刷新后才可正常运转</p></div>',23);function v(k,E){const s=i("RouterLink");return r(),d("div",null,[x,b,a("p",null,[e("与 "),t(s,{to:"/guide/start/#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83"},{default:c(()=>[e("前端框架")]),_:1}),e(" 保持一致")]),f])}const B=n(g,[["render",v],["__file","index.html.vue"]]);export{B as default};
