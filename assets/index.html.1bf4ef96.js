import{_ as p,r as t,o as e,c as o,a as n,b as s,d as c,e as i}from"./app.cc3919a2.js";const l={},u=n("h1",{id:"core",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),s(" core")],-1),r=n("p",null,[s("是 "),n("code",null,"QSGpt"),s(" 工厂函数，包含了 "),n("code",null,"sdk"),s(" 暴露给外部调用的所有方法")],-1),k={href:"http://192.168.1.123:10080/platform/qsdi/qihui/xiaozhi/-/blob/master/src/core/index.js",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;@/config/http/http&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupGlobDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/directives&#39;</span>
<span class="token keyword">import</span> UseAnswerStore <span class="token keyword">from</span> <span class="token string">&#39;@/stores/modules/answer&#39;</span>
<span class="token keyword">import</span> UseModelStore <span class="token keyword">from</span> <span class="token string">&#39;@/stores/modules/model&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">QSGpt</span> <span class="token punctuation">{</span>
  gptContainer <span class="token comment">//gpt要挂载的dom</span>
  gptConfig <span class="token comment">//gpt的基础配置信息</span>
  _isCreate <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//是否挂载</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> gptDom<span class="token punctuation">,</span> gptConfig <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gptContainer <span class="token operator">=</span> gptDom
    <span class="token keyword">this</span><span class="token punctuation">.</span>gptConfig <span class="token operator">=</span> gptConfig
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 挂载gpt到dom中，并且初始化vue3的加载</span>
  <span class="token keyword">async</span> <span class="token function">_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    div<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;global-float-banner&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gptContainer<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token function">setupStore</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    <span class="token function">setupGlobDirectives</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">axios</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>gptConfig<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$gptConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gptConfig
    app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_isCreate <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_isCreate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请勿重复挂载&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">_validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>gptContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请传入要挂载的gptDom&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>gptConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请传入gptConfig&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>gptConfig<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;gptConfig中未配置key&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 传入过滤回答的方法，可以用来加载自定义dom</span>
  <span class="token function">addAnswerFilter</span><span class="token punctuation">(</span>
    answerFilter<span class="token punctuation">,</span>
    answerProps <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dom</span><span class="token operator">:</span> <span class="token string">&#39;dom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token string">&#39;params&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_isCreate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请先执行init&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> answerStore <span class="token operator">=</span> <span class="token function">UseAnswerStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    answerStore<span class="token punctuation">.</span><span class="token function">setAnswerFilter</span><span class="token punctuation">(</span>answerFilter<span class="token punctuation">,</span> answerProps<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 传入过滤历史回答的方法，可以在不访问业务接口的情况下加载自定义dom</span>
  <span class="token function">addHistoryFilter</span><span class="token punctuation">(</span>
    historyFilter<span class="token punctuation">,</span>
    historyProps <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">domParams</span><span class="token operator">:</span> <span class="token string">&#39;domParams&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_isCreate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请先执行init&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> answerStore <span class="token operator">=</span> <span class="token function">UseAnswerStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    answerStore<span class="token punctuation">.</span><span class="token function">setHistoryFilter</span><span class="token punctuation">(</span>historyFilter<span class="token punctuation">,</span> historyProps<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置异步loading</span>
  <span class="token function">setAnswerLoading</span><span class="token punctuation">(</span>loading<span class="token punctuation">,</span> text <span class="token operator">=</span> <span class="token string">&#39;思考中...&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> answerStore <span class="token operator">=</span> <span class="token function">UseAnswerStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    answerStore<span class="token punctuation">.</span><span class="token function">setAnswerLoading</span><span class="token punctuation">(</span>loading<span class="token punctuation">,</span> text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取最近一条聊天记录中的图片</span>
  <span class="token function">getLastImageFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> modelStore <span class="token operator">=</span> <span class="token function">UseModelStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> modelStore<span class="token punctuation">.</span>imageFile
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,r,n("p",null,[n("a",k,[s("core.js"),c(a)])]),d])}const y=p(l,[["render",v],["__file","index.html.vue"]]);export{y as default};
