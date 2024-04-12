---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Towards robust referring image segmentation"
authors: [Jianzong Wu, Xiangtai Li, Xia Li, Henghui Ding, Yunhai Tong, Dacheng Tao]
date: 2024/3/5
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019/9/13

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "In *IEEE Transactions on Image Processing*"
publication_short: "*TIP, 2024*"

abstract: "Referring Image Segmentation (RIS) is a fundamental vision-language task that outputs object masks based on text descriptions. Many works have achieved considerable progress for RIS, including different fusion method designs. In this work, we explore an essential question, “What if the text description is wrong or misleading?” For example, the described objects are not in the image. We term such a sentence as a negative sentence. However, existing solutions for RIS cannot handle such a setting. To this end, we propose a new formulation of RIS, named Robust Referring Image Segmentation (R-RIS). It considers the negative sentence inputs besides the regular positive text inputs. To facilitate this new task, we create three R-RIS datasets by augmenting existing RIS datasets with negative sentences and propose new metrics to evaluate both types of inputs in a unified manner. Furthermore, we propose a new transformer-based model, called RefSegformer, with a token-based vision and language fusion module. Our design can be easily extended to our R-RIS setting by adding extra blank tokens. Our proposed RefSegformer achieves state-of-the-art results on both RIS and R-RIS datasets, establishing a solid baseline for both settings." 

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2209.09554.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/jianzongwu/robust-ref-seg
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