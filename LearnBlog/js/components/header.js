function renderHeader(activePath) {
  const navItems = SITE_CONFIG.nav
    .map(
      (item) =>
        `<li><a href="${item.href}" class="${activePath === item.href ? "is-active" : ""}">${escapeHtml(item.label)}</a></li>`
    )
    .join("");

  return `
    <div class="site-header__inner">
      <a href="#/" class="site-header__logo">${escapeHtml(SITE_CONFIG.title)}</a>
      <nav>
        <ul class="site-header__nav">${navItems}</ul>
      </nav>
    </div>
  `;
}
