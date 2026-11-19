---
name: andrsrxn-icons
description: Integrate, import, style, and handle accessibility or RTL for UI icons and flag icons from the andrsrxn/icons library in React applications. Use when the user asks to add icons, search or pick icon components, set up icon RTL flipping, configure icon global CSS, or work with andrsrxn/icons types.
compatibility: React 19 or higher. ESM-only package. Requires Node 20.16.0, 22.19.0, 24.0.0, or higher, and 'type' 'module' in the consuming project's package.json.
license: MIT
metadata:
  version: 2.0.0
---

# `andrsrxn/icons` agent skill

A complete reference for AI agents to correctly select, import, style, size, and configure accessibility and RTL for `andrsrxn/icons` in React applications.

Full public docs: https://icons.andrsrxn.com/docs

---

## Overview

`andrsrxn/icons` is a duotone-first, open-source icon library designed on Figma and built for modern React apps. It is lightweight, visually consistent, and accessible by default.

**Two icon groups:**

| Group      | Prefix        | Aspect ratio | Entrypoint              | Default a11y                                      |
| :--------- | :------------ | :----------- | :---------------------- | :------------------------------------------------ |
| UI icons   | `Icon...`     | 1:1          | `@andrsrxn/icons`       | Decorative (`aria-hidden="true"`)                 |
| Flag icons | `IconFlag...` | 3:2          | `@andrsrxn/icons/flags` | Informative (`role="img"`, `aria-label="<CODE>"`) |

> No brand or logo icons are provided. For those, use SVGL, theSVG, or Simple Icons.

---

## Installation

```bash
pnpm add @andrsrxn/icons
# or: npm install / yarn add / bun add
```

**Recommended global CSS** (optional but strongly advised):

```css
/* globals.css */
.icon-ui {
  flex-shrink: 0;
  pointer-events: none;
}
```

---

## Import strategies

### Barrel import (tree-shakable)

```tsx
import { IconRocket } from '@andrsrxn/icons'
import { IconFlagGT } from '@andrsrxn/icons/flags'
```

### Specific subpath import

```tsx
import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconFlagGT } from '@andrsrxn/icons/flags/gt'
```

> **Never** import everything from the package root with `import * from` — it defeats tree-shaking and bloats the bundle.

### Export entrypoints reference

| Subpath                             | Description                                               |
| :---------------------------------- | :-------------------------------------------------------- |
| `@andrsrxn/icons`                   | All UI icons (tree-shakable)                              |
| `@andrsrxn/icons/<icon-name>`       | Single UI icon subpath                                    |
| `@andrsrxn/icons/flags`             | All flag icons (tree-shakable)                            |
| `@andrsrxn/icons/flags/<flag-code>` | Single flag subpath (lowercase ISO code, e.g. `gt`, `us`) |
| `@andrsrxn/icons/types`             | TypeScript types for UI icons                             |
| `@andrsrxn/icons/flags/types`       | TypeScript types for flag icons                           |
| `@andrsrxn/icons/rtl.css`           | Global RTL auto-flip stylesheet                           |

---

## Naming conventions

- **File names**: `kebab-case` (e.g. `external-link`, `folder-check`)
- **Component names**: `PascalCase` with mandatory `Icon` prefix (e.g. `IconExternalLink`, `IconFolderCheck`)
- **Preferred common names over literal descriptions**: `IconSave` not `IconFloppyDisk`; `IconSearch` not `IconMagnifyingGlass`
- **Prominent element first**: The primary object in the name comes before modifiers. `IconHeartScan` ✓ — not `IconScanHeart`.
- **Numbers as words**: `IconHeadingOne`, `IconSortZeroOne`. Exception: natural numeric forms like `Icon3d`, `Icon4k`.
- **Groups vs categories**: Groups (`Icon...` / `IconFlag...`) are code exports. Categories/tags are documentation filters only — they are not part of import paths or module exports.

### Action/state suffix conventions

