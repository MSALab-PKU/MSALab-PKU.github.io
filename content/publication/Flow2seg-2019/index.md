---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Flow2seg: Motion-aided semantic segmentation"
authors: [Xiangtai Li, Jiangang Bai, Kuiyuan Yang, Yunhai Tong]
date: 2019-09-09
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-09-09

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Artificial Neural Networks and Machine Learning–ICANN 2019: Image Processing: 28th International Conference on Artificial Neural Networks, Munich, Germany, September 17–19, 2019, Proceedings, Part III 28*"
publication_short: "*ICANN, 2019*"

abstract: "Motion is an important clue for segmentation. In this paper, we leverage motion information densely represented by optical flow to assist the semantic segmentation task. Specifically, our framework takes both image and optical flow as input, where image goes through a state-of-the-art deep network and optical flow goes through a relatively shallow network, and results from both paths are fused together in a residual manner. Unlike image, optical flow is weakly related to semantics but can separate different objects according motion consistency, which motivates us to use relatively shallow network to process optical flow to avoid overfitting and keep spatial information. In our experiment on Cityscapes, we find that optical flow improves image-based segmentation on object boundaries especially on small thin objects. Aided by motion, we achieve comparable results with state-of-the-art methods."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://link.springer.com/chapter/10.1007/978-3-030-30508-6_19
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