import{_ as n,o as s,c as a,e as p}from"./app.9b5e849f.js";const e={},t=p(`<h1 id="加载图片资源到地图中" tabindex="-1"><a class="header-anchor" href="#加载图片资源到地图中" aria-hidden="true">#</a> 加载图片资源到地图中</h1><p>地图上的所有使用的图标以及图片必须经过此加工厂到地图上才可使用，所有图片在staticUtil文件中引入抛出即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 地图上的所有使用的图标以及图片必须经过此加工厂到地图上才可使用
 * 所有图片在staticUtil文件中引入抛出即可
 */</span>
<span class="token keyword">import</span> imageList <span class="token keyword">from</span> <span class="token string">&#39;../util/staticUtil&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ImageFactory</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadImageSuccess</span><span class="token punctuation">(</span><span class="token parameter">callBack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> promiseList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 加载地图所需图片</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>imageList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      promiseList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>imageList<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promiseList<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">callBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">addImage</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">loadImage</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> images</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        <span class="token comment">// 添加自定义图标</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> images<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="staticutil-js-引入静态资源" tabindex="-1"><a class="header-anchor" href="#staticutil-js-引入静态资源" aria-hidden="true">#</a> staticUtil.js 引入静态资源</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> hospital <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-hospital-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> school <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-school-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> government <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-government-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> station <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-station-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> other <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-other-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> scenicSpot <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-scenicSpot-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fence <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-fence-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-wifi-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rfid <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-rfid-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vehicle <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-vehicle-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> face <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-face-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> video <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-video-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> market <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-market-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ktv <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-ktv-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> hotel <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-hotel-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pawn <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-pawn-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> gym <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-gym-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> swim <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-swim-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> chessCards <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/symbol-chessCards-icon.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> warningPosition <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/warning-position.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> infoClose <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/info-close.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> infoTitle <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/info-title.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> infoBg <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/info-bg.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> infoPercent <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/info-percent.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bluePoint <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/blue-point.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> blueBg <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/blue-bg.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> redPoint <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/red-point.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> redBg <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/red-bg.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> greenPoint <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/green-point.png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> greenBg <span class="token keyword">from</span> <span class="token string">&#39;/images/map/minemap/green-bg.png&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  hospital<span class="token punctuation">,</span>
  school<span class="token punctuation">,</span>
  government<span class="token punctuation">,</span>
  station<span class="token punctuation">,</span>
  other<span class="token punctuation">,</span>
  scenicSpot<span class="token punctuation">,</span>
  fence<span class="token punctuation">,</span>
  wifi<span class="token punctuation">,</span>
  rfid<span class="token punctuation">,</span>
  vehicle<span class="token punctuation">,</span>
  face<span class="token punctuation">,</span>
  video<span class="token punctuation">,</span>
  market<span class="token punctuation">,</span>
  ktv<span class="token punctuation">,</span>
  hotel<span class="token punctuation">,</span>
  pawn<span class="token punctuation">,</span>
  gym<span class="token punctuation">,</span>
  swim<span class="token punctuation">,</span>
  chessCards<span class="token punctuation">,</span>
  warningPosition<span class="token punctuation">,</span>
  infoTitle<span class="token punctuation">,</span>
  infoBg<span class="token punctuation">,</span>
  infoClose<span class="token punctuation">,</span>
  infoPercent<span class="token punctuation">,</span>
  bluePoint<span class="token punctuation">,</span>
  blueBg<span class="token punctuation">,</span>
  redPoint<span class="token punctuation">,</span>
  redBg<span class="token punctuation">,</span>
  greenPoint<span class="token punctuation">,</span>
  greenBg<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};
