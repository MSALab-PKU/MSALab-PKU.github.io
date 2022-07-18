---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Dynamic Dual Sampling Module For Fine-Grained Semantic Segmentation"
authors: [Xiangtai Li, Yunhai Tong]
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

abstract: "Representation of semantic context and local details is the essential issue for building modern semantic segmentation models. However, the interrelationship between semantic context and local details is not well explored in previous works. In this paper, we propose a Dynamic Dual Sampling Module (DDSM) to conduct dynamic affinity modeling and propagate semantic context to local details, which yields a more discriminative representation. Specifically, a dynamic sampling strategy is used to sparsely sample representative pixels and channels in the higher layer, forming adaptive compact support for each pixel and channel in the lower layer. The sampled features with high semantics are aggregated according to the affinities and then propagated to detailed lower-layer features, leading to a fine-grained segmentation result with wellpreserved boundaries. Experiment results on both Cityscapes and Camvid datasets validate the effectiveness and efficiency of the proposed approach. Code and models will be available at https://github.com/Fantasticarl/DDSM."

# Summary. An optional shortened abstract.
summary: "Dynamic dual sampling module for fine-grained semantic segmentation"

tags: [Source Themes]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://ieeexplore.ieee.org/abstract/document/9506628
  icon_pack: fas
  icon: link
- name: PDF
  url: https://arxiv.org/pdf/2105.11657.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/Fantasticarl/DDSM
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

{{% callout note %}}
Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}