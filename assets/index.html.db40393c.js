import{_ as e,o as n,c as i,e as s}from"./app.cc3919a2.js";const d={},l=s(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── docs  # vuepress 主目录
│   ├── .vuepress  # vuepress 文档配置文件
│   │   │   ├── .cache  # 缓存目录
│   │   │   ├── .temp  # 临时目录
│   │   │   ├── public  # 公共资源
│   │   │   |   ├── images  # 图片
|   |   |   |
│   │   │   ├── styles  # 公共样式
│   │   │   ├── client  # 客户端配置文件，用来注册组件以及路由钩子函数配置等
│   │   │   ├── config  # vuepress 配置文件，来配置一些默认配置
|   |   |   |
│   ├── component-document  # 文档
│   │   │   |
│   ├── guide  # 指南
│   │   │   ├── catalogue  # 项目目录结构
│   │   │   ├── ...
|   |   |   |
│   ├── README  # 主页
|   |   |   |
├── theme  # 本地主题
|   |   |   |
|   ├── component  # 本地主题组件
|   |   ├── rigthMenu  # 右侧锚点菜单
|   |   └── sidebar  # 左侧导航栏
|   |   |
│   ├── configs  # vuepress 配置文件
│   |   ├── nav  # 菜单配置文件
|   |   |   ├── index.js  # export 模块
│   |   |   ├── navbar  # 导航栏菜单
│   |   |   └── sidebar  # 侧边栏菜单
|   |   ├── index.js  # export 模块
|   |   ├── plugins.js  # 插件配置
|   |
|   ├── hooks  # 本地主题 hook
|   |   ├── index.js  # export 模块
|   |   ├── useNavLink.js  # 导航栏路由组装
|   |   ├── useResolveRouteWithRedirect.js  # 路由重新组装
|   |   ├── useSidebarItems.js  # 侧边导航栏菜单处理
|   |
|   ├── layouts  # 本地主题布局主页面
|   ├── utils  # 本地主题公用方法
│   ├── client  # 本地主题配置文件，用来注册组件以及路由钩子函数配置等
│   ├── index  # 本地主题配置文件，来配置一些默认配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(c,r){return n(),i("div",null,v)}const m=e(d,[["render",a],["__file","index.html.vue"]]);export{m as default};
