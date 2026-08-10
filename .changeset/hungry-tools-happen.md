---
'@andrsrxn/icons': major
---

Rename speaker icons for consistency

The `speaker`, `speaker-high`, `speaker-off` and `speaker-silent` were renamed to `volume-`, `volume-high`, `volume-off` and `volume-silent`, in order to add the specific and different `speaker` icon.

This is a breaking change. Existing imports using the renamed exports must be updated to their new names.

**Migration**: Replace the icon names in your imports and usage:

```diff
- import { SpeakerLow, SpeakerHigh, SpeakerOff, SpeakerSilent } from '@andrsrxn/icons'

+ import { VolumeLow, VolumeHigh, VolumeOff, VolumeSilent } from '@andrsrxn/icons'
```

No changes to the icon usage API are required beyond updating the renamed exports.
