"""Lightweight local preview builder — NOT used for production (GitHub Pages
builds the real Jekyll site). This script resolves the handful of Liquid
tags used in this repo's templates/pages so the redesigned UI (Three.js
hero, Motion scroll animations, tilt cards) can be checked in a browser
without needing a full Ruby/Jekyll toolchain.
"""
import re
import shutil
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "_preview"
SITE_TIME = str(int(time.time()))
SITE_TITLE = "Sanket Vishwakarma"
SITE_DESCRIPTION = "Data Engineer | Building scalable data pipelines and analytics solutions"


def strip_front_matter(text):
    match = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not match:
        return {}, text
    fm_text, body = match.groups()
    fm = {}
    for line in fm_text.splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            fm[key.strip()] = value.strip().strip('"')
    return fm, body


def load_posts():
    posts = []
    for path in sorted((ROOT / "_posts").glob("*.md"), reverse=True):
        fm, body = strip_front_matter(path.read_text(encoding="utf-8"))
        slug = re.sub(r"^\d{4}-\d{2}-\d{2}-", "", path.stem)
        date_str = fm.get("date", "")
        try:
            pretty_date = time.strftime("%B %d, %Y", time.strptime(date_str, "%Y-%m-%d"))
        except ValueError:
            pretty_date = date_str
        excerpt = fm.get("excerpt", "")
        posts.append({
            "title": fm.get("title", slug),
            "url": f"/blog/{date_str.replace('-', '/')}/{slug}/",
            "date": pretty_date,
            "excerpt": excerpt[:250],
            "body": body,
        })
    return posts


def render_liquid_basics(text, page_title=""):
    text = text.replace("{{ site.time | date: '%s' }}", SITE_TIME)
    text = text.replace("{{ site.title }}", SITE_TITLE)
    text = text.replace("{{ site.description }}", SITE_DESCRIPTION)
    text = text.replace("{{ page.title }}", page_title)
    text = re.sub(r"\{\{\s*'([^']*)'\s*\|\s*relative_url\s*\}\}", r"\1", text)
    text = re.sub(r"\{\{[^}]*\}\}", "", text)
    return text


def render_post_loop(body, posts):
    pattern = re.compile(
        r"\{% for post in site\.posts(?: limit:(\d+))? %\}(.*?)\{% endfor %\}", re.DOTALL
    )

    def handle(m):
        lim = int(m.group(1)) if m.group(1) else None
        block = m.group(2)
        items = posts[:lim] if lim else posts
        out = []
        for post in items:
            piece = block
            piece = piece.replace("{{ post.url | relative_url }}", post["url"])
            piece = piece.replace('{{ post.date | date: "%B %d, %Y" }}', post["date"])
            piece = piece.replace("{{ post.title }}", post["title"])
            piece = piece.replace('{{ post.excerpt | strip_html | truncate: 200 }}', post["excerpt"])
            piece = piece.replace('{{ post.excerpt | strip_html | truncate: 250 }}', post["excerpt"])
            out.append(piece)
        return "".join(out)

    return pattern.sub(handle, body)


def build_page(md_path, layout, posts, out_path):
    fm, body = strip_front_matter(md_path.read_text(encoding="utf-8"))
    body = render_post_loop(body, posts)
    body = render_liquid_basics(body, page_title=fm.get("title", ""))
    page = layout.replace("{{ content }}", body)
    page = render_liquid_basics(page, page_title=fm.get("title", ""))
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(page, encoding="utf-8")


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    layout = (ROOT / "_layouts" / "default.html").read_text(encoding="utf-8")
    posts = load_posts()

    build_page(ROOT / "index.md", layout, posts, OUT / "index.html")
    build_page(ROOT / "about.md", layout, posts, OUT / "about" / "index.html")
    build_page(ROOT / "blog.md", layout, posts, OUT / "blog" / "index.html")
    build_page(ROOT / "contact.md", layout, posts, OUT / "contact" / "index.html")

    shutil.copytree(ROOT / "assets", OUT / "assets")
    pdf = ROOT / "resume_sanket_vishwakarma.pdf"
    if pdf.exists():
        shutil.copy(pdf, OUT / pdf.name)

    print(f"Preview built at {OUT}")


if __name__ == "__main__":
    main()
