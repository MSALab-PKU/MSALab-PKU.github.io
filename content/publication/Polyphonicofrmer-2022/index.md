---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Polyphonicformer: Unified query learning for depth-aware video panoptic segmentation"
authors: [Haobo Yuan, Xiangtai Li, Yibo Yang, Guangliang Cheng, Jing Zhang, Yunhai Tong, Lefei Zhang, Dacheng Tao]
date: 2022-10-23
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-10-23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*European Conference on Computer Vision*"
publication_short: "*ECCV, 2022*"

abstract: "The Depth-aware Video Panoptic Segmentation (DVPS) is a new challenging vision problem that aims to predict panoptic segmentation and depth in a video simultaneously. The previous work solves this task by extending the existing panoptic segmentation method with an extra dense depth prediction and instance tracking head. However, the relationship between the depth and panoptic segmentation is not well explored – simply combining existing methods leads to competition and needs carefully weight balancing. In this paper, we present PolyphonicFormer, a vision transformer to unify these sub-tasks under the DVPS task and lead to more robust results. Our principal insight is that the depth can be harmonized with the panoptic segmentation with our proposed new paradigm of predicting instance level depth maps with object queries. Then the relationship between the two tasks via query-based learning is explored. From the experiments, we demonstrate the benefits of our design from both depth estimation and panoptic segmentation aspects. Since each thing query also encodes the instance-wise information, it is natural to perform tracking directly with appearance learning. Our method achieves state-of-the-art results on two DVPS datasets (Semantic KITTI, Cityscapes), and ranks 1st on the ICCV-2021 BMTT Challenge video + depth track."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2112.02582.pdf
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/HarborYuan/PolyphonicFormer
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