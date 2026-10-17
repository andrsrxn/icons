# RTL icons reference

This document details the complete inventory of RTL-aware icons and directional behavior in `andrsrxn/icons`.

---

## Overview

When `@andrsrxn/icons/rtl.css` is imported into a project, UI icons automatically flip horizontally (`transform: scaleX(-1)`) whenever an ancestor HTML element has the attribute `dir="rtl"`.

```tsx
import '@andrsrxn/icons/rtl.css'
```

The CSS implementation uses `[dir='rtl']` descendant selectors paired with a matching `[dir='ltr']` reset selector so that nested subtrees restore correct orientation.

---

## Exclusive RTL icons (-rtl suffix)

These icons are **exclusive for RTL layouts**. Because their design requires structural adaptation rather than a simple horizontal mirror, they are exported as separate components with the `-rtl` suffix in the name and `Rtl` suffix for its component name.

---

## Automatic RTL-flipped icons list

There are some opt-in and opt-out icons:

- Opt-in icons: have explicit suffix `start`/`end` in their names.
- Opt-out icons: normal UI icons that flip by default in RTL layouts.

All the list is available in `@andrsrxn/icons/rtl.css` stylesheet. It has a `[dir=rtl]` set selector for opt-in and opt-out icons, and a `[dir=ltr]` reset selector for nested overrides.

---

## Opting out of automatic flipping

If an icon should retain its default orientation regardless of `dir="rtl"`, you can override the transformation using Tailwind CSS or custom CSS.

### Using Tailwind CSS

```tsx
<IconArrowStart className='rtl:scale-x-100' />
```

### Using custom CSS

```css
[dir='rtl'] [data-slot='icon-ui-arrow-start'] {
  transform: scaleX(1);
}
```
