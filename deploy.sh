#!/bin/bash
# Quick Deployment Script for Your Portfolio Website
# Run this after making any changes to deploy to GitHub Pages

echo "🚀 Deploying your portfolio website..."
echo ""

# Add all files
echo "📦 Adding files to git..."
git add .

# Show what's being committed
echo ""
echo "📝 Files to be committed:"
git status --short

# Commit with timestamp
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio website - $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$commit_msg"

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your website will be live at: https://sanketvishwakarma2015.github.io"
echo "⏰ It may take 1-2 minutes for changes to appear"
echo ""
