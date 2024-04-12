---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "AutoADR: Automatic model design for ad relevance"
authors: [Yiren Chen, Yaming Yang, Hong Sun, Yujing Wang, Yu Xu, Wei Shen, Rong Zhou, Yunhai Tong, Jing Bai, Ruofei Zhang]
date:
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate:

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Proceedings of the 29th ACM International Conference on Information & Knowledge Management*"
publication_short: "*CIKM, 2020*"

abstract: "Large-scale pre-trained models have attracted extensive attention in the research community and shown promising results on various tasks of natural language processing. However, these pre-trained models are memory and computation intensive, hindering their deployment into industrial online systems like Ad Relevance. Meanwhile, how to design an effective yet efficient model architecture is another challenging problem in online Ad Relevance. Recently, AutoML shed new lights on architecture design, but how to integrate it with pre-trained language models remains unsettled. In this paper, we propose AutoADR (Automatic model design for AD Relevance) — a novel end-to-end framework to address this challenge, and share our experience to ship these cutting-edge techniques into online Ad Relevance system at Microsoft Bing. Specifically, AutoADR leverages a one-shot neural architecture search algorithm to find a tailored network architecture for Ad Relevance. The search process is simultaneously guided by knowledge distillation from a large pre-trained teacher model (e.g. BERT), while taking the online serving constraints (e.g. memory and latency) into consideration. We add the model designed by AutoADR as a sub-model into the production Ad Relevance model. This additional sub-model improves the Precision-Recall AUC (PR AUC) on top of the original Ad Relevance model by 2.65X of the normalized shipping bar. More importantly, adding this automatically designed sub-model leads to a statistically significant 4.6% Bad-Ad ratio reduction in online A/B testing. This model has been shipped into Microsoft Bing Ad Relevance Production model."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2010.07075.pdf
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