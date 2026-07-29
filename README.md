<img src="https://res.cloudinary.com/dq5nfyajn/image/upload/v1781545765/symbol_p9zdmn.svg" alt="andrsrxn/ui symbol" width="64" height="64" />

# andrsrxn/icons

Over 600 free duotone icons library for @andrsrxn/ui. Modern, smooth and accessibility-aware.

## Requirements

You only need to be using `react` and `react-dom` version 19.

## Installation

```bash
pnpm add @andrsrxn/icons
```

Then add the minimal CSS to the root of your project

```tsx
import '@andrsrxn/icons/styles.css'
```

## Categories

All of them are optimized and scalable SVGs.

- **UI**: 600+ functional icons for apps, each with its own preview image. (aspect ratio 1:1)
- **Brands**: 300+ Real logos for widely-known companies and technologies; treated as image assets with brand name as `aria-label` included. (aspect ratio 1:1)
- **Flags**: 250+ simple and minimal country flags, named with ISO 3166-1 alpha-2 code (e.g. `IconFlagUS`, `IconFlagMX`); treated as image assets with country code as `title` included. (aspect ratio 3:2)

> **Note:**: The UI icons include "logos" which are different from the Brands category, the logos are duotone adapted versions of the real brand logos. (e.g. `IconLogoGithub` and `IconBrandGitHub` are different)

## Usage

### Global import

Still tree-shakable, it will only import the icons you use.

```tsx
import { IconRocket } from '@andrsrxn/icons'
import { IconBrandGitHub } from '@andrsrxn/icons/brands'
import { IconFlagUS } from '@andrsrxn/icons/flags'

export function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <IconRocket />
      <IconBrandGitHub />
      <IconFlagUS />
    </div>
  )
}
```

### Specific import

Explicitly importing icons is also supported, giving you more granular control over imports.

```tsx
import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconBrandGitHub } from '@andrsrxn/icons/brands/github'
import { IconFlagUS } from '@andrsrxn/icons/flags/us'

export function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <IconRocket />
    </div>
  )
}
```

## RTL support

The following UI icons automatically detect the `dir` attribute on the `body` or the closest parent element and add the `transform: scaleX(-1)`

- arrow-end
- arrow-start
- arrow-up-end
- arrow-up-start
- chevron-end
- chevron-start
- chevron-end-double
- chevron-start-double

## Naming

All of the icons have an `Icon` prefix to differentiate them from other components and be easily importable.

## Styling

> **Note:** The styles added on `className` will have the most priority over the others, second the specific prop and last the global CSS variable when applicable.

### Size

> **Note:** Is recommended to add a size (width and height) to UI and Brand icons, while the flag icons should only have the width in order to keep their proportions.

You can change the size of the icons in three ways:

1. Global CSS variable

> **Note**: This variable will only affect UI icons, not flags or brands icons, those most be set individually

```css
:root {
  --ui-icon-size: 32px;
}
```

2. Size prop

```tsx
<IconRocket size={48} />
<IconBrandGitHub size={48} />
```

3. Classname

```tsx
<IconRocket className='size-6' />
<IconBrandGitHub className='size-6' />
<IconBrandFlagUS className='w-6' />
```

### Color

1. Color prop

```tsx
<IconRocket color='gray' />
<IconBrandGitHub color='gray' />
```

2. Classname

```tsx
<IconRocket className='text-blue-500 dark:text-red-500' />
<IconBrandGitHub className='text-blue-500 dark:text-red-500' />
<IconBrandFlagUS className='text-blue-500 dark:text-red-500' />
```

#### Dark mode

> **Note**: Only supported **automatically** on Brand icons, for UI icons you need to set the color manually.

When using the Brand icons, they automatically handle dark mode through the `.dark` className or `data-theme='dark'` attribute.

You can also define an static theme for each icon, by adding the `.light`/`.dark` className or setting `data-theme='light'`/`data-theme='dark'` to the icon itself or a parent element to keep always the same style.

### Stroke width

It is not intended to change the stroke width of the icons, it could lead to inconsistent results in some cases.

## Types

We expose types for each category:

```typescript
import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { BrandIcon, BrandIconProps } from '@andrsrxn/icons/brands/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'
```

- **Icon**: The SVG element
- **IconProps**: Icon component props from SVG and custom props

## Contributing

We currently do not accept contributions for new icons, but we appreciate suggestions and icon requests through GitHub issues.

## Support

If this project helps you, you can support its development through:

- Credit or debit card: https://app.recurrente.com/s/andrsrxn/pagar
- PayPal: https://paypal.me/andrsrxn

## Inspiration

All of the icons were made by scratch on Figma but inspired on the following icon libraries:

- [Phosphor Icons](https://phosphoricons.com/)
- [HugeIcons](https://hugeicons.com/icons)

## Next steps

- Adapt the rest of Brand icons into UI logo icons (already have the most used ones)
- Add more specific UI icons
- Keep optimizing the icon library
- Consider adapting the icons to other frameworks (Svelte, Vue, Angular, etc.)

## License

All icons are free to use, personal or commercial use allowed. [MIT License](LICENSE) - Copyright 2026 andrsrxn.
