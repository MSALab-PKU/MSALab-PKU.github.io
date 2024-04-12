---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Gated fully fusion for semantic segmentation"
authors: [Xiangtai Li, Houlong Zhao, Lei Han, Yunhai Tong, Shaohua Tan, Kuiyuan Yang]
date: 2020/4/3
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020/4/3

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Proceedings of the AAAI conference on artificial intelligence*"
publication_short: "*AAAI, 2020*"

abstract: "Semantic segmentation generates comprehensive understanding of scenes through densely predicting the category for each pixel. High-level features from Deep Convolutional Neural Networks already demonstrate their effectiveness in semantic segmentation tasks, however the coarse resolution of high-level features often leads to inferior results for small/thin objects where detailed information is important. It is natural to consider importing low level features to compensate for the lost detailed information in high-level features. Unfortunately, simply combining multi-level features suffers from the semantic gap among them. In this paper, we propose a new architecture, named Gated Fully Fusion (GFF), to selectively fuse features from multiple levels using gates in a fully connected way. Specifically, features at each level are enhanced by higher-level features with stronger semantics and lower-level features with more details, and gates are used to control the propagation of useful information which significantly reduces the noises during fusion. We achieve the state of the art results on four challenging scene parsing datasets including Cityscapes, Pascal Context, COCO-stuff and ADE20K."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://cdn.aaai.org/ojs/6805/6805-13-10034-1-10-20200524.pdf
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