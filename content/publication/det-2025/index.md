---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Decouple and track: Benchmarking and improving video diffusion transformers for motion transfer"
authors: [Qingyu Shi, Jianzong Wu, Jinbin Bai, Jiangning Zhang, Lu Qi, Yunhai Tong, Xiangtai Li]
date: 2025-03-15
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2025-03-15

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the IEEE/CVF International Conference on Computer Vision, 2025*"
publication_short: "*ICCV, 2025*"

abstract: "The motion transfer task aims to transfer motion from a source video to newly generated videos, requiring the model to decouple motion from appearance. Previous diffusion-based methods primarily rely on separate spatial and temporal attention mechanisms within the 3D U-Net. In contrast, state-of-the-art video Diffusion Transformers (DiT) models use 3D full attention, which does not explicitly separate temporal and spatial information. Thus, the interaction between spatial and temporal dimensions makes decoupling motion and appearance more challenging for DiT models. In this paper, we propose DeT, a method that adapts DiT models to improve motion transfer ability. Our approach introduces a simple yet effective temporal kernel to smooth DiT features along the temporal dimension, facilitating the decoupling of foreground motion from background appearance. Meanwhile, the temporal kernel effectively captures temporal variations in DiT features, which are closely related to motion. Moreover, we introduce explicit supervision along dense trajectories in the latent feature space to further enhance motion consistency. Additionally, we present MTBench, a general and challenging benchmark for motion transfer. We also introduce a hybrid motion fidelity metric that considers both the global and local motion similarity. Therefore, our work provides a more comprehensive evaluation than previous works. Extensive experiments on MTBench demonstrate that DeT achieves the best trade-off between motion fidelity and edit fidelity."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://openaccess.thecvf.com/content/ICCV2025/papers/Shi_Decouple_and_Track_Benchmarking_and_Improving_Video_Diffusion_Transformers_For_ICCV_2025_paper.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://shi-qingyu.github.io/DeT.github.io/
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