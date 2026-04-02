---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Open-o3 Video: Grounded Video Reasoning with Explicit Spatio-Temporal Evidence"
authors: [Jiahao Meng, Xiangtai Li, Haochen Wang, Yue Tan, Tao Zhang, Lingdong Kong, Yunhai Tong, Anran Wang, Zhiyang Teng, Yujing Wang, Zhuochen Wang]
date: 2025-10-23
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-10-23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2510.20579*"
publication_short: "*arXiv, 2025*"

abstract: "Most video reasoning models only generate textual reasoning traces without indicating when and where key evidence appears. Recent models such as OpenAI-o3 have sparked wide interest in evidence-centered reasoning for images, yet extending this ability to videos is more challenging due to the need for joint temporal tracking and spatial localization across dynamic scenes. We introduce Open-o3-Video, a non-agent framework that integrates explicit spatio-temporal evidence into video reasoning by highlighting key timestamps, objects, and bounding boxes, making the reasoning process traceable and verifiable. To enable this capability, we first construct high-quality datasets STGR that provide unified spatio-temporal supervision, which is absent in existing resources. We further adopt a cold-start reinforcement learning strategy with specially designed rewards that jointly encourage answer accuracy, temporal alignment, and spatial precision. On the V-STAR benchmark, Open-o3-Video achieves state-of-the-art performance, improving mAM by 14.4% and mLGM by 24.2% over the Qwen2.5-VL baseline, and shows consistent gains across a range of video understanding benchmarks. Beyond accuracy, the grounded reasoning traces produced by Open-o3-Video support confidence-aware test-time scaling, improving answer reliability."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2510.20579?
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://marinero4972.github.io/projects/Open-o3-Video/
  icon_pack: fab
  icon: github

url_pdf: 
url_code: 
url_dataset:
url_poster:
url_project:
url_slides:
url_source: 
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---