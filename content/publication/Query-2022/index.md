---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Query Learning of Both Thing and Stuff for Panoptic Segmentation"
authors: [Shilin Xu, Xiangtai Li, Yibo Yang, Hongyang Li, Guangliang Cheng, Yunhai Tong]
date: 2022-10-18
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-10-18

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2022 IEEE International Conference on Image Processing (ICIP)*"
publication_short: "*ICIP, 2022*"

abstract: "Starting from DETR, query based detection and segmentation methods achieve comparable results as previous works with a simplified and elegant pipeline. In this work, a novel, simple and unified baseline, named QueryPanSeg, is proposed for panoptic segmentation. QueryPanSeg represents both things and stuff as learnable queries separately. For thing query, we propose to encode each instance mask into compact mask vectors and perform classification, box regression and mask encoding regression simultaneously. For stuff query, we propose a residual interactive learning where each stuff query is responsible for one semantic category and performs pixel interaction via one multi-head attention layer. With this approach, instance-wise and semantically consistent properties for things and stuff can be unified in one framework. Compared with the original DETR, our approach results in a nearly 10 times shorter training schedule to converge. Compared with previous box-based and box-free methods, our proposed approach outperforms many state-of-the-art results with much simpler pipeline without handcrafted components."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://ieeexplore.ieee.org/abstract/document/9897546
  icon_pack: fas
  icon: file-pdf

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