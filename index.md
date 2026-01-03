---
title: Sanket Vishwakarma — Data Engineer
layout: default
---

<section class="hero">
    <h1>Sanket Vishwakarma</h1>
    <p class="subtitle">&lt; Data Engineer /&gt;</p>
    <p class="description">
        Building scalable data pipelines, analytics solutions, and transforming raw data into actionable insights.
        Passionate about data engineering, cloud technologies, and creating efficient ETL workflows.
    </p>
    <div class="cta-buttons">
        <a href="/resume_sanket_vishwakarma.pdf" class="btn btn-primary" target="_blank">
            <i class="fas fa-download"></i> View Resume
        </a>
        <a href="https://www.linkedin.com/in/sanket-vishwakarma-902953109/" class="btn btn-secondary" target="_blank">
            <i class="fab fa-linkedin"></i> Connect on LinkedIn
        </a>
    </div>
</section>

<section class="section">
    <h2 class="section-title">What I Do</h2>
    <p class="section-subtitle">// Building data infrastructure at scale</p>
    
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">
                <i class="fas fa-database"></i>
            </div>
            <h3>Data Engineering</h3>
            <p>Designing and building robust data pipelines, ETL workflows, and data warehouses that handle large-scale data processing efficiently.</p>
        </div>
        
        <div class="card">
            <div class="card-icon">
                <i class="fas fa-cloud"></i>
            </div>
            <h3>Cloud Architecture</h3>
            <p>Implementing scalable cloud solutions on AWS, Azure, and GCP. Expertise in serverless architectures and cloud-native data platforms.</p>
        </div>
        
        <div class="card">
            <div class="card-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <h3>Analytics & BI</h3>
            <p>Creating data models and analytics solutions that empower business intelligence and drive data-driven decision making.</p>
        </div>
        
        <div class="card">
            <div class="card-icon">
                <i class="fas fa-cogs"></i>
            </div>
            <h3>Data Quality</h3>
            <p>Implementing data quality frameworks and governance practices to ensure data accuracy, consistency, and reliability.</p>
        </div>
    </div>
</section>

<section class="section">
    <h2 class="section-title">Tech Stack</h2>
    <p class="section-subtitle">// Tools and technologies I work with</p>
    
    <div class="tech-stack">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">SQL</span>
        <span class="tech-badge">Apache Spark</span>
        <span class="tech-badge">Airflow</span>
        <span class="tech-badge">Kafka</span>
        <span class="tech-badge">AWS</span>
        <span class="tech-badge">Azure</span>
        <span class="tech-badge">Snowflake</span>
        <span class="tech-badge">DBT</span>
        <span class="tech-badge">Docker</span>
        <span class="tech-badge">Kubernetes</span>
        <span class="tech-badge">Terraform</span>
        <span class="tech-badge">PostgreSQL</span>
        <span class="tech-badge">MongoDB</span>
    </div>
</section>

<section class="section">
    <h2 class="section-title">Latest Blog Posts</h2>
    <p class="section-subtitle">// Sharing insights and learnings</p>
    
    <div class="blog-posts">
        {% for post in site.posts limit:3 %}
        <a href="{{ post.url | relative_url }}" class="blog-post">
            <div class="blog-post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
            <h2>{{ post.title }}</h2>
            <p class="blog-post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        </a>
        {% endfor %}
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
        <a href="/blog/" class="btn btn-secondary">View All Posts</a>
    </div>
</section>

<section class="section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); border-radius: 16px; padding: 3rem 2rem; text-align: center;">
    <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--text-primary);">Ready to Collaborate?</h2>
    <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
        I'm always open to discussing data engineering projects, consulting opportunities, or just connecting with fellow engineers.
    </p>
    <div class="cta-buttons">
        <a href="/contact/" class="btn btn-primary">
            <i class="fas fa-envelope"></i> Get in Touch
        </a>
        <a href="https://www.linkedin.com/in/sanket-vishwakarma-902953109/" class="btn btn-secondary" target="_blank">
            <i class="fab fa-linkedin"></i> Connect on LinkedIn
        </a>
    </div>
</section>
