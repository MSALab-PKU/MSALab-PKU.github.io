---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mitigating Semantic Confusion from Hostile Neighborhood for Graph Active Learning"
authors: [Tianmeng Yang, Min Zhou, Yujing Wang, Zhengjie Lin, Lujia Pan, Bin Cui, Yunhai Tong]
date: 2023-10-21
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-10-21

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the 32nd ACM International Conference on Information and Knowledge Management*"
publication_short: "*CIKM, 2023*"

abstract: "Graph Active Learning (GAL), which aims to find the most informative nodes in graphs for annotation to maximize the Graph Neural Networks (GNNs) performance, has attracted many research efforts but remains non-trivial challenges. One major challenge is that existing GAL strategies may introduce semantic confusion to the selected training set, particularly when graphs are noisy. Specifically, most existing methods assume all aggregating features to be helpful, ignoring the semantically negative effect between inter-class edges under the message-passing mechanism. In this work, we present Semantic-aware Active learning framework for Graphs (SAG) to mitigate the semantic confusion problem. Pairwise similarities and dissimilarities of nodes with semantic features are introduced to jointly evaluate the node influence. A new prototypebased criterion and query policy are also designed to maintain diversity and class balance of the selected nodes, respectively. Extensive experiments on the public benchmark graphs and a real-world financial dataset demonstrate that SAG significantly improves node classification performances and consistently outperforms previous methods. Moreover, comprehensive analysis and ablation study also verify the effectiveness of the proposed framework."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2308.08823.pdf
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