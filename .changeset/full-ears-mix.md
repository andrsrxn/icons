---
'@andrsrxn/icons': minor
---

**Added new UI icons.**

More than a 100 icons were added, including new variants for current icons and specific use cases.

**Added a `strokeWidth` prop** to control an icon's stroke width, either
individually per icon or globally via `.ui-icon * { stroke-width: ... }`.
Changing it from the default is not recommended; since icons combine
strokes with filled shapes, altering `stroke-width` can produce unexpected
results where the stroke and fill no longer align cleanly.

**Support RTL for new icons**

Icon such as swipe-right/left, panels-right/left, keyboard keys, and more, now are RTL aware.
