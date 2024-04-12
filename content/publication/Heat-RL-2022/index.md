---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Heat-RL: Online Model Selection for Streaming Time-Series Anomaly Detection"
authors: [Yujing Wang, Luoxin Xiong, Mingliang Zhang, Hui Xue, Qi Chen, Yaming Yang, Yunhai Tong, Congrui Huang, Bixiong Xu]
date: 2022-07-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-07-01

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Conference on Lifelong Learning Agents, 2022*"
publication_short: "*CoLLAs, 2022*"

abstract: "Time-series anomaly detection plays an important role in various applications. In a commercial system, anomaly detection models are either unsupervised or pre-trained in a self-supervised manner offline; while in the online serving stage, an appropriate model should be selected to fulfill each customer’s requirement with only a few human interactions. Existing online model selection methods do not have good data efficiency, failing to achieve good performance with limited number of manual feedbacks. In this paper, we propose Heat-RL, a novel reinforcement learning algorithm tailored to online model selection for streaming time-series data. Specifically, we design a new state based on metric-oriented heatmaps and apply ResNet for policy and value networks to capture the correlations among similar model configurations. Experiments demonstrated the effectiveness of Heat-RL on both academic and industrial datasets. On all datasets, the average F1 and last F1 scores have been improved by 5.5% and 14.6% respectively compared to the best state-of-the-art solution."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://proceedings.mlr.press/v199/wang22a/wang22a.pdf
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