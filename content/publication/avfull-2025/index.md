---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Does Hearing Help Seeing? Investigating Audio-Video Joint Denoising for Video Generation"
authors: [Jianzong Wu, Hao Lian, Dachao Hao, Ye Tian, Qingyu Shi, Biaolong Chen, Hao Jiang, Yunhai Tong]
date: 2025-12-02
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-12-02

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2512.02457*"
publication_short: "*arXiv, 2025*"

abstract: "Recent audio-video generative systems suggest that coupling modalities benefits not only audio-video synchrony but also the video modality itself. We pose a fundamental question: Does audio-video joint denoising training improve video generation, even when we only care about video quality? To study this, we introduce a parameter-efficient Audio-Video Full DiT (AVFullDiT) architecture that leverages pre-trained text-to-video (T2V) and text-to-audio (T2A) modules for joint denoising. We train (i) a T2AV model with AVFullDiT and (ii) a T2V-only counterpart under identical settings. Our results provide the first systematic evidence that audio-video joint denoising can deliver more than synchrony. We observe consistent improvements on challenging subsets featuring large and object contact motions. We hypothesize that predicting audio acts as a privileged signal, encouraging the model to internalize causal relationships between visual events and their acoustic consequences (e.g., collision  impact sound), which in turn regularizes video dynamics. Our findings suggest that cross-modal co-training is a promising approach to developing stronger, more physically grounded world models. Code and dataset will be made publicly available."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2512.02457
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://jianzongwu.github.io/projects/does-hearing-help-seeing/
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