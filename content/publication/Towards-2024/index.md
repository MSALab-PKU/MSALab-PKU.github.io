---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Towards open vocabulary learning: A survey"
authors: [Jianzong Wu, Xiangtai Li, Shilin Xu, Haobo Yuan, Henghui Ding, Yibo Yang, Xia Li, Jiangning Zhang, Yunhai Tong, Xudong Jiang, Bernard Ghanem, Dacheng Tao]
date: 2024/2/5
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024/2/5

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "In *IEEE Transactions on Pattern Analysis and Machine Intelligence*"
publication_short: "*TPAMI, 2024*"

abstract: "In the field of visual scene understanding, deep neural networks have made impressive advancements in various core tasks like segmentation, tracking, and detection. However, most approaches operate on the close-set assumption, meaning that the model can only identify pre-defined categories that are present in the training set. Recently, open vocabulary settings were proposed due to the rapid progress of vision language pre-training. These new approaches seek to locate and recognize categories beyond the annotated label space. The open vocabulary approach is more general, practical, and effective than weakly supervised and zero-shot settings. This paper thoroughly reviews open vocabulary learning, summarizing and analyzing recent developments in the field. In particular, we begin by juxtaposing open vocabulary learning with analogous concepts such as zero-shot learning, open-set recognition, and out-of-distribution detection. Subsequently, we examine several pertinent tasks within the realms of segmentation and detection, encompassing long-tail problems, few-shot, and zero-shot settings. As a foundation for our method survey, we first elucidate the fundamental principles of detection and segmentation in close-set scenarios. Next, we examine various contexts where open vocabulary learning is employed, pinpointing recurring design elements and central themes. This is followed by a comparative analysis of recent detection and segmentation methodologies in commonly used datasets and benchmarks. Our review culminates with a synthesis of insights, challenges, and discourse on prospective research trajectories. To our knowledge, this constitutes the inaugural exhaustive literature review on open vocabulary learning. We keep tracing related works at https://github.com/jianzongwu/Awesome-Open-Vocabulary."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10420487
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/jianzongwu/Awesome-Open-Vocabulary
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