| Suffix           | Meaning                  | Example             |
| :--------------- | :----------------------- | :------------------ |
| `Check`          | Success / done           | `IconFolderCheck`   |
| `X`              | Delete / cancel / failed | `IconFolderX`       |
| `Warning`        | Alert / caution          | `IconFolderWarning` |
| `Off`            | Disabled / inactive      | `IconBellOff`       |
| `Clock`          | Pending / scheduled      | `IconFolderClock`   |
| `Plus` / `Minus` | Add / remove             | `IconFolderPlus`    |
| `Edit`           | Modify                   | `IconFolderEdit`    |
| `Lock`           | Protected / restricted   | `IconFolderLock`    |
| `In` / `Out`     | Import / export          | `IconFolderIn`      |
| `Star` / `Heart` | Favorite / saved         | `IconFolderStar`    |

---

## Accessibility

### UI icons — decorative by default

UI icons render with `aria-hidden="true"` by default. No action required for decorative usage.

To make a UI icon **informative** (e.g. a standalone action button with no visible label), add `aria-label`. This automatically sets `role="img"` and clears `aria-hidden`:

```tsx
<IconArrowStart aria-label='Go back' onClick={() => handleBack()} />
```

> **Best practice**: This pattern is not recommended unless strictly required. Prefer visible text labels alongside icons.

**Restricted props**: `role`, `aria-hidden`, `focusable`, and `aria-labelledby` are not available on UI icon components — they are managed internally.

### Flag icons — informative by default

Flag icons render with `role="img"` and `aria-label` set to the uppercase ISO country code (e.g. `"GT"`, `"US"`).

To use a flag as **decorative**:

```tsx
<IconFlagUs aria-hidden />
```

**Restricted props**: `role`, `focusable`, and `aria-labelledby` are not available on flag icon components — managed internally.

---

## Styling

Each icon group has a base CSS class and a unique `data-slot` attribute for targeted styling.

| Group | Class       | `data-slot` pattern     |
| :---- | :---------- | :---------------------- |
| UI    | `icon-ui`   | `icon-ui-<icon-name>`   |
| Flags | `icon-flag` | `icon-flag-<flag-code>` |

```css
/* Target all UI icons */
.icon-ui {
  stroke-width: 2px;
}

/* Target all flag icons */
.icon-flag {
  border-radius: 2px;
}

/* Target a specific UI icon */
[data-slot='icon-ui-rocket'] {
  color: #f00;
}

/* Target a specific flag */
[data-slot='icon-flag-gt'] {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

### Size — UI icons

```tsx
// Via prop (px or any valid CSS unit)
<IconRocket size={80} />

// Via Tailwind
<IconRocket className="size-6" />
```

### Color — UI icons

Default color is `currentColor` (inherits from CSS `color`).

```tsx
// Via prop
<IconRocket color="#0047CC" />

// Via Tailwind
<IconRocket className="text-blue-500" />
```

### Stroke width — UI icons

Default is `1.5`. Changing it is **strongly discouraged** as it degrades icon quality. If needed:

```tsx
<IconRocket strokeWidth={2} />
<IconRocket className="stroke-2" />
```

Only if the icon size is less than 18px, it is recommended to set the stroke width to 2px for a better visual result.

### Size — Flag icons

Flags have a 3:2 native aspect ratio. Three sizing modes:

```tsx
// 1. Maintain 3:2 ratio (recommended)
<IconFlagGT width={80} />
<IconFlagGT className="w-16" />

// 2. Square container (flag fits inside with letterboxing)
<IconFlagGT size={80} />
<IconFlagGT className="size-20" />

