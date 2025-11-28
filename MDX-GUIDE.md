# WPR5000 MDX Guide

## Overview
The WPR5000 landing page now uses MDX (Markdown + JSX) for content management, making it easier to edit and maintain.

## File Structure

```
wpr5000-nextjs/
├── app/
│   ├── page.mdx              # Main MDX page (replaces page.tsx)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── HeroSection.tsx       # Hero with video & CTA
│   ├── CompatibleRobots.tsx  # Robot icons grid
│   ├── ComparisonSection.tsx # Comparison table
│   ├── BenefitsSection.tsx   # Interactive hotspots
│   └── SpecificationsSection.tsx # Specs table
├── mdx-components.tsx        # MDX component mappings
└── next.config.ts            # Next.js + MDX configuration
```

## How It Works

### 1. Main MDX Page (`app/page.mdx`)
This is your main landing page written in MDX format. It imports and renders all section components:

```mdx
<HeroSection />
<CompatibleRobots />
<ComparisonSection />
<BenefitsSection />
<SpecificationsSection />
```

### 2. Component Mapping (`mdx-components.tsx`)
This file maps your React components so they can be used in MDX files:

```tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    HeroSection,
    CompatibleRobots,
    // ... other components
    ...components,
  };
}
```

### 3. Next.js Configuration (`next.config.ts`)
Configured to:
- Support `.mdx` file extensions
- Allow external images from `proax.ca` and `i.pravatar.cc`
- Process MDX files with `@next/mdx`

## Editing Content

### To Edit the Page Structure:
Edit `app/page.mdx` - you can:
- Rearrange component order
- Add markdown content between components
- Add headings, lists, or other markdown elements

Example:
```mdx
# WPR5000 Industrial Tool Changer

<HeroSection />

## Why Choose WPR5000?

Our tool changer offers unmatched performance...

<CompatibleRobots />
```

### To Edit Component Content:
Edit the individual component files in `components/`:
- `HeroSection.tsx` - Hero text, video, CTA
- `ComparisonSection.tsx` - Comparison data
- `SpecificationsSection.tsx` - Specs table data
- etc.

## Benefits of MDX

1. **Easy Content Editing** - Write content in Markdown
2. **Component Integration** - Use React components seamlessly
3. **Type Safety** - Full TypeScript support
4. **SEO Friendly** - Metadata export for better SEO
5. **Maintainable** - Separate content from logic

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding New Sections

1. Create a new component in `components/`
2. Import it in `mdx-components.tsx`
3. Use it in `app/page.mdx`

Example:
```tsx
// components/NewSection.tsx
export default function NewSection() {
  return <section>...</section>;
}
```

```tsx
// mdx-components.tsx
import NewSection from '@/components/NewSection';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    NewSection,
    ...components,
  };
}
```

```mdx
<!-- app/page.mdx -->
<NewSection />
```

## Notes

- All interactive features (modals, buttons, animations) are preserved
- Styling remains the same (using existing CSS)
- Components are still fully functional React components
- MDX provides a cleaner, more maintainable structure
