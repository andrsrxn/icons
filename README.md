<img src="./packages/icons/assets/symbol.svg" alt="andrsrxn/icons symbol" width="64" height="64" />

# andrsrxn/icons

[![npm version](https://img.shields.io/npm/v/@andrsrxn/icons)](https://www.npmjs.com/package/@andrsrxn/icons)
[![Dependency count](https://img.shields.io/badge/dependency%20count-0-blue)](https://www.npmjs.com/package/@andrsrxn/icons)
[![npm downloads](https://img.shields.io/npm/dm/@andrsrxn/icons)](https://www.npmjs.com/package/@andrsrxn/icons)
[![License](https://img.shields.io/github/license/andrsrxn/icons)](https://github.com/andrsrxn/icons)
[![CI](https://github.com/andrsrxn/icons/actions/workflows/ci.yml/badge.svg)](https://github.com/andrsrxn/icons/actions/workflows/ci.yml)
[![CodeQL](https://github.com/andrsrxn/icons/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/andrsrxn/icons/actions/workflows/github-code-scanning/codeql)
[![Linted with Biome](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

React icon library with 900+ duotone icons and 250+ flag icons. Smooth, RTL-aware, and optimized SVGs.

![Icons banner with logo in the center](./assets/banner-github.webp)

## Overview

**andrsrxn/icons** is a React icon library with 900+ duotone icons and 250+ flag icons. Smooth, RTL-aware, and optimized SVGs.

This library was built to serve as the icon foundation for `andrsrxn/ui`, an upcoming open-source, opinionated Design System and Component Library aimed at enterprise-grade products.

While `andrsrxn/icons` is tightly coupled to that vision, it is intentionally published as a **standalone package**. This keeps it lightweight, independently versioned, and freely usable by anyone.

### Why another icon library?

The short answer: **there are no free duotone icon sets with the right style**.

Most libraries offer only outline or solid variants. [Phosphor Icons](https://phosphoricons.com/) does include free duotone variants, but its implementation applies a duotone layer to every icon unconditionally, this results in unnecessary visual noise and icons that feel semantically inconsistent.

`andrsrxn/icons` takes a more deliberate approach:

- **Duotone by default**: Icons that have a meaningful path/fill distinction are always duotone.
- **Outline when appropriate**: Simple geometric icons such as `+`, `/`, or `×` do not receive a decorative background layer that would only reduce clarity.
- **Filled on demand**: A `filled` variant is included only for icons that have a meaningful active or selected state, such as `like`, `bookmark`, or `star`, not as a blanket alternative style.

## Categories

- **UI**: 900+ functional icons for apps, each with its own preview image. (aspect ratio 1:1)
- **Flags**: 250+ simple and minimal country flags, named with ISO 3166-1 alpha-2 code (`IconFlagUS`, `IconFlagMX`), the exceptions are `IconFlagLGTB` and continent flags, which have a `C` prefix (`IconFlagCAF` for Africa, `IconFlagCNA` for North America, and so on); treated as image assets with country code as `title` included. (aspect ratio 3:2)

## Documentation

[See full documentation](https://icons.andrsrxn.com)

## Credits

The flag icons are adapted from [FlagKit](https://github.com/madebybowtie/FlagKit) by [Bowtie](https://github.com/madebybowtie), used under the MIT License (Copyright (c) 2016 Bowtie AB). Only the 3:2 rectangular flag versions were used as source material and converted into `tsx` components. See [THIRD-PARTY-LICENSES.md](./packages/icons/THIRD-PARTY-LICENSES.md) for the full license text.

## License

All icons are free; personal or commercial use is allowed under [MIT License](./packages/icons/LICENSE) - Copyright 2026 Andrés Raxón (andrsrxn).
