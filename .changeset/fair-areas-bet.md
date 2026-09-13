---
'@andrsrxn/icons': patch
---

Fixed accessibility labeling so `title` and `aria-label` no longer both apply at once. setting `aria-label` alone applies instead of `title` attribute, and add `role=img` on UI icons.

On the other hand, flag icons only have by default `aria-label` with the uppercase country code; setting `aria-hidden` make them decorative and not informational as intended.
