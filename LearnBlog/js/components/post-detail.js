function renderPostDetail(post) {
  return `
    <article class="post-detail">
      <a href="#/" class="post-detail__back">&larr; 返回列表</a>
      <header class="post-detail__header">
        <h1 class="post-detail__title">${escapeHtml(post.title)}</h1>
        <div class="post-detail__meta">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span class="post-card__tag">${escapeHtml(post.tag)}</span>
        </div>
      </header>
      <div class="post-detail__body">${post.content}</div>
    </article>
  `;
}

function renderNotFound() {
  return `
    <div class="not-found">
      <h2>页面未找到</h2>
      <p>你要找的内容不存在。</p>
      <p><a href="#/">返回首页</a></p>
    </div>
  `;
}

function renderAbout() {
  return `
    <article class="post-detail">
      <header class="post-detail__header">
        <h1 class="post-detail__title">关于</h1>
      </header>
      <div class="post-detail__body">
        <p><strong>${escapeHtml(SITE_CONFIG.title)}</strong> 是一个个人学习博客。</p>
        <p>记录编程、密码学、数学等领域的学习笔记与思考。</p>
        <h2>项目结构</h2>
        <pre><code>LearnBlog/
├── index.html
├── css/          # 样式模块
├── js/
│   ├── config.js
│   ├── data/     # 文章数据
│   ├── components/
│   ├── router.js
│   └── app.js</code></pre>
        <p>新增文章：在 <code>js/data/posts.js</code> 中添加条目即可。</p>
      </div>
    </article>
  `;
}
