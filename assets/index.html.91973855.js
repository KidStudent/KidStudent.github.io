import{_ as n,o as i,c as e,e as s}from"./app.cc3919a2.js";const d={},l=s(`<h1 id="文档目录结构" tabindex="-1"><a class="header-anchor" href="#文档目录结构" aria-hidden="true">#</a> 文档目录结构</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── node_modules  # 模块依赖
├── public  # 静态资源
│   │   └── logo.png  # favicon
├── src
│   ├── assets  # 字体、图片等静态资源
│   ├── background  # 浏览器后台
│   │   └── main  # 主文件
│   ├── content  # 扩展程序内嵌到当前页面中的文件
│   │   ├── App  # 内嵌到页面中的入口页面
│   │   └── main  # 内嵌到页面中的入口文件
│   ├── plugins  # 扩展程序的配置
│   │   ├── inject  # 可以引入到页面中的js (一般用来抓取页面中的图片等)
│   │   └── manifest  # 扩展程序的主配置文件
│   ├── popup   # 扩展程序popup的页面
│   │   ├── components  # 扩展程序popup的组件
|   |   ├── config  # 配置
│   │   |     ├── api  # 接口地址
│   │   |     ├── http  # axios的配置
│   │   |     └── router.config.js  # 全局路由导航的配置
|   |   ├── directives  # 扩展程序popup的自定义指令
|   |   ├── mixins  # 扩展程序popup的mixins
│   │   │     └── communication  # 扩展程序popup与其他模块通信方法
│   │   ├── router  # 扩展程序的路由
│   │   │     └── index  # 扩展程序的主路由
│   │   ├── store  # vuex 状态管理
│   │   │     └── modules  # 根据不同模块区分
│   │   |           ├── common.js  # 通用状态
│   │   |           ├── permission.js  # 权限路由状态
│   │   |           ├── user.js  # 用户信息状态
│   │   |           ├── ...
│   │   │           └── index.js  # vuex主页面
│   │   ├── utils  # 全局工具方法
│   │   │     ├── module
│   │   │     |     └── common.js # 全局公用方法，深拷贝，树结构数据组装等
│   │   │     └── index.js  # 引入所有模块js
│   │   ├── views  # 存放编写业务代码页面
│   │   ├── App.vue  # 扩展程序popup入口页面
│   │   └── main.ts  # 扩展程序popup入口文件
│   └── utils  # 全局工具方法
├── .gitignore  # git 提交忽略文件
├── package.json  # 依赖包管理以及命令配置
├── package-lock.json  # 依赖包版本锁定文件
├── README.md  # README
└── vue.config.ts  # webpack 配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(c,u){return i(),e("div",null,v)}const m=n(d,[["render",a],["__file","index.html.vue"]]);export{m as default};
