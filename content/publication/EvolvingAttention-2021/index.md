---
title: "Evolving Attention with Residual Convolutions"
authors:
- Yujing Wang
- Yaming Yang
- Jiangang Bai
- Mingliang Zhang
date: "2021-07-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Machine Learning*
publication_short: In *ICML 2021*

abstract: Transformer is a ubiquitous model for natural language processing and has attracted wide attentions in computer vision. The attention maps are indispensable for a transformer model to encode the dependencies among input tokens. However, they are learned without explicit interactions in each layer and sometimes fail to capture reasonable patterns. In this paper, we propose a novel and generic mechanism based on evolving attention to improve the performance of transformers. On one hand, the attention maps in different layers share common knowledge, thus the ones in preceding layers can instruct the learning of attention in succeeding layers through residual connections. On the other hand, low-level and high-level attentions vary in the levels of abstraction, so we adopt additional convolutional layers to capture the evolutionary process of attention maps. The proposed evolving attention mechanism achieves significant performance improvement over various state-ofthe-art models for multiple tasks, including image classification, natural language understanding and machine translation.

# Summary. An optional shortened abstract.
summary: Evolving attention with residual convolutions

tags:
- Source Themes
featured: true

links:
- name: Paper Link
  url: https://proceedings.mlr.press/v139/wang21ab.html
url_pdf: http://proceedings.mlr.press/v139/wang21ab/wang21ab.pdf
url_code: 'https://github.com/pkuyym/EvolvingAttention'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides:
---

{{% callout note %}}
Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}
