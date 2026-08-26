---
'@andrsrxn/icons': major
---

**Rebuilt all UI icons using strokes and shapes instead of flattened paths.**

Every UI icon's underlying SVG markup has changed. Previous versions shipped fully flattened path data; icons are now built from actual stroke and shape primitives instead. This reduces the size of each icon and lays the groundwork for animating individual strokes in the future.

**Renamed icons.** A number of icons were renamed to fix misspellings and to better reflect their intended meaning (e.g. `arrow-expand` to `expand`). Full
list of renames:

- `olimpyc-torch` to `olympic-torch`
- `vehicule-battery` to `vehicle-battery`
- `celcius` to `celsius`
- `resfresh` to `refresh`
- `trophie` to `trophy`
- `text-lowecase` to ``text-lowercase`
- `suffle` to ``shuffle`
- `phone-outcomming` to ``phone-outgoing`
- `text-aa` to ``text-case-sensitive`
- `text-clean` to ``text-clear`
- `substract` to ``subtract`
- `arrow-expand` to `expand`
- `arrow-contract` to `contract`
- `collapse` to `list-collapse`

**Removed `IconFaceId`.** This depicted Apple's Face ID feature and was removed for the same trademark reasons as the Brand icon removal.

**`data-slot` values changed.** UI icons now use `data-slot='ui-icon-{name}'` (previously just `{name}`). Flag icons now also carry a `data-slot`, using `data-slot='ui-flag-{name}'`. Update any selectors targeting these directly.

**Flag icon class name changed** from `ui-icon-flag` to `ui-flag`. Update any CSS targeting `.ui-icon-flag`.

**Migration:**

```diff
- import { IconArrowExpand } from '@andrsrxn/icons'
+ import { IconExpand } from '@andrsrxn/icons'

- import { IconFaceId } from '@andrsrxn/icons'
+ import { IconFaceScan } from '@andrsrxn/icons' // alternative with the same meaning

- [data-slot='rocket'] { ... }
+ [data-slot='ui-icon-rocket'] { ... }

- .ui-icon-flag { ... }
+ .ui-flag { ... }
```
