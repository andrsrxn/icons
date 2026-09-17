# `@andrsrxn/icons` Agent Skill

An AI Agent Skill designed to equip AI coding assistants (such as Antigravity, Cursor, Copilot, Vercel Agent, and Claude Code) with expert knowledge for integrating, styling, and using [`@andrsrxn/icons`](https://github.com/andrsrxn/icons) in React applications.

---

## Overview

This skill provides comprehensive instructions for AI agents when working with the `@andrsrxn/icons` library in downstream consumer projects. It ensures AI assistants recommend the right icon components, apply correct import entrypoints, adhere to duotone design rules, handle accessibility appropriately, and configure RTL (Right-to-Left) support seamlessly.

---

## What's Included

The skill is organized using progressive disclosure to keep the main context concise while providing deep reference documentation when needed:

```
skills/andrsrxn-icons/
├── SKILL.md                                 # Core agent instructions and quick reference
├── README.md                                # Human-facing skill overview and setup guide
└── references/
    ├── naming-and-design-rules.md           # Groups vs Categories, naming logic, and duotone criteria
    ├── rtl-icons.md                         # Complete inventory of RTL-flipped & exclusive -rtl icons
    └── typescript-and-exports.md            # Entrypoint paths, TypeScript types, and props tables
```

### Reference Breakdown

- **[`SKILL.md`](./SKILL.md)**: Main skill file with frontmatter metadata. Contains trigger conditions, core mental model (Groups vs. Categories), installation, global styles, import strategies, design principles, accessibility rules, and quick reference links.
- **[`references/naming-and-design-rules.md`](./references/naming-and-design-rules.md)**: Detailed rules on component naming (`Icon...` for UI, `IconFlag...` for Flags), prominent element ordering (e.g., `IconHeartScan`), action suffix variations (`FolderX/Check/Warning/Off/Clock`), and the 6 criteria governing duotone fill.
- **[`references/rtl-icons.md`](./references/rtl-icons.md)**: Inventory of opt-in and opt-out RTL icons from `rtl.css`, exclusive RTL suffix components (`IconListCheckRtl`, `IconListOrderedRtl`, `IconSeekBackwardsRtl`, `IconSeekForwardRtl`), and opt-out techniques.
- **[`references/typescript-and-exports.md`](./references/typescript-and-exports.md)**: Package entrypoints (`@andrsrxn/icons`, `@andrsrxn/icons/flags`, `@andrsrxn/icons/types`, `@andrsrxn/icons/flags/types`), scoped TypeScript interfaces (`IconProps`, `FlagIconProps`), 3:2 flag ratio preservation, and CSS slot styling selectors.

---

## Installation & Usage

To install this skill for your AI coding assistant:

### CLI Installation (Recommended)

Run the following command in your project root:

```bash
# pnpm
pnpm dlx skills add andrsrxn/icons --skill andrsrxn-icons

# npm
npx skills add andrsrxn/icons --skill andrsrxn-icons

# yarn
yarn dlx skills add andrsrxn/icons --skill andrsrxn-icons

# bun
bunx skills add andrsrxn/icons --skill andrsrxn-icons
```

### Manual Installation

Alternatively, copy the `andrsrxn-icons` directory into your project's `.agents/skills/` directory:

```bash
.agents/
└── skills/
    └── andrsrxn-icons/
        ├── SKILL.md
        ├── README.md
        └── references/
```

Or install it globally in your assistant's configuration directory (e.g., `~/.gemini/config/skills/andrsrxn-icons/`).

---

## Activation Triggers

AI agents automatically load and activate this skill when user prompts include tasks such as:

- Adding or importing icons from `@andrsrxn/icons` or `@andrsrxn/icons/flags`
- Choosing between UI icons (`Icon...`) and Flag icons (`IconFlag...`)
- Setting up icon RTL styling (`@andrsrxn/icons/rtl.css`)
- Configuring accessibility attributes for decorative vs. informational icons
- Styling icons using global CSS (`.icon-ui`), Tailwind CSS, or `data-slot` attributes
- Importing TypeScript types for icons (`IconProps`, `FlagIconProps`)

---

## Requirements

- **React**: `^19.0.0` (`react` & `react-dom`)
- **Package**: `@andrsrxn/icons` (ESM-only)
- **Node.js**: `20.16.0`, `22.19.0`, `24.0.0` or higher

---

## License

[MIT License](https://github.com/andrsrxn/icons/blob/main/packages/icons/LICENSE) - Copyright 2026 Andrés Raxón (andrsrxn).
