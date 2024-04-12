---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Panopticpartformer++: A unified and decoupled view for panoptic part segmentation"
authors: [Xiangtai Li, Shilin Xu, Yibo Yang, Haobo Yuan, Guangliang Cheng, Yunhai Tong, Zhouchen Lin, Ming-Hsuan Yang, Dacheng Tao]
date: 2023-03-22
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-03-22

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2301.00954*"
publication_short: "*arXiv, 2023*"

abstract: "Panoptic Part Segmentation (PPS) unifies panoptic and part segmentation into one task. Previous works utilize separate approaches to handle things, stuff, and part predictions without shared computation and task association. We aim to unify these tasks at the architectural level, designing the first end-to-end unified framework, Panoptic-PartFormer. Moreover, we find the previous metric PartPQ biases to PQ. To handle both issues, we first design a meta-architecture that decouples part features and things/stuff features, respectively. We model things, stuff, and parts as object queries and directly learn to optimize all three forms of prediction as a unified mask prediction and classification problem. We term our model as Panoptic-PartFormer. Second, we propose a new metric Part-Whole Quality (PWQ), better to measure this task from pixel-region and part-whole perspectives. It also decouples the errors for part segmentation and panoptic segmentation. Third, inspired by Mask2Former, based on our meta-architecture, we propose Panoptic-PartFormer++ and design a new part-whole cross-attention scheme to boost part segmentation qualities further. We design a new part-whole interaction method using masked cross attention. Finally, extensive ablation studies and analysis demonstrate the effectiveness of both Panoptic-PartFormer and Panoptic-PartFormer++. Compared with previous Panoptic-PartFormer, our Panoptic-PartFormer++ achieves 2% PartPQ and 3% PWQ improvements on the Cityscapes PPS dataset and 5% PartPQ on the Pascal Context PPS dataset. On both datasets, Panoptic-PartFormer++ achieves new state-of-the-art results. Our models can serve as a strong baseline and aid future research in PPS. The source code and trained models will be available at https://github.com/lxtGH/Panoptic-PartFormer."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2301.00954.pdf
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