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
- `camera-flip` to `camera-refresh`
- `check-double` to `checks`
- `annotations` to `annotation`
- `annotations-x` to `annotation-x`
- `annotations-minus` to `annotation-minus`
- `annotations-plus` to `annotation-plus`
- `timeline-annotations` to `timeline-annotation`
- `chevron-down-double` to `chevrons-down`
- `chevron-left-double` to `chevrons-left`
- `chevron-right-double` to `chevrons-right`
- `chevron-start-double` to `chevrons-start`
- `chevron-end-double` to `chevrons-end`
- `chevron-up-double` to `chevrons-up`
- `chevron-up-double-circle` to `chevrons-up-circle`
- `chevron-down-double-circle` to `chevrons-down-circle`
- `chevron-left-double-circle` to `chevrons-left-circle`
- `chevron-right-double-circle` to `chevrons-right-circle`
- `chevron-end-double-circle` to `chevrons-end-circle`
- `chevron-start-double-circle` to `chevrons-start-circle`

### Migration

If your are using some of the icons above, you need to update your imports:

```diff
- import { face-filter } from '@andrsrxn/icons'
+ import { face-smile-sparkle } from '@andrsrxn/icons'
```
