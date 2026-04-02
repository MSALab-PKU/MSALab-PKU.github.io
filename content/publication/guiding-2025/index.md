---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Guiding Visual Autoregressive Models through Spectrum Weakening"
authors: [Chaoyang Wang, Tianmeng Yang, Jingdong Wang, Yunhai Tong]
date: 2025-11-28
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-11-28

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2511.22991*"
publication_short: "*arXiv, 2025*"

abstract: "Classifier-free guidance (CFG) has become a widely adopted and practical approach for enhancing generation quality and improving condition alignment. Recent studies have explored guidance mechanisms for unconditional generation, yet these approaches remain fundamentally tied to assumptions specific to diffusion models. In this work, we propose a spectrum-weakening framework for visual autoregressive (AR) models. This method works without the need for re-training, specific conditions, or any architectural modifications. It achieves this by constructing a controllable weak model in the spectral domain. We theoretically show that invertible spectral transformations preserve information, while selectively retaining only a subset of spectrum introduces controlled information reduction. Based on this insight, we perform spectrum selection along the channel dimension of internal representations, which avoids the structural constraints imposed by diffusion models. We further introduce two spectrum renormalization strategies that ensures numerical stability during the weakening process. Extensive experiments were conducted on both discrete and continuous AR models, with text or class conditioning. The results demonstrate that our method enables high-quality unconditional generation while maintaining strong prompt alignment for conditional generation."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2511.22991
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