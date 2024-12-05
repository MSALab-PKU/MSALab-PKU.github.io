---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "VG4D: Vision-Language Model Goes 4D Video Recognition"
authors: [Zhichao Deng, Xiangtai Li, Xia Li, Yunhai Tong, Shen Zhao, Mengyuan Liu]
date: 2024-04-17
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-04-17

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2404.11605*"
publication_short: "*arXiv, 2024*"
abstract: "Understanding the real world through point cloud video is a crucial aspect of robotics and autonomous driving systems. However, prevailing methods for 4D point cloud recognition have limitations due to sensor resolution, which leads to a lack of detailed information. Recent advances have shown that Vision-Language Models (VLM) pre-trained on web-scale text-image datasets can learn fine-grained visual concepts that can be transferred to various downstream tasks. However, effectively integrating VLM into the domain of 4D point clouds remains an unresolved problem. In this work, we propose the Vision-Language Models Goes 4D (VG4D) framework to transfer VLM knowledge from visual-text pre-trained models to a 4D point cloud network. Our approach involves aligning the 4D encoder's representation with a VLM to learn a shared visual and text space from training on large-scale image-text pairs. By transferring the knowledge of the VLM to the 4D encoder and combining the VLM, our VG4D achieves improved recognition performance. To enhance the 4D encoder, we modernize the classic dynamic point cloud backbone and propose an improved version of PSTNet, im-PSTNet, which can efficiently model point cloud videos. Experiments demonstrate that our method achieves state-of-the-art performance for action recognition on both the NTU RGB+D 60 dataset and the NTU RGB+D 120 dataset. Code is available at https://github.com/Shark0-0/VG4D."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2404.11605
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/Shark0-0/VG4D
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