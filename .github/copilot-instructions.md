# GitHub Copilot Instructions for 元壹宇宙 (yyuniverse.com)

## Project Overview

This is **元壹宇宙** (yyuniverse.com), the official website for the 默默超思維系統 (Momo Super Thinking System), a philosophical exploration platform. The site provides an immersive museum-grade experience with dual theme support (Universe Mode - dark theme, and Meditation Mode - light theme).

### Tech Stack
- **Frontend**: React 19.2 with TypeScript
- **Build Tool**: Vite 6.4
- **Routing**: React Router v7
- **Styling**: Tailwind CSS 4.1 (local build, no CDN)
- **SEO**: react-helmet-async for dynamic meta tags
- **Analytics**: Vercel Analytics
- **AI Integration**: Google Gemini API (@google/genai)
- **Deployment**: Vercel

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- TypeScript config is at `tsconfig.json` with target ES2022
- Enable `experimentalDecorators` and disable `useDefineForClassFields`
- Use path aliases with `@/*` pointing to root directory
- JSX transform: `react-jsx` (no need to import React in every file)

### Code Style
- Use functional components with hooks (React 19.2)
- Prefer arrow functions for component definitions
- Use single quotes for strings in JSX/TSX files
- Follow existing naming conventions in the codebase
- Keep components in the `components/` directory, pages in `pages/`

### Imports
- Use ES modules (`import`/`export`)
- Use path aliases: `@/components/`, `@/pages/`, etc.
- Icons from `lucide-react`

### Comments
- Use Chinese comments for business logic and complex explanations (this is a Chinese-language project)
- Use English for technical terms and code annotations

## Styling with Tailwind CSS

### Custom Colors
- **void**: `#050508` (dark background)
- **paper**: `#fafafa` (light background)  
- **gold**: `#f59e0b` (accent color)
- **muted-gold**: `#d97706` (secondary accent)
- **ink**: `#1e293b` (dark text)

### Custom Animations
Available custom animations:
- `animate-pulse-slow`: 4s pulse
- `animate-spin-slow`: 20s spin
- `animate-spin-slower`: 60s spin
- `animate-float`: 6s floating effect
- `animate-fade-in`: 0.5s fade in
- `animate-fade-in-up`: 0.6s fade in with upward motion
- `animate-breathing`: 5s breathing effect
- `animate-reveal-blur`: 1s blur reveal
- `animate-shimmer`: 8s shimmer
- `animate-pop-in`: 0.3s pop-in effect

### Theme Support
- Check `tailwind.config.js` for safelist patterns
- Use theme-aware classes: `bg-void` (dark), `bg-paper` (light)
- Theme state managed in `App.tsx` via `localStorage`

## Component Structure

### Page Components
- Located in `pages/` directory
- Each page should export a default function component
- Use lazy loading in `router.tsx` for code splitting
- Include SEO component for meta tags

### Shared Components
- Located in `components/` directory
- Reusable components: Nav, Footer, SEO, ScrollToTop, etc.
- CollapsibleNav and DualNav for navigation
- Infographics, SystemMap, Visuals for visual elements

## Routing

### React Router Setup
- Router config in `router.tsx`
- Use lazy loading with `React.lazy()` for all page imports
- SPA fallback configured in `vercel.json`
- Always use `navigate()` hook for programmatic navigation
- Scroll to top after navigation using `ScrollToTop` component

### Route Structure
- `/` - Home page
- `/about`, `/about-momo` - About pages
- `/nine-origins`, `/seven-principles`, `/reality-mirror` - Core concepts
- `/ai-chat` - AI interaction
- `/gallery`, `/glossary`, `/references` - Resources
- See `router.tsx` for complete route map

## SEO Best Practices

### Meta Tags
- Use the `SEO` component from `components/SEO.tsx`
- Configure page-specific SEO in `seo-config.ts`
- Include title, description, keywords, Open Graph, and Twitter Card data
- Update `public/sitemap.xml` when adding new pages

### Image Optimization
- Use appropriate image formats (WebP preferred)
- Include `alt` attributes for all images
- Lazy load images when appropriate

