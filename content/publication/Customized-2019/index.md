---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Customized graph embedding: tailoring embedding vectors to different applications"
authors: [Bitan Hou, Yujing Wang, Ming Zeng, Shan Jiang, Ole J Mengshoel, Yunhai Tong, Jing Bai]
date: 2019-11-21
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-11-21

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:1911.09454*"
publication_short: "*arXiv preprint*"

abstract: "Graph is a natural representation of data for a variety of real-word applications, such as knowledge graph mining, social network analysis and biological network comparison. For these applications, graph embedding is crucial as it provides vector representations of the graph. One limitation of existing graph embedding methods is that their embedding optimization procedures are disconnected from the target application. In this paper, we propose a novel approach, namely Customized Graph Embedding (CGE) to tackle this problem. The CGE algorithm learns customized vector representations of graph nodes by differentiating the importance of distinct graph paths automatically for a specific application. Extensive experiments were carried out on a diverse set of node classification datasets, which demonstrate strong performances of CGE and provide deep insights into the model."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/1911.09454.pdf
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