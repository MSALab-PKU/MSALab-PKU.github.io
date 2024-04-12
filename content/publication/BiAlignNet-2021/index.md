---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Fast and Accurate Scene Parsing via Bi-Direction Alignment Networks"
authors: [Yanran Wu, Xiangtai Li, Chen Shi, Yunhai Tong, Yang Hua, Tao Song, Ruhui Ma, Haibing Guan]
date: 2021-05-25
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-05-25

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *2021 IEEE International Conference on Image Processing (ICIP)*"
publication_short: "In *ICIP 2021*"

abstract: "In this paper, we propose an effective method for fast and accurate scene parsing called Bidirectional Alignment Network (BiAlignNet). Previously, one representative work BiSeNet [1] uses two different paths (Context Path and Spatial Path) to achieve balanced learning of semantics and details, respectively. However, the relationship between the two paths is not well explored. We argue that both paths can benefit each other in a complementary way. Motivated by this, we propose a novel network by aligning two-path information into each other through a learned flow field. To avoid the noise and semantic gaps, we introduce a Gated Flow Alignment Module to align both features in a bidirectional way. Moreover, to make the Spatial Path learn more detailed information, we present an edge-guided hard pixel mining loss to supervise the aligned learning process. Our network achieves 80.1parcent and 78.5parcent mIoU in validation and test set of Cityscapes while running at 30 FPS with full resolution inputs. Code and models will be available at https://github.com/jojacola/BiAlignNet."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://ieeexplore.ieee.org/abstract/document/9506720
  icon_pack: fas
  icon: link
- name: Code
  url: https://github.com/jojacola/BiAlignNet
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