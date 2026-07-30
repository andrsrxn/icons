# @andrsrxn/icons

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
