---
'@andrsrxn/icons': major
---

**Removed all Brand icons and the duotone Logo variants of brand icons.**

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
