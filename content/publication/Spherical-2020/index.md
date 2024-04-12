---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Spherical criteria for fast and accurate 360 object detection"
authors: [Pengyu Zhao, Ansheng You, Yuanxing Zhang, Jiaying Liu, Kaigui Bian, Yunhai Tong]
date: 2020-04-03
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-04-03

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the AAAI Conference on Artificial Intelligence*"
publication_short: "*AAAI, 2020*"

abstract: "With the advance of omnidirectional panoramic technology, 360◦ imagery has become increasingly popular in the past few years. To better understand the 360◦ content, many works resort to the 360◦ object detection and various criteria have been proposed to bound the objects and compute the intersection-over-union (IoU) between bounding boxes based on the common equirectangular projection (ERP) or perspective projection (PSP). However, the existing 360◦ criteria are either inaccurate or inefficient for real-world scenarios. In this paper, we introduce a novel spherical criteria for fast and accurate 360◦ object detection, including both spherical bounding boxes and spherical IoU (SphIoU). Based on the spherical criteria, we propose a novel two-stage 360◦ detector, ie, Reprojection R-CNN, by combining the advantages of both ERP and PSP, yielding efficient and accurate 360◦ object detection. To validate the design of spherical criteria and Reprojection R-CNN, we construct two unbiased synthetic datasets for training and evaluation. Experimental results reveal that compared with the existing criteria, the two-stage detector with spherical criteria achieves the best mAP results under the same inference speed, demonstrating that the spherical criteria can be more suitable for 360◦ object detection. Moreover, Reprojection R-CNN outperforms the previous state-of-the-art methods by over 30% on mAP with competitive speed, which confirms the efficiency and accuracy of the design."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://cdn.aaai.org/ojs/6995/6995-13-10224-1-10-20200525.pdf
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