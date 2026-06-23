const App = {
  render(parts) {
    const headerEl = document.getElementById("site-header");
    const mainEl = document.getElementById("site-main");
    const footerEl = document.getElementById("site-footer");

    let activePath = "#/";
    let mainContent = "";

    if (parts.length === 0) {
      mainContent = renderPostList(POSTS);
    } else if (parts[0] === "post" && parts[1]) {
      activePath = "";
      const post = getPostById(parts[1]);
      mainContent = post ? renderPostDetail(post) : renderNotFound();
      document.title = post
        ? `${post.title} · ${SITE_CONFIG.title}`
        : `未找到 · ${SITE_CONFIG.title}`;
    } else if (parts[0] === "about") {
      activePath = "#/about";
      mainContent = renderAbout();
      document.title = `关于 · ${SITE_CONFIG.title}`;
    } else {
      mainContent = renderNotFound();
      document.title = `未找到 · ${SITE_CONFIG.title}`;
    }

    if (parts.length === 0) {
      document.title = SITE_CONFIG.title;
    }

    headerEl.innerHTML = renderHeader(activePath);
    mainEl.innerHTML = mainContent;
    footerEl.innerHTML = renderFooter();
  },

  init() {
    Router.init();
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
