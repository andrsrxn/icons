---
'@andrsrxn/icons': major
---

**Reworked the RTL-aware icon system with three distinct categories.**

**1. Opt-in `-start`/`-end` icons**: Auto-mirrored via `[dir=rtl]`, replacing their
former literal `-left`/`-right` counterparts. Full list: `arrow-start`,`arrow-end`,`arrow-down-start`,`arrow-down-end`,`arrow-up-start`,`arrow-up-end`,`arrows-start-end`,
`border-end`,`border-start`,`bounce-end`,`bounce-start`,
`chevron-start`,`chevron-end`,`chevron-start-double`,`chevron-end-double`,
`text-align-start`,`text-align-end`,`text-centerline-end`,`text-centerline-start`,`text-firstline-start`,`text-firstline-start`,
`panel-end-filled`,`panel-end-open-filled`,`panel-end-open`,`panel-end`,`panel-start-filled`,`panel-start-open-filled`,`panel-start-open`,`panel-start`,
`slides-start`,`slides-end`,

**2. RTL-exclusive icons**: Not mirrored via CSS transform at all, since flipping
their content (numerals, checkmarks) would render it incorrectly. These are separate,
dedicated components used only in RTL contexts: `seek-backward-rtl`,
`seek-forward-rtl`, `list-ordered-rtl`, `list-check-rtl`.

**3. Opt-out icons** Unchanged, still auto-mirrored by default via `[dir=rtl]`,
no action needed, but increased the list: `list-asterisk`,`list-unordered`,`logs`,`app-window`,`notes`,`article`,`receipt`,`text-indent`,`text-outdent`,`text-initial`,`text-items`,`text-line-height`,
`key-backspace`,`key-enter`,`key-tab`,
`external-link`,`chevron-first`,`skip-backward`,`chevron-last`,`skip-forward`,`redo`,`undo`.

**Migration:**

```diff
- import { IconChevronLeft, IconChevronRight } from '@andrsrxn/icons'
+ import { IconChevronStart, IconChevronEnd } from '@andrsrxn/icons'

- <IconSeekBackward />  {/* used inside an RTL context */}
+ <IconSeekBackwardRtl />
```

**CSS import restructuring.** RTL mirroring rules have moved out of the base
stylesheet into a separate, opt-in entry point because based styles were removed. If you use any RTL-aware icon (the `-start`/`-end` set, or the opt-out icons like `text-indent`), you need to import `@andrsrxn/icons/rtl.css`.

```diff
- import '@andrsrxn/icons/styles.css'
+ import '@andrsrxn/icons/rtl.css'
```
