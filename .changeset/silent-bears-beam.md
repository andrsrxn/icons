---
'@andrsrxn/icons': major
---

Renamed the following icons:

- `layer` to `layers-one`
- `layer-half` to `layers-two`
- `layers` to `layers-three`
- `chevron-first` to `chevron-left-line`
- `chevron-last` to `chevron-right-line`
- `drop` to `droplet`
- `drop-off` to `droplet-off`
- `drops` to `droplets`
- `cloud-drop` to `cloud-droplet`
- `cloud-drops` to `cloud-droplets`
- `face-filter` to `face-smile-sparkle`
- `face-scan` to `face-smile-scan`
- `decimals-less` to `decimals-decrease`
- `decimals-more` to `decimals-increase`
- `book-download` to `book-out`
- `square-root` to `root`
- `volume-silent` to `volume-x`
- `crane` to `crane-tower`
- `camera-grid` to `grid-lines`
- `sound-off` to `sound-wave-x`
- `airplay` to `shareplay`
- `margins` to `margin`

### Migration

If your are using some of the icons above, you need to update your imports:

```diff
- import { face-filter } from '@andrsrxn/icons'
+ import { face-smile-sparkle } from '@andrsrxn/icons'
```
