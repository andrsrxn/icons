<img src="https://res.cloudinary.com/dq5nfyajn/image/upload/v1781545765/symbol_p9zdmn.svg" alt="andrsrxn/ui symbol" width="64" height="64" />

# andrsrxn/icons

Over 600 free duotone icons library for @andrsrxn/ui. Modern, smooth and accessibility-aware.

## Requirements

You only need to be using `react` and `react-dom` version 19.

## Installation

```bash
pnpm add @andrsrxn/icons
```

## Categories

All of them are optimized and scalable SVGs.

- **UI**: 600+ functional icons for apps. (aspect ratio 1:1)
- **Brands**: 300+ Real logos for widely-known companies and technologies, treated as image assets with `aria-label` included. (aspect ratio 1:1)
- **Flags**: 250+ simple and minimal country flags, treated as image assets with `title` included. (aspect ratio 3:2)

## Usage

### Global import

Still tree-shakable, it will only import the icons you use.

```tsx
import { IconRocket } from '@andrsrxn/icons'

export function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <IconRocket />
    </div>
  )
}
```

### Specific import

Explicitly importing icons is also supported so you can have more control over it.

```tsx
import { IconRocket } from '@andrsrxn/icons/icon-rocket'

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

## Styling

> **Note:** The styles added on `className` will have the most priority over the others, second the specific prop and last the global CSS variable when applicable.

### Size

> **Note:** Is recommended to add a size (width and height) to brand icons, while the flag icons could only have the width in order to keep the proportions.

You can change the size of the icons in three ways (this will only affect UI icons, not flags or brands icons, those most be set individually):

1. Global CSS variable

```css
:root {
  --ui-icon-size: 32px;
}
```

2. Size prop

```tsx
<IconRocket size={48} />
```

3. Classname

```tsx
<IconRocket className='size-8' />
```

### Color

1. Color prop

```tsx
<IconRocket color='gray' />
```

2. Classname

```tsx
<IconRocket className='text-blue-500' />
```

#### Dark mode

When using the Brand icons, they automatically handle dark mode changes through the `.dark` className or `data-theme='dark'` attribute.

### Stroke width

It is not intended to change the stroke width of the icons, it could lead to inconsistent results in some cases.

## Types

We expose 2 main types that are used along side every icon:

```typescript
import type { Icon, IconProps } from '@andrsrxn/icons'
```

- **Icon**: The SVG element
- **IconProps**: Icon component props from SVG and custom props

## Inspiration

All of the icons were made by scratch on Figma but inspired on the following icon libraries:

- [Phosphor Icons](https://phosphoricons.com/)
- [HugeIcons](https://hugeicons.com/icons)

## License

[MIT License](LICENSE) - Copyright 2026 andrsrxn.
