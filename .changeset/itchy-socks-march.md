---
'@andrsrxn/icons': minor
---

Added a new `cover` boolean prop to all flag icon components (`FlagIconProps`).

This abstracts `preserveAspectRatio="xMidYMid slice"` into a first-class prop, allowing flags to automatically fill square containers (such as avatar or icon buttons) without manually specifying SVG attributes.

### Example

```tsx
// Before
<IconFlagGT size={80} preserveAspectRatio="xMidYMid slice" />
<IconFlagGT className="size-20" preserveAspectRatio="xMidYMid slice" />

// Now
<IconFlagGT size={80} cover />
<IconFlagGT className="size-20" cover />
```
