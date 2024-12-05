---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "RelationBooth: Towards Relation-Aware Customized Object Generation"
authors: [Qingyu Shi, Lu Qi, Jianzong Wu, Jinbin Bai, Jingbo Wang, Yunhai Tong, Xiangtai Li, Ming-Husang Yang]
date: 2024-10-30
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-10-30

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2410.23280*"
publication_short: "*arXiv, 2024*"

abstract: "Customized image generation is crucial for delivering personalized content based on user-provided image prompts, aligning large-scale text-to-image diffusion models with individual needs. However, existing models often overlook the relationships between customized objects in generated images. Instead, this work addresses that gap by focusing on relation-aware customized image generation, which aims to preserve the identities from image prompts while maintaining the predicate relations described in text prompts. Specifically, we introduce RelationBooth, a framework that disentangles identity and relation learning through a well-curated dataset. Our training data consists of relation-specific images, independent object images containing identity information, and text prompts to guide relation generation. Then, we propose two key modules to tackle the two main challenges: generating accurate and natural relations, especially when significant pose adjustments are required, and avoiding object confusion in cases of overlap. First, we introduce a keypoint matching loss that effectively guides the model in adjusting object poses closely tied to their relationships. Second, we incorporate local features from the image prompts to better distinguish between objects, preventing confusion in overlapping cases. Extensive results on three benchmarks demonstrate the superiority of RelationBooth in generating precise relations while preserving object identities across a diverse set of objects and relations. The source code and trained models will be made available to the public."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2410.23280?
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