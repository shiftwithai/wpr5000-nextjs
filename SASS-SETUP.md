# SASS Setup for WPR5000 Next.js Project

## ✅ SASS is Fully Configured

### Installed Package
- **sass**: v1.94.1 (installed in package.json)
- Next.js automatically supports SASS/SCSS once the package is installed

### SASS Module Files

#### Main Module
- `styles/content-block.module.sass` - ImageBlock component styles

#### Dependency Files (Partials)
- `styles/_colors.sass` - Color variables
- `styles/_variables.sass` - Breakpoint variables  
- `styles/_template.sass` - Layout utilities

### Color Variables Available
```sass
$primary: #376FE5      // WPR5000 blue
$navy: #05215C         // Dark navy
$grey050: #F9FAFB      // Light grey background
$grey100: #F3F4F6      // Grey background
$grey500: #6B7280      // Medium grey text
$grey700: #374151      // Dark grey text
```

### Breakpoint Variables
```sass
$lg: "(min-width: 1024px)"  // Desktop
$md: "(min-width: 768px)"   // Tablet
$sm: "(min-width: 640px)"   // Mobile landscape
```

### How SASS Modules Work in Next.js

1. **Import in Components**
   ```jsx
   import styles from '../styles/content-block.module.sass';
   ```

2. **Use Classes**
   ```jsx
   <div className={styles.content_block}>
   ```

3. **Automatic Scoping**
   - Next.js automatically scopes CSS modules
   - Class names become unique (e.g., `content_block` → `content_block__abc123`)

### ImageBlock Component Usage

The ImageBlock component uses SASS modules for styling:

```jsx
import ImageBlock from '@/components/image-block';

<ImageBlock 
  image="url"
  color="#376FE5"
  style="layered"
>
  {/* Content here */}
</ImageBlock>
```

### Adding New SASS Files

1. Create file: `styles/your-file.module.sass`
2. Import in component: `import styles from '../styles/your-file.module.sass'`
3. Use classes: `className={styles.yourClass}`

### Global SASS (if needed)

For global styles, create without `.module` extension:
- `styles/global.sass`
- Import in `app/layout.tsx`: `import '../styles/global.sass'`

## Notes

- SASS syntax (indented) is used, not SCSS (curly braces)
- Partials (files starting with `_`) are for imports only
- CSS Modules provide automatic scoping and prevent conflicts
- Next.js handles compilation automatically in development and production
