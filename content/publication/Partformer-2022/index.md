---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Panoptic-partformer: Learning a unified model for panoptic part segmentation"
authors: [Xiangtai Li, Shilin Xu, Yibo Yang, Guangliang Cheng, Yunhai Tong, Dacheng Tao]
date: 2022/10/23
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022/10/23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *European Conference on Computer Vision*"
publication_short: "In *ECCV 2022*"

abstract: "Panoptic Part Segmentation (PPS) aims to unify panoptic segmentation and part segmentation into one task. Previous work mainly utilizes separated approaches to handle thing, stuff, and part predictions individually without performing any shared computation and task association. In this work, we aim to unify these tasks at the architectural level, designing the first end-to-end unified method named PanopticPartFormer. In particular, motivated by the recent progress in Vision Transformer, we model things, stuff, and part as object queries and directly learn to optimize the all three predictions as unified mask prediction and classification problem. We design a decoupled decoder to generate part feature and thing/stuff feature respectively. Then we propose to utilize all the queries and corresponding features to perform reasoning jointly and iteratively. The final mask can be obtained via inner product between queries and the corresponding features. The extensive ablation studies and analysis prove the effectiveness of our framework. Our Panoptic-PartFormer achieves the new state-of-the-art results on both Cityscapes PPS and Pascal Context PPS datasets with around 70% GFlops and 50% parameters decrease. Given its effectiveness and conceptual simplicity, we hope the Panoptic-PartFormer can serve as a strong baseline and aid future research in PPS. Our code and models will be available at https://github.com/lxtGH/Panoptic-PartFormer."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2204.04655.pdf
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/lxtGH/Panoptic-PartFormer
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