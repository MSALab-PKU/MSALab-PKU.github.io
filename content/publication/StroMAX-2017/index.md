---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "StroMAX: Partitioning-based scheduler for real-time stream processing system"
authors: [Jiawei Jiang, Zhipeng Zhang, Bin Cui, Yunhai Tong, Ning Xu]
date: 2017-03-22
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2017-03-22

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Database Systems for Advanced Applications: 22nd International Conference, DASFAA 2017, Suzhou, China, March 27-30, 2017, Proceedings, Part II 22*"
publication_short: "*DASFAA, 2017*"

abstract: "With the increasing availability and scale of data from Web 2.0, the ability to efficiently and timely analyze huge amounts of data is important for industry success. A number of real-time stream processing platforms have been developed, such as Storm, S4, and Flume. A fundamental problem of these large scale decentralized stream processing systems is how to deploy the workload to each node so as to fully utilize the available resources and optimize the overall system performance. In this paper, we present StroMAX, a graph-partitioning based approach of workload scheduling for real-time stream processing systems. StroMAX uses two advanced generic schedulers to improve the performance of stream processing systems by reducing the inter-node communication cost while keeping the workload of nodes below a certain computational load threshold. The first scheduler analyzes the workload structure when a job is committed and uses the graph-partitioning result to determine the deployment of tasks. The second scheduler analyzes the statistical information of physical nodes, and dynamically reassigns the tasks during runtime to improve the overall performance. Besides, StroMAXcan be deployed to many other state-of-the-art real-time stream processing systems easily. We implemented StroMAX on Storm, a representative real-time stream processing system. Extensive experiments conducted with real-world workloads and datasets demonstrate the superiority of our approaches against the existing solutions."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://link.springer.com/chapter/10.1007/978-3-319-55699-4_17
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