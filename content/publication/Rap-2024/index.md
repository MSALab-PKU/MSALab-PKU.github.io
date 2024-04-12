---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "RAP-SAM: Towards Real-Time All-Purpose Segment Anything"
authors: [Shilin Xu, Haobo Yuan, Qingyu Shi, Lu Qi, Jingbo Wang, Yibo Yang, Yining Li, Kai Chen, Yunhai Tong, Bernard Ghanem, Xiangtai Li, Ming-Hsuan Yang]
date:
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate:

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "In *arXiv preprint arXiv:2401.10228*"
publication_short: "*arXiv, 2024*"

abstract: "Advanced by transformer architecture, vision foundation models (VFMs) achieve remarkable progress in performance and generalization ability. Segment Anything Model (SAM) is one remarkable model that can achieve generalized segmentation. However, most VFMs cannot run in realtime, which makes it difficult to transfer them into several products. On the other hand, current real-time segmentation mainly has one purpose, such as semantic segmentation on the driving scene. We argue that diverse outputs are needed for real applications. Thus, this work explores a new real-time segmentation setting, named all-purpose segmentation in real-time, to transfer VFMs in real-time deployment. It contains three different tasks, including interactive segmentation, panoptic segmentation, and video segmentation. We aim to use one model to achieve the above tasks in real-time. We first benchmark several strong baselines. Then, we present Real-Time All Purpose SAM (RAP-SAM). It contains an efficient encoder and an efficient decoupled decoder to perform prompt-driven decoding. Moreover, we further explore different training strategies and tuning methods to boost co-training performance further. Our code and model are available at https://github.com/xushilin1/RAP-SAM/."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2401.10228.pdf
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/xushilin1/RAP-SAM/
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