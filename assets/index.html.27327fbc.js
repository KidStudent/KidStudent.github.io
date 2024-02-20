import{_ as i,o as n,c as e,e as s}from"./app.9b5e849f.js";const d={},l=s(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><p>与 <code>vite</code> 构建的 <code>vue3</code> 项目大致相同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── node_modules  # 模块依赖
├── public  # 静态资源
│   │   ├── gptconfig.json  # gpt全局配置
├── src
│   ├── assets  # 图片等静态资源
│   ├── components  # 自定义通用组件
│   │   ├── markitdown  # markdown 组件
│   │   ├── print-css  # 打印组件
│   ├── config  # 配置文件
│   │   ├── api  # 接口地址，请根据不同模块放入不同文件中
│   │   ├── http  # axios配置文件
│   ├── directives  # 自定义指令
│   ├── hooks  # 公用方法
│   │   ├── component  # 组件公用方法
│   │   ├── message  # 在小智中的全局信息弹框
│   │   ├── useGptConfig  #获取gpt全局配置 
│   ├── style  # 全局样式
│   │   ├── common.scss  # 通用样式文件
│   │   ├── index.scss  # 主样式文件
│   │   ├── reset.scss  # 全局重置样式文件
│   │   ├── resetui.scss  # 全局覆盖 iview 库样式文件
│   │   ├── ...
│   ├── views  # 存放编写业务代码页面
│   ├── App.vue  # 入口页面
│   ├── main.js  # 入口文件
├── .env.apifox  # 环境变量apifox
├── .gitignore  # git 提交忽略文件
├── index.html  # html 主入口
├── package.json  # 依赖包管理以及命令配置
├── pnpm-lock.yaml  # 依赖包版本锁定文件
├── README.md  # README
└── vite.config.js  # vite 配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function c(a,r){return n(),e("div",null,v)}const t=i(d,[["render",c],["__file","index.html.vue"]]);export{t as default};
