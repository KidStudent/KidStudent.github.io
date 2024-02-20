import{_ as e,o as n,c as i,a as d}from"./app.5331c54f.js";const c={},s=d(`<h1 id="使用vue-cli搭建" tabindex="-1"><a class="header-anchor" href="#使用vue-cli搭建" aria-hidden="true">#</a> 使用vue-cli搭建</h1><h2 id="一、创建-vue-项目" tabindex="-1"><a class="header-anchor" href="#一、创建-vue-项目" aria-hidden="true">#</a> 一、创建 Vue 项目</h2><p>使用 <code>vue-cli</code> 创建 <code>vue2.x</code> 版本的 <code>vue</code> 项目 <code>vue-create-xxx</code></p><p>创建完成之后的目录结构为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── README.md
├── babel.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、修改项目目录" tabindex="-1"><a class="header-anchor" href="#二、修改项目目录" aria-hidden="true">#</a> 二、修改项目目录</h2><p>因为我们要开发 <code>chrome</code> 扩展项目，而这种生成的 <code>vue</code> 项目里面的文件夹和文件很多我们不需要，所以我们需要处理下：</p><ol><li>在根目录中创建 <code>vue.config.js</code> 的 <code>vue</code> 配置文件;</li><li>在 <code>src</code> 文件夹下面的 <code>app.vue、components</code> 删除;</li><li>删除根目录中的<code>public</code>文件夹;</li><li>在 <code>src</code> 文件夹下创建 <code>background、content、plugins、popup</code> 文件夹;</li><li>在 <code>background</code> 文件夹下创建 <code>main.js</code>;</li><li>在 <code>content</code> 文件夹下创建 <code>components</code> 文件夹 <code>App.vue、main.js</code> 文件;</li><li>在 <code>plugins</code> 文件夹下创建 <code>inject.js、manifest.json</code> 文件;</li><li>在 <code>popup</code> 文件夹下创建 <code>App.vue、main.js、index.html</code> 文件， <code>components</code>等文件夹;</li></ol><p>此时的文件目录应该为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── README.md
├── babel.config.js
├── package.json
├── src
│   ├── assets
│   │   └── logo.png
│   ├── background
│   │   └── main.js
│   ├── content
|   |   ├── components
|   |   ├── App.vue
│   │   └── main.js
│   ├── plugins
|   |   ├── inject
│   │   └── maifest.json
│   ├── popup
|   |   ├── components
|   |   ...
|   |   ├── App.vue
|   |   ├── index.html
│   │   └── main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[s];function a(o,v){return n(),i("div",null,l)}const u=e(c,[["render",a],["__file","index.html.vue"]]);export{u as default};
