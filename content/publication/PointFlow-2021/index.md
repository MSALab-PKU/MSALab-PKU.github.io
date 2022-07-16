---
title: "PointFlow: Flowing Semantics Through Points for Aerial Image Segmentation"
authors: [Xiangtai Li]
date: "2021-06-19T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-06-19T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*
publication_short: In *CVPR 2021*

abstract: 'Aerial Image Segmentation is a particular semantic segmentation problem and has several challenging characteristics that general semantic segmentation does not have. There are two critical issues: The one is an extremely foreground-background imbalanced distribution, and the other is multiple small objects along with the complex background. Such problems make the recent dense affinity context modeling perform poorly even compared with baselines due to over-introduced background context. To handle these problems, we propose a point-wise affinity propagation module based on the Feature Pyramid Network (FPN) framework, named PointFlow. Rather than dense affinity learning, a sparse affinity map is generated upon selected points between the adjacent features, which reduces the noise introduced by the background while keeping efficiency. In particular, we design a dual point matcher to select points from the salient area and object boundaries, respectively. Experimental results on three different aerial segmentation datasets suggest that the proposed method is more effective and efficient than state-of-the-art general semantic segmentation methods. Especially, our methods achieve the best speed and accuracy trade-off on three aerial benchmarks. Further experiments on three general semantic segmentation datasets prove the generality of our method. Code and models are made available (https://github.com/lxtGH/PFSegNets).'


# Summary. An optional shortened abstract.
summary: 'PointFlow: Flowing semantics through points for aerial image segmentation'

tags:
- Source Themes
featured: true

links:
- name: Paper Link
  url: https://openaccess.thecvf.com/content/CVPR2021/html/Li_PointFlow_Flowing_Semantics_Through_Points_for_Aerial_Image_Segmentation_CVPR_2021_paper.html?ref=https://githubhelp.com
url_pdf: https://openaccess.thecvf.com/content/CVPR2021/papers/Li_PointFlow_Flowing_Semantics_Through_Points_for_Aerial_Image_Segmentation_CVPR_2021_paper.pdf
url_code: https://github.com/lxtGH/PFSegNets
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides:
---

{{% callout note %}}
Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}
