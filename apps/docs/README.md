<img src="../../packages/icons/assets/symbol.svg" alt="andrsrxn/icons symbol" width="64" height="64" />

# andrsrxn/icons docs

## Overview

Official documentation and icon catalog application for **[andrsrxn/icons](https://icons.andrsrxn.com)**, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Features

### Icon catalog

- Browse the full catalog of 1,000+ duotone UI icons and 250+ flag icons, split by category
- Search by icon name, category, or tag
- Every filter, search term, and page number lives in the URL as shareable, bookmarkable state (no state is lost on navigation or a hard refresh)
- Paginated grid, tuned for the size of the full catalog

### Icon detail view

- Opens as an intercepting-route modal: navigating to an icon's detail page overlays it on top of the catalog without losing your current scroll position, filters, or search
- Shows the icon's name, component name, and associated tags (each tag links back to a filtered catalog search)
- A ready-to-copy code snippet for importing and using the icon
- Copy or download the icon as a raw SVG file
- Related icons, surfaced from shared tags/category

### Live customization

- Adjust color and stroke width on the icon preview in real time before copying code or downloading

### RTL and accessibility

- Demonstrates the library's logical RTL-aware icon system, opt-in/opt-out directional variants that mirror correctly in right-to-left contexts
- Every icon preview reflects the same accessibility defaults shipped in the published package

### Examples

- A dedicated examples page showing icons in realistic component contexts: buttons, inputs, cards, navigation, dropdowns, and more — so you can see how icons actually look inside real UI, not just in isolation

### Dark mode

- Full dark mode support, matching the theming behavior of the underlying icon library

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and [Base UI](https://base-ui.com/) primitives
- [nuqs](https://nuqs.47ng.com/) for URL-synced search/filter state
- [Shiki](https://shiki.style/) for syntax-highlighted code snippets
- [andrsrxn/icons](https://www.npmjs.com/package/@andrsrxn/icons) and `andrsrxn/raw-icons` (internal, workspace-only) as catalog source

## Deployment

Deployed on Vercel, with:

- A restrictive Content-Security-Policy, including WASM support for syntax highlighting
- Vercel's built-in DDoS mitigation and bot-protection managed ruleset
- Application-level rate limiting via the Vercel Firewall

## Contributing

This project doesn't accept external contributions, for either the icon library or the docs site. See the root [README](../../README.md) for details. Bug reports and suggestions are welcome through [GitHub Issues](https://github.com/andrsrxn/icons/issues).

## License

MIT — see the root [LICENSE](../../LICENSE).
