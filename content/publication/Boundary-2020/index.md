---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Boundary content graph neural network for temporal action proposal generation"
authors: [Yueran Bai, Yingying Wang, Yunhai Tong, Yang Yang, Qiyue Liu, Junhui Liu]
date: 2020-06-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-06-01

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part XXVIII 16*"
publication_short: "*ECCV, 2020*"

abstract: "Temporal action proposal generation plays an important role in video action understanding, which requires localizing high-quality action content precisely. However, generating temporal proposals with both precise boundaries and high-quality action content is extremely challenging. To address this issue, we propose a novel Boundary Content Graph Neural Network (BC-GNN) to model the insightful relations between the boundary and action content of temporal proposals by the graph neural networks. In BC-GNN, the boundaries and content of temporal proposals are taken as the nodes and edges of the graph neural network, respectively, where they are spontaneously linked. Then a novel graph computation operation is proposed to update features of edges and nodes. After that, one updated edge and two nodes it connects are used to predict boundary probabilities and content confidence score, which will be combined to generate a final high-quality proposal. Experiments are conducted on two mainstream datasets: ActivityNet-1.3 and THUMOS14. Without the bells and whistles, BC-GNN outperforms previous state-ofthe-art methods in both temporal action proposal and temporal action detection tasks."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2008.01432.pdf
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