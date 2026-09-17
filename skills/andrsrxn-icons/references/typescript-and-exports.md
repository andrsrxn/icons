# TypeScript API and export entrypoints reference

This reference details the TypeScript types, entrypoint export paths, and prop definitions for `andrsrxn/icons`.

---

## 1. Export entrypoints summary

`andrsrxn/icons` exposes modular entrypoints for clean imports and bundle isolation:

| Package subpath                     | Description                                      | Example import                                                               |
| :---------------------------------- | :----------------------------------------------- | :--------------------------------------------------------------------------- |
| `@andrsrxn/icons`                   | Main entrypoint for all UI icons (tree-shakable) | `import { IconRocket } from '@andrsrxn/icons'`                               |
| `@andrsrxn/icons/<icon-name>`       | Specific subpath import for a single UI icon     | `import { IconRocket } from '@andrsrxn/icons/rocket'`                        |
| `@andrsrxn/icons/flags`             | Main entrypoint for all Flag icons               | `import { IconFlagGT } from '@andrsrxn/icons/flags'`                         |
| `@andrsrxn/icons/flags/<flag-code>` | Specific subpath import for a single Flag icon   | `import { IconFlagGT } from '@andrsrxn/icons/flags/gt'`                      |
| `@andrsrxn/icons/types`             | Scoped TypeScript types for UI icons             | `import type { Icon, IconProps } from '@andrsrxn/icons/types'`               |
| `@andrsrxn/icons/flags/types`       | Scoped TypeScript types for Flag icons           | `import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'` |
| `@andrsrxn/icons/rtl.css`           | Global CSS stylesheet for RTL icon flipping      | `import '@andrsrxn/icons/rtl.css'`                                           |

---

## 2. TypeScript types

Type definitions are intentionally scoped and separated by group to avoid naming collisions (e.g., preventing conflicts between `FlagIcon` types and UI icons like `IconFlag`).

### UI icons types

```tsx
import type { Icon, IconProps } from '@andrsrxn/icons/types'

// Icon: SVG element type (React.SVGSVGElement)
// IconProps: Props interface for UI Icon components
```

### Flag icons types

```tsx
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'

// FlagIcon: SVG element type for flags
// FlagIconProps: Props interface for Flag Icon components
```

---

## 3. Props definitions

### UI icon props (`IconProps`)

UI icons accept standard React SVG attributes (`React.ComponentProps<'svg'>`) along with custom shortcut props:

| Prop          | Type               | Default                   | Description                                                              |
| :------------ | :----------------- | :------------------------ | :----------------------------------------------------------------------- |
| `size`        | `number \| string` | `24`                      | Icon size in pixels or valid CSS unit (sets both `width` and `height`)   |
| `strokeWidth` | `number`           | `1.5`                     | Stroke width in pixels _(changing default 1.5 is generally discouraged)_ |
| `color`       | `string`           | `'currentColor'`          | Applies stroke and fill colors                                           |
| `aria-label`  | `string`           | `undefined`               | When provided, automatically removes `aria-hidden` and sets `role="img"` |
| `className`   | `string`           | `'icon-ui'`               | Base CSS class applied for global styling                                |
| `data-slot`   | `string`           | `'icon-ui-{{icon-name}}'` | Unique data attribute for targeted styling                               |

#### Usage examples

```tsx
// Custom size and color via props
<IconRocket size={32} color="#0047CC" />

// Custom size via Tailwind CSS
<IconRocket className="size-6 text-blue-500" />

// Accessible informative UI icon (override decorative default). Best practices: use only when strictly required.
<IconArrowStart aria-label="Go Back" onClick={() => handleBack()} />
```

---

### Flag icon props (`FlagIconProps`)

Flag icons accept standard React SVG attributes and feature custom sizing behavior to preserve their 3:2 rectangular aspect ratio:

| Prop          | Type               | Default                     | Description                                                                   |
| :------------ | :----------------- | :-------------------------- | :---------------------------------------------------------------------------- |
| `size`        | `number \| string` | `24`                        | Square container size (sets both `width` and `height` to `size`)              |
| `width`       | `number \| string` | `undefined`                 | Width in pixels/units. If only `width` is set, 3:2 aspect ratio is preserved. |
| `height`      | `number \| string` | `undefined`                 | Height in pixels/units.                                                       |
| `color`       | `string`           | `'currentColor'`            | Applies stroke and fill colors                                                |
| `role`        | `string`           | `'img'`                     | Treated as image asset by default                                             |
| `aria-label`  | `string`           | `'{{FLAG_CODE}}'`           | Uppercase flag code / name for accessibility                                  |
| `aria-hidden` | `boolean`          | `false`                     | Set to `true` when rendering flags as purely decorative                       |
| `className`   | `string`           | `'icon-flag'`               | Base CSS class applied for global styling                                     |
| `data-slot`   | `string`           | `'icon-flag-{{flag-name}}'` | Unique data attribute for targeted styling                                    |

#### Usage and aspect ratio examples

```tsx
// 1. Maintain 3:2 aspect ratio (recommended)
<IconFlagGT width={60} />
<IconFlagGT className="w-16" />

// 2. Square sizing (fits within 80x80 box)
<IconFlagGT size={80} />

// 3. Fill entire square crop
<IconFlagGT size={80} preserveAspectRatio="xMidYMid slice" />
```

---

## 4. CSS slot and global class selectors

Icons expose built-in classes and data attributes for global or specific CSS styling:

```css
/* Recommended baseline global styles */
.icon-ui {
  flex-shrink: 0;
  pointer-events: none;
}

/* Target all Flag icons */
.icon-flag {
  border-radius: 2px;
}

/* Target a specific icon via data-slot */
[data-slot='icon-ui-rocket'] {
  color: #ff4500;
}

[data-slot='icon-flag-gt'] {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```
