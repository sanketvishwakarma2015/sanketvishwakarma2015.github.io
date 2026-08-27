---
title: Sanket Vishwakarma — Data Engineer
layout: default
---

<section class="hero">
    <div class="container">
        <div class="hero-inner">
            <div class="hero-copy">
                <div class="terminal-tag">
                    <span class="terminal-prompt">~/portfolio</span>
                    <span class="terminal-cmd">&nbsp;$ whoami</span>
                </div>
                <h1>Sanket<br><span class="gradient-text">Vishwakarma</span></h1>
                <div class="typewriter-row">
                    <span class="tw-static">I build </span><span class="typewriter" data-words='["data pipelines","cloud platforms","ETL workflows","data warehouses","real-time streams","analytics systems"]'></span>
                </div>
                <p class="hero-desc">
                    Senior Data Engineer specializing in scalable data infrastructure, real-time streaming, and cloud-native solutions on AWS, Azure & GCP. Turning raw data into reliable, actionable insights.
                </p>
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-num" data-count="5">5<span>+</span></div>
                        <div class="stat-label">Years Exp</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat">
                        <div class="stat-num" data-count="50">50<span>+</span></div>
                        <div class="stat-label">Pipelines</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat">
                        <div class="stat-num" data-count="3">3</div>
                        <div class="stat-label">Cloud Platforms</div>
                    </div>
                </div>
                <div class="cta-buttons">
                    <a href="/resume_sanket_vishwakarma.pdf?v={{ site.time | date: '%s' }}" class="btn btn-primary magnetic" target="_blank">
                        <i class="fas fa-download"></i> Resume
                    </a>
                    <a href="/contact/" class="btn btn-secondary magnetic">
                        <i class="fas fa-paper-plane"></i> Hire Me
                    </a>
                </div>
            </div>
            <div class="hero-stage" id="heroStage" aria-hidden="true"></div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-label">Expertise</div>
            <h2 class="section-title">What I Build</h2>
            <p class="section-subtitle">End-to-end data infrastructure that scales, performs, and ships on time.</p>
        </div>
        <div class="cards-grid">
            <div class="card">
                <div class="card-icon"><i class="fas fa-database"></i></div>
                <h3>Data Engineering</h3>
                <p>Designing and building robust ETL/ELT pipelines, data warehouses, and lakehouses that handle large-scale processing efficiently.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-cloud"></i></div>
                <h3>Cloud Architecture</h3>
                <p>Implementing scalable cloud-native solutions on AWS, Azure, and GCP — from serverless data platforms to managed streaming clusters.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-stream"></i></div>
                <h3>Real-time Streaming</h3>
                <p>Building sub-second event-driven systems with Apache Kafka, Flink, and Kinesis — processing millions of events per second reliably.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                <h3>Analytics Engineering</h3>
                <p>Crafting data models with dbt, Snowflake, and BigQuery that power BI dashboards and enable self-serve analytics across the business.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-label">Stack</div>
            <h2 class="section-title">Tech Arsenal</h2>
            <p class="section-subtitle">Battle-tested tools I use to ship reliable data systems.</p>
        </div>
        <div class="tech-stack">
            <span class="tech-badge">Python</span>
            <span class="tech-badge">SQL</span>
            <span class="tech-badge">Apache Spark</span>
            <span class="tech-badge">Airflow</span>
            <span class="tech-badge">Kafka</span>
            <span class="tech-badge">AWS</span>
            <span class="tech-badge">Azure</span>
            <span class="tech-badge">GCP</span>
            <span class="tech-badge">Snowflake</span>
            <span class="tech-badge">dbt</span>
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">Kubernetes</span>
            <span class="tech-badge">Terraform</span>
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">MongoDB</span>
            <span class="tech-badge">Flink</span>
            <span class="tech-badge">Redshift</span>
            <span class="tech-badge">BigQuery</span>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-label">Writing</div>
            <h2 class="section-title">Latest Posts</h2>
            <p class="section-subtitle">Notes from the engineering trenches — what I learn, break, and fix.</p>
        </div>
        <div class="blog-posts">
            {% for post in site.posts limit:3 %}
            <a href="{{ post.url | relative_url }}" class="blog-post">
                <div class="blog-post-date">{{ post.date | date: "%b %d, %Y" }}</div>
                <div class="blog-post-body">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
                </div>
                <i class="fas fa-arrow-right blog-post-arrow"></i>
            </a>
            {% endfor %}
        </div>
        <div style="text-align:center;margin-top:2rem;">
            <a href="/blog/" class="btn btn-secondary">View All Posts</a>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="cta-band">
            <h2>Ready to build something great?</h2>
            <p>I'm open to consulting, full-time roles, and data engineering collaborations. Let's talk.</p>
            <div class="cta-buttons" style="justify-content:center;">
                <a href="/contact/" class="btn btn-primary magnetic"><i class="fas fa-envelope"></i> Get in Touch</a>
                <a href="https://www.linkedin.com/in/sanket-vishwakarma-902953109/" class="btn btn-secondary magnetic" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    </div>
</section>
