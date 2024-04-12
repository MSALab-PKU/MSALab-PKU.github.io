---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Dst-det: Simple dynamic self-training for open-vocabulary object detection"
authors: [Shilin Xu, Xiangtai Li, Size Wu, Wenwei Zhang, Yining Li, Guangliang Cheng, Yunhai Tong, Kai Chen, Chen Change Loy]
date: 2023-10-02
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-10-02

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2310.01393*"
publication_short: "*arXiv, 2023*"

abstract: "Open-vocabulary object detection (OVOD) aims to detect the objects beyond the set of categories observed during training. This work presents a simple yet effective strategy that leverages the zero-shot classification ability of pre-trained vision-language models (VLM), such as CLIP, to classify proposals for all possible novel classes directly. Unlike previous works that ignore novel classes during training and rely solely on the region proposal network (RPN) for novel object detection, our method selectively filters proposals based on specific design criteria. The resulting sets of identified proposals serve as pseudo-labels for novel classes during the training phase. It enables our self-training strategy to improve the recall and accuracy of novel classes in a self-training manner without requiring additional annotations or datasets. We further propose a simple offline pseudo-label generation strategy to refine the object detector. Empirical evaluations on three datasets, including LVIS, V3Det, and COCO, demonstrate significant improvements over the baseline performance without incurring additional parameters or computational costs during inference. In particular, compared with previous F-VLM, our method achieves a 1.7-2.0% improvement on LVIS dataset and 2.3-3.8% improvement on the recent challenging V3Det dataset. Our method also boosts the strong baseline by 6% mAP on COCO. The code and models will be publicly available at https://github.com/xushilin1/dst-det."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2310.01393.pdf
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/xushilin1/dst-det
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