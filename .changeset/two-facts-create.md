---
'@andrsrxn/icons': patch
---

Loosened peer dependency requirements. Removed `react-dom` from `peerDependencies` entirely; the package only ever used `react` (components are plain functions returning JSX, nothing imports from `react-dom` directly).

No action needed for existing consumers.
