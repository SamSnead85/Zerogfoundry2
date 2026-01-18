---
description: How to deploy React/Vite projects to Netlify without build failures
---

# Netlify Deployment for React/Vite Projects

## Common Issues & Solutions

### 1. React 19 Peer Dependency Conflicts

**Problem**: Many npm packages (like `react-helmet-async`) don't yet declare React 19 as a peer dependency, causing `npm install` to fail on Netlify with `ERESOLVE` errors.

**Solution**: Use `--legacy-peer-deps` in your build command.

```toml
# netlify.toml
[build]
  command = "npm install --legacy-peer-deps && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### 2. TypeScript Build Errors

**Problem**: TypeScript strict mode catches issues that work locally but fail in CI.

**Common Fixes**:
- Use type-only imports: `import { type ReactNode } from 'react'`
- Provide initial values for useRef: `useRef<number | undefined>(undefined)`
- Remove unused variables from callbacks

### 3. Node.js Version Mismatch

**Problem**: Netlify uses an older Node.js version by default.

**Solution**: Always specify Node version:
```toml
[build.environment]
  NODE_VERSION = "20"
```

Or create `.nvmrc` file with content: `20`

## Recommended netlify.toml Template

```toml
# Netlify deployment configuration
[build]
  command = "npm install --legacy-peer-deps && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

# SPA redirect for React Router
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache static assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Pre-Deployment Checklist

// turbo-all

1. Run `npm run build` locally to catch TypeScript errors
2. Verify netlify.toml exists with correct settings
3. Ensure .nvmrc file specifies Node 20
4. Test with `npm install --legacy-peer-deps` if using React 19