// 3. Fill entire square (cropped)
<IconFlagGT size={80} cover />
<IconFlagGT className="size-20" cover />
```

---

## TypeScript

```tsx
import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'
```

Types are scoped to separate entrypoints to avoid collisions with icon component names (e.g. `IconFlag` is a UI icon component, `FlagIcon` is the SVG element type).

### UI icon props (`IconProps`)

| Prop          | Type               | Default                   | Description                                                       |
| :------------ | :----------------- | :------------------------ | :---------------------------------------------------------------- |
| `size`        | `number \| string` | `24`                      | Sets both width and height                                        |
| `strokeWidth` | `number`           | `1.5`                     | Stroke width (avoid changing)                                     |
| `color`       | `string`           | `'currentColor'`          | Applies to stroke and fill                                        |
| `aria-label`  | `string`           | `undefined`               | Enables informative mode: adds `role="img"`, clears `aria-hidden` |
| `className`   | `string`           | `'icon-ui'`               | Base CSS class                                                    |
| `data-slot`   | `string`           | `'icon-ui-{{icon-name}}'` | Unique attribute for targeted CSS                                 |

### Flag icon props (`FlagIconProps`)

| Prop          | Type               | Default                     | Description                                   |
| :------------ | :----------------- | :-------------------------- | :-------------------------------------------- |
| `size`        | `number \| string` | `24`                        | Square container — sets both width and height |
| `width`       | `number \| string` | `undefined`                 | Width only — preserves 3:2 ratio              |
| `height`      | `number \| string` | `undefined`                 | Height only                                   |
| `color`       | `string`           | `'currentColor'`            | Applies to stroke and fill                    |
| `role`        | `string`           | `'img'`                     | Treated as image asset                        |
| `aria-label`  | `string`           | `'{{FLAG_CODE}}'`           | Uppercase country code or name                |
| `aria-hidden` | `boolean`          | `false`                     | Set to `true` for decorative usage            |
| `cover`       | `boolean`          | `false`                     | Crops and fills entire square container       |
| `className`   | `string`           | `'icon-flag'`               | Base CSS class                                |
| `data-slot`   | `string`           | `'icon-flag-{{flag-name}}'` | Unique attribute for targeted CSS             |

---

## Flag icon naming

Country flags follow ISO 3166-1 alpha-2 **uppercase** country codes:

- `IconFlagGT` (Guatemala), `IconFlagUS` (United States), `IconFlagMX` (Mexico), `IconFlagES` (Spain)

**Exceptions:**

| Special flag    | Component name |
| :-------------- | :------------- |
| LGBT pride flag | `IconFlagLGTB` |
| Africa          | `IconFlagCAF`  |
| Asia            | `IconFlagCAS`  |
| Europe          | `IconFlagCEU`  |
| North America   | `IconFlagCNA`  |
| South America   | `IconFlagCSA`  |
| Oceania         | `IconFlagCOC`  |

Continent flags use the `C` prefix followed by the continent abbreviation.

---

## Performance

If the app is using Next.js, optimize the package on the `next.config.ts`:

```ts
experimental: {
  optimizePackageImports: ['@andrsrxn/icons']
}
```

## RTL support

### Setup

Import the RTL stylesheet at your project root:

```tsx
// index.tsx / layout.tsx / _app.tsx
import '@andrsrxn/icons/rtl.css'
```

When imported, icons automatically flip horizontally (`scale: -1, 1`) whenever a **parent element has `dir="rtl"`** explicitly set.

> **Limitation**: `dir="auto"` does NOT trigger flipping. The `dir` attribute must be set explicitly on a parent or ancestor element.

The RTL CSS uses `[dir='rtl']` descendant selectors to flip icons and `[dir='ltr']` reset selectors so nested LTR subtrees restore correct orientation.

---

### RTL-aware icon categories

**Opt-in icons** (flip only when they have `start`/`end` in their name — directional icons that explicitly encode reading direction):

**Opt-out icons** (normal UI icons that flip by default in RTL layouts because they encode reading direction implicitly):

> The full authoritative list lives in `@andrsrxn/icons/rtl.css`.

---

### Exclusive RTL icons (`-rtl` suffix)

Some icons require structural adaptation rather than a simple horizontal mirror. They are **only used in RTL layouts** and exported as separate components with the `-rtl` suffix.

These are always imported from `@andrsrxn/icons` (the same entrypoint as regular UI icons).

---

### Opting out of RTL flipping

To prevent an icon from flipping in an RTL context, use one of these approaches:

**1. Wrap in a `dir="ltr"` ancestor:**

```tsx
<div dir='ltr'>
  <IconArrowStart />
