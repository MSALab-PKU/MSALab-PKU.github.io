---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "BoundarySqueeze: Image Segmentation as Boundary Squeezing"
authors: [Hao He, Xiangtai Li, Yibo Yang, Guangliang Cheng, Yunhai Tong, Lubin Weng, Zhouchen Lin, Shiming Xiang]
date: 2021-12-14
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-12-14

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "In *arXiv preprint arXiv:2105.11668*"
publication_short: "*arXiv, 2021*"

abstract: "This paper proposes a novel method for high-quality image segmentation of both objects and scenes. Inspired by the dilation and erosion operations in morphological image processing techniques, the pixel-level image segmentation problems are treated as squeezing object boundaries. From this perspective, a novel and efficient **Boundary Squeeze** module is proposed. This module is used to squeeze the object boundary from both inner and outer directions, which contributes to precise mask representation. A bi-directionally flow-based warping process is proposed to generate such squeezed feature representation, and two specific loss signals are designed to supervise the squeezing process. The Boundary Squeeze module can be easily applied to both instance and semantic segmentation tasks as a plug-and-play module by building on top of some existing methods. Moreover, the proposed module is lightweighted, and thus has potential for practical usage. Experiment results show that our simple yet effective design can produce high-quality results on several different datasets. Besides, several other metrics on the boundary are used to prove the effectiveness of our method over previous work. Our approach yields significant improvement on challenging COCO and Cityscapes datasets for both instance and semantic segmentation, and outperforms previous state-of-the-art PointRend in both accuracy and speed under the same setting. Codes and models will be published at https://github.com/lxtGH/BSSeg."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2105.11668.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/lxtGH/BSSeg
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