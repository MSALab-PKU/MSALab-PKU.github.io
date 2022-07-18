---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Competence-based Curriculum Learning for Multilingual Machine Translation"
authors: [Mingliang Zhang, Yunhai Tong]
date: 2021-08-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-08-01

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Findings for the Association for Computational Lingustics*"
publication_short: "In *EMNLP 2021*"

abstract: "Currently, multilingual machine translation is receiving more and more attention since it brings better performance for low resource languages (LRLs) and saves more space. However, existing multilingual machine translation models face a severe challenge: imbalance. As a result, the translation performance of different languages in multilingual translation models are quite different. We argue that this imbalance problem stems from the different learning competencies of different languages. Therefore, we focus on balancing the learning competencies of different languages and propose ***C**ompetence-based **C**urriculum **L**earning for **M**ultilingual Machine Translation*, named CCL-M. Specifically, we firstly define two competencies to help schedule the high resource languages (HRLs) and the low resource languages: 1) *Self-evaluated Competence*, evaluating how well the language itself has been learned; and 2) *HRLs-evaluated Competence*, evaluating whether an LRL is ready to be learned according to *HRLs' Self-evaluated Competence*. Based on the above competencies, we utilize the proposed CCL-M algorithm to gradually add new languages into the training set in a curriculum learning manner. Furthermore, we propose a novel competenceaware dynamic balancing sampling strategy for better selecting training samples in multilingual training. Experimental results show that our approach has achieved a steady and significant performance gain compared to the previous state-of-the-art approach on the TED talks dataset."

# Summary. An optional shortened abstract.
summary: "Competence-based curriculum learning for multilingual machine translation"

tags: [Source Themes]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Link
  url: https://arxiv.org/abs/2109.04002
  icon_pack: fas
  icon: link
- name: PDF
  url: https://arxiv.org/pdf/2109.04002.pdf
  icon_pack: fas
  icon: file-pdf
- name: Code
  url: https://github.com/zml24/ccl-m
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

{{% callout note %}}
Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}