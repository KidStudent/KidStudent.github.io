import{_ as e,o as a,c as i,e as d}from"./app.9b5e849f.js";const n={},s=d(`<h1 id="git-相关" tabindex="-1"><a class="header-anchor" href="#git-相关" aria-hidden="true">#</a> git 相关</h1><h2 id="提交规范" tabindex="-1"><a class="header-anchor" href="#提交规范" aria-hidden="true">#</a> 提交规范</h2><p><code>feat：增加新功能</code><br><code>fix: 修复问题/BUG</code><br><code>style: 代码风格相关无影响运行结果的</code><br><code>perf: 优化/性能提升</code><br><code>refactor: 重构</code><br><code>revert: 撤销修改</code><br><code>test: 测试相关</code><br><code>docs: 文档/注释</code><br><code>chore: 依赖更新/脚手架配置修改等</code><br><code>workflow: 工作流改进</code><br><code>ci: 持续集成</code><br><code>types: 类型定义文件更改</code><br><code>wip: 开发中</code></p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="创建仓库代码" tabindex="-1"><a class="header-anchor" href="#创建仓库代码" aria-hidden="true">#</a> 创建仓库代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch dev
<span class="token comment"># or</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev
<span class="token comment"># or</span>
<span class="token function">git</span> switch <span class="token parameter variable">-c</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换本地分支" tabindex="-1"><a class="header-anchor" href="#切换本地分支" aria-hidden="true">#</a> 切换本地分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token comment"># or</span>
<span class="token function">git</span> switch dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支并关联远程分支" tabindex="-1"><a class="header-anchor" href="#切换分支并关联远程分支" aria-hidden="true">#</a> 切换分支并关联远程分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b dev origin/dev
# or
git checkout --track origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本地所有分支" tabindex="-1"><a class="header-anchor" href="#查看本地所有分支" aria-hidden="true">#</a> 查看本地所有分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看远程所有分支" tabindex="-1"><a class="header-anchor" href="#查看远程所有分支" aria-hidden="true">#</a> 查看远程所有分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除本地分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支" aria-hidden="true">#</a> 删除本地分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin -d dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取远程分支代码" tabindex="-1"><a class="header-anchor" href="#拉取远程分支代码" aria-hidden="true">#</a> 拉取远程分支代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将代码从工作区添加暂存区" tabindex="-1"><a class="header-anchor" href="#将代码从工作区添加暂存区" aria-hidden="true">#</a> 将代码从工作区添加暂存区</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看尚未暂存的更新" tabindex="-1"><a class="header-anchor" href="#查看尚未暂存的更新" aria-hidden="true">#</a> 查看尚未暂存的更新</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加提交信息-commit-注释写错-执行-git-commit-amend-此时会进入默认-vim-编辑器-修改注释后保存" tabindex="-1"><a class="header-anchor" href="#添加提交信息-commit-注释写错-执行-git-commit-amend-此时会进入默认-vim-编辑器-修改注释后保存" aria-hidden="true">#</a> 添加提交信息（commit 注释写错，执行 git commit --amend 此时会进入默认 vim 编辑器，修改注释后保存）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m &#39;xxxx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送代码到远程分支" tabindex="-1"><a class="header-anchor" href="#推送代码到远程分支" aria-hidden="true">#</a> 推送代码到远程分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin dev

# 强制推送（常在 git rebase 或 git reset 后使用）
git push -f origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-git-状态" tabindex="-1"><a class="header-anchor" href="#查看-git-状态" aria-hidden="true">#</a> 查看 git 状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看可引用的历史版本记录" tabindex="-1"><a class="header-anchor" href="#查看可引用的历史版本记录" aria-hidden="true">#</a> 查看可引用的历史版本记录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="把本地未-push-的分叉提交历史整理成直线" tabindex="-1"><a class="header-anchor" href="#把本地未-push-的分叉提交历史整理成直线" aria-hidden="true">#</a> 把本地未 push 的分叉提交历史整理成直线</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="回到-rebase-执行之前的状态" tabindex="-1"><a class="header-anchor" href="#回到-rebase-执行之前的状态" aria-hidden="true">#</a> 回到 rebase 执行之前的状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="回退版本" tabindex="-1"><a class="header-anchor" href="#回退版本" aria-hidden="true">#</a> 回退版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 回退指定 commit_id 版本
git reset --hard commit_id

# 回退上一个版本
git reset --soft HEAD^
# or
git reset --soft HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销代码" tabindex="-1"><a class="header-anchor" href="#撤销代码" aria-hidden="true">#</a> 撤销代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git revert commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改分支名" tabindex="-1"><a class="header-anchor" href="#修改分支名" aria-hidden="true">#</a> 修改分支名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 第一步
git branch -m oldBranchName newBranchName

# 第二步
git push origin :oldBranchName

# 第三步
git push --set-upstream origin newBranchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-git-配置" tabindex="-1"><a class="header-anchor" href="#查看-git-配置" aria-hidden="true">#</a> 查看 git 配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看全局配置
git config --global --list

# 查看用户名
git config --global user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加用户名" tabindex="-1"><a class="header-anchor" href="#添加用户名" aria-hidden="true">#</a> 添加用户名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --add user.name newName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除用户名" tabindex="-1"><a class="header-anchor" href="#删除用户名" aria-hidden="true">#</a> 删除用户名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --unset user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改用户名" tabindex="-1"><a class="header-anchor" href="#修改用户名" aria-hidden="true">#</a> 修改用户名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name newName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-git-用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置-git-用户名和邮箱" aria-hidden="true">#</a> 配置 Git 用户名和邮箱</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 用户名
git config --global user.name &quot;Your Name&quot;

# 邮箱
git config --global user.email &quot;email@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),r=[s];function t(l,c){return a(),i("div",null,r)}const v=e(n,[["render",t],["__file","index.html.vue"]]);export{v as default};
