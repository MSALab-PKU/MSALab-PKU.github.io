---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Explore In-Context Segmentation via Latent Diffusion Models"
authors: [Chaoyang Wang, Xiangtai Li, Henghui Ding, Lu Qi, Jiangning Zhang, Yunhai Tong, Chen Change Loy, Shuicheng Yan]
date:
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate:

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "In *arXiv preprint arXiv:2401.10228*"
publication_short: "*arXiv, 2024*"

abstract: "In-context segmentation has drawn more attention with the introduction of vision foundation models. Most existing approaches adopt metric learning or masked image modeling to build the correlation between visual prompts and input image queries. In this work, we explore this problem from a new perspective, using one representative generation model, the latent diffusion model (LDM). We observe a task gap between generation and segmentation in diffusion models, but LDM is still an effective minimalist for in-context segmentation. In particular, we propose two meta-architectures and correspondingly design several output alignment and optimization strategies. We have conducted comprehensive ablation studies and empirically found that the segmentation quality counts on output alignment and in-context instructions. Moreover, we build a new and fair in-context segmentation benchmark that includes both image and video datasets. Experiments validate the efficiency of our approach, demonstrating comparable or even stronger results than previous specialist models or visual foundation models. Our study shows that LDMs can also achieve good enough results for challenging in-context segmentation tasks."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2403.09616.pdf
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