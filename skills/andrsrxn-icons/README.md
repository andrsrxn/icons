<div align='center'>

# `andrsrxn/icons` agent skill

An agent skill designed to equip AI coding assistants (such as Antigravity, Cursor, Copilot, Vercel Agent, and Claude Code) with expert knowledge for integrating, styling, and using [`andrsrxn/icons`](https://github.com/andrsrxn/icons) in React applications.
</div>

## Overview

This skill provides instructions for AI agents working with `@andrsrxn/icons` in React projects. It ensures assistants recommend correct icon components, use tree-shakable import paths, apply duotone design rules, configure accessibility, and handle RTL layout support.

---

## What this skill does

- Teaches AI agents how to choose UI icons (`Icon...`) and flag icons (`IconFlag...`).
- Configures global styles (`.icon-ui { flex-shrink: 0; pointer-events: none; }`).
- Establishes accessible usage defaults (decorative UI icons vs informational flags).
- Automates RTL layout flipping setup (`@andrsrxn/icons/rtl.css` and `-rtl` exclusive icons).
- Provides guidance on TypeScript types (`IconProps`, `FlagIconProps`).

---

## What's included

```
skills/andrsrxn-icons/
├── SKILL.md                                 # Core agent instructions and step-by-step procedure
├── README.md                                # Skill overview and setup guide
└── references/
    ├── naming-and-design-rules.md           # Groups vs categories, naming logic, and duotone criteria
    ├── rtl-icons.md                         # Complete inventory of RTL-flipped and exclusive -rtl icons
    └── typescript-and-exports.md            # Entrypoint paths, TypeScript types, and props tables
```

---

## Installation and usage

To install this skill for your AI coding assistant:

### CLI installation (recommended)

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

### Manual installation

Copy the `skills/andrsrxn-icons` directory into your project's `.agents/skills/` directory:

```bash
.agents/
└── skills/
    └── andrsrxn-icons/
        ├── references/
        ├── README.md
        └── SKILL.md
```

---

## License

[MIT License](https://github.com/andrsrxn/icons/blob/main/packages/icons/LICENSE) - Copyright 2026 Andrés Raxón (andrsrxn).
