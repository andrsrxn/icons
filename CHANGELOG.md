# @andrsrxn/icons

## 4.1.1

### Patch Changes

- [`53aa95f`](https://github.com/andrsrxn/icons/commit/53aa95f3c60e8a379927be3ed82ad5efd353b318) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Update library logo and banner on README.md

- [`53aa95f`](https://github.com/andrsrxn/icons/commit/53aa95f3c60e8a379927be3ed82ad5efd353b318) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Ensure the fill on `bookmarks` icon is always in the back

## 4.1.0

### Minor Changes

- [`f0541af`](https://github.com/andrsrxn/icons/commit/f0541af3dc0d6964a640d703194ab61147d89807) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added 11 UI icons

  - hammer
  - crane
  - split-horizontal
  - split-vertical
  - compare
  - baby-bottle
  - mountains
  - mountain
  - volcano
  - camping
  - file-reference

### Patch Changes

- [`6e2fe5f`](https://github.com/andrsrxn/icons/commit/6e2fe5f206420374cf8b07a272b574f077ac4f66) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Update fill position from 16 icons

  - team
  - box
  - chats
  - copy
  - substract
  - files
  - users
  - group
  - ungroup
  - battery-high
  - battery-medium
  - battery-full
  - swatches
  - heartpulse
  - colors
  - clouds

  **Semi Breaking Change**: removed the `termometer` icon which was misspelled and renamed `houseglass` to `hourglass`.

## 4.0.0

### Major Changes

- [`d49242a`](https://github.com/andrsrxn/icons/commit/d49242a83fc7712f7f11cb009a5d52b9fd1dadfa) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Rename speaker icons for consistency

  The `speaker`, `speaker-high`, `speaker-off` and `speaker-silent` were renamed to `volume-`, `volume-high`, `volume-off` and `volume-silent`, in order to add the specific and different `speaker` icon.

  This is a breaking change. Existing imports using the renamed exports must be updated to their new names.

  **Migration**: Replace the icon names in your imports and usage:

  ```diff
  - import { SpeakerLow, SpeakerHigh, SpeakerOff, SpeakerSilent } from '@andrsrxn/icons'

  + import { VolumeLow, VolumeHigh, VolumeOff, VolumeSilent } from '@andrsrxn/icons'
  ```

  No changes to the icon usage API are required beyond updating the renamed exports.

### Minor Changes

- [`d49242a`](https://github.com/andrsrxn/icons/commit/d49242a83fc7712f7f11cb009a5d52b9fd1dadfa) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added 250+ UI icons

  - ad
  - air-conditioner
  - airplane
  - airplane-landing
  - airplane-takeoff
  - airport-tower
  - alien
  - alpha
  - ambulance
  - anchor
  - angle
  - apple
  - artboard
  - asteroid
  - axe
  - baby
  - background
  - backpack
  - bacteria
  - ball
  - balloon
  - bandage
  - barrel
  - bbq-grill
  - bed
  - bell-electric
  - beta
  - bicycle
  - biohazard
  - blocks
  - blouse
  - blur
  - bomb
  - bone
  - bottle
  - bounce-left
  - bounce-right
  - bow-arrow
  - brain
  - bricks
  - bridge
  - bubbles
  - bug
  - cable
  - cactus
  - cake
  - castle
  - celcius
  - chart-bubble
  - chef-hat
  - church
  - cigarette
  - cigarette-off
  - cleaning-brush
  - clouds
  - combine
  - component
  - cone
  - container
  - copyright
  - couch
  - creative-commons
  - crown
  - decimals
  - decimals-less
  - decimals-more
  - dialpad
  - diff
  - door
  - door-open
  - drama
  - dumbbell
  - ear
  - ellipse
  - ethernet-port
  - ev-charger
  - eye-scan
  - factory
  - fahrenheit
  - female
  - fence
  - fire-extinguisher
  - fire-kindling
  - flame
  - flashlight
  - flip-horizontal
  - flip-vertical
  - footprints
  - fork
  - gas-station
  - gavel
  - golden-ratio
  - group
  - hamburger
  - hand-clap
  - hand-grabbing
  - hand-pointer
  - hand-receiving
  - hand-receiving-coin
  - hand-receiving-first-aid
  - hand-receiving-heart
  - hand-receiving-platter
  - hand-receiving-star
  - hand-receiving-x
  - handbag
  - handshake
  - hanger
  - hdmi-port
  - headset
  - heart-break
  - heart-pulse
  - heater
  - hospital
  - hot-air-balloon
  - inbox
  - incognito
  - island
  - jupiter
  - knife
  - lamp
  - landscape-to-portrait
  - library
  - lighthouse
  - like-dislike
  - list-asterik
  - logs
  - magnet
  - male
  - mask
  - measure
  - medal
  - medal-first
  - medal-second
  - medal-third
  - men
  - metronome
  - milestone
  - motion
  - nuclear-power
  - oil-barrel
  - olimpyc-torch
  - omega
  - orbit
  - paint-board
  - paintbrush
  - parking
  - parking-off
  - paw-print
  - pencil-ruler
  - pill-bottle
  - pills
  - platter
  - plug
  - police-badge
  - police-cap
  - pool
  - portrait-to-landscape
  - power-pole
  - proportions
  - pyramid
  - queue
  - radiation
  - ratio
  - regex
  - registered
  - repeat
  - repeat-1
  - ribbon
  - router
  - sailboat
  - satellite
  - scan-heart
  - school
  - shapes-minus
  - shapes-plus
  - ship-front
  - ship-wheel
  - shirt
  - shovel
  - shredder
  - sigma
  - skull
  - snowflake
  - solar-panel
  - sort-0-1
  - sort-1-0
  - sort-a-z
  - sort-z-a
  - speaker
  - speech
  - square-root
  - stais
  - stamp
  - stethoscope
  - subtitles
  - subtitles-filled
  - - suitcase
  - sun-dim
  - sword
  - syringe
  - tablets
  - teeth
  - tent
  - text-centerline-center
  - text-centerline-left
  - text-centerline-right
  - text-creation
  - text-firstline-center
  - text-firstline-left
  - text-firstline-right
  - text-initial
  - text-items
  - text-ligature
  - text-line-height
  - text-paragraph-spacing
  - text-phonetic
  - text-search
  - text-section
  - text-to-speech
  - text-whole-word
  - thermometer
  - thermometer-snowflake
  - thermometer-sun
  - touchpad
  - toy-brick
  - trade-mark
  - traffic-cone
  - traffic-light
  - train-front
  - train-track
  - transparency
  - trend-up-down
  - ufo
  - ungroup
  - unplug
  - usb
  - usb-port
  - utensils
  - utility-pole
  - vehicule-battery
  - versus
  - voicemail
  - volume-high
  - volume-low
  - volume-off
  - volume-silent
  - wallpaper
  - warehouse
  - weight
  - wheelchair
  - women
  - workflow
  - zzz

## 3.3.0

### Minor Changes

- [`ecf99e2`](https://github.com/andrsrxn/icons/commit/ecf99e26a26b8855664c55b4ee6860c0e92ccd04) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Accepts title and aria-label on UI and Flag icons, overriding aria-hidden when applicable

## 3.2.0

### Minor Changes

- [`022683f`](https://github.com/andrsrxn/icons/commit/022683ffad90e6899cb6fee0d44cdcaf001d7613) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Now the Flag icons have a preview of the flag when importing the icon, such as UI icons

### Patch Changes

- [`d36d698`](https://github.com/andrsrxn/icons/commit/d36d698bc2b8bfba7d2d24cd2ce1fc9009f5c895) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Optimize svg output from Flag icons with svgo by generating them directly from the raw files

## 3.1.0

### Minor Changes

- [`46b6ec0`](https://github.com/andrsrxn/icons/commit/46b6ec003797d3abedc2901883fe01e32d4ace67) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added a new UI icon

  - Layout

## 3.0.0

### Major Changes

- [`970ca37`](https://github.com/andrsrxn/icons/commit/970ca377e19a6f3c1497a71548129b0e2f7e5888) Thanks [@andrsrxn](https://github.com/andrsrxn)! - **Removed all Brand icons and the duotone Logo variants of brand icons.**

  Both the `@andrsrxn/icons/brands` entry point and the `IconLogo*` components
  previously found among UI icons (e.g. `IconLogoGithub`) have been removed
  entirely. This includes their types (`BrandIcon`, `BrandIconProps`).

  This was removed due to trademark risk in redistributing third-party
  company logos as part of a general-purpose icon package. For brand
  logos, we recommend using their original versions provided by each company

  **Migration:** replace any `@andrsrxn/icons/brands/*` or `IconLogo*` import
  with the equivalent official SVG or image.

  ```diff
  - import { IconBrandGitHub } from '@andrsrxn/icons/brands'
  + import { GitHubLogo } from './path-to-the-resource'
  ```

## 2.2.0

### Minor Changes

- [`9c2647d`](https://github.com/andrsrxn/icons/commit/9c2647d30d5a15c7b1218ce36fa8b60e9c2f3ce9) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added missing payment/credit card providers to Brand icons

  - JCB
  - Discover Network
  - Maestro
  - UnionPay

## 2.1.0

### Minor Changes

- [`85de063`](https://github.com/andrsrxn/icons/commit/85de0639e77f62aac7be63bd6d608a08ad6102a5) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added specific continent flag icons, with a preffix of a letter C.
  Added LGBT flag icon.

### Patch Changes

- [`7cc6633`](https://github.com/andrsrxn/icons/commit/7cc66334468cebaa058ca817ede0468b779c3e46) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Fixed a runtime error on Flag icons ("Expected length, 'auto'") that occurred when only `width` was set without `size`. Flag icons without an explicit `size` now correctly scale proportionally based on `width` instead of passing an invalid `auto` value to the SVG `height` attribute. A fallback on CSS is provided through only to `ui-icon-flag`.

## 2.0.0

### Major Changes

- [`974d1ce`](https://github.com/andrsrxn/icons/commit/974d1ce3a9f91957a2186074ff54f3c3ae885876) Thanks [@andrsrxn](https://github.com/andrsrxn)! - **Removed the `--ui-icon-size` global CSS variable.**

  UI icons could previously be resized globally by setting `--ui-icon-size` on `:root` (or any parent element). That variable is no longer read by any icon component.

  This was removed because having three separate ways to control size (className, `size` prop, and a global CSS variable) made the override priority hard to reason about and maintain, and it only applied to UI and Brand icons. Sizing is now controlled entirely through the `size` prop or a className.

  **Migration:** replace any `--ui-icon-size` usage with a `size` prop or className on each icon.

  ```diff
  - :root {
  -   --ui-icon-size: 32px;
  - }

  - <IconRocket />
  + <IconRocket size={32} />
  + <IconRocket className="size-8" />
  + <IconBrandGithub size={32} />
  + <IconBrandGithub className="size-8" />
  ```

### Minor Changes

- [`974d1ce`](https://github.com/andrsrxn/icons/commit/974d1ce3a9f91957a2186074ff54f3c3ae885876) Thanks [@andrsrxn](https://github.com/andrsrxn)! - Added support for the size prop on Flag icons to force a square aspect ratio, in addition to, if only set width, automatically set height to auto to keep 3:2 proportions.

## 1.0.0

### Initial release

- First public release of `@andrsrxn/icons` on npm.
