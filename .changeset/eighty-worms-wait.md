---
'@andrsrxn/icons': major
---

**Renamed the base CSS classes and `data-slot` prefix.**

- UI icons: `.ui-icon` → `.icon-ui`
- Flag icons: `.ui-flag` → `.icon-flag`
- `data-slot` on every icon now uses the new class prefix followed by the icon name
  (e.g. `ui-icon-rocket` → `icon-ui-rocket`, `ui-flag-us` → `icon-flag-us`)

Any CSS selectors, including the RTL auto-mirroring rules, targeting the old class names
or `data-slot` values need updating.

**Migration:**

```diff
- .ui-icon { ... }
+ .icon-ui { ... }

- .ui-flag { ... }
+ .icon-flag { ... }

- [data-slot='ui-icon-rocket'] { ... }
+ [data-slot='icon-ui-rocket'] { ... }
```
