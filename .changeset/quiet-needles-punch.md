---
'@andrsrxn/icons': patch
---

Fixed RTL icon flipping by using inherited CSS custom properties that flip in every nested direction.

The implementation supports explicit `dir="rtl"` and `dir="ltr"` attributes, including nested direction overrides, without relying on CSS direction pseudo-class transformations.

It doesn't use `dir(rtl)` selector because of incompatibilities with some CSS processors and style transformations, this is the most compatible way to do it.

**Limitation:** Automatic direction detection through `dir="auto"` is not supported. RTL icon flipping requires an explicit `dir="rtl"` or `dir="ltr"` attribute on the relevant element or one of its ancestors. This limitation was already present in the previous implementation.
