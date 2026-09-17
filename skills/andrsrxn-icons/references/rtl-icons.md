# RTL Icons Reference

This document details the complete inventory of RTL-aware icons and directional behavior in `@andrsrxn/icons`.

---

## Overview

When `@andrsrxn/icons/rtl.css` is imported into a project, UI icons automatically flip horizontally (`transform: scaleX(-1)`) whenever an ancestor HTML element has the attribute `dir="rtl"`.

```tsx
import '@andrsrxn/icons/rtl.css'
```

The CSS implementation uses `[dir='rtl']` descendant selectors paired with a matching `[dir='ltr']` reset selector so that nested subtrees restore correct orientation.

---

## Exclusive RTL Icons (`-rtl` Suffix)

These icons are **exclusive for RTL layouts**. Because their design requires structural adaptation rather than a simple horizontal mirror, they are exported as separate components with the `-rtl` suffix:

- `IconListCheckRtl` (corresponds to `IconListCheck`)
- `IconListOrderedRtl` (corresponds to `IconListOrdered`)
- `IconSeekBackwardsRtl` (corresponds to `IconSeekBackwards`)
- `IconSeekForwardRtl` (corresponds to `IconSeekForward`)

---

## Automatic RTL-Flipped Icons List

The following icons automatically flip under `[dir='rtl']`:

### Opt-in Directional Icons

Icons designed with explicit directional semantics (`start` / `end`):

#### Arrows and Navigation

- `icon-ui-arrow-start`
- `icon-ui-arrow-end`
- `icon-ui-arrow-down-start`
- `icon-ui-arrow-down-end`
- `icon-ui-arrow-up-start`
- `icon-ui-arrow-up-end`
- `icon-ui-arrows-start-end`

#### Layout and Alignments

- `icon-ui-border-start`
- `icon-ui-border-end`
- `icon-ui-bounce-start`
- `icon-ui-bounce-end`

#### Chevrons

- `icon-ui-chevron-start`
- `icon-ui-chevron-end`
- `icon-ui-chevron-start-double`
- `icon-ui-chevron-end-double`

#### Typography and Alignment

- `icon-ui-text-align-start`
- `icon-ui-text-align-end`
- `icon-ui-text-centerline-start`
- `icon-ui-text-centerline-end`
- `icon-ui-text-firstline-start`

#### Panels and Sidebars

- `icon-ui-panel-start`
- `icon-ui-panel-end`
- `icon-ui-panel-start-open`
- `icon-ui-panel-end-open`
- `icon-ui-panel-start-filled`
- `icon-ui-panel-end-filled`
- `icon-ui-panel-start-open-filled`
- `icon-ui-panel-end-open-filled`

#### Slides and Presentation

- `icon-ui-slides-start`
- `icon-ui-slides-end`

---

### Opt-out Flipped Icons

Icons that represent standard Left-to-Right interface concepts which are mirrored under RTL:

#### Lists and Documents

- `icon-ui-list-asterisk`
- `icon-ui-list-unordered`
- `icon-ui-logs`
- `icon-ui-app-window`
- `icon-ui-notes`
- `icon-ui-article`
- `icon-ui-receipt`
- `icon-ui-text-indent`
- `icon-ui-text-outdent`
- `icon-ui-text-initial`
- `icon-ui-text-items`
- `icon-ui-text-line-height`

#### Keyboards and Controls

- `icon-ui-key-backspace`
- `icon-ui-key-enter`
- `icon-ui-key-tab`

#### Media and Links

- `icon-ui-external-link`
- `icon-ui-chevron-first`
- `icon-ui-skip-backward`
- `icon-ui-chevron-last`
- `icon-ui-skip-forward`
- `icon-ui-redo`
- `icon-ui-undo`

---

## Opting Out of Automatic Flipping

If an icon should retain its default orientation regardless of `dir="rtl"`, you can override the transformation using Tailwind CSS or custom CSS.

### Using Tailwind CSS

```tsx
<IconArrowStart className='rtl:scale-x-100' />
```

### Using Custom CSS

```css
[dir='rtl'] [data-slot='icon-ui-arrow-start'] {
  transform: scaleX(1);
}
```
