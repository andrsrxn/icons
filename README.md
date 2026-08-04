<img src="https://res.cloudinary.com/dq5nfyajn/image/upload/v1781545765/symbol_p9zdmn.svg" alt="andrsrxn/ui symbol" width="64" height="64" />

# andrsrxn/icons

[![npm version](https://img.shields.io/npm/v/@andrsrxn/icons)](https://www.npmjs.com/package/@andrsrxn/icons)
[![Dependency count](https://img.shields.io/badge/dependency%20count-0-blue)](https://www.npmjs.com/package/@andrsrxn/icons)
[![npm downloads](https://img.shields.io/npm/dm/@andrsrxn/icons)](https://www.npmjs.com/package/@andrsrxn/icons)
[![License](https://img.shields.io/github/license/andrsrxn/icons)](https://github.com/andrsrxn/icons)
[![CI](https://github.com/andrsrxn/icons/actions/workflows/ci.yml/badge.svg)](https://github.com/andrsrxn/icons/actions/workflows/ci.yml)
[![CodeQL](https://github.com/andrsrxn/icons/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/andrsrxn/icons/actions/workflows/github-code-scanning/codeql)
[![Linted with Biome](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

React icon library with 550+ duotone icons and 250+ flag icons. Fully typed, RTL-aware, and optimized SVGs.

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

- **UI**: 550+ functional icons for apps, each with its own preview image. (aspect ratio 1:1)
- **Flags**: 250+ simple and minimal country flags, named with ISO 3166-1 alpha-2 code (e.g. `IconFlagUS`, `IconFlagMX`); treated as image assets with country code as `title` included. (aspect ratio 3:2)

## Usage

### Global import

Still tree-shakable, it will only import the icons you use.

```tsx
import { IconRocket } from '@andrsrxn/icons'
import { IconFlagUS } from '@andrsrxn/icons/flags'

export function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <IconRocket />
      <IconFlagUS />
    </div>
  )
}
```

### Specific import

Explicitly importing icons is also supported, giving you more granular control over imports.

```tsx
import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconFlagUS } from '@andrsrxn/icons/flags/us'

export function App() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <IconRocket />
      <IconFlagUS />
    </div>
  )
}
```

## RTL support

The following UI icons automatically detect the `dir` attribute on the `html` or the closest parent element and add the `transform: scaleX(-1)` CSS property to the SVG element:

- arrow-end
- arrow-start
- arrow-up-end
- arrow-up-start
- chevron-end
- chevron-start
- chevron-end-double
- chevron-start-double

## Naming

All of the categories have an `Icon` prefix to differentiate them from other components and be easily importable.

## Styling

All of the icons have a specific className to style them globally or individualy

- **UI icons**: `ui-icon`
- **Flag icons**: `flag-icon`

Or you can use the custom props as the next examples:

### Size

> **Note:** If you want to keep proportions on Flag icons, only set the `width`.

1. Size prop

```tsx
<IconRocket size={48} />

// Keep 3:2 proportions
<IconFlagUS width={48} />

// Square proportions
<IconFlagUS size={48} />
```

2. Classname

```tsx
<IconRocket className='size-6' />

// Keep 3:2 proportions
<IconFlagUS className='w-6' />

// Square proportions
<IconFlagUS className='size-6' />

// To fill the entire square
<IconFlagUS className='size-6 object-cover' />
```

### Color

By default, the UI icons have `currentColor` set as fill and stroke value.

1. Color prop

```tsx
<IconRocket color='gray' />
```

2. Classname

```tsx
<IconRocket className='text-blue-500 dark:text-red-500' />
<IconFlagUS className='text-blue-500 dark:text-red-500' />
```

### Stroke width

It is not intended to change the stroke width of the icons (default `1.5`). It could lead to inconsistent results in some cases.

## Types

We expose scoped types for each category:

```typescript
import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'
```

- **Icon**, **FlagIcon**: The SVG element
- **IconProps**, **FlagIconProps**: Icon component props from SVG and custom props

> **Note**: Named this way to avoid conficts with some Icon components names, such as `IconFlag` from UI icons.

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

## Credits

The flag icons are adapted from [FlagKit](https://github.com/madebybowtie/FlagKit) by [Bowtie](https://github.com/madebybowtie), used under the MIT License (Copyright (c) 2016 Bowtie AB). Only the 3:2 rectangular flag versions were used as source material and converted into `tsx` components.

See [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) for the full license text.

## Next steps

- Add more specific UI icons
- Keep optimizing the icon library size
- Consider adapting the icons to other frameworks (Svelte, Vue, Angular, etc.)

## License

All icons are free to use, personal or commercial use allowed. [MIT License](LICENSE) - Copyright 2026 andrsrxn.
