# Haskell Homestead Website

A Next.js 14 website for Haskell Homestead — a family homesteading influencer brand based in Fallbrook, California.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blog**: MDX (file-based)
- **Forms**: GoHighLevel (GHL) integration ready
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/haskell-homestead.git
cd haskell-homestead
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` with your values.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── content/
│   └── blog/           # MDX blog posts
├── public/
│   └── images/         # Static images
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/
│   │   ├── blog/      # Blog-related components
│   │   ├── forms/     # Form components (Newsletter, Contact, etc.)
│   │   ├── layout/    # Header, Footer
│   │   └── ui/        # Reusable UI components
│   ├── lib/           # Utility functions (MDX helpers)
│   └── types/         # TypeScript type definitions
└── ...config files
```

## Pages

- `/` - Homepage
- `/about` - About the family and homestead
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/work-with-me` - Brand partnerships page
- `/newsletter` - Newsletter signup
- `/contact` - Contact form

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description of the post"
date: "2024-12-15"
author: "Haskell Homestead"
image: "/images/blog/your-image.jpg"
tags: ["Homesteading", "Animals"]
---

Your content here...
```

## GoHighLevel Integration

The site includes placeholder forms ready for GHL integration. Each form has:

- A `data-ghl-form` attribute for identification
- Native HTML form fallback
- Comments with instructions for embedding GHL code

To integrate GHL:

1. Get your GHL form embed code
2. Replace the fallback form in the respective component
3. Update the form ID in `.env.local`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```
NEXT_PUBLIC_GHL_FORM_NEWSLETTER_ID=your_id
NEXT_PUBLIC_GHL_FORM_CONTACT_ID=your_id
NEXT_PUBLIC_GHL_FORM_BRAND_INQUIRY_ID=your_id
NEXT_PUBLIC_SITE_URL=https://haskellhomestead.com
```

## Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:

- `sage` - Primary green tones
- `cream` - Warm background colors
- `terracotta` - Accent rust/orange
- `charcoal` - Text and dark elements

### Fonts

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## License

Private - All rights reserved.

---

Built with love for Haskell Homestead
