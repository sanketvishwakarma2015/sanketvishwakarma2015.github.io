# Quick Deployment Script for Your Portfolio Website
# Run this after making any changes to deploy to GitHub Pages

Write-Host "🚀 Deploying your portfolio website..." -ForegroundColor Cyan
Write-Host ""

# Add all files
Write-Host "📦 Adding files to git..." -ForegroundColor Yellow
git add .

# Show what's being committed
Write-Host ""
Write-Host "📝 Files to be committed:" -ForegroundColor Yellow
git status --short

# Commit with timestamp
Write-Host ""
$commitMsg = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $commitMsg = "Update portfolio website - $timestamp"
}

git commit -m $commitMsg

# Push to GitHub
Write-Host ""
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your website will be live at: https://sanketvishwakarma2015.github.io" -ForegroundColor Cyan
Write-Host "⏰ It may take 1-2 minutes for changes to appear" -ForegroundColor Gray
Write-Host ""
