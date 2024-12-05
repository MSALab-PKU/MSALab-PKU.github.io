---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Customizing graph neural networks using path reweighting"
authors: [Jianpeng Chen, Yujing Wang, Ming Zeng, Zongyi Xiang, Bitan Hou, Yunhai Tong, Ole J Mengshoel, Yazhou Ren]
date: 2024-07-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-07-01

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Information Sciences*"
publication_short: "*Information Sciences*"

abstract: "Graph Neural Networks (GNNs) have been extensively used for mining graph-structured data with impressive performance. However, because these traditional GNNs do not distinguish among various downstream tasks, embeddings embedded by them are not always effective. Intuitively, paths in a graph imply different semantics for different downstream tasks. Inspired by this, we design a novel GNN solution, namely Customized Graph Neural Network with Path Reweighting (CustomGNN for short). Specifically, the proposed CustomGNN can automatically learn the high-level semantics for specific downstream tasks to highlight semantically relevant paths as well to filter out task-irrelevant noises in a graph. Furthermore, we empirically analyze the semantics learned by CustomGNN and demonstrate its ability to avoid the three inherent problems in traditional GNNs, i.e., over-smoothing, poor robustness, and overfitting. In experiments with the node classification task, CustomGNN achieves state-of-the-art accuracies on three standard graph datasets and four large graph datasets. The source code of the proposed CustomGNN is available at https://github.com/cjpcool/CustomGNN."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2106.10866
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/cjpcool/CustomGNN
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