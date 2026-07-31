---
'@andrsrxn/icons': patch
---

Fixed a runtime error on Flag icons ("Expected length, 'auto'") that occurred when only `width` was set without `size`. Flag icons without an explicit `size` now correctly scale proportionally based on `width` instead of passing an invalid `auto` value to the SVG `height` attribute. A fallback on CSS is provided through only to `ui-icon-flag`.
