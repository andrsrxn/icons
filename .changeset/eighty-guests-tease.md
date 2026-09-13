---
'@andrsrxn/icons': patch
---

Consolidated `strokeWidth`, `stroke-linecap`, and `stroke-linejoin` onto each icon's root `<svg>` element instead of repeating them per path/shape, reducing output size and letting the consumers change it once per icon from the root. Visual rendering and the `strokeWidth` prop's behavior are unchanged.