## Build & Development

### Setup
```bash
npm install
```

### Environment Variables
Create `.env.local` file with:
```
GEMINI_API_KEY=your_api_key_here
```

### Development Server
```bash
npm run dev
```
Runs on http://localhost:3000

### Production Build
```bash
npm run build
```
- Output directory: `dist/`
- Bundle analysis available at `dist/stats.html`

### Preview Production Build
```bash
npm run preview
```

## Bundle Optimization

### Code Splitting Strategy
- React vendor bundle: ~98 KB (React, React DOM, React Router)
- Icons bundle: ~35 KB (lucide-react)
- Page-level code splitting with lazy loading
- Target: Keep main bundle under 250 KB

### Manual Chunks
Check `vite.config.ts` for manual chunk configuration:
- `react-vendor`: React core libraries
- `icons`: lucide-react icons

## Security Best Practices

### API Keys
- Never commit API keys or secrets to the repository
- Always use environment variables for sensitive data
- API keys should be in `.env.local` (already gitignored)

### Environment Variables
- Use Vite's `import.meta.env` for accessing environment variables
- Define them in `vite.config.ts` for build-time injection
- Configure production environment variables in Vercel dashboard

### Content Security
- Validate all user inputs (especially in AI chat feature)
- Sanitize content before rendering user-generated data
- Use React's built-in XSS protection (JSX auto-escapes)

## Deployment

### Vercel Deployment
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: Set `GEMINI_API_KEY` in Vercel dashboard
- SPA routing: Configured via `vercel.json`
- Auto-deploy on push to `main` branch

### Vercel Configuration
Check `vercel.json` for:
- SPA fallback routing
- Static asset caching headers
- Gzip/Brotli compression

## AI Integration

### Gemini API
- Located in `services/` directory (if exists) or integrated in components
- Use environment variable `GEMINI_API_KEY`
- Check AI chat implementation in `pages/AIChat.tsx`

## Performance Guidelines

### Loading Performance
- Use lazy loading for routes (already configured)
- Minimize bundle size (current gzipped: ~69 KB)
- Leverage browser caching for static assets

### Runtime Performance
- Minimize re-renders using `React.memo()` when appropriate
- Use `useCallback` and `useMemo` for expensive operations
- Optimize animations for 60fps

### Monitoring
- Vercel Analytics integrated via `@vercel/analytics/react`
- Check bundle stats in `dist/stats.html` after build

## Testing

### Current State
- No testing framework currently configured
- When adding tests in the future, consider:
  - Jest or Vitest for unit tests
  - React Testing Library for component tests
  - Playwright or Cypress for E2E tests

## Documentation

### README Updates
- Keep README.md up-to-date with major changes
- Update CHANGELOG.md for version tracking
- Document new features and breaking changes

### Code Comments
- Document complex business logic
- Explain "why" not "what" in comments
- Use JSDoc for public APIs and exported functions

## Dependencies

### Adding New Dependencies
- Avoid adding dependencies unless necessary
- Check bundle size impact before adding
- Prefer lightweight alternatives
- Update package.json and run `npm install`

### Current Key Dependencies
- React 19.2 (latest)
- TypeScript ~5.8.2
- Vite 6.2
- React Router DOM 7.11
- Tailwind CSS 4.1
- @google/genai 1.30
- lucide-react 0.554

## Git Workflow

### Commits
- Write clear, descriptive commit messages
- Use conventional commits format when possible
- Keep commits focused and atomic

### Branches
- Main branch: `main`
- Feature branches: Create from `main`
- Deploy to production: Push to `main`

## Additional Notes

- This is a bilingual project (Chinese content, some English code)
- Museum-grade visual design with rich animations
- Dual theme support (dark/light) is a core feature
- Mobile-responsive design required for all changes
- Focus on performance and bundle size optimization
- SEO is critical - ensure proper meta tags for all pages

---

_These instructions help Copilot provide code suggestions that align with the project's architecture, coding standards, and best practices. For more details, see README.md and CHANGELOG.md._
