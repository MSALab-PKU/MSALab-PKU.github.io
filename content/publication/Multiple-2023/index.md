---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Multiple Connectivity Views for Session-based Recommendation"
authors: [Yaming Yang, Jieyu Zhang, Yujing Wang, Zheng Miao, Yunhai Tong]
date: 2023-09-14
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-09-14

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the 17th ACM Conference on Recommender Systems, 2023*"
publication_short: "*RecSys, 2023*"

abstract: "Session-based recommendation (SBR), which makes the next-item recommendation based on previous anonymous actions, has drawn increasing attention. The last decade has seen multiple deep learning-based modeling choices applied on SBR successfully, e.g., recurrent neural networks (RNNs), convolutional neural networks (CNNs), graph neural networks (GNNs), and each modeling choice has its intrinsic superiority and limitation. We argue that these modeling choices differentiate from each other by (1) the way they capture the interactions between items within a session and (2) the operators they adopt for composing the neural network, e.g., convolutional operator or self-attention operator. In this work, we dive deep into the former as it is relatively unique to the SBR scenario, while the latter is shared by general neural network modeling techniques. We first introduce the concept of connectivity view to describe the different item interaction patterns at the input level. Then, we develop the Multiple Connectivity Views for Session-based Recommendation (MCV-SBR), a unified framework that incorporates different modeling choices in a single model through the lens of connectivity view. In addition, MCV-SBR allows us to effectively and efficiently explore the search space of the combinations of connectivity views by the Tree-structured Parzen Estimator (TPE) algorithm. Finally, on three widely used SBR datasets, we verify the superiority of MCV-SBR by comparing the searched models with state-of-the-art baselines. We also conduct a series of studies to demonstrate the efficacy and practicability of the proposed connectivity view search algorithm, as well as other components in MCV-SBR."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://web.archive.org/web/20231011120529id_/https://dl.acm.org/doi/pdf/10.1145/3604915.3608861
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