---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "DeGNN: Improving Graph Neural Networks with Graph Decomposition"
authors: [Xupeng Miao, Nezihe Merve Gürel, Wentao Zhang, Zhichao Han, Bo Li, Wei Min, Susie Xi Rao, Hansheng Ren, Yinan Shan, Yingxia Shao, Yujie Wang, Fan Wu, Hui Xue, Yaming Yang, Zitao Zhang, Yang Zhao, Shuai Zhang, Yujing Wang, Bin Cui, Ce Zhang]
date: 2021-08-14
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-08-14

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery & Data Mining*"
publication_short: "*SIGKDD, 2021*"

abstract: "Mining from graph-structured data is an integral component of graph data management. A recent trending technique, graph convolutional network (GCN), has gained momentum in the graph mining field, and plays an essential part in numerous graph-related tasks. Although the emerging GCN optimization techniques bring improvements to specific scenarios, they perform diversely in different applications and introduce many trial-and-error costs for practitioners. Moreover, existing GCN models often suffer from oversmoothing problem. Besides, the entanglement of various graph patterns could lead to non-robustness and harm the final performance of GCNs. In this work, we propose a simple yet efficient graph decomposition approach to improve the performance of general graph neural networks. We first empirically study existing graph decomposition methods and propose an automatic connectivity-ware graph decomposition algorithm, DeGNN. To provide a theoretical explanation, we then characterize GCN from the information-theoretic perspective and show that under certain conditions, the mutual information between the output after *l* layers and the input of GCN converges to 0 exponentially with respect to *l*. On the other hand, we show that graph decomposition can potentially weaken the condition of such convergence rate, alleviating the information loss when GCN becomes deeper. Extensive experiments on various academic benchmarks and real-world production datasets demonstrate that graph decomposition generally boosts the performance of GNN models. Moreover, our proposed solution DeGNN achieves state-of-the-art performances on almost all these tasks."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://hsword.github.io/assets/pdf/sigkdd2021-degnn.pdf
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