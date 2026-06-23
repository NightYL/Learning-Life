function renderFooter() {
  return `
    <div class="site-footer__inner">
      <p>&copy; ${SITE_CONFIG.year} ${escapeHtml(SITE_CONFIG.author)} · ${escapeHtml(SITE_CONFIG.tagline)}</p>
    </div>
  `;
}
