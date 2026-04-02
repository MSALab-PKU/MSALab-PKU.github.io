---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Towards scalable and deep graph neural networks via noise masking"
authors: [Yuxuan Liang, Wentao Zhang, Zeang Sheng, Ling Yang, Quanqing Xu, Jiawei Jiang, Yunhai Tong, Bin Cui]
date: 2025-04-11
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-04-11

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the AAAI conference on artificial intelligence 2025*"
publication_short: "*AAAI, 2025*"

abstract: "In recent years, Graph Neural Networks (GNNs) have achieved remarkable success in many graph mining tasks. However, scaling them to large graphs is challenging due to the high computational and storage costs of repeated feature propagation and non-linear transformation during training. One commonly employed approach to address this challenge is model-simplification, which only executes the Propagation (P) once in the pre-processing, and Combine (C) these receptive fields in different ways and then feed them into a simple model for better performance. Despite their high predictive performance and scalability, these methods still face two limitations. First, existing approaches mainly focus on exploring different C methods from the model perspective, neglecting the crucial problem of performance degradation with increasing P depth from the data-centric perspective, known as the over-smoothing problem. Second, pre-processing overhead takes up most of the end-to-end processing time, especially for large-scale graphs. To address these limitations, we present random walk with noise masking (RMask), a plug-and-play module compatible with the existing model-simplification works. This module enables the exploration of deeper GNNs while preserving their scalability. Unlike the previous model-simplification works, we focus on continuous P and found that the noise existing inside each P is the cause of the over-smoothing issue, and use the efficient masking mechanism to eliminate them."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2412.14602
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