const POSTS = [
  {
    id: "welcome",
    title: "欢迎来到 Learning Life",
    date: "2026-06-23",
    tag: "随笔",
    excerpt: "这是一个记录学习与生活点滴的简约博客。模块化结构，便于扩展与维护。",
    content: `
      <p>你好，欢迎来到这里。</p>
      <p>这个博客采用纯静态 HTML + CSS + JavaScript 构建，文件按职责拆分，结构清晰：</p>
      <ul>
        <li><code>css/</code> — 样式分层（变量、基础、布局、组件）</li>
        <li><code>js/data/</code> — 文章数据</li>
        <li><code>js/components/</code> — 可复用 UI 组件</li>
        <li><code>js/router.js</code> — 轻量 hash 路由</li>
      </ul>
      <blockquote>简约不是简陋，而是去掉多余，留下本质。</blockquote>
      <p>开始记录你的第一篇笔记吧。</p>
    `,
  },
  {
    id: "cryptography-notes",
    title: "密码学学习笔记",
    date: "2026-06-20",
    tag: "密码学",
    excerpt: "从古典密码到现代加密算法，记录学习过程中的理解与思考。",
    content: `
      <p>密码学是信息安全的基础。学习路径通常包括：</p>
      <h2>古典密码</h2>
      <p>凯撒密码、维吉尼亚密码等，理解替换与置换的基本思想。</p>
      <h2>现代密码</h2>
      <p>对称加密（AES）、非对称加密（RSA）、哈希函数（SHA）等核心概念。</p>
      <h3>实践建议</h3>
      <ul>
        <li>动手实现简单算法，加深理解</li>
        <li>阅读标准文档与经典教材</li>
        <li>用形式化工具验证性质（如 Lean）</li>
      </ul>
    `,
  },
  {
    id: "minimal-design",
    title: "为什么偏爱简约设计",
    date: "2026-06-15",
    tag: "设计",
    excerpt: "少即是多——在信息过载的时代，简约是一种专注。",
    content: `
      <p>简约设计并不意味着内容空洞。它意味着：</p>
      <ul>
        <li>清晰的层次与留白</li>
        <li>一致的字体与配色</li>
        <li>减少干扰，突出文字本身</li>
      </ul>
      <p>对于学习笔记类博客，阅读体验比视觉特效更重要。</p>
    `,
  },
];
