---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Hgamlp: Heterogeneous graph attention mlp with de-redundancy mechanism"
authors: [Yuxuan Liang, Wentao Zhang, Zeang Sheng, Ling Yang, Jiawei Jiang, Yunhai Tong, Bin Cui]
date: 2024-05-13
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-05-13

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2024 IEEE 40th International Conference on Data Engineering*"
publication_short: "*ICDE, 2024*"

abstract: "Heterogeneous graphs contain rich semantic information that can be exploited by heterogeneous graph neural networks (HGNNs). However, scaling HGNNs to large graphs is challenging due to the high computational cost. Existing non-parametric HGNNs use general subgraphs construction method and mean aggregator before training to reduce the complexity. Despite their success, they ignore two key characteristics of heterogeneous graphs, leading to low predictive performance. First, they adopt fixed local and global knowledge extractor for the feature aggregation and the semantic fusion. Besides, they bury the graph structure information of the higher-order meta-paths and fail to explore deeper graph structure information. In this paper, we address these two limitations and propose a new non-parametric HGNN framework called Heterogeneous Graph Attention Multi-Layer Perceptron (HGAMLP). Our framework employs the local multi-knowledge extractor to enhance the node representation, and leverages the de-redundancy mechanism to extract the pure graph structure information from higher-order meta-paths. Besides, it adopts a node-adaptive weight adjustment mechanism as an efficiency training model to fuse global knowledge and local knowledge. We evaluate our framework on ten commonly used heterogeneous graph datasets and show that it outperforms the state-of-the-art baselines in both accuracy and speed. Notably, our framework achieves the best performance on the large public heterogeneous graph dataset (i.e., Ogbn-mag) of Open Graph Benchmark https://ogb.stanford.edu/docs/leader_nodeprop."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://ieeexplore.ieee.org/abstract/document/10597865
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