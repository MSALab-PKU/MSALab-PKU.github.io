---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Direct Preference Optimization for LLM-Enhanced Recommendation Systems"
authors: [Chao Sun, Yaobo Liang, Yaming Yang, Shilin Xu, Tianmeng Yang, Yunhai Tong]
date: 2025-06-30
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-06-30

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2025 IEEE International Conference on Multimedia and Expo*"
publication_short: "*ICME, 2025*"

abstract: "The quadratic complexity of full attention mechanisms poses a significant bottleneck for Video Diffusion Models (VDMs) aiming to generate long-duration, high-resolution videos. While various sparse attention methods have been proposed, many are designed as training-free inference accelerators or do not optimally capture the unique spatio-temporal characteristics inherent in video data when trained natively. This paper introduces Video Mixture of Block Attention (VMoBA), a novel sparse attention mechanism specifically adapted for VDMs. Motivated by an in-depth analysis of attention patterns within pre-trained video transformers, which revealed strong spatio-temporal locality, varying query importance, and head-specific concentration levels, VMoBA enhances the original MoBA framework with three key modifications: (1) a layer-wise recurrent block partition scheme (1D-2D-3D) to dynamically adapt to diverse spatio-temporal attention patterns and improve efficiency; (2) global block selection to prioritize the most salient query-key block interactions across an entire attention head; and (3) threshold-based block selection to dynamically determine the number of attended blocks based on their cumulative similarity. Extensive experiments demonstrate that VMoBA significantly accelerates the training of VDMs on longer sequences, achieving 2.92x FLOPs and 1.48x latency speedup, while attaining comparable or even superior generation quality to full attention. Furthermore, VMoBA exhibits competitive performance in training-free inference, offering 2.40x FLOPs and 1.35x latency speedup for high-res video generation."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2410.05939
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