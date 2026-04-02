# MSALab Website Maintenance Guide

This repository hosts the MSALab website built with Hugo + Wowchemy.
This README explains how to edit each part of the website based on the current `content/` organization.

## 1) Local Preview

Requirements:
- Hugo Extended (version compatible with `config/_default/config.yaml`)
- Go (for Hugo modules)

Run locally:

```bash
hugo server
```

Then open [http://localhost:1313](http://localhost:1313).

Build static files:

```bash
hugo
```

Output is generated to `docs/` (`publishDir: docs` in config).

## 2) Website Structure (Where to Edit)

Top-level content folders:
- `content/home/`: homepage sections (hero, highlights, news, CTA)
- `content/post/`: news posts used by the homepage Latest News block
- `content/publication/`: publication entries, one folder per paper
- `content/people/`: team page widgets
- `content/authors/`: profile for each person (name, role, avatar, groups)
- `content/contact/`: contact page widgets

## 3) Homepage Sections (`content/home/`)

`content/home/index.md` defines the homepage as a widget page.

Each file in `content/home/` is one section. The order is controlled by `weight` (smaller = earlier).

- `welcome.md`
  - Hero section (`widget: hero`)
  - Edit lab title and intro text here

- `highlight.md`
  - Highlights section text
  - Currently configured as `widget: blank` for plain markdown-style content
  - Keep this section text-only to avoid duplicate news listing

- `news.md`
  - Latest News section (`widget: pages`)
  - Pulls content from `content/post/` using `page_type: post`
  - Key fields:
    - `count`: number of news items shown
    - `order`: usually `desc` for newest first

- `cta.md`
  - Bottom call-to-action links/buttons (team/publication/contact links)

- `image.md`
  - Optional visual block (currently inactive with `active: false`)

## 4) Latest News (`content/post/`)

Each news item should be a folder:

`content/post/<slug>/index.md`

Minimal front matter example:

```yaml
---
title: "Paper Accepted to CVPR 2026: RecTok"
date: 2025-12-15
draft: false
featured: false
authors:
  - admin
categories:
  - Publications
---
```

Then write a short body paragraph with the announcement.

Notes:
- News items appear in `Latest News` only if `draft: false`.
- If you have 4 posts and `count: 4`, exactly 4 will be shown.

## 5) Publications (`content/publication/`)

Each paper is stored in:

`content/publication/<paper-slug>/`

Common files:
- `index.md`: paper metadata and abstract
- `cite.bib`: bibtex citation
- optional image files (cover/teaser)

Publication list page config:
- `content/publication/_index.md`

How to add a new publication:
1. Create new folder under `content/publication/`
2. Add `index.md` with title/date/authors/publication info
3. Add `cite.bib`
4. Add image file if needed

## 6) People Page (`content/people/` + `content/authors/`)

People page widgets:
- `content/people/index.md`
- `content/people/people.md` (widget config and which groups to show)

Person profile:
- `content/authors/<id>/_index.md`
- `content/authors/<id>/avatar.jpg`

To add a member:
1. Create `content/authors/<new-id>/`
2. Add `_index.md` with `title`, `role`, `organizations`, `social`, `user_groups`
3. Add `avatar.jpg`
4. Ensure `user_groups` value matches groups listed in `content/people/people.md`

## 7) Contact Page (`content/contact/`)

- `content/contact/index.md`: page wrapper
- `content/contact/contact.md`: contact widget and form settings
- `content/contact/image.md`: background image section for contact page

## 8) Navigation Menu

Edit:
- `config/_default/menus.yaml`

Current main menu items:
- Home
- People
- Publications
- Contact

## 9) Site-wide Settings

Main config files:
- `config/_default/config.yaml`: site title, base URL, publish dir, Hugo modules
- `config/_default/params.yaml`: theme/UI behavior and feature toggles

## 10) Common Editing Tips

- Keep YAML indentation strict (2 spaces recommended).
- Use `draft: false` for content that should be visible online.
- For homepage sections, check `widget` type first before editing content format.
- If content appears twice on homepage, verify only one section is configured to list posts/pages.
- Preview with `hugo server` after each batch of edits.

## 11) Recommended Update Workflow

1. Edit markdown files in `content/`
2. Run `hugo server` and verify pages
3. Run `hugo` to generate `docs/`
4. Commit and push

---

For advanced widget behavior, see Wowchemy docs: [https://wowchemy.com/docs/](https://wowchemy.com/docs/)
