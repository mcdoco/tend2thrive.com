# tend2thrive.com

The marketing site for [Tend2Thrive](https://tend2thrive.com) — a static
[Jekyll](https://jekyllrb.com) site with a Markdown blog. GitHub Pages builds
and hosts it natively; there is no CI pipeline to maintain.

## Preview locally (Docker — no Ruby needed)

Ruby, Bundler, the build toolchain, and the gems all live in the container.

```sh
docker compose watch       # builds, serves, and syncs your edits live
```

Open <http://archmatt.local:4000> and edit any file — the page reloads. Stop
with `Ctrl-C`, then `docker compose down`.

Two things differ from a plain local Docker setup, both because the daemon runs
on **archmatt.local** over an SSH context:

- **It's `watch`, not `up`.** The remote daemon can't see this machine's
  filesystem, so the old `.:/site` bind mount would resolve to an empty path on
  the far side. The source is baked into the image instead, and `watch` streams
  later edits into the running container over the Docker API. Requires Compose
  ≥ 2.22 (`docker compose version`).
- **Browse the host, not localhost.** Ports publish on archmatt.local, so
  that's the URL. Livereload needs no extra setup — Jekyll's injected snippet
  reads the hostname from the page URL and connects to `archmatt.local:35729`,
  which is published alongside the site.

The first run is slow (it pulls the Ruby image and compiles native gems); later
runs reuse the layer cache. For a one-off production build instead of the live
server:

```sh
docker compose run --rm site bundle exec jekyll build   # output in _site/
```

<details>
<summary>Preview without Docker (native Ruby)</summary>

Requires Ruby ≥ 3.0 with headers, Bundler, and a C toolchain (`make`, `gcc`)
for native gems.

```sh
bundle install
bundle exec jekyll serve --livereload
```
</details>

## Add a blog post

Posts are just Markdown files — this is the whole CMS: files and git, no
database or dashboard. Create `_posts/YYYY-MM-DD-a-short-slug.md`:

```markdown
---
layout: post
title: "Your headline"
description: "One-line summary for the blog index, previews, and SEO."
author: The Tend2Thrive team
---

Write the post in Markdown here.
```

Commit it — via git or straight from GitHub's web editor — and it publishes at
`/blog/YYYY/MM/DD/a-short-slug/`. It also appears on `/blog/` and in the RSS
feed at `/feed.xml` automatically.

## Structure

```
_config.yml             Site settings (title, blog URL pattern, plugins)
_layouts/
  default.html          Shared <head>, nav, footer — every page uses this
  post.html             Blog post template
_includes/
  nav.html              The single site-wide nav
  footer.html           The single site-wide footer
assets/css/site.css     All styles (was inlined and duplicated per page)
_posts/                 Blog posts (Markdown)
blog/index.html         The /blog/ listing
index.html              Home            (/)
hosts.html              For hosts       (/hosts.html)
privacy.html            Privacy Policy  (/privacy.html)
terms.html              Terms           (/terms.html)
Dockerfile              Local preview image (source baked in, not mounted)
docker-compose.yml      Local preview + file-sync config
Gemfile                 Pins the github-pages gem (matches GitHub's build)
CNAME                   Custom domain
```

Nav and footer live in `_includes/` and the chrome lives in
`_layouts/default.html`, so the four content pages carry only their own content.

## Deployment

Push to `main`. GitHub Pages (source: *Deploy from a branch*) rebuilds the site
with Jekyll and serves it at [tend2thrive.com](https://tend2thrive.com). No
GitHub Actions workflow is involved.
