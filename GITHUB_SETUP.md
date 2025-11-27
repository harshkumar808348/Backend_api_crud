# GitHub Setup Guide

Follow these steps to push your project to GitHub.

## Initial Setup

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it (e.g., `employee-task-api`)
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Initialize Git in Your Project

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Employee and Task Management API"
```

### 3. Connect to GitHub Repository

```bash
# Add remote repository (replace with your GitHub username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Or if using SSH:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 4. Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## Future Updates

When you make changes:

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Important Notes

- **Never commit `.env` file** - It's already in `.gitignore`
- **Never commit `node_modules`** - It's already in `.gitignore`
- Always review what you're committing: `git status` before `git add`

## Branching Strategy

For new features:

```bash
# Create and switch to new branch
git checkout -b feature/new-feature-name

# Make changes, then commit
git add .
git commit -m "Add new feature"

# Push branch to GitHub
git push -u origin feature/new-feature-name

# Create Pull Request on GitHub website
```

## Troubleshooting

### If you get authentication errors:

1. Use Personal Access Token instead of password
2. Or set up SSH keys for GitHub
3. Or use GitHub CLI: `gh auth login`

### If remote already exists:

```bash
# Check current remote
git remote -v

# Update remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

