---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Training-free diffusion acceleration with bottleneck sampling"
authors: [Ye Tian, Xin Xia, Yuxi Ren, Shanchuan Lin, Xing Wang, Xuefeng Xiao, Yunhai Tong, Ling Yang, Bin Cui]
date: 2025-03-24
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-03-24

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2503.18940*"
publication_short: "*arXiv, 2025*"

abstract: "Diffusion models have demonstrated remarkable capabilities in visual content generation but remain challenging to deploy due to their high computational cost during inference. This computational burden primarily arises from the quadratic complexity of self-attention with respect to image or video resolution. While existing acceleration methods often compromise output quality or necessitate costly retraining, we observe that most diffusion models are pre-trained at lower resolutions, presenting an opportunity to exploit these low-resolution priors for more efficient inference without degrading performance. In this work, we introduce Bottleneck Sampling, a training-free framework that leverages low-resolution priors to reduce computational overhead while preserving output fidelity. Bottleneck Sampling follows a high-low-high denoising workflow: it performs high-resolution denoising in the initial and final stages while operating at lower resolutions in intermediate steps. To mitigate aliasing and blurring artifacts, we further refine the resolution transition points and adaptively shift the denoising timesteps at each stage. We evaluate Bottleneck Sampling on both image and video generation tasks, where extensive experiments demonstrate that it accelerates inference by up to 3 for image generation and 2.5 for video generation, all while maintaining output quality comparable to the standard full-resolution sampling process across multiple evaluation metrics."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2503.18940?
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://tyfeld.github.io/BottleneckSampling.github.io/
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