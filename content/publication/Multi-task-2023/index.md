---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Multi-task learning with multi-query transformer for dense prediction"
authors: [Yangyang Xu, Xiangtai Li, Haobo Yuan, Yibo Yang, Lefei Zhang]
date: 2023-07-07
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-07

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Circuits and Systems for Video Technology, 2023*"
publication_short: "*TCSVT, 2023*"

abstract: "Previous multi-task dense prediction studies developed complex pipelines such as multi-modal distillations in multiple stages or searching for task relational contexts for each task. The core insight beyond these methods is to maximize the mutual effects of each task. Inspired by the recent querybased Transformers, we propose a simple pipeline named MultiQuery Transformer (MQTransformer) that is equipped with multiple queries from different tasks to facilitate the reasoning among multiple tasks and simplify the cross-task interaction pipeline. Instead of modeling the dense per-pixel context among different tasks, we seek a task-specific proxy to perform crosstask reasoning via multiple queries where each query encodes the task-related context. The MQTransformer is composed of three key components: shared encoder, cross-task query attention module and shared decoder. We first model each task with a task-relevant query. Then both the task-specific feature output by the feature extractor and the task-relevant query are fed into the shared encoder, thus encoding the task-relevant query from the task-specific feature. Secondly, we design a cross-task query attention module to reason the dependencies among multiple task-relevant queries; this enables the module to only focus on the query-level interaction. Finally, we use a shared decoder to gradually refine the image features with the reasoned query features from different tasks. Extensive experiment results on two dense prediction datasets (NYUD-v2 and PASCAL-Context) show that the proposed method is an effective approach and achieves state-of-the-art results. Code and models are available at https://github.com/yangyangxu0/MQTransformer."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: PDF
  url: https://arxiv.org/pdf/2205.14354.pdf
  icon_pack: fas
  icon: file-pdf
  
- name: Code
  url: https://github.com/yangyangxu0/MQTransformer
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