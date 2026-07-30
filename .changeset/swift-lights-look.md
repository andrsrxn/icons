---
'@andrsrxn/icons': major
---

**Removed the `--ui-icon-size` global CSS variable.**

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
