---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Enhanced boundary learning for glass-like object segmentation"
authors: [Hao He, Xiangtai Li, Guangliang Cheng, Jianping Shi, Yunhai Tong, Gaofeng Meng, Véronique Prinet, LuBin Weng]
date: 2021
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Proceedings of the IEEE/CVF International Conference on Computer Vision*"
publication_short: "*ICCV, 2021*"

abstract: "Glass-like objects such as windows, bottles, and mirrors exist widely in the real world. Sensing these objects has many applications, including robot navigation and grasping. However, this task is very challenging due to the arbitrary scenes behind glass-like objects. This paper aims to solve the glass-like object segmentation problem via enhanced boundary learning. In particular, we first propose a novel refined differential module that outputs finer boundary cues. We then introduce an edge-aware point-based graph convolution network module to model the global shape along the boundary. We use these two modules to design a decoder that generates accurate and clean segmentation results, especially on the object contours. Both modules are lightweight and effective: they can be embedded into various segmentation models. In extensive experiments on three recent glass-like object segmentation datasets, including Trans10k, MSD, and GDD, our approach establishes new state-of-the-art results. We also illustrate the strong generalization properties of our method on three generic segmentation datasets, including Cityscapes, BDD, and COCO Stuff. Code and models will be available for further research."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://openaccess.thecvf.com/content/ICCV2021/papers/He_Enhanced_Boundary_Learning_for_Glass-Like_Object_Segmentation_ICCV_2021_paper.pdf
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