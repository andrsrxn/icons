---
name: andrsrxn-icons
description: Guide for AI agents to integrate, import, style, and query icons from @andrsrxn/icons in React applications, covering UI icons, flag icons, RTL support, accessibility, design fill criteria, and TypeScript usage. Use when asked to add icons, pick icon components, set up icon RTL styling, handle icon accessibility, or configure @andrsrxn/icons in a project.
---

# `@andrsrxn/icons` Agent Skill

This skill provides comprehensive instructions for AI agents consuming `@andrsrxn/icons` in React applications.

## Library Summary and Requirements

- **Package**: `@andrsrxn/icons` (Free, open-source React icon library)
- **Style**: Smooth duotone aesthetic for UI icons (1,000+ icons) and minimal illustrated 3:2 flags (250+ flags).
- **Peer Requirements**: React 19 and `react-dom` 19 (`react^19.0.0`).
- **Runtime Environment**: ESM-only package (`"type": "module"` in `package.json`, Node.js 20.16.0+, 22.19.0+, 24.0.0+).

---

## Core Mental Model: Groups vs Categories

It is critical to distinguish between **Groups** (code structure) and **Categories** (documentation filter only):

1. **Groups (Code and Components)**:
   - **UI Group (`Icon...`)**: Functional icons for app interfaces (1,000+ icons). Aspect ratio 1:1. Exported from root `@andrsrxn/icons` or direct subpaths `@andrsrxn/icons/<icon-name>`. Decorative by default. Usually only named and referenced as "Icons".
   - **Flags Group (`IconFlag...`)**: Illustrated, minimal country and region flags (250+ flags). Aspect ratio 3:2. Exported from `@andrsrxn/icons/flags` or direct subpaths `@andrsrxn/icons/flags/<flag-code>`. Informational by default. Usually only named and referenced as "Flags".
2. **Categories (Documentation Only)**:
   - Categories, tags, and catalog filters exist **solely in the documentation search interface in https://icons.andrsrxn.com** to help humans search for UI icons. They are **not** part of exports, namespaces, or component props.

---

## Installation and Mandatory Global Styles

### Installation

```bash
pnpm add @andrsrxn/icons
# or npm install @andrsrxn/icons / yarn add @andrsrxn/icons / bun add @andrsrxn/icons
```

### Recommended Global Styles

When installing `@andrsrxn/icons`, consumers should add these recommended baseline styles to their project's global CSS (e.g., `globals.css` or `index.css`):

```css
.icon-ui {
  flex-shrink: 0;
  pointer-events: none;
}
```

This prevents unwanted flex deformation in layouts and ensures click events pass through decorative icons to their parent interactive containers.

---

## Import Strategies

### 1. Barrel Imports (Tree-Shakable)

Recommended for standard usage. Modern bundlers auto-shake unused icons.

```tsx
import { IconRocket, IconFolderCheck } from '@andrsrxn/icons'
import { IconFlagGT, IconFlagUS } from '@andrsrxn/icons/flags'
```

### 2. Specific Subpath Imports (Granular Isolation)

Use when explicit bundle size isolation or strict subpath control is required.

```tsx
import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconFlagGT } from '@andrsrxn/icons/flags/gt'
```

> [!WARNING]
> Avoid wildcard imports or importing everything from root into large bundles without tree-shaking enabled.

---

## Icon Naming and Variety Rules

