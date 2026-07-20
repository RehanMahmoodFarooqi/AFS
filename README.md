# AFS Development Website

A modern, high-performance website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 14** - React framework with App Router for optimal performance
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- ✨ **Framer Motion** - Production-ready animation library for smooth interactions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Optimized Performance** - Fast loading times and smooth animations
- 🎯 **TypeScript** - Type-safe code for better developer experience

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Technologies.tsx # Tech stack
│   ├── Portfolio.tsx   # Project portfolio
│   ├── Testimonials.tsx # Client reviews
│   ├── CTA.tsx         # Contact form
│   └── Footer.tsx      # Site footer
└── public/            # Static assets

```

## Customization

### Update Content

Edit the component files in `/components` to customize:
- Company information
- Services offered
- Portfolio projects
- Testimonials
- Contact details

### Change Colors

Modify `tailwind.config.ts` to update the color scheme:

```typescript
colors: {
  primary: {
    // Update these values
  }
}
```

### Add Pages

Create new page files in the `app/` directory following Next.js App Router conventions.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Performance Features

- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization
- Code splitting
- Lazy loading animations
- Smooth scroll behavior

## License

Private - AFS Development

## Support

For support, email info@afsdevelopment.com
