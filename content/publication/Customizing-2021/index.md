---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Customizing Graph Neural Networks using Path Reweighting"
authors: [Jianpeng Chen, Yujing Wang, Ming Zeng, Zongyi Xiang, Bitan Hou, Yunhai Tong, Ole J Mengshoel, Yazhou Ren]
date: 2021-06-21
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-06-21

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2106.10866*"
publication_short: "*arXiv preprint*"

abstract: "Graph Neural Networks (GNNs) have been extensively used for mining graph-structured data with impressive performance. We argue that the paths in a graph imply different semantics for different downstream tasks. However, traditional GNNs do not distinguish among various downstream tasks. To address this problem and learn the high-level semantics for specific task, we design a novel GNN solution, namely Customized Graph Neural Network with Path Reweighting (CustomGNN for short). CustomGNN can automatically learn the high-level semantics for specific downstream tasks, highlight semantically relevant paths, and filter out task-irrelevant information in the graph. In addition, we analyze the semantics learned by CustomGNN and demonstrate its ability to avoid the three inherent problems in traditional GNNs, i.e., over-smoothing, poor robustness, and overfitting. In experiments with the node classification task, CustomGNN achieves state-of-the-art accuracies on 6 out of 7 datasets and competitive accuracy on the rest one."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2106.10866.pdf
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