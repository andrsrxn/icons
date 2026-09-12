<img src="./assets/symbol.svg" alt="andrsrxn/icons symbol" width="64" height="64" />

# andrsrxn/icons

React icon library with 1,000+ duotone icons and 250+ flag icons. Smooth, RTL-aware, and optimized SVGs.

## Overview

**andrsrxn/icons** is a React icon library with 1,000+ duotone icons and 250+ flag icons. Smooth, RTL-aware, and optimized SVGs.

This library was built to serve as the icon foundation for `andrsrxn/ui`, an upcoming open-source, opinionated Design System and Component Library aimed at enterprise-grade products.

While `andrsrxn/icons` is tightly coupled to that vision, it is intentionally published as a **standalone package**. This keeps it lightweight, independently versioned, and freely usable by anyone.

### Why another icon library?

The short answer: **there are no free duotone icon sets with the right style**.

Most libraries offer only outline or solid variants. [Phosphor Icons](https://phosphoricons.com/) does include free duotone variants, but its implementation applies a duotone layer to every icon unconditionally, this results in unnecessary visual noise and icons that feel semantically inconsistent.

`andrsrxn/icons` takes a more deliberate approach:

- **Duotone by default**: Icons that have a meaningful path/fill distinction are always duotone.
- **Outline when appropriate**: Simple geometric icons such as `+`, `/`, or `×` do not receive a decorative background layer that would only reduce clarity.
- **Filled on demand**: A `filled` variant is included only for icons that have a meaningful active or selected state, such as `like`, `bookmark`, or `star`, not as a blanket alternative style.

## Categories

- **UI**: 1,000+ functional icons for apps, each with its own preview image. (aspect ratio 1:1)
- **Flags**: 250+ simple and minimal country flags, named with ISO 3166-1 alpha-2 code (`IconFlagGT`, `IconFlagUS`), the exceptions are `IconFlagLGTB` and continent flags, which have a `C` prefix (`IconFlagCAF` for Africa, `IconFlagCNA` for North America, and so on); treated as image assets with country code as `title` included. (aspect ratio 3:2)

> **Notice**: We do not provide any brand or logo icons, as we are purely an icon library. If you need such icons, we recommend checking out [SVGL](https://svgl.app) or [Simple Icons](https://simpleicons.org/).

## Requirements

You only need to be using `react` and `react-dom` version 19.

> **Warning**: This is an ESM-only package, make sure your project is using Node `20.16.0`, `22.19.0`, `24.0.0` or higher, and has the `"type": "module"` field in your `package.json`.

## Installation

Execute the following command:

```bash
pnpm add @andrsrxn/icons
```

## Usage

### Global import

Still tree-shakable, it will only import the icons you use.

```tsx
import { IconRocket } from '@andrsrxn/icons'
import { IconFlagGT } from '@andrsrxn/icons/flags'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagGT />
    </div>
  )
}
```

### Specific import

Explicitly importing icons is also supported, giving you more granular control over imports.

```tsx
import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconFlagGT } from '@andrsrxn/icons/flags/us'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagGT />
    </div>
  )
}
```

> **Best practices**: Avoid importing all the icons at once from the root of the library, that is not tree-shakable and will increase the bundle size of your application.

## RTL support

To automatically handle icon rotation on RTL import the following CSS in the root of your project:

```tsx
import '@andrsrxn/icons/rtl.css'
```

The following UI icons automatically detect the `dir` attribute on the closest parent element and get flippled using the `transform: scaleX(-1)` CSS property:

[See all rtl-aware icons](./src/styles.css)

To opt-out of RTL on these icons and keep them as they are, add the Tailwind directive `rtl:scale-x-100` or the quivalent in CSS:

```css
[dir='rtl'] [data-slot='icon-ui-arrow-start'] {
  transform: scaleX(1);
}
```

### Exceptions

These icons are exclusive for RTL, as they cannot be just flipped, but adapted:

- `IconListCheckRtl`
- `IconListOrderedRtl`
- `IconSeekBackwardsRtl`
- `IconSeekForwardRtl`

## Accessibility

The UI icons are treated as decorative by default, using the `aria-hidden='true'` attribute.

If you want to use an icon as informative, you can add an `aria-label`, it automatically adds the `role='img'` and set the `aria-hidden='false'`:

```tsx
<IconArrowStart aria-label='Back' onClick={() => back()} />
```

> **Best practices**: This is not a reccomended pattern, use it only when strictly required.

On the other hand, Flag icons are treated as informative by default. They use the `role='img'` and `aria-label` with its flag name in uppercase.

If you want to treat them as decorative, use the `aria-hidden` attribute:

```tsx
<IconFlagGT aria-hidden />
```

## Naming

All of the categories have an `Icon` prefix to differentiate them from other components and be easily importable.

The icon names are based on the object it represents, using kebab-case for the file names and PascalCase for the component names.

There are some exceptions on widely accepted names, such as `IconSave` instead of `IconFloppyDisk` or `IconExternalLink` instead of `IconSquareArrowUpRight`.

## Styling

All of the icons have a specific className to style them globally:

- **UI icons**: `icon-ui`
- **Flag icons**: `icon-flag`

```css
/* Apply styles to all icons */
.icon-ui {
  stroke-width: 2px;
}
```

```css
/* Recommended global styles */
.icon-ui {
  flex-shrink: 0;
  pointer-events: none;
}
```

Also, the icons include a `data-slot` with its specific name, for example:

- **rocket**: `data-slot='icon-ui-rocket'`
- **us**: `data-slot='icon-flag-us'`

```css
/* Target a specific icon */
[data-slot='icon-ui-rocket'] {
  color: #f00;
  stroke-width: 1px;
}
```

Or you can use the custom props as the following examples.

### Size

> **Note:** If you want to keep proportions on Flag icons, only set the `width`.

```tsx
// Set the size with size prop
<IconRocket size={80} />

// Or with className
<IconRocket className='size-6' />
```

```tsx
// Keep 3:2 proportions
<IconFlagGT width={80} />
<IconFlagGT className='w-16' />
```

```tsx
// Square proportions
<IconFlagGT size={80} />
<IconFlagGT className='size-20' />
```

```tsx
// To fill the entire square
<IconFlagGT size={80} preserveAspectRatio='xMidYMid slice' />
<IconFlagGT className='size-20' preserveAspectRatio='xMidYMid slice' />
```

### Color

By default, the UI icons have `currentColor` set as fill and stroke value.

```tsx
// Use color prop
<IconRocket color='#0047CC' />

// Or use className
<IconRocket className='text-blue-500' />
```

### Stroke width

It is not intended to change the stroke width of the icons (default `1.5`). It could lead to inconsistent results in too thin or too thick strokes, losing the icon quality.

if you still need to change it, add `strokeWidth` prop to each icon.

```tsx
// Use strokeWidth prop
<IconRocket strokeWidth={2} />

// Or use className
<IconRocket className='stroke-2' />
```

## TypeScript

We expose scoped types for each category:

```tsx
import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'
```

- **Icon**, **FlagIcon**: SVG element
- **IconProps**, **FlagIconProps**: Icon component props from SVG and custom props

> **Note**: Types are named this way to avoid conficts with some Icon components names, such as IconFlag from UI icons.

### Props

#### UI icon props

| Props         | Type               | Default                 | Description                                 |
| ------------- | ------------------ | ----------------------- | ------------------------------------------- |
| `size`        | `number \| string` | `24`                    | Size in pixels or any valid css length unit |
| `strokeWidth` | `number`           | `1.5`                   | Stroke width in pixels                      |
| `color`       | `string`           | `currentColor`          | Stroke and fill colors                      |
| `aria-label`  | `string`           | `undefined`             | Removes aria-hidden and add role of img     |
| `className`   | `string`           | `icon-ui`               | Class to style globally the icon            |
| `data-slot`   | `string`           | `icon-ui-{{icon-name}}` | Specific attribute to identify the icon     |

#### Flag icon props

| Props         | Type               | Default                   | Description                                 |
| ------------- | ------------------ | ------------------------- | ------------------------------------------- |
| `size`        | `number \| string` | `24`                      | Size in pixels or any valid css length unit |
| `color`       | `string`           | `currentColor`            | Stroke and fill colors                      |
| `role`        | `string`           | `img`                     | Treated as image                            |
| `aria-label`  | `string`           | `{{flag-name}}`           | Uppercase flag name (Country code)          |
| `className`   | `string`           | `icon-flag`               | Class to style globally the icon            |
| `data-slot`   | `string`           | `icon-flag-{{flag-name}}` | Specific attribute to identify the icon     |
| `aria-hidden` | `boolean`          | `false`                   | Set true to hide it from screen readers     |

> **Note**: Types are named this way to avoid conficts with some Icon components names, such as `IconFlag` from UI icons.

## Contributing

We currently do not accept contributions for new icons, but we appreciate suggestions and icon requests through [GitHub issues](https://github.com/andrsrxn/icons/issues).

## Support

If this project is useful to you, consider supporting its development through:

- [GitHub Sponsors](https://github.com/sponsors/andrsrxn)
- [Credit/Debit card](https://app.recurrente.com/s/andrsrxn/pagar)
- [PayPal](https://paypal.me/andrsrxn)

## Inspiration

All of the icons were made by scratch on Figma but inspired on the following icon libraries:

- [Phosphor Icons](https://phosphoricons.com/)
- [HugeIcons](https://hugeicons.com/icons)

## Credits

The flag icons are adapted from [FlagKit](https://github.com/madebybowtie/FlagKit) by [Bowtie](https://github.com/madebybowtie), used under the MIT License (Copyright (c) 2016 Bowtie AB). Only the 3:2 rectangular flag versions were used as source material and converted into `tsx` components. See [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) for the full license text.

## License

All icons are free; personal or commercial use is allowed under [MIT License](LICENSE) - Copyright 2026 Andrés Raxón (andrsrxn).
