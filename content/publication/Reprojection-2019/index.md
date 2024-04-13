---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Reprojection R-CNN: A Fast and Accurate Object Detector for 360 deg Images"
authors: [Pengyu Zhao, Ansheng You, Yuanxing Zhang, Jiaying Liu, Kaigui Bian, Yunhai Tong]
date: 2019-07-27
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-07-27

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:1907.11830*"
publication_short: "*arXiv preprint*"

abstract: "360 deg images are usually represented in either equirectangular projection (ERP) or multiple perspective projections. Different from the flat 2D images, the detection task is challenging for 360 deg images due to the distortion of ERP and the inefficiency of perspective projections. However, existing methods mostly focus on one of the above representations instead of both, leading to limited detection performance. Moreover, the lack of appropriate bounding-box annotations as well as the annotated datasets further increases the difficulties of the detection task. In this paper, we present a standard object detection framework for 360 deg images. Specifically, we adapt the terminologies of the traditional object detection task to the omnidirectional scenarios, and propose a novel two-stage object detector, i.e., Reprojection R-CNN by combining both ERP and perspective projection. Owing to the omnidirectional field-of-view of ERP, Reprojection R-CNN first generates coarse region proposals efficiently by a distortion-aware spherical region proposal network. Then, it leverages the distortion-free perspective projection and refines the proposed regions by a novel reprojection network. We construct two novel synthetic datasets for training and evaluation. Experiments reveal that Reprojection R-CNN outperforms the previous state-of-the-art methods on the mAP metric. In addition, the proposed detector could run at 178ms per image in the panoramic datasets, which implies its practicability in real-world applications."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/1907.11830.pdf
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