---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Global aggregation then local distribution for scene parsing"
authors: [Xiangtai Li, Li Zhang, Guangliang Cheng, Kuiyuan Yang, Yunhai Tong, Xiatian Zhu, Tao Xiang]
date: 2021/8/3
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021/8/3

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "In *IEEE Transactions on Image Processing*"
publication_short: "*TIP, 2021*"

abstract: "Modelling long-range contextual relationships is critical for pixel-wise prediction tasks such as semantic segmentation. However, convolutional neural networks (CNNs) are inherently limited to model such dependencies due to the naive structure in its building modules (e.g., local convolution kernel). While recent global aggregation methods are beneficial for longrange structure information modelling, they would oversmooth and bring noise to the regions contain fine details (e.g., boundaries and small objects), which are very much cared in the semantic segmentation task. To alleviate this problem, we propose to explore the local context for making the aggregated long-range relationship being distributed more accurately in local regions. In particular, we design a novel local distribution module which models the affinity map between global and local relationship for each pixel adaptively. Integrating existing global aggregation modules, we show that our approach can be modularized as an end-to-end trainable block and easily plugged into existing semantic segmentation networks, giving rise to the GALD networks. Despite its simplicity and versatility, our approach allows us to build new state of the art on major semantic segmentation benchmarks including Cityscapes, ADE20K, Pascal Context, Camvid and COCO-stuff. Code and trained models are released at https://github.com/lxtGH/GALD-DGCNet to foster further research."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2107.13154.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/lxtGH/GALD-DGCNet
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