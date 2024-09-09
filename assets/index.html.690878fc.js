import{_ as t,r as p,o as e,c as o,a as n,d as c,w as l,b as s,e as i}from"./app.cc3919a2.js";const u={},r=n("h1",{id:"地图编辑器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#地图编辑器","aria-hidden":"true"},"#"),s(" 地图编辑器")],-1),k=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 地图编辑器工厂函数</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EditFactory</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">;</span>
  edit <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// styleOptions需要默认有属性 &quot;custom_style&quot;: &#39;true&#39; 才可以进行自定义的样式</span>
  styleOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">custom_style</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">edit<span class="token punctuation">.</span>init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">boxSelect</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//地图编辑器是否支持数据框选，使用 shift+click+ drag 进行操作</span>
      <span class="token literal-property property">drawEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用或关闭图形编辑功能</span>
      <span class="token literal-property property">touchEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//地图编辑器是否支持触摸交互</span>
      <span class="token literal-property property">displayControlsDefault</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用或关闭全部控件</span>
      <span class="token literal-property property">showButtons</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// 全局默认样式</span>
      <span class="token literal-property property">userStyles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inactive</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fillOutlineColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">circleColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">circleBorderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&#39;#f00f0f&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fillOutlineColor</span><span class="token operator">:</span> <span class="token string">&#39;#f00f0f&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineColor</span><span class="token operator">:</span> <span class="token string">&#39;#f00f0f&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">circleColor</span><span class="token operator">:</span> <span class="token string">&#39;#f00f0f&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">circleBorderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 添加编辑池中的数据
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">feature</span>
   * coordinates = [[[center.lng, center.lat], [center.lng, center.lat + 0.003], [center.lng - 0.003, center.lat + 0.003]]]
   */</span>
  <span class="token function">addFeatures</span><span class="token punctuation">(</span>
    feature <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Polygon&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span>draw<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>feature<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 设置编辑池中的数据
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">features</span> 
   * features =
   * [<span class="token punctuation">{</span>
   *    id: &#39;xxx&#39;,
        type: &#39;Feature&#39;,
        properties: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        geometry: <span class="token punctuation">{</span>
            type: &#39;Polygon&#39;,
            coordinates: [[[center.lng, center.lat], [center.lng, center.lat + 0.003], [center.lng - 0.003, center.lat + 0.003]]]
      <span class="token punctuation">}</span>]
   */</span>
  <span class="token function">setFeatures</span><span class="token punctuation">(</span><span class="token parameter">features</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fc <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;FeatureCollection&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">features</span><span class="token operator">:</span> features<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">setFeatures</span><span class="token punctuation">(</span>fc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAllFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span>draw<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">ids</span> features的id数组
   */</span>
  <span class="token function">deleteFeature</span><span class="token punctuation">(</span><span class="token parameter">ids</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span>draw<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">delAllFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span>draw<span class="token punctuation">.</span><span class="token function">deleteAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//启用所有图形编辑功能</span>
  <span class="token function">enableDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">enableDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 禁用所有图形编辑功能</span>
  <span class="token function">disableDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">disableDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 指定图形id编辑功能开关
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">featureId</span> 图形id
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">isLock</span> 编辑功能开关
   */</span>
  <span class="token function">setLockByIds</span><span class="token punctuation">(</span><span class="token parameter">featureId<span class="token punctuation">,</span> isLock <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过setLockByIds方法指定图层的id来设置是否可以编辑</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">setLockByIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span>featureId<span class="token punctuation">]</span><span class="token punctuation">,</span> isLock<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 通过id设置图形样式
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">featureId</span> 图形id
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">styleOptions</span> 图形样式
   * styleOptions = <span class="token punctuation">{</span>
        &quot;fillColor&quot;: &quot;#090ff3&quot;,
        &quot;fillOutlineColor&quot;: &quot;#090ff3&quot;,
        &quot;lineColor&quot;: &quot;#090ff3&quot;,
        &quot;circleColor&quot;: &quot;#090ff3&quot;,
        &quot;circleBorderColor&quot;: &quot;#ffffff&quot;
      <span class="token punctuation">}</span>
   */</span>
  <span class="token function">setFeaturePropertiesByIds</span><span class="token punctuation">(</span><span class="token parameter">featureId<span class="token punctuation">,</span> styleOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>styleOptions<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>styleOptions <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">setFeaturePropertiesByIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span>featureId<span class="token punctuation">]</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 图形自定义预设样式
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">featureType</span> 图形类型 polygon, line, rectangle, triangle
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">styleOptions</span>
   */</span>
  <span class="token function">ctrlActive</span><span class="token punctuation">(</span>
    featureType<span class="token punctuation">,</span>
    styleOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fillOutlineColor</span><span class="token operator">:</span> <span class="token string">&#39;#49FBD3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fillOutlineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isLock</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>edit<span class="token punctuation">.</span><span class="token function">onBtnCtrlActive</span><span class="token punctuation">(</span>featureType<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> styleOptions <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=p("RouterLink");return e(),o("div",null,[r,n("p",null,[c(a,{to:"/minemap/layer-load/#%E5%8A%A0%E8%BD%BD%E5%9C%B0%E5%9B%BE%E5%9B%B4%E6%A0%8F"},{default:l(()=>[s("示例")]),_:1})]),k])}const y=t(u,[["render",d],["__file","index.html.vue"]]);export{y as default};
