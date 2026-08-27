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
                        <div class="stat-num" data-count="100" data-suffix="K+">100<span>K+</span></div>
                        <div class="stat-label">Cloud Saved</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat">
                        <div class="stat-num" data-count="65" data-suffix="%">65<span>%</span></div>
                        <div class="stat-label">Data Quality ↑</div>
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
                <div class="card-icon"><i class="fas fa-layer-group"></i></div>
                <h3>Data Lakehouse Engineering</h3>
                <p>Building end-to-end lakehouse pipelines with PySpark, Delta Lake, and Databricks Lakeflow. Ran enterprise-scale data migrations across Snowflake, Databricks, and AWS post-acquisition.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-brain"></i></div>
                <h3>GenAI-Powered Data Quality</h3>
                <p>Built an LLM-driven Snowflake Streamlit app where AI writes SQL validation rules at runtime — integrated with DBT and a full approval workflow. Improved data quality by 65%.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-dollar-sign"></i></div>
                <h3>Cloud Cost Optimization</h3>
                <p>Reduced AWS and Snowflake spend by $100K+/year through KMS key audits, small-file compaction, cold-data archival, and warehouse scheduling optimization across the data platform.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-code-branch"></i></div>
                <h3>DataOps & CI/CD</h3>
                <p>Owned DevOps for data teams: IAM-governed repo deployments, auto-merge pipelines, and real-time monitoring dashboards (Python + Step Functions + Lambda) — cutting manual monitoring by 70%.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-server"></i></div>
                <h3>System Design & App Infra</h3>
                <p>Architected production Elastic Beanstalk setups running Node.js, Next.js, and Streamlit apps. Designed secure AWS Lake Formation governance, SSO/SSL integrations, and role-based access across multi-team data platforms.</p>
            </div>
            <div class="card">
                <div class="card-icon"><i class="fas fa-robot"></i></div>
                <h3>Vibe Coding & AI Agents</h3>
                <p>Building experimental systems with MCP connectors, LLM-powered agents, and AI toolchains — from autonomous data pipelines to GenAI apps that harness models for real engineering workflows.</p>
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
            <span class="tech-badge">PySpark</span>
            <span class="tech-badge">Python</span>
            <span class="tech-badge">SQL</span>
            <span class="tech-badge">Databricks</span>
            <span class="tech-badge">Snowflake</span>
            <span class="tech-badge">Delta Lake</span>
            <span class="tech-badge">DBT</span>
            <span class="tech-badge">AWS</span>
            <span class="tech-badge">Lake Formation</span>
            <span class="tech-badge">Elastic Beanstalk</span>
            <span class="tech-badge">AWS Glue</span>
            <span class="tech-badge">Lambda</span>
            <span class="tech-badge">Step Functions</span>
            <span class="tech-badge">Airflow</span>
            <span class="tech-badge">Terraform</span>
            <span class="tech-badge">Streamlit</span>
            <span class="tech-badge">LLM / GenAI</span>
            <span class="tech-badge">MCP Connectors</span>
            <span class="tech-badge">AI Agents</span>
            <span class="tech-badge">Power BI</span>
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">CI/CD</span>
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
