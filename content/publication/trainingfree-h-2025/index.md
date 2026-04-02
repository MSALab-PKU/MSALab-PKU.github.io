---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Training-free heterogeneous graph condensation via data selection"
authors: [Yuxuan Liang, Wentao Zhang, Xinyi Gao, Ling Yang, Chong Chen, Hongzhi Yin, Yunhai Tong, Bin Cui]
date: 2025-05-19
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-05-19

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2025 IEEE 41st International Conference on Data Engineering*"
publication_short: "*ICDE, 2025*"

abstract: "Efficient training of large-scale heterogeneous graphs is of paramount importance in real-world applications. However, existing approaches typically explore simplified models to mitigate resource and time overhead, neglecting the crucial aspect of simplifying large-scale heterogeneous graphs from the data-centric perspective. Addressing this gap, HGCond introduces graph condensation (GC) in heterogeneous graphs and generates a small condensed graph for efficient model training. Despite its efficacy in graph generation, HGCond encounters two significant limitations. The first is low effectiveness, HGCond excessively relies on the simplest relay model for the condensation procedure, which restricts the ability to exert powerful Heterogeneous Graph Neural Networks (HGNNs) with flexible condensation ratio and limits the generalization ability. The second is low efficiency, HGCond follows the existing GC methods designed for homogeneous graphs and leverages the sophisticated optimization paradigm, resulting in a time-consuming condensing procedure. In light of these challenges, we present the f irst Training Free Heterogeneous Graph Condensation method, termed FreeHGC, facilitating both efficient and high-quality generation of heterogeneous condensed graphs. Specifically, we reformulate the heterogeneous graph condensation problem as a data selection issue, offering a new perspective for assessing and condensing representative nodes and edges in the heterogeneous graphs. By leveraging rich meta-paths, we introduce a new, highquality heterogeneous data selection criterion to select target-type nodes. Furthermore, two training-free condensation strategies for heterogeneous graphs are designed to condense and synthesize other-types nodes effectively. Extensive experiments demonstrate the effectiveness and efficiency of our proposed method. Besides, FreeHGC exhibits excellent generalization ability across various heterogeneous graph neural networks. Our codes are available at https://github.com/PKU-DAIR/FreeHGC."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2412.16250?
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/PKU-DAIR/FreeHGC
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