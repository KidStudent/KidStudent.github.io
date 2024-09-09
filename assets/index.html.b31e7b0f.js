import{_ as n,o as s,c as a,e as t}from"./app.cc3919a2.js";const p={},o=t(`<h1 id="manifest-v2-配置说明" tabindex="-1"><a class="header-anchor" href="#manifest-v2-配置说明" aria-hidden="true">#</a> Manifest V2 配置说明</h1><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// Required</span>
  <span class="token comment">// 必须的字段3个</span>
  <span class="token property">&quot;manifest_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// manifest编写规范版本，目前主流2</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Extension&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 插件名</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;versionString&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 版本号</span>

  <span class="token comment">// Recommended</span>
  <span class="token property">&quot;default_locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 默认编码，国际化</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A plain text description&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// 插件描述。132个字符以内</span>
  <span class="token comment">// 插件下载或浏览时显示的图标，可选多种规格的扩展图标。推荐大小16，48，128</span>
  <span class="token property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                
    <span class="token property">&quot;16&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon16.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;48&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon48.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;128&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon128.png&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Pick one (or none)</span>
  <span class="token comment">// 图标显示在地址栏右边，能在所有页面显示 //地址栏右侧图标管理。含图标及弹出页面的设置等</span>
  <span class="token property">&quot;browser_action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/icon-128.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default_popup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html/browser.html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token comment">// 图标显示在地址栏右侧（地址栏内），只在特定页面显示</span>
  <span class="token comment">// 地址栏最后附加图标。含图标及行为等</span>
  <span class="token property">&quot;page_action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/icon-48.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default_popup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html/page.html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;theme&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 主题，用于更改整个浏览器的外观</span>
  <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 指定扩展需要跳转到的URL</span>

  <span class="token comment">// Optional</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 插件作者</span>
  <span class="token property">&quot;automation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 开启自动化</span>
  <span class="token comment">// 指定扩展进程的background运行环境</span>
  <span class="token comment">// 可常驻浏览器后台的脚本，可以连接其他页面</span>
  <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Recommended</span>
    <span class="token property">&quot;persistent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;background.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page&quot;</span><span class="token operator">:</span><span class="token string">&quot;html/background.html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;background_page&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// 覆盖当前的chrome配置</span>
  <span class="token property">&quot;chrome_settings_overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 覆盖当前的chrome界面配置</span>
  <span class="token property">&quot;chrome_ui_overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bookmarks_ui&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;remove_bookmark_shortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;remove_button&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 替换页面</span>
  <span class="token comment">// 修改点击相应动作时返回的页面链接，只支持bookmarks、history、newtab三个页面</span>
  <span class="token property">&quot;chrome_url_overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bookmarks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myPage.html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;history&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myPage.html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;newtab&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myPage.html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageToOverride&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html/overrides.html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 键盘触发插件快捷键</span>
  <span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_execute_browser_action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;suggested_key&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ctrl+Shift+Y&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mac&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command+Shift+Y&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;chromeos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ctrl+Shift+U&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ctrl+Shift+J&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 页面权限</span>
  <span class="token property">&quot;content_capabilities&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;matches&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://*.nyc.corp.google.com/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;unlimitedStorage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;notifications&quot;</span><span class="token punctuation">]</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定在web页面运行的脚本</span>
  <span class="token comment">// 可以操作页面元素，不能使用chrome的api</span>
  <span class="token property">&quot;content_scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;matches&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://www.baidu.com/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;css/mystyles.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lib/jquery-3.3.1.min.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;js/content.js&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token comment">// 安全策略，默认情况下禁止使用eval或者Function构造函数，以及内联js，禁止载入外部脚本</span>
  <span class="token property">&quot;content_security_policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script-src ‘self‘; object-src ‘self‘&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 将用户脚本转化为content script，允许使用GM_* (greasemonkey)方法</span>
  <span class="token property">&quot;converted_from_user_script&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;copresence&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token property">&quot;current_locale&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// 在开发中工具中的页面</span>
  <span class="token property">&quot;devtools_page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;devtools.html&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 事件监听规则及条件</span>
  <span class="token property">&quot;event_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;declarativeContent.onPageChanged&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;declarativeContent.ShowPageAction&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;declarativeContent.PageStateMatcher&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;video&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 哪些外部扩展、应用或网页能连接此插件</span>
  <span class="token property">&quot;externally_connectable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;aaaaaaaaaa&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;bbbbbbbb&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;*&quot;</span>        <span class="token comment">// 允许所有可使用 &quot;*&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;matches&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*://*.example.com/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accepts_tls_channel_id&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 允许用户上传文件，只支持Chrome OS</span>
  <span class="token property">&quot;file_browser_handlers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upload&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 按钮文字</span>
    <span class="token property">&quot;default_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Save to Gallery&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file_filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;filesystem:*.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;filesystem:*.jpeg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;filesystem:*.png&quot;</span>
      <span class="token comment">// 匹配所有文件可用 &quot;filesystem:*.*&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 允许访问文件系统，只支持Chrome OS</span>
  <span class="token property">&quot;file_system_provider_capabilities&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;configurable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;multiple_mounts&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;network&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件主页，扩展的官方主页，显示在chrome扩展工具列表中</span>
  <span class="token property">&quot;homepage_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://path/to/homepage&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 允许其他组件调用自己的模块</span>
  <span class="token property">&quot;export&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;whitelist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 调用其他组件的模块，与其他组件的export属性共用</span>
  <span class="token property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 隐身模式</span>
  <span class="token property">&quot;incognito&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spanning or split or not_allowed&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 用户操作意图描述</span>
  <span class="token property">&quot;intents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 输入管理，键盘事件等</span>
  <span class="token property">&quot;input_components&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test IME&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ime&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test IME&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// A user visible description</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>        <span class="token comment">// The primary language this IME is used for</span>
      <span class="token property">&quot;layouts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;us::eng&quot;</span><span class="token punctuation">]</span>        <span class="token comment">// The supported keyboard layouts for this IME</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 自动生成，可不需要。扩展唯一标识。不需要人为指定</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;publicKey&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 要求支持的chrome的最低版本</span>
  <span class="token property">&quot;minimum_chrome_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;versionString&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 消息与本地处理模块映射</span>
  <span class="token comment">// 使用native client 模块</span>
  <span class="token property">&quot;nacl_modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>                
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OpenOfficeViewer.nmf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mime_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.oasis.opendocument.spreadsheet&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 谷歌账户相关信息</span>
  <span class="token property">&quot;oauth2&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// 离线使用 // 是否允许脱机运行</span>
  <span class="token property">&quot;offline_enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//ominbox即地址栏。用于响应地址栏的输入事件    // 搜索关键词推荐</span>
  <span class="token property">&quot;omnibox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aString&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 运行时权限，非必须权限</span>
  <span class="token property">&quot;optional_permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tabs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置页，可从扩展工具列表进入 // 选项页。用于在扩展管理页面跳转到选项设置</span>
  <span class="token property">&quot;options_page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;options.html&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置页</span>
  <span class="token property">&quot;options_ui&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;chrome_style&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;options.html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 安装时提示的权限，基本权限</span>
  <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://www.baidu.com/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tabs&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 可以将部分基于平台的功能文件放入_platform_specific目录然后列在此项中减少插件体积</span>
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// NPAPI插件  // 扩展。可调用第三方扩展</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension_plugin.dll&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 安装前置需求 // 指定所需要的特殊技术。目前只支持&quot;3D&quot;</span>
  <span class="token property">&quot;requirements&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;3D&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;webgl&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 放入沙盒中运行</span>
  <span class="token property">&quot;sandbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;page1.html&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;directory/page2.html&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// content_security_policy is optional.</span>
      <span class="token property">&quot;content_security_policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sandbox allow-scripts; script-src https://www.google.com&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 短名称，最长12个字母，如不设置则用name属性代替</span>
  <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Short Name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// 拼写检查</span>
  <span class="token property">&quot;spellcheck&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// 描述了各种属性的type，json格式文件，能在storage.managed API中调用</span>
  <span class="token property">&quot;storage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;managed_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;schema.json&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 实验性API，只在开发版中实现，已弃用</span>
  <span class="token property">&quot;system_indicator&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token comment">// text to speech</span>
  <span class="token property">&quot;tts_engine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;voices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;voice_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;marker&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;end&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;voice_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pat&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件更新地址，自动升级</span>
  <span class="token property">&quot;update_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://myhost.com/mytestextension/updates.xml&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 版本名，和version字段的区别是没有格式要求，任意字符串</span>
  <span class="token property">&quot;version_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aString&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定本扩展在注入的目标页面上所需使用的资源的路径，指定资源路径，为String数组</span>
  <span class="token property">&quot;web_accessible_resources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;images/*.png&quot;</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
