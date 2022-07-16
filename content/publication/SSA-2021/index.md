---
title: "Improving BERT with Self-Supervised Attention"
authors: [Yiren Chen, Jiangang Bai]
date: "2021-10-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-10-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE Access*
publication_short: In *IEEE Access*

abstract: One of the most popular paradigms of applying large pre-trained NLP models such as BERT is to fine-tune it on a smaller dataset. However, one challenge remains as the fine-tuned model often overfits on smaller datasets. A symptom of this phenomenon is that irrelevant or misleading words in the sentence, which are easy to understand for human beings, can substantially degrade the performance of these fine-tuned BERT models. In this paper, we propose a novel technique, called Self-Supervised Attention (SSA) to help facilitate this generalization challenge. Specifically, SSA automatically generates weak, token-level attention labels iteratively by probing the fine-tuned model from the previous iteration. We investigate two different ways of integrating SSA into BERT and propose a hybrid approach to combine their benefits. Empirically, through a variety of public datasets, we illustrate significant performance improvement using our SSA-enhanced BERT model.

# Summary. An optional shortened abstract.
summary: Improving BERT with self-Supervised attention

tags:
- Source Themes
featured: true

links:
- name: Custom Link
  url: https://ieeexplore.ieee.org/abstract/document/9584911
url_pdf: https://arxiv.org/pdf/2004.03808.pdf
url_code: ''
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
