# 🚀 Quick Start Guide - Setting Up Your Portfolio Website

## 📋 Prerequisites

To run this Jekyll website locally, you'll need:

### Option 1: Using Jekyll (Recommended for Development)

1. **Install Ruby** (version 2.7 or higher)
   - Windows: Download from https://rubyinstaller.org/
   - macOS: `brew install ruby`
   - Linux: `sudo apt-get install ruby-full`

2. **Install Bundler and Jekyll**
   ```bash
   gem install bundler jekyll
   ```

3. **Navigate to the project directory**
   ```bash
   cd "sanketvishwakarma2015.github.io"
   ```

4. **Install dependencies**
   ```bash
   bundle install
   ```

5. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

6. **Open your browser**
   Visit: http://localhost:4000

### Option 2: GitHub Pages (No Local Setup Required)

Simply push your changes to GitHub, and GitHub Pages will automatically build and deploy your site!

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Update portfolio website"
   ```

2. **Push to GitHub**
   ```bash
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as the source
   - Your site will be live at: https://sanketvishwakarma2015.github.io

## 🎨 Customization Guide

### Update Personal Information

1. **Edit `_config.yml`**
   - Update your name, description, and URLs

2. **Update `index.md`**
   - Modify your bio, skills, and project descriptions

3. **Update `about.md`**
   - Add more details about your background and expertise

### Add New Blog Posts

Create a new file in the `_posts` directory:

```bash
_posts/YYYY-MM-DD-your-post-title.md
```

Example content:
```markdown
---
title: "Your Post Title"
date: 2026-01-03
layout: post
author: Sanket Vishwakarma
excerpt: "A brief description"
---

Your content here...
```

### Change Colors and Styling

Edit `assets/css/style.css` and modify the CSS variables:

```css
:root {
    --bg-primary: #0a0e27;        /* Main background */
    --accent-primary: #6366f1;    /* Primary accent color */
    --accent-secondary: #8b5cf6;  /* Secondary accent color */
    /* ... more variables */
}
```

## 🐛 Troubleshooting

### Jekyll Not Installed
- Follow the Ruby and Jekyll installation steps above

### Gemfile.lock Conflicts
```bash
bundle update
```

### Port Already in Use
```bash
bundle exec jekyll serve --port 4001
```

### CSS/JS Not Loading
- Clear your browser cache
- Do a hard refresh (Ctrl+Shift+R)
- Check that assets files are in the correct directories

## 📁 File Structure Overview

```
├── _layouts/           # HTML templates
│   ├── default.html    # Main layout with nav & footer
│   ├── home.html       # Home page wrapper
│   └── post.html       # Blog post template
├── _posts/             # Blog posts (markdown files)
├── assets/
│   ├── css/
│   │   └── style.css   # All CSS styles
│   └── js/
│       └── stars.js    # JavaScript for animations
├── _config.yml         # Site configuration
├── index.md            # Home page content
├── about.md            # About page
├── blog.md             # Blog listing page
├── 404.html            # Custom 404 page
├── Gemfile             # Ruby dependencies
└── README.md           # This file
```

## 🎯 What's Next?

1. ✅ Set up local development environment OR push to GitHub
2. ✅ Customize content (bio, projects, skills)
3. ✅ Add your resume PDF
4. ✅ Write blog posts
5. ✅ Update social media links
6. ✅ Add more pages if needed (Projects, Contact, etc.)
7. ✅ Set up a custom domain (optional)

## 📚 Useful Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 💡 Tips

- **Test locally** before pushing to GitHub
- **Keep content updated** - add new blog posts regularly
- **Optimize images** - compress images before adding them
- **Check mobile view** - test on different screen sizes
- **Add analytics** - consider Google Analytics for insights

---

Built with ❤️ by Sanket Vishwakarma

Need help? Check the [GitHub repository](https://github.com/sanketvishwakarma2015/sanketvishwakarma2015.github.io) for more info!
