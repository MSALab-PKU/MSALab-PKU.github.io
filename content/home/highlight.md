---
widget: blank
headless: true
weight: 20
title: 
design:
  columns: "1"
---

<style>
/* 1. 整体部分合为一个单一的专业卡片型容器 */
.highlight-card { max-width: 1450px; width: 95%; margin: 3rem auto; padding: 3.5rem; border-radius: 18px; background: #fff; border: 1px solid rgba(0, 0, 0, 0.04); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05); }

/* 头部文本居中显示 */
.highlight-card h2 { margin: 0 0 1rem; font-size: 2.2rem; line-height: 1.15; color: #0f172a; text-align: center; }
.highlight-card p.highlight-header-lead { margin: 0 0 1.5rem; font-size: 1.1rem; line-height: 1.8; color: #475569; text-align: center; }

/* 2. 文本环绕容器 */
.highlight-wrap { position: relative; clear: both; }

/* 图片画廊：浮动到右侧 */
.highlight-gallery { float: right; width: 55%; margin-left: 2rem; margin-bottom: 2rem; border-radius: 18px; overflow: hidden; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); background: #f8fafc; }

/* 🌟 核心修复：移除之前固定的 min-height，让高度彻底由图片自身决定 🌟 */
.highlight-gallery .carousel-inner { height: auto !important; }
.highlight-gallery .carousel-item { height: auto; }
.highlight-gallery .carousel-item img { display: block; width: 100%; height: auto; object-fit: contain; }

/* 控制按钮：确保居中于图片 */
.highlight-gallery .carousel-control-prev, .highlight-gallery .carousel-control-next { width: 10%; top: 50%; transform: translateY(-50%); padding: 0; }
.highlight-gallery .carousel-control-prev-icon, .highlight-gallery .carousel-control-next-icon { background-color: rgba(15, 23, 42, 0.6); border-radius: 50%; background-size: 40% 40%; width: 3rem; height: 3rem; }

/* 3. 限定样式只在 highlight-card 内部生效 */
.highlight-card p, .highlight-card .highlight-subtitle, .highlight-card ul, .highlight-card .highlight-link { line-height: 1.7; color: #475569; font-size: 1.05rem; }
.highlight-card p { margin-bottom: 1rem; }
.highlight-card .highlight-subtitle { margin: 1.8rem 0 0.8rem; font-size: 0.9rem; font-weight: 700; letter-spacing: 0.1em; color: #2563eb; text-transform: uppercase; }
.highlight-card ul.highlight-points { margin: 0; padding-left: 1.2rem; }
.highlight-card ul.highlight-points li { margin-bottom: 0.6rem; }
.highlight-card .highlight-link { display: inline-flex; margin-top: 2rem; font-weight: 600; color: #2563eb; text-decoration: none; font-size: 1.1rem; transition: color 0.2s; }
.highlight-card .highlight-link:hover { color: #1d4ed8; }

/* 清除浮动影响 */
.highlight-wrap::after { content: ""; display: block; clear: both; }

/* 4. 移动端/小屏幕适配 */
@media (max-width: 1024px) { 
  .highlight-card { padding: 2rem 1.5rem; }
  .highlight-card h2 { font-size: 1.8rem; }
  .highlight-gallery { float: none; width: 100%; margin: 2rem 0; } 
}
</style>

<div class="highlight-card">
<h2>Highlights</h2>
<p class="highlight-header-lead">We conduct cutting-edge research in <strong>multimodal learning</strong>, <strong>visual perception</strong>, <strong>video understanding</strong>, and <strong>language semantics</strong>, pushing AI systems toward deeper and more reliable semantic intelligence.</p>

<div class="highlight-wrap">
<div class="highlight-gallery">
{{< highlight_carousel id="research-highlight-carousel" height="100%" img1="muddit.png" alt1="Project Muddit" img2="det.png" alt2="Detection project" img3="openo3video.png" alt3="OpenO3 Video project" >}}
</div>

<p>Our work combines strong theoretical foundations with practical, open-world applications in large-scale AI.</p>
<div class="highlight-subtitle">Current Core Directions</div>
<ul class="highlight-points">
<li>Multimodal large language models & agentic reasoning.</li>
<li>Image & video generation and editing.</li>
<li>Unified models.</li>
<li>Efficient and trustworthy large language models.</li>
</ul>
<div class="highlight-subtitle">Open Positions</div>
<p style="margin-bottom: 0;">We welcome self-motivated research interns and PhD applicants with strong mathematical and engineering backgrounds, especially those interested in <strong>multimodal AI</strong> and <strong>generative modeling</strong>.</p>
<a class="highlight-link" href="./publication/">Explore our recent work -></a>
</div>
</div>