# BiddersPro Website

This is the official website for BiddersPro built with [Next.js](https://nextjs.org).

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Deployment

### Building for Production

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Start production server
npm run start
```

### Environment Setup

Create a `.env.local` file with the following variables:

```
SITE_URL=https://bidderspro.com
```

### Optimizations Applied

- **CSS Optimization**: Using Next.js built-in CSS optimization
- **Image Optimization**: Using next/image for automatic image optimization
- **Bundle Analysis**: Run `npm run analyze` to analyze bundle size
- **Console Removal**: Console logs are automatically removed in production
- **Sitemap Generation**: Automatically generates sitemap.xml and robots.txt

### Deployment Checklist

- [x] Run linter with `npm run lint`
- [x] Build the application with `npm run build`
- [x] Test the production build locally with `npm run start`
- [ ] Deploy to your hosting provider
- [ ] Verify all pages work correctly
- [ ] Check performance using Lighthouse

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## License

All rights reserved.