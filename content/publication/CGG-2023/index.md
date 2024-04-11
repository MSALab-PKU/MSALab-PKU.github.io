---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Betrayed by captions: Joint caption grounding and generation for open vocabulary instance segmentation"
authors: [Jianzong Wu, Xiangtai Li, Yunhai Tong]
date: 2023-07-23
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Proceedings of the IEEE/CVF International Conference on Computer Vision*"
publication_short: "In *ICCV 2023*"

abstract: "In this work, we focus on open vocabulary instance segmentation to expand a segmentation model to classify and segment instance-level novel categories. Previous approaches have relied on massive caption datasets and complex pipelines to establish one-to-one mappings between image regions and words in captions. However, such methods build noisy supervision by matching non-visible words to image regions, such as adjectives and verbs. Meanwhile, context words are also important for inferring the existence of novel objects as they show high inter-correlations with novel categories. To overcome these limitations, we devise a joint **Caption Grounding and Generation (CGG)** framework, which incorporates a novel grounding loss that only focuses on matching object nouns to improve learning efficiency. We also introduce a caption generation head that enables additional supervision and contextual modeling as a complementation to the grounding loss. Our analysis and results demonstrate that grounding and generation components complement each other, significantly enhancing the segmentation performance for novel classes. Experiments on the COCO dataset with two settings: Open Vocabulary Instance Segmentation (OVIS) and Open Set Panoptic Segmentation (OSPS) demonstrate the superiority of the CGG. Specifically, CGG achieves a substantial improvement of **6.8% mAP** for novel classes without extra data on the OVIS task and **15% PQ** improvements for novel classes on the OSPS benchmark."

# Summary. An optional shortened abstract.
summary: "Betrayed by captions: Joint caption grounding and generation for open vocabulary instance segmentation"

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://openaccess.thecvf.com/content/ICCV2023/html/Wu_Betrayed_by_Captions_Joint_Caption_Grounding_and_Generation_for_Open_ICCV_2023_paper.html
  icon_pack: fas
  icon: link
- name: Code
  url: https://github.com/jianzongwu/betrayed-by-captions
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
