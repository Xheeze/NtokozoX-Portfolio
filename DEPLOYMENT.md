# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed (download from https://git-scm.com/downloads if needed)
3. Your portfolio built successfully (`npm run build`)

## Option 1: Automated Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to GitHub.

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository (e.g., `pp-portfolio`)
3. Choose "Public" (required for free GitHub Pages)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Initialize Git and Push

Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - portfolio setup"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run and deploy your site

Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Step 4: Update Base Path (Important!)

After creating your repo, update `vite.config.js`:

```javascript
// Replace '/' with '/your-repo-name/'
const base = process.env.VITE_BASE_PATH || '/pp-portfolio/'
```

Then commit and push:
```powershell
git add vite.config.js
git commit -m "Update base path for GitHub Pages"
git push
```

## Option 2: Manual Deployment with gh-pages

### Step 1: Install gh-pages

```powershell
npm install
```

### Step 2: Deploy

```powershell
npm run deploy
```

This will:
1. Build your project
2. Push the `dist` folder to a `gh-pages` branch
3. GitHub Pages will serve from that branch

### Step 3: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"
3. Click Save

Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Testing Locally Before Deployment

Preview the production build locally:

```powershell
npm run build
npm run preview
```

Visit http://localhost:4173 to see how it will look on GitHub Pages.

## Updating Your Site

### With GitHub Actions:
```powershell
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically rebuild and deploy.

### With gh-pages:
```powershell
npm run deploy
```

## Custom Domain (Optional)

1. Buy a domain name
2. In your repo, go to Settings → Pages
3. Under "Custom domain", enter your domain
4. Create a file `public/CNAME` with your domain name
5. Update your DNS settings (see GitHub docs)

## Troubleshooting

### Assets not loading (404 errors)
- Make sure `base` in `vite.config.js` matches your repo name
- Check that `public` folder assets are in the `dist` folder after build

### Blank page on GitHub Pages
- Verify the base path is correct (`/repo-name/`)
- Check browser console for errors
- Ensure `index.html` is in the root of your `dist` folder

### GitHub Actions failing
- Check the Actions tab for error logs
- Verify `package-lock.json` is committed
- Ensure Node version in workflow matches your local version

## Files Created for Deployment

- `.github/workflows/deploy.yml` - Automated deployment workflow
- `vite.config.js` - Updated with base path configuration
- `package.json` - Added deploy scripts and gh-pages dependency

## Need Help?

Check the GitHub Pages documentation: https://docs.github.com/en/pages
