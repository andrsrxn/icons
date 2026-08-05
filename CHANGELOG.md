# @andrsrxn/icons

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
