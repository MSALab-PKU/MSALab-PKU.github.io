---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Diffusion-sharpening: Fine-tuning diffusion models with denoising trajectory sharpening"
authors: [Ye Tian, Ling Yang, Xinchen Zhang, Yunhai Tong, Mengdi Wang, Bin Cui]
date: 2025-02-17
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-02-17

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2502.12146*"
publication_short: "*arXiv, 2025*"

abstract: "We propose Diffusion-Sharpening, a fine-tuning approach that enhances downstream alignment by optimizing sampling trajectories. Existing RL-based fine-tuning methods focus on single training timesteps and neglect trajectory-level alignment, while recent sampling trajectory optimization methods incur significant inference NFE costs. Diffusion-Sharpening overcomes this by using a path integral framework to select optimal trajectories during training, leveraging reward feedback, and amortizing inference costs. Our method demonstrates superior training efficiency with faster convergence, and best inference efficiency without requiring additional NFEs. Extensive experiments show that Diffusion-Sharpening outperforms RL-based fine-tuning methods (e.g., Diffusion-DPO) and sampling trajectory optimization methods (e.g., Inference Scaling) across diverse metrics including text alignment, compositional capabilities, and human preferences, offering a scalable and efficient solution for future diffusion model fine-tuning. Code: https://github.com/Gen-Verse/Diffusion-Sharpening"

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2502.12146
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/Gen-Verse/Diffusion-Sharpening
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