import{_ as n,o as s,c as a,e as t}from"./app.cc3919a2.js";const e="/images/minemap2d/heat-map.png",p={},o=t('<h1 id="显示热力图" tabindex="-1"><a class="header-anchor" href="#显示热力图" aria-hidden="true">#</a> 显示热力图</h1><p><img src="'+e+`" alt="point"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 显示热力图
 * <span class="token keyword">@param</span> <span class="token parameter">data</span>
 */</span>
<span class="token function">addHeatMapLayer</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//添加数据源,该热力图效果，数据源类型支持geojson或vector两种形式</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&quot;heatmapSource&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;geojson&quot;</span><span class="token punctuation">,</span>
            data
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;heatmapLayer&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;heatmapSource&quot;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>MapLayer<span class="token punctuation">.</span><span class="token function">getHeatmapLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","index.html.vue"]]);export{d as default};
