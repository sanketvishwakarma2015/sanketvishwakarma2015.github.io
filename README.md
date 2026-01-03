# Sanket Vishwakarma - Portfolio Website

🚀 Modern dark-themed developer portfolio built with Jekyll and hosted on GitHub Pages.

## ✨ Features

- **Dark theme with twinkling stars background** - A stunning space-inspired design
- **Fully responsive** - Works perfectly on all devices
- **Blog functionality** - Share your insights and technical articles
- **Modern tech stack** - Jekyll, HTML5, CSS3, JavaScript
- **Optimized performance** - Fast loading and smooth animations
- **SEO-friendly** - Proper meta tags and structure

## 🛠️ Tech Stack

- Jekyll (Static Site Generator)
- HTML5 / CSS3
- JavaScript (Vanilla)
- GitHub Pages (Hosting)
- Font Awesome (Icons)
- Google Fonts (Fira Code & Inter)

## 📁 Project Structure

```
.
├── _layouts/          # HTML layout templates
│   ├── default.html   # Main layout with navigation
│   ├── home.html      # Home page layout
│   └── post.html      # Blog post layout
├── _posts/            # Blog posts (markdown)
├── assets/
│   ├── css/
│   │   └── style.css  # Main stylesheet
│   └── js/
│       └── stars.js   # Twinkling stars animation
├── _config.yml        # Jekyll configuration
├── index.md           # Home page
├── blog.md            # Blog listing page
└── 404.html           # Custom 404 page
```

## 🚀 Local Development

1. Install Jekyll:
```bash
gem install jekyll bundler
```

2. Clone the repository:
```bash
git clone https://github.com/sanketvishwakarma2015/sanketvishwakarma2015.github.io.git
cd sanketvishwakarma2015.github.io
```

3. Install dependencies:
```bash
bundle install
```

4. Run the development server:
```bash
bundle exec jekyll serve
```

5. Open your browser and visit `http://localhost:4000`

## 📝 Adding Blog Posts

Create a new file in the `_posts` directory with the format:
```
YYYY-MM-DD-title-of-post.md
```

Example front matter:
```yaml
---
title: "Your Post Title"
date: 2026-01-03
layout: post
author: Sanket Vishwakarma
excerpt: "A brief description of your post"
---

Your content here...
```

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --bg-primary: #0a0e27;
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    /* ... */
}
```

### Navigation
Update links in `_layouts/default.html` in the navbar section.

### Content
- Home page: Edit `index.md`
- Blog page: Edit `blog.md`
- Config: Edit `_config.yml`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- LinkedIn: [linkedin.com/in/sanket-vishwakarma-902953109](https://www.linkedin.com/in/sanket-vishwakarma-902953109/)
- GitHub: [@sanketvishwakarma2015](https://github.com/sanketvishwakarma2015)

---

Built with ❤️ by Sanket Vishwakarma
