---
name: andrsrxn-icons
description: Integrate, import, style, and handle accessibility or RTL for UI icons and flag icons from the @andrsrxn/icons library in React applications. Use when the user asks to add icons, search or pick icon components, set up icon RTL flipping, configure icon global CSS, or work with andrsrxn/icons types.
license: MIT
metadata:
  version: 1.0.0
---

# `andrsrxn/icons` agent skill

A consumer-focused guide for AI agents to correctly select, import, style, and configure `andrsrxn/icons` in React applications. The full documentation is on [https://icons.andrsrxn.com](https://icons.andrsrxn.com).

---

## What this skill does

- Provides rules for selecting and importing UI icons (`Icon...`) and flag icons (`IconFlag...`).
- Configures global styles (`.icon-ui`), bundle import paths, and TypeScript interfaces.
- Implements accessibility standards for decorative UI icons and informational flags.
- Configures automatic RTL layout flipping with `@andrsrxn/icons/rtl.css` and exclusive `-rtl` icons.
- Applies design principles for duotone fill selection and active `filled` state variants.

---

## When to use it (and when not to)

### When to use

Use this skill when:

- Integrating or importing icons from `@andrsrxn/icons` or `@andrsrxn/icons/flags` in React apps.
- Configuring global CSS, Tailwind styles, or RTL behavior for icons.
- Adding accessibility labels (`aria-label`, `aria-hidden`) to icons.
- Working with TypeScript types (`IconProps`, `FlagIconProps`).

### When not to use

Do not use this skill when:

- Creating source SVG files or generating TSX component code inside the `andrsrxn/icons` library repository.
- Working with internal package code (e.g. `raw-icons`, build scripts).
- Seeking brand or company logos (use SVGL or Simple Icons instead).

---

## Inputs needed

Before executing tasks, identify:

1. **Target icon type**: UI icon (`Icon...`) or flag icon (`IconFlag...`).
2. **Import style preference**: Barrel import (`@andrsrxn/icons`) or specific path import (`@andrsrxn/icons/rocket`).
3. **Accessibility role**: Decorative (default for UI) or informational (default for flags / UI with `aria-label`).
4. **Layout direction**: Standard LTR or RTL requiring `@andrsrxn/icons/rtl.css`.

---

## Step-by-step procedure

1. **Install package and apply global styles**:
   - Install: `pnpm add @andrsrxn/icons` (or npm/yarn/bun).
   - Add recommended styles to global CSS:
     ```css
     .icon-ui {
       flex-shrink: 0;
       pointer-events: none;
     }
     ```
2. **Select the correct component and group**:
   - UI icons (`Icon...`): Aspect ratio 1:1, exported from `@andrsrxn/icons`.
   - Flag icons (`IconFlag...`): Aspect ratio 3:2, exported from `@andrsrxn/icons/flags`.
3. **Import using appropriate strategy**:
   - Standard: `import { IconRocket } from '@andrsrxn/icons'`
   - Granular: `import { IconRocket } from '@andrsrxn/icons/rocket'`
4. **Configure accessibility**:
   - UI icons are decorative by default (`aria-hidden="true"`). Provide `aria-label` only when strictly required as an informative action button.
   - Flag icons are informational by default (`role="img"`, `aria-label="<COUNTRY_CODE>"`). Pass `aria-hidden` if decorative.
5. **Configure RTL if needed**:
   - Import `@andrsrxn/icons/rtl.css` at app root.
   - Use exclusive `-rtl` suffix components (`IconListCheckRtl`, `IconSeekForwardRtl`) for adapted RTL icons.
6. **Apply styling and sizing**:
   - Use `size` prop or Tailwind `size-6` for UI icons.
   - Use `width` prop (e.g. `width={60}`) for flags to maintain 3:2 aspect ratio.

---

## Validation and "how to know we're done"

- **Build check**: Project compiles cleanly without missing module or export errors.
- **Import verify**: Icons import from correct group entrypoints (`@andrsrxn/icons` vs `@andrsrxn/icons/flags`).
- **Styling verify**: UI icons render at intended dimensions without flex distortion (`flex-shrink: 0`). Flags retain 3:2 aspect ratio when using only the `width` prop, 1:1 when using the `width` and `height` or `size` prop and keeping the 3:2 aspect inside the square, or fill all the square space with the `preserveAspectRatio` attribute set to `'xMidYMid slice'`. If none of the above is true, ask the user to fix it.
- **Accessibility verify**: Decorative UI icons have `aria-hidden="true"`; interactive icons have descriptive labels; flags have uppercase country code labels or explicit `aria-hidden`.
- **RTL verify**: RTL stylesheet is imported at project root if RTL layout is used.

---

## Common failure modes and fixes

| Failure mode                      | Cause                                                                                                  | Fix                                                                                                |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **Wrong flag aspect ratio**       | Setting both `width` and `height` or `size` to fill all the square space without `preserveAspectRatio` | Set only `width` (e.g. `<IconFlagGT width={40} />`) or add `preserveAspectRatio="xMidYMid slice"`. |
| **Import path errors**            | Importing flag icons from `@andrsrxn/icons` root instead of `@andrsrxn/icons/flags`                    | Update import path to `@andrsrxn/icons/flags` or `@andrsrxn/icons/flags/<code-or-name>`.           |
| **Icon squishing in flex layout** | Missing baseline global CSS                                                                            | Add `.icon-ui { flex-shrink: 0; pointer-events: none; }` to global CSS.                            |
| **Type collision errors**         | Importing `IconProps` and `FlagIconProps` from root                                                    | Import types from scoped paths: `@andrsrxn/icons/types` or `@andrsrxn/icons/flags/types`.          |
| **Icons not flipping in RTL**     | Missing global RTL stylesheet                                                                          | Import `@andrsrxn/icons/rtl.css` in project root file.                                             |

---

## Library specifics and rules

For detailed reference documentation:

- [Naming and design rules](./references/naming-and-design-rules.md)
- [RTL icons reference](./references/rtl-icons.md)
- [TypeScript and exports reference](./references/typescript-and-exports.md)

### Core mental model: groups vs categories

- **Groups (code structure)**: `Icon...` (UI group) and `IconFlag...` (Flags group) represent actual component code exports.
- **Categories (documentation only)**: Categories, tags, and catalog filters exist **only** on the search interface at `https://icons.andrsrxn.com`.

### Duotone design principles

- **Duotone by criteria**: Applied only when there is a clear distinction between paths and background fill.
- **Stroke-only icons**: Geometric icons (`+`, `/`, `×`, `IconX`, arrows) contain no fill layer.
- **Stack icons**: Front element is unfilled surface; background element receives fill (e.g. `IconUsers`, `IconBookmarks`).
- **Continuous lines**: Looped icons (`IconFingerprint`, `IconHashtag`) contain no fill.
- **Letters and numbers**: Contain no fill.
- **Filled variants**: `filled` suffix components exist on demand only for active/selected states (e.g. `IconHeartFilled`, `IconBookmarkFilled`).

### Flag group naming

- Country flags use ISO 3166-1 alpha-2 uppercase codes (`IconFlagGT`, `IconFlagUS`).
- LGBT flag: `IconFlagLGTB`.
- Continent flags use `C` prefix (`IconFlagCNA` for North America, `IconFlagCAF` for Africa, `IconFlagCEU` for Europe, `IconFlagCAS` for Asia, `IconFlagCSA` for South America, `IconFlagCOC` for Oceania).
