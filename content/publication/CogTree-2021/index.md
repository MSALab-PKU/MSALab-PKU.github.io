---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "CogTree: Cognition Tree Loss for Unbiased Scene Graph Generation"
authors: [Jing Yu, Yuan Chai, Yujing Wang, Yue Hu, Qi Wu]
date: 2021-06-08
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-06-08

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *International Joint Conferences on Artificial Intelligence*"
publication_short: "*IJCAI, 2021*"

abstract: "Scene graphs are semantic abstraction of images that encourage visual understanding and reasoning. However, the performance of Scene Graph Generation (SGG) is unsatisfactory when faced with biased data in real-world scenarios. Conventional debiasing research mainly studies from the view of balancing data distribution or learning unbiased models and representations, ignoring the correlations among the biased classes. In this work, we analyze this problem from a novel cognition perspective: automatically building a hierarchical cognitive structure from the biased predictions and navigating that hierarchy to locate the relationships, making the tail relationships receive more attention in a coarse-to-fine mode. To this end, we propose a novel debiasing Cognition Tree (CogTree) loss for unbiased SGG. We first build a cognitive structure CogTree to organize the relationships based on the prediction of a biased SGG model. The CogTree distinguishes remarkably different relationships at first and then focuses on a small portion of easily confused ones. Then, we propose a debiasing loss specially for this cognitive structure, which supports coarse-to-fine distinction for the correct relationships. The loss is model-agnostic and consistently boosting the performance of several state-of-the-art models. The code is available at: https://github.com/CYVincent/SceneGraph-Transformer-CogTree."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2009.07526.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/CYVincent/Scene-Graph-Transformer-CogTree
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