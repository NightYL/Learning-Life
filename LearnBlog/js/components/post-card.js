function renderPostCard(post) {
  return `
    <a href="#/post/${post.id}" class="post-card">
      <div class="post-card__meta">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span class="post-card__tag">${escapeHtml(post.tag)}</span>
      </div>
      <h2 class="post-card__title">${escapeHtml(post.title)}</h2>
      <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
    </a>
  `;
}

function renderPostList(posts) {
  const cards = sortPostsByDate(posts).map(renderPostCard).join("");
  return `
    <section class="post-list">
      <header class="post-list-header">
        <h1>文章</h1>
        <p>${escapeHtml(SITE_CONFIG.tagline)}</p>
      </header>
      ${cards}
    </section>
  `;
}
