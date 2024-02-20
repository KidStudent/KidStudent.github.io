import{_ as n,o as s,c as a,e as p}from"./app.9b5e849f.js";const t={},e=p(`<h1 id="特征点位" tabindex="-1"><a class="header-anchor" href="#特征点位" aria-hidden="true">#</a> 特征点位</h1><p>所有 <code>layer</code> ，需要先加载特征点位到地图上，再通过特征点位的 <code>id</code> 关联 <code>layer</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 点位加工工厂</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SourceFactory</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">;</span>
  sources <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  sourceOption <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  sourceDefaultOption <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cluster</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">/*是否聚合*/</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clusterMaxZoom</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token comment">/* 最大聚合层级 */</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clusterRadius</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token comment">/* 聚合半径 */</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">map<span class="token punctuation">,</span> sources</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sources <span class="token operator">=</span> sources<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**重要**
   *               创建出符合图层要求的特征点位
   **************************************************************
   *                  地图点位字段对应为                          *
   * lat 经度 lng 纬度 title 点位名称 kind 点位分类 icon 点位图标  *
   *            icon 的图标必须要在地图初始化时加载到地图中         *
   **************************************************************
   */</span>
  <span class="token function">createSourceFeatures</span><span class="token punctuation">(</span><span class="token parameter">pointList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sourcePoints <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSourcePoints</span><span class="token punctuation">(</span>pointList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sourcePoints<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Feature&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Point&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span>point<span class="token punctuation">.</span>lng<span class="token punctuation">,</span> point<span class="token punctuation">.</span>lat<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lat</span><span class="token operator">:</span> point<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>
          <span class="token literal-property property">lng</span><span class="token operator">:</span> point<span class="token punctuation">.</span>lng<span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> point<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
          <span class="token literal-property property">kind</span><span class="token operator">:</span> point<span class="token punctuation">.</span>kind<span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> point<span class="token punctuation">.</span>icon<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**重要**
   *                系统点位转换为地图点位
   **************************************************************
   *                  地图点位字段对应为                          *
   * lat 经度 lng 纬度 title 点位名称 kind 点位分类 icon 点位图标  *
   *            icon 的图标必须要在地图初始化时加载到地图中         *
   **************************************************************
   */</span>
  <span class="token function">createSourcePoints</span><span class="token punctuation">(</span><span class="token parameter">pointList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pointList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lat</span><span class="token operator">:</span> point<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>
        <span class="token literal-property property">lng</span><span class="token operator">:</span> point<span class="token punctuation">.</span>lng<span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> point<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        <span class="token literal-property property">kind</span><span class="token operator">:</span> point<span class="token punctuation">.</span>kind<span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> point<span class="token punctuation">.</span>icon<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建符合geojson的数据</span>
  <span class="token function">createGeoJson</span><span class="token punctuation">(</span><span class="token parameter">pointList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过工厂函数加工系统点位</span>
    <span class="token keyword">const</span> features <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSourceFeatures</span><span class="token punctuation">(</span>pointList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;FeatureCollection&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">features</span><span class="token operator">:</span> features<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 添加source到地图上</span>
  <span class="token function">addSources</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> sourceId<span class="token punctuation">,</span> sourceOption <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sourceOption <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>sourceDefaultOption<span class="token punctuation">,</span> <span class="token operator">...</span>sourceOption <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">已添加过</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sourceId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的图层</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> jsonData <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 如果传入的是字符串则认为传入的是geojson的链接直接使用
     * 否则则是系统内部点位数据则需要加工之后使用
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      jsonData <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 生成json数据加载source到地图上</span>
      jsonData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createGeoJson</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;geojson&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> jsonData<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>sourceOption<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sources<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 添加栅格source
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">tiles</span> 瓦片服务地址 Array
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sourceId</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">tileSize</span> 瓦片尺寸
   */</span>
  <span class="token function">addRasterSources</span><span class="token punctuation">(</span><span class="token parameter">tiles<span class="token punctuation">,</span> sourceId<span class="token punctuation">,</span> tileSize <span class="token operator">=</span> <span class="token number">256</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;raster&#39;</span><span class="token punctuation">,</span> <span class="token comment">//数据源类型：栅格数据源</span>
      <span class="token literal-property property">tiles</span><span class="token operator">:</span> tiles<span class="token punctuation">,</span>
      <span class="token literal-property property">tileSize</span><span class="token operator">:</span> tileSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sources<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeSource</span><span class="token punctuation">(</span><span class="token parameter">sourceId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">removeSource</span><span class="token punctuation">(</span>sourceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
