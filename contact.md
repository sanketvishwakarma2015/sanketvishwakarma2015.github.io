---
title: Let's Collaborate
layout: default
permalink: /contact/
---

<section class="section contact-page">
    <div style="max-width: 900px; margin: 0 auto;">
        <h2 class="section-title">Let's Build Something Great Together</h2>
        <p class="section-subtitle">// Open for collaboration, consulting, and opportunities</p>
        
        <div class="contact-intro">
            <p>
                I'm always interested in discussing data engineering challenges, exploring new opportunities, 
                or collaborating on innovative projects. Whether you're looking for a data engineer, 
                need consulting on your data infrastructure, or just want to connect, feel free to reach out!
            </p>
        </div>

        <div class="contact-grid">
            <div class="contact-card">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <a href="mailto:vishwakarmasanket0@gmail.com" class="contact-link">
                    vishwakarmasanket0@gmail.com
                </a>
                <p class="contact-note">Best for detailed inquiries</p>
            </div>
            
            <div class="contact-card">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <h3>Phone</h3>
                <a href="tel:+917980956276" class="contact-link">
                    +91 7980 956 276
                </a>
                <p class="contact-note">Available during business hours (IST)</p>
            </div>
            
            <div class="contact-card">
                <div class="contact-icon">
                    <i class="fab fa-linkedin"></i>
                </div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sanket-vishwakarma-902953109/" target="_blank" class="contact-link">
                    Connect with me
                </a>
                <p class="contact-note">Let's expand our network</p>
            </div>
            
            <div class="contact-card">
                <div class="contact-icon">
                    <i class="fab fa-github"></i>
                </div>
                <h3>GitHub</h3>
                <a href="https://github.com/sanketvishwakarma2015" target="_blank" class="contact-link">
                    View my code
                </a>
                <p class="contact-note">Check out my projects</p>
            </div>
        </div>

        <div class="collaboration-areas">
            <h3 style="text-align: center; margin-bottom: 2rem; color: var(--text-primary);">
                I Can Help With
            </h3>
            <div class="collab-grid">
                <div class="collab-item">
                    <i class="fas fa-rocket"></i>
                    <h4>Data Pipeline Development</h4>
                    <p>Build scalable, robust ETL/ELT pipelines</p>
                </div>
                <div class="collab-item">
                    <i class="fas fa-cloud"></i>
                    <h4>Cloud Migration</h4>
                    <p>Migrate data infrastructure to AWS, Azure, or GCP</p>
                </div>
                <div class="collab-item">
                    <i class="fas fa-database"></i>
                    <h4>Data Architecture</h4>
                    <p>Design data warehouses and lakehouse solutions</p>
                </div>
                <div class="collab-item">
                    <i class="fas fa-chart-line"></i>
                    <h4>Analytics Engineering</h4>
                    <p>Transform raw data into actionable insights</p>
                </div>
                <div class="collab-item">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Data Quality</h4>
                    <p>Implement data validation and governance</p>
                </div>
                <div class="collab-item">
                    <i class="fas fa-cogs"></i>
                    <h4>Process Optimization</h4>
                    <p>Improve performance and reduce costs</p>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <h3>Ready to Start a Conversation?</h3>
            <p>Drop me an email or give me a call. I typically respond within 24 hours.</p>
            <div class="cta-buttons" style="margin-top: 2rem;">
                <a href="mailto:vishwakarmasanket0@gmail.com" class="btn btn-primary">
                    <i class="fas fa-envelope"></i> Send Email
                </a>
                <a href="tel:+917980956276" class="btn btn-secondary">
                    <i class="fas fa-phone"></i> Call Now
                </a>
            </div>
        </div>
    </div>
</section>

<style>
.contact-page {
    padding: 3rem 0 5rem;
}

.contact-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 4rem;
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.contact-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.contact-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);
}

.contact-card:hover::before {
    transform: scaleX(1);
}

.contact-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.contact-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.contact-link {
    display: inline-block;
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;
}

.contact-link:hover {
    border-bottom-color: var(--accent-primary);
    color: var(--accent-secondary);
}

.contact-note {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

.collaboration-areas {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem 2rem;
    margin-bottom: 4rem;
}

.collab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.collab-item {
    text-align: center;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.collab-item i {
    font-size: 2.5rem;
    color: var(--accent-primary);
    margin-bottom: 1rem;
    display: block;
}

.collab-item h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.collab-item p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.collab-item:hover {
    transform: translateY(-3px);
}

.collab-item:hover i {
    color: var(--accent-secondary);
}

.cta-section {
    text-align: center;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem 2rem;
}

.cta-section h3 {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.cta-section p {
    font-size: 1.1rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .contact-grid,
    .collab-grid {
        grid-template-columns: 1fr;
    }
}
</style>
