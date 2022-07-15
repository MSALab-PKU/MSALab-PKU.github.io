---
title: "Enhanced Boundary Learning for Glass-like Object Segmentation Supplementary Material"
authors:
- Xiangtai Li
date: "2021-10-17T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-10-17T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the IEEE/CVF International Conference on Computer Vision*
publication_short: In *ICCV 2021*

abstract: 'Glass-like objects such as windows, bottles, and mirrors exist widely in the real world. Sensing these objects has many applications, including robot navigation and grasping. However, this task is very challenging due to the arbitrary scenes behind glass-like objects. This paper aims to solve the glass-like object segmentation problem via enhanced boundary learning. In particular, we first propose a novel refined differential module that outputs finer boundary cues. We then introduce an edge-aware point-based graph convolution network module to model the global shape along the boundary. We use these two modules to design a decoder that generates accurate and clean segmentation results, especially on the object contours. Both modules are lightweight and effective: they can be embedded into various segmentation models. In extensive experiments on three recent glass-like object segmentation datasets, including Trans10k, MSD, and GDD, our approach establishes new state-of-the-art results. We also illustrate the strong generalization properties of our method on three generic segmentation datasets, including Cityscapes, BDD, and COCO Stuff. Code and models will be available for further research.'


# Summary. An optional shortened abstract.
summary: 'Enhanced boundary learning for glass-like object segmentation supplementary material'

tags:
- Source Themes
featured: true

links:
- name: Paper Link
  url: https://openaccess.thecvf.com/content/ICCV2021/html/He_Enhanced_Boundary_Learning_for_Glass-Like_Object_Segmentation_ICCV_2021_paper.html?ref=https://githubhelp.com
url_pdf: https://openaccess.thecvf.com/content/ICCV2021/papers/He_Enhanced_Boundary_Learning_for_Glass-Like_Object_Segmentation_ICCV_2021_paper.pdf
url_code: ''
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