</div>
```

**2. Inline style:**

```tsx
<IconArrowStart style={{ scale: 'none' }} />
```

**3. Built-in no-flip class:**

```tsx
<IconArrowStart className='icon-ui-no-flip' />
```

**4. Custom CSS:**

```css
[dir='rtl'] [data-slot='icon-ui-arrow-start'] {
  scale: none;
}
```

---

## Duotone design rules

The library applies duotone fill deliberately — not indiscriminately.

| Rule                            | Behavior                                                                                                                                                                                  |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stroke-only / geometric**     | Icons made purely of lines or symbols (`+`, `-`, `×`, arrows) have **no fill layer**                                                                                                      |
| **Clear path/fill distinction** | Duotone fill is applied only when the background layer is semantically meaningful                                                                                                         |
| **Fill = shadow/background**    | The secondary layer represents a background surface or shadow                                                                                                                             |
| **Stack icons**                 | In layered icons (`IconUsers`, `IconBookmarks`, `IconFiles`), the **front element is unfilled**; the **back element has the fill**                                                        |
| **Continuous line exception**   | Looping line icons (`IconFingerprint`, `IconHashtag`) enclose interior space but are **not filled**                                                                                       |
| **Letters and numbers**         | Icon components containing letter/number shapes have **no fill**                                                                                                                          |
| **Filled variants**             | A `filled` suffix variant exists **only** for icons with meaningful active/selected states: `IconHeartFilled`, `IconBookmarkFilled`, `IconStarFilled`, `IconBellFilled`, `IconLikeFilled` |

---

## Common failure modes

| Failure                                    | Cause                                                                                                       | Fix                                                                  |
| :----------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| **Wrong flag aspect ratio**                | Setting `size` without `cover`, or setting both `width` and `height`                                        | Use only `width` for 3:2 ratio, or add `cover` prop to fill a square |
| **Import path error**                      | Importing flag icons from `@andrsrxn/icons` root                                                            | Use `@andrsrxn/icons/flags` or `@andrsrxn/icons/flags/<code>`        |
| **Icon squishes in flex layout**           | Missing global CSS baseline                                                                                 | Add `.icon-ui { flex-shrink: 0; pointer-events: none; }` to globals  |
| **Type collision**                         | Importing types from wrong entrypoint                                                                       | Use `@andrsrxn/icons/types` and `@andrsrxn/icons/flags/types`        |
| **Icons not flipping in RTL**              | Missing RTL stylesheet                                                                                      | Import `@andrsrxn/icons/rtl.css` at project root                     |
| **RTL flip not working with `dir="auto"`** | `dir="auto"` is not supported                                                                               | Set `dir="rtl"` explicitly on a parent/ancestor element              |
| **Nested LTR inside RTL not restoring**    | RTL CSS includes `[dir='ltr']` reset selectors — ensure the LTR override element has `dir="ltr"` explicitly | Add `dir="ltr"` to the specific subtree container                    |

---

## Validation checklist

- [ ] Package installed; `"type": "module"` present in `package.json`
- [ ] Global CSS applied (`.icon-ui { flex-shrink: 0; pointer-events: none; }`)
- [ ] UI icons imported from `@andrsrxn/icons` or `@andrsrxn/icons/<name>`
- [ ] Flag icons imported from `@andrsrxn/icons/flags` or `@andrsrxn/icons/flags/<code>`
- [ ] Decorative UI icons have no `aria-label` (defaults to `aria-hidden="true"`)
- [ ] Informative UI icons have `aria-label` only when strictly required
- [ ] Flag icons render with correct `aria-label` or explicit `aria-hidden` for decorative use
- [ ] RTL stylesheet imported at root if RTL layout is in use
- [ ] Exclusive `-rtl` components used for structurally adapted RTL icons
- [ ] Flag sizing uses `width` prop (3:2 ratio) or `size` + optionally `cover` for square
- [ ] Types imported from scoped entrypoints (`/types`, `/flags/types`)
