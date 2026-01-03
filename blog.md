---
title: Blog
layout: default
permalink: /blog/
---

<section class="section">
    <h2 class="section-title">Blog</h2>
    <p class="section-subtitle">// Insights, notes, and lessons from the data engineering trenches</p>
    
    <div class="blog-posts">
        {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}" class="blog-post">
            <div class="blog-post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
            <h2>{{ post.title }}</h2>
            <p class="blog-post-excerpt">{{ post.excerpt | strip_html | truncate: 250 }}</p>
        </a>
        {% endfor %}
    </div>
</section>
