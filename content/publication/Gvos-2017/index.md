---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Gvos: a general system for near-duplicate video-related applications on storm"
authors: [Jiawei Jiang, Yunhai Tong, Hua Lu, Bin Cui, Kai Lei, Lele Yu]
date: 2017-06-05
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2017-06-05

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*ACM Transactions on Information Systems (TOIS)*"
publication_short: "*TOIS, 2017*"

abstract: "The exponential increase of online videos greatly enriches the life of users but also brings huge numbers of near-duplicate videos (NDVs) that seriously challenge the video websites. The video websites entail NDV-related applications such as detection of copyright violation, video monitoring, video re-ranking, and video recommendation. Since these applications adopt different features and different processing procedures due to diverse scenarios, constructing separate and special-purpose systems for them incurs considerable costs on design, implementation, and maintenance. In this article, we propose a general NDV system on Storm (GVoS)—a popular distributed real-time stream processing platform—to simultaneously support a wide variety of video applications. The generality of GVoS is achieved in two aspects. First, we extract the reusable components from various applications. Second, we conduct the communication between components via a mechanism called Stream Shared Message (SSM) that contains the video-related data. Furthermore, we present an algorithm to reduce the size of SSM in order to avoid the data explosion and decrease the network latency. The experimental results demonstrate that GVoS can achieve performance almost the same as the customized systems. Meanwhile, GVoS accomplishes remarkably higher systematic versatility and efficiently facilitates the development of various NDV-related applications."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://www.researchgate.net/profile/Kai-Lei/publication/317393576_GVoS_A_General_System_for_Near-Duplicate_Video-Related_Applications_on_Storm/links/5c284bb7458515a4c700b8b1/GVoS-A-General-System-for-Near-Duplicate-Video-Related-Applications-on-Storm.pdf
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