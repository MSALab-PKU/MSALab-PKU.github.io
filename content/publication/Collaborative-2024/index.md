---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Collaborative Multi-Task Representation for Natural Language Understanding"
authors: [Yaming Yang, Defu Cao, Ming Zeng, Jing Yu, Xiang Ren, Yunhai Tong, Yujing Wang]
date: 2024-06-30
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-06-30

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2024 International Joint Conference on Neural Networks*"
publication_short: "*IJCNN, 2024*"

abstract: "Multi-task learning has shown large benefits in Natural Language Understanding (NLU). However, current state-of-the-arts (SOTAs) like MT-DNN and MMoE do not model task relationships explicitly and fail to obtain effective task alignment. In this paper, we propose a Collaborative Multi-Task Representation (CMTR) framework to tackle this problem. We capture instance-level task relations through a task interaction layer, which helps guide the fusion of task-oriented representations into the final representation. Moreover, tailored loss functions are proposed to facilitate the learning of task alignment. Specifically, we leverage knowledge distillation as an auxiliary loss to assist the adaptation layers in generating task-oriented representations. We also introduce a regularization loss to learn better gating functions for multi-task fusion. Empirically, CMTR outperforms SOTA multi-task learning frameworks on most natural language understanding tasks in the GLUE benchmark. Furthermore, it achieves better task alignment and demonstrates good interpretability."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://ieeexplore.ieee.org/abstract/document/10650257
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