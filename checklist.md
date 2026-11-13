# List

- download updated, rename icons raw icons y eliminar ui y icon svg, hacer nuevos,

- same template for icon scripts
- create the packages with tests only, ask claude,
- commit the new package
- changeset the new package
- new icons remix and fontawesome
- figma version
- generate the icons
- start with svelte, vuew, web components, plain js, solid,
- change the readme
- update banner
- skill for each one
- document new docs
- see actions
- issue template select framework
- morph icons

Test
For ui icons:

- they should render correctly
- it can receive props based on the IconProps interface:
  - export interface IconProps extends Omit<ComponentProps<'svg'>,'role' | 'aria-hidden' | 'focusable' | 'aria-labelledby' {size?: number | string}
  - the omitted props are handle internally in the component
- the stroke width is on the root (svg tag), most icons could have the stroke linecap and stroke linejoin on the root, they must be set to round
- it can change the size, strokewidth and color from props
- none of the elements and shapes inside the svg should have stroke width or stroke linecap/linejoin defined, only the root
- if any element or shape inside the svg have opacity set to 0.2, it should only have a fill without stroke. Non of them should have stroke and fill at the same time.
- All the stroke and fills must be current color
- Set aria label, removes aria hidden, set role to img. Without it, aria hidden true and role undefined
- it should have ui-icon classname at the beggining and the next classname prop
- it should have a data-slot identifier with ui-icon-{icon name}
- the icon must return an "Icon" type, which have the icon props and is imported from: import type { Icon } from './types'
- the size prop could be set as number or string

for flag icons:

- they should render correctly
- it can receive props based on the IconFlagProps interface
  - export interface FlagIconProps extends Omit<ComponentProps<'svg'>,'role' | 'focusable' | 'aria-labelledby'> {size?: number | string; cover?: boolean}
  - the omitted props are handle internally in the component
- the accesibility props make sure it complies the following:
  - const isLabelled = Boolean(ariaLabel?.trim()) const isHidden = ariaHidden === true || ariaHidden === 'true' const isAccessible = isLabelled && !isHidden
  - using this props inside for its behavior: role={isAccessible ? 'img' : undefined} aria-hidden={!isAccessible} aria-label={isAccessible ? ariaLabel : undefined}
- the aria label can be overriden but the default is the icon name uppercase
- the data slot is icon-flag-{icon name} such as gt, us, mx, etc.
- it should not have any inline style, if there is any url() inside a fill, clippath or similar, the ids must be prefixed with its icon name
- the cover prop should work like this: preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio} to fill all the size of the svg
- it has icon-flag classname
- by default it has a 3:2 aspect ratio unless size is passed, these are the defaults: width = size ?? 24, height = size
- the size prop could be set as number or string

RTL:

- make sure it flips on dir rtl
- make sure it reset when the above have ltr
- make sure it stays the same when dir not defined

Scripts:

- make sure all the functions used have tests and work as expected