See detailed reference: [naming-and-design-rules.md](file:///c:/Users/carlo/Desktop/Projects/Personal/Apps/icons/Library/skills/andrsrxn-icons/references/naming-and-design-rules.md)

- **Prefixes**: All UI icons start with `Icon` (e.g., `IconSearch`). All Flag icons start with `IconFlag` (e.g., `IconFlagGT`).
- **Object-Based Naming**: Component names are PascalCase based on the represented object (e.g., `IconSave`, `IconExternalLink`).
- **Prominent Element First**: Multi-concept icons put the prominent object first (e.g., `IconHeartScan`, **not** `IconScanHeart`).
- **Action and State Variations**: Common objects feature standard action/state suffixes:
  - Examples: `IconFolderX`, `IconFolderCheck`, `IconFolderWarning`, `IconFolderOff`, `IconFolderClock`, `IconFolderPlus`, `IconFolderMinus`, `IconFolderLock`, `IconFolderEdit`.
  - Same pattern applies to `Calendar`, `User`, `Mail`, `File`, `Book`, `Message`,`CreditCard`, `Globe`, `Pin`, `Phone`, `Shield`, `ShoppingBag`, `Signal`, etc.
- **Flag Naming Standards**:
  - Country flags use ISO 3166-1 alpha-2 codes in uppercase: `IconFlagGT`, `IconFlagUS`, `IconFlagMX`, `IconFlagES`.
  - **LGBT Flag**: `IconFlagLGTB`.
  - **Continent Flags**: Prefixed with `C`: `IconFlagCNA` (North America), `IconFlagCAF` (Africa), `IconFlagCEU` (Europe), `IconFlagCAS` (Asia), `IconFlagCSA` (South America), `IconFlagCOC` (Oceania).

---

## Icon Design Principles and Duotone Fill Logic

Understanding the duotone fill rules helps agents select and recommend icons accurately:

1. **Duotone Criteria**: Duotone is applied only when there is a meaningful distinction between primary paths and background fill.
2. **Stroke-Only / Geometric Icons (No Fill)**: Simple geometric icons (e.g., `+`, `-`, `/`, `×`, `IconX`, arrows) contain stroke lines only. No decorative fill layer is added to prevent visual noise.
3. **Fill Meaning**: The secondary fill layer represents background, depth, or shadow.
4. **Stack Icons (Layering Rule)**: For layered/stacked objects (`IconUsers`, `IconBookmarks`, `IconFiles`), the front element is always the unfilled "surface", while the element behind receives the duotone fill layer.
5. **Continuous Line Exception**: Icons with enclosed loops like `fingerprint` or `hashtag` are treated as continuous lines; their interior spaces are **not** filled.
6. **Letters and Numbers**: Letter and number icons contain **no** duotone fill.
7. **Filled Variant (`filled`)**: A `filled` component variant (e.g., `IconHeartFilled`, `IconBookmarkFilled`, `IconStarFilled`, `IconBellFilled`) exists **only on demand** for active/selected states, not as a blanket alternative style.

---

## RTL (Right-to-Left) Support

See detailed reference: [rtl-icons.md](file:///c:/Users/carlo/Desktop/Projects/Personal/Apps/icons/Library/skills/andrsrxn-icons/references/rtl-icons.md)

To enable automatic icon flipping under RTL layouts:

1. Import `@andrsrxn/icons/rtl.css` in the project root:
   ```tsx
   import '@andrsrxn/icons/rtl.css'
   ```
2. RTL-aware icons automatically detect `[dir="rtl"]` on ancestor elements and apply `transform: scaleX(-1)`.
3. **Opting Out**: Override via CSS or Tailwind (`rtl:scale-x-100` / `[dir='rtl'] [data-slot='...'] { transform: scaleX(1); }`).
4. **Exclusive RTL Suffix Icons (`-rtl`)**: Direction-dependent icons that require specialized adaptations rather than simple horizontal flipping:
   - `IconListCheckRtl`
   - `IconListOrderedRtl`
   - `IconSeekBackwardsRtl`
   - `IconSeekForwardRtl`

---

## Accessibility Models

| Icon Group                    | Default Behavior         | Attributes                                  | Customizing Behavior                                                                                                                    |
| :---------------------------- | :----------------------- | :------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **UI Icons (`.icon-ui`)**     | Decorative by default    | `aria-hidden="true"`                        | Provide `aria-label="..."` to automatically switch to `role="img"` and `aria-hidden="false"`. _(Use sparingly when strictly necessary)_ |
| **Flag Icons (`.icon-flag`)** | Informational by default | `role="img"`, `aria-label="<COUNTRY_CODE>"` | Pass `aria-hidden` (`<IconFlagGT aria-hidden />`) to treat as decorative.                                                               |

---

## TypeScript and API Props

See detailed reference: [typescript-and-exports.md](file:///c:/Users/carlo/Desktop/Projects/Personal/Apps/icons/Library/skills/andrsrxn-icons/references/typescript-and-exports.md)

### Importing Types

```tsx
import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'
```

### Key Props Summary

- **UI Icons (`IconProps`)**: `size` (default `24`), `color` (default `'currentColor'`), `strokeWidth` (default `1.5`, changing not recommended), `className` (default `'icon-ui'`), `data-slot` (e.g., `'icon-ui-rocket'`), `aria-label`.
- **Flag Icons (`FlagIconProps`)**: `size` (default `24`), `width`, `height`, `preserveAspectRatio` (e.g., `'xMidYMid slice'`), `role` (default `'img'`), `aria-label` (default uppercase country code), `className` (default `'icon-flag'`), `data-slot` (e.g., `'icon-flag-gt'`), `aria-hidden`.

---

## Quick Reference Links

- [RTL Icons Reference](./references/rtl-icons.md)
- [Naming and Design Rules Reference](./references/naming-and-design-rules.md)
- [TypeScript & Exports Reference](./references/typescript-and-exports.md)
