---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Improving Video Instance Segmentation via Temporal Pyramid Routing"
authors: [Xiangtai Li, Yunhai Tong]
date: 2021-07-28
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-07-28

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "In *arXiv preprint arXiv:2107.13155*"
publication_short: "In *arXiv 2021*"

abstract: "Video Instance Segmentation (VIS) is a new and inherently multi-task problem, which aims to detect, segment and track each instance in a video sequence. Existing approaches are mainly based on single-frame features or single-scale features of multiple frames, where temporal information or multi-scale information is ignored. To incorporate both temporal and scale information, we propose a Temporal Pyramid Routing (TPR) strategy to conditionally align and conduct pixel-level aggregation from a feature pyramid pair of two adjacent frames. Specifically, TPR contains two novel components, including Dynamic Aligned Cell Routing (DACR) and Cross Pyramid Routing (CPR), where DACR is designed for aligning and gating pyramid features across temporal dimension, while CPR transfers temporally aggregated features across scale dimension. Moreover, our approach is a plug-and-play module and can be easily applied to existing instance segmentation methods. Extensive experiments on YouTube-VIS dataset demonstrate the effectiveness and efficiency of the proposed approach on several state-of-the-art instance segmentation methods. Codes and trained models will be publicly available to facilitate future research.(https://github.com/lxtGH/TemporalPyramidRouting)."

# Summary. An optional shortened abstract.
summary: "Improving video instance segmentation via temporal pyramid routing"

tags: [Source Themes]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://arxiv.org/abs/2107.13155
  icon_pack: fas
  icon: link
- name: PDF
  url: https://arxiv.org/pdf/2107.13155.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/lxtGH/TemporalPyramidRouting
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