---
'@andrsrxn/icons': major
---

Restrict accessibility props for UI icons and flag icons to establish consistent, internally managed accessibility behavior.

### Breaking changes

- **UI icons**
  - Remove `role`, `aria-hidden`, `focusable`, and `aria-labelledby` from the public `IconProps` type.
  - UI icons are decorative by default and hidden from the accessibility tree.
  - Providing a non-empty `aria-label` makes the icon accessible with `role="img"`.

- **Flag icons**
  - Remove `role`, `focusable`, and `aria-labelledby` from the public `FlagIconProps` type.
  - Flags are informative by default, using their country code as the fallback accessible label.
  - Consumers can customize the accessible name through `aria-label` or make a flag decorative using `aria-hidden`.

Accessibility attributes are now managed internally to ensure consistent behavior and prevent consumers from overriding the intended accessibility semantics.

All icons are now not focusable by default.

```tsx
// Decorative icon (default), set aria-hidden to true, do not set role or aria-label.
<IconSearch aria-label="Search" />

// Informational icon, automatically set role to 'img', and removes aria-hidden.
<IconSearch aria-label="Search" />
```
