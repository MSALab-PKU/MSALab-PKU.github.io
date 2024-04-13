---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Fast parallel path concatenation for graph extraction"
authors: [Yingxia Shao, Kai Lei, Lei Chen, Zi Huang, Bin Cui, Zhongyi Liu, Yunhai Tong, Jin Xu]
date: 2017-06-19
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2017-06-19

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Knowledge and Data Engineering*"
publication_short: "*TKDE, 2017*"

abstract: "Heterogeneous graph is a popular data model to represent the real-world relations with abundant semantics. To analyze heterogeneous graphs, an important step is extracting homogeneous graphs from the heterogeneous graphs, called homogeneous graph extraction. In an extracted homogeneous graph, the relation is defined by a line pattern on the heterogeneous graph and the new attribute values of the relation are calculated by user-defined aggregate functions. The key challenges of the extraction problem are how to efficiently enumerate paths matched by the line pattern and aggregate values for each pair of vertices from the matched paths. To address above two challenges, we propose a parallel graph extraction framework, where we use vertex-centric model to enumerate paths and compute aggregate functions in parallel. The framework compiles the line pattern into a path concatenation plan, which determines the order of concatenating paths and generates the final paths in a divide-and-conquer manner. We introduce a cost model to estimate the cost of a plan and discuss three plan selection strategies, among which the best plan can enumerate paths in OðlogðlÞÞ iterations, where l is the length of a pattern. Furthermore, to improve the performance of evaluating aggregate functions, we classify the aggregate functions into three categories, i.e., distributive aggregation, algebraic aggregation, and holistic aggregation. Since the distributive and algebraic aggregations can be computed from the partial paths, we speed up the aggregation by computing partial aggregate values during the path enumeration."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://www.researchgate.net/profile/Kai-Lei/publication/317671367_Fast_Parallel_Path_Concatenation_for_Graph_Extraction/links/5c298e0e458515a4c702a0ac/Fast-Parallel-Path-Concatenation-for-Graph-Extraction.pdf
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