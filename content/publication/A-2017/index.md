---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A Structural Based Community Similarity Algorithm and Its Application in Scientific Event Detection"
authors: [Xiangfeng Meng, Yunhai Tong, Xinhai Liu, Yiren Chen, Shaohua Tan]
date: 2017-04-14
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2017-04-14

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Intelligence and Security Informatics: 12th Pacific Asia Workshop, PAISI 2017, Jeju Island, South Korea, May 23, 2017, Proceedings 12*"
publication_short: "*PAISI, 2017*"

abstract: "Graph similarity has been a crucial topic in network science, and is widely used in network dynamics, graph monitoring and anomalous event detection. However, few studies have paid attention to community similarity. The fact that communities do not necessarily own sub-modularity structure determines that graph similarity algorithms can not be applied to communities directly. Besides, the existing graph similarity algorithms ignore the organization structure of networks. Two communities can be regarded as the same when both their vertices and structure are identical. Thus the existing algorithms are unable to detect anomalous events about the shift of communities’ organization structure. In this paper, we propose a novel community similarity algorithm, which considers both the shift of vertices and the shift of communities’ layered structure. The layered structure of communities categorizes nodes into different groups, depending on their influence in the community. Both the influence of each node and the shift of nodes’ influence are expected to affect the similarity of two communities. Experiments on the synthetic data show that the novel algorithm performs better than the state-of-art algorithms. Besides, we apply the novel algorithm on the scientific data set, and identify meaningful anomalous events occurred in scientific mapping. The anomalous events are proved to correspond to the transition of topics for journal communities. It demonstrates that the novel algorithm is effective in detecting the anomalous events about the transition of communities’ structure."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://link.springer.com/chapter/10.1007/978-3-319-57463-9_5
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