---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Label-efficient interactive time-series anomaly detection"
authors: [Hong Guo, Yujing Wang, Jieyu Zhang, Zhengjie Lin, Yunhai Tong, Lei Yang, Luoxing Xiong, Congrui Huang]
date: 2022-12-30
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-12-30

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2212.14621*"
publication_short: "*arXiv preprint*"

abstract: "Time-series anomaly detection is an important task and has been widely applied in the industry. Since manual data annotation is expensive and inefficient, most applications adopt unsupervised anomaly detection methods, but the results are usually sub-optimal and unsatisfactory to end customers. Weak supervision is a promising paradigm for obtaining considerable labels in a low-cost way, which enables the customers to label data by writing heuristic rules rather than annotating each instance individually. However, in the time-series domain, it is hard for people to write reasonable labeling functions as the time-series data is numerically continuous and difficult to be understood. In this paper, we propose a Label-Efficient Interactive Time-Series Anomaly Detection (LEIAD) system, which enables a user to improve the results of unsupervised anomaly detection by performing only a small amount of interactions with the system. To achieve this goal, the system integrates weak supervision and active learning collaboratively while generating labeling functions automatically using only a few labeled data. All of these techniques are complementary and can promote each other in a reinforced manner. We conduct experiments on three time-series anomaly detection datasets, demonstrating that the proposed system is superior to existing solutions in both weak supervision and active learning areas. Also, the system has been tested in a real scenario in industry to show its practicality"

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2212.14621.pdf
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