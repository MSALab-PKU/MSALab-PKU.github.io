---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Sfnet: Faster and accurate semantic segmentation via semantic flow"
authors: [Xiangtai Li, Jiangning Zhang, Yibo Yang, Guangliang Cheng, Kuiyuan Yang, Yunhai Tong, Dacheng Tao]
date: 2024/2
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024/2

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *International Journal of Computer Vision*"
publication_short: "*IJCV, 2024*"

abstract: "In this paper, we focus on exploring effective methods for faster and accurate semantic segmentation. A common practice to improve the performance is to attain high-resolution feature maps with strong semantic representation. Two strategies are widely used: atrous convolutions and feature pyramid fusion, while both are either computationally intensive or ineffective. Inspired by the Optical Flow for motion alignment between adjacent video frames, we propose a Flow Alignment Module (FAM) to learn Semantic Flow between feature maps of adjacent levels and broadcast high-level features to high-resolution features effectively and efficiently. Furthermore, integrating our FAM to a standard feature pyramid structure exhibits superior performance over other real-time methods, even on lightweight backbone networks, such as ResNet-18 and DFNet. Then to further speed up the inference procedure, we also present a novel Gated Dual Flow Alignment Module to directly align high-resolution feature maps and low-resolution feature maps where we term the improved version network as SFNet-Lite. Extensive experiments are conducted on several challenging datasets, where results show the effectiveness of both SFNet and SFNet-Lite. In particular, when using Cityscapes test set, the SFNet-Lite series achieve 80.1 mIoU while running at 60 FPS using ResNet-18 backbone and 78.8 mIoU while running at 120 FPS using STDC backbone on RTX-3090. Moreover, we unify four challenging driving datasets (i.e., Cityscapes, Mapillary, IDD, and BDD) into one large dataset, which we named Unified Driving Segmentation (UDS) dataset. It contains diverse domain and style information. We benchmark several representative works on UDS. Both SFNet and SFNet-Lite still achieve the best speed and accuracy trade-off on UDS, which serves as a strong baseline in such a challenging setting. The code and models are publicly available at https://github.com/lxtGH/SFSegNets."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://link.springer.com/article/10.1007/s11263-023-01875-x
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/lxtGH/SFSegNets
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