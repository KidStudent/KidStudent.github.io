import{_ as p,r as e,o as t,c as o,b as n,e as c,w as l,d as s,a as i}from"./app.5331c54f.js";const u={},r=n("h1",{id:"围栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#围栏","aria-hidden":"true"},"#"),s(" 围栏")],-1),k=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 围栏几何体</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FenceFactory</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token operator">:</span><span class="token punctuation">.</span><span class="token punctuation">&lt;</span>Vector3<span class="token operator">:</span><span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span> <span class="token parameter">fencePositions</span> 构建围栏的点的Vector3数组
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">fenceMaximumHeight</span> 构建围栏的最小高度值
   * <span class="token keyword">@returns</span>
   */</span>
  <span class="token function">createFenceGeometry</span><span class="token punctuation">(</span><span class="token parameter">fencePositions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fenceMaximumHeight <span class="token operator">=</span> <span class="token number">30</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> minemap<span class="token punctuation">.</span>Geometries<span class="token punctuation">.</span>FenceGeometry<span class="token punctuation">.</span><span class="token function">fromConstantHeights</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">positions</span><span class="token operator">:</span> minemap<span class="token punctuation">.</span>Math<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>fencePositions<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maximumHeight</span><span class="token operator">:</span> fenceMaximumHeight<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">imgUrl</span> 图片的url路径
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">textureOption</span> 流动纹理配置
   */</span>
  <span class="token function">createFenceMaterial</span><span class="token punctuation">(</span><span class="token parameter">imgUrl<span class="token punctuation">,</span> textureOption <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> textureDefaultOption <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 速度,取值范围：1-10</span>
      <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 纹理流动方向，取值：left,right,up,down,</span>
      <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 纹理旋转角度，取值范围：0-360</span>
      <span class="token literal-property property">texRepeat</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 纹理重复次数，第一个值为横向重复次数，第二个值为纵向重复次数，取值大于0</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 图片载入用户接口类</span>
    <span class="token keyword">const</span> fenceTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">minemap<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">,</span>
      <span class="token literal-property property">texUrl</span><span class="token operator">:</span> imgUrl<span class="token punctuation">,</span> <span class="token comment">//图片的url路径</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 标准材质</span>
    <span class="token keyword">const</span> fenceMaterial <span class="token operator">=</span> minemap<span class="token punctuation">.</span>StandardMaterial<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">&#39;Texture&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">baseColorTexture</span><span class="token operator">:</span> fenceTexture<span class="token punctuation">,</span> <span class="token comment">//通过TextureLoader().load载入的纹理对象</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token comment">//不透明度</span>
      <span class="token literal-property property">lightingModel</span><span class="token operator">:</span> minemap<span class="token punctuation">.</span>LightingModelType<span class="token punctuation">.</span>None<span class="token punctuation">,</span>
      <span class="token literal-property property">doubleSided</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否双面渲染</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>textureDefaultOption<span class="token punctuation">,</span> <span class="token operator">...</span>textureOption <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置流动纹理效果</span>
    fenceMaterial<span class="token punctuation">.</span><span class="token function">flowTexture</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> fenceMaterial<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fenceGeometry</span> Geometry实例
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fenceMaterial</span> Material实例
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span> <span class="token parameter">allowPick</span> 是否允许拾取
   */</span>
  <span class="token function">createPrimitive</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> fenceGeometry<span class="token punctuation">,</span> fenceMaterial<span class="token punctuation">,</span> allowPick <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fencePrimitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">minemap<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
      <span class="token literal-property property">geometry</span><span class="token operator">:</span> fenceGeometry<span class="token punctuation">,</span>
      <span class="token literal-property property">material</span><span class="token operator">:</span> fenceMaterial<span class="token punctuation">,</span>
      <span class="token literal-property property">allowPick</span><span class="token operator">:</span> allowPick<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addPrimitive</span><span class="token punctuation">(</span>fencePrimitive<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">removePrimitiveById</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">removePrimitiveById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(m,v){const a=e("RouterLink");return t(),o("div",null,[r,n("p",null,[c(a,{to:"/minemap/layer-load/#%E5%8A%A0%E8%BD%BD%E5%9C%B0%E5%9B%BE%E5%9B%B4%E6%A0%8F"},{default:l(()=>[s("示例")]),_:1})]),k])}const y=p(u,[["render",d],["__file","index.html.vue"]]);export{y as default};
