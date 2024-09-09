import{_ as n,o as i,c as e,e as s}from"./app.cc3919a2.js";const d={},l=s(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><p>由于是基于原有项目目录开发，所以这里目录结构可能有些奇怪</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── src
│   ├── components  # 自定义通用组件
│   │   ├── antv-g6  # 关系图谱组件
│   │   │    ├── components
│   │   │    │     ├── antv-loading  # loading
│   │   │    ├── factory  # 工厂函数
│   │   │    │     ├── custom-node  # 自定义节点
│   │   │    │     ├── layout-setting  # 布局
│   │   │    │     ├── timebar  # 时间轴
│   │   │    │     ├── view-operations  # 画布操作展示
│   │   │    ├── hooks
│   │   │    │     ├── custom-behavior  # 自定义交互
│   │   │    ├── util
│   │   │    │     ├── graph-deal  # 画布处理
│   │   ├── config  # 默认配置
│   ├── views  # 存放编写业务代码页面
│   │   ├── number-cube  # 数智立方
│   │   │    ├── component
│   │   │    │     ├── data-filter  # 实体过滤
│   │   │    │     ├── object-details  # 实体详情
│   │   │    │     ├── operate  # 上方操作栏
│   │   │    │     ├── relationship-info  # 关系详情
│   │   │    │     ├── ui-card  # 实体&amp;关系 详情中展示图片以及实体信息的组件
│   │   │    ├── components
│   │   │    │     ├── community-analysis-modal  # 社群分析弹框
│   │   │    │     ├── node-context-menu  # 实体右击菜单
│   │   │    │     ├── path-deduction-modal  # 路径推演弹框
│   │   │    │     ├── relation-graph-lianjiefenxi  # 连接分析弹框
│   │   │    │     ├── relation-graph-save  # 图谱新增时弹框
│   │   │    │     ├── search-result-input  # 新增实体弹框
│   │   │    │     ├── tabs  # 顶部标签页切换
│   │   │    │     ├── toolbar-right  # 右侧工具栏
│   │   │    ├── info-g6  # 主文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function v(r,c){return i(),e("div",null,a)}const m=n(d,[["render",v],["__file","index.html.vue"]]);export{m as default};
