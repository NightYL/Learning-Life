const Router = {
  parseHash() {
    const hash = location.hash.slice(1) || "/";
    const parts = hash.split("/").filter(Boolean);
    return { parts, raw: hash };
  },

  navigate() {
    const { parts } = this.parseHash();
    App.render(parts);
  },

  init() {
    window.addEventListener("hashchange", () => this.navigate());
    this.navigate();
  },
};
