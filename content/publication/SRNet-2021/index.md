---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Towards Efficient Scene Understanding via Squeeze Reasoning"
authors: [Xiangtai Li, Yunhai Tong]
date: 2021-07-30
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-07-30

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "In *IEEE Transactions on Image Processing*"
publication_short: "In *IEEE 2021*"

abstract: "Graph-based convolutional model such as non-local block has shown to be effective for strengthening the context modeling ability in convolutional neural networks (CNNs). However, its pixel-wise computational overhead is prohibitive which renders it unsuitable for high resolution imagery. In this paper, we explore the efficiency of context graph reasoning and propose a novel framework called Squeeze Reasoning. Instead of propagating information on the spatial map, we first learn to squeeze the input feature into a channel-wise global vector and perform reasoning within the single vector where the computation cost can be significantly reduced. Specifically, we build the node graph in the vector where each node represents an abstract semantic concept. The refined feature within the same semantic category results to be consistent, which is thus beneficial for downstream tasks. We show that our approach can be modularized as an end-to-end trained block and can be easily plugged into existing networks. Despite its simplicity and being lightweight, the proposed strategy allows us to establish the considerable results on different semantic segmentation datasets and shows significant improvements with respect to strong baselines on various other scene understanding tasks including object detection, instance segmentation and panoptic segmentation. Code is available at https://github.com/lxtGH/SFSegNets."

# Summary. An optional shortened abstract.
summary: "Towards efficient scene understanding via squeeze reasoning"

tags: [Source Themes]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://ieeexplore.ieee.org/abstract/document/9502519
  icon_pack: fas
  icon: link
- name: PDF
  url: https://arxiv.org/pdf/2011.03308.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/lxtGH/SFSegNets
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

{{% callout note %}}
Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}