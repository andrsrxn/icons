# Icon Naming and Design Rules Reference

This reference explains the classification, naming logic, and design fill criteria of `@andrsrxn/icons`.

---

## 1. Structural Classification: Groups vs. Categories

Understanding the difference between Groups and Categories is essential for correct usage:

```
@andrsrxn/icons Ecosystem
├── Groups (Code Exports and Components)
│   ├── UI Icons (`Icon...`)     --> 1,000+ icons, 1:1 ratio, decorative by default
│   └── Flags (`IconFlag...`)    --> 250+ flags, 3:2 ratio, informational by default
└── Categories (Documentation Filters Only)
    └── UI Icon categories, tags, catalog filters (NOT part of code exports)
```

- **Groups**: Represent actual component code exports. UI icons (`Icon...`) and Flags (`IconFlag...`) are exported from distinct entry points and receive different default accessibility attributes.
- **Categories**: Category groupings, tags, and catalog listings exist **only in the documentation search interface**. They are not exported as namespaces or module paths in code.

---

## 2. Icon Design Rules and Duotone Fill Logic

`@andrsrxn/icons` follows an intentional design philosophy for duotone fill:

### Duotone by Criteria

Unlike icon libraries that apply duotone fill indiscriminately across all icons, `@andrsrxn/icons` applies duotone fill **only when semantically meaningful**:

1. **Stroke-Only / Geometric Icons**:
   - Icons composed purely of lines, symbols, or geometric paths (e.g., `+`, `-`, `/`, `×`, `IconX`, arrows) do **not** receive a decorative background layer.
   - _Rationale_: Adding extra fill layers to simple stroke icons creates unnecessary visual noise and reduces clarity.

2. **Fill Represents Shadow / Background**:
   - The secondary duotone fill layer represents a background surface, shadow, or underlying layer.

3. **Stack Icons (Layering Surface Rule)**:
   - For icons depicting stacked or overlapping elements (such as `IconUsers`, `IconBookmarks`, `IconFiles`):
     - The element in front is always the **unfilled "surface"** (represented by transparent inner space).
     - The element behind receives the **duotone fill layer** (representing the back layer or shadow).

4. **Continuous Line Exception**:
   - Icons formed by continuous looping lines—such as `fingerprint` (`IconFingerprint`) or `hashtag` (`IconHashtag`)—may enclose interior spaces, but are **not** filled.
   - _Rationale_: They are treated as single continuous strokes without a separate background or shadow component.

5. **Letters and Numbers**:
   - Letter and number icons contain **no** duotone fill layers.

6. **Filled Variants (`filled`)**:
   - A `filled` variant (e.g., `IconHeartFilled`, `IconBookmarkFilled`, `IconStarFilled`, `IconBellFilled`, `IconLikeFilled`) exists **on demand only** for UI elements with active, toggled, or selected states.
   - _Rationale_: `filled` is an active state indicator, not a blanket alternative visual theme for the entire icon set.

---

## 3. Naming Conventions and Variations

### File and Component Naming

- **File Names**: `kebab-case` (e.g., `external-link.tsx`, `folder-check.tsx`).
- **Component Names**: `PascalCase` with mandatory prefix (e.g., `IconExternalLink`, `IconFolderCheck`).
- **Accepted Common Names**: Widely accepted interface terms are favored over literal object descriptions (e.g., `IconSave` instead of `IconFloppyDisk`, `IconExternalLink` instead of `IconSquareArrowUpRight`).

### Prominent Element Rule

For icons combining multiple visual concepts, the component name prioritizes the **prominent element** first:

- Correct: `IconHeartScan` (Heart is the primary object, Scan is the modifier).
- Incorrect: `IconScanHeart`.

### Action and State Variations

Icons for primary entities (such as `Folder`, `Calendar`, `User`, `Mail`, `File`, `Book`, `CreditCard`, `Globe`, `Pin`, `Message`, `Phone`, `Shield`, `ShoppingBag`, `Signal`) follow consistent action/state suffixes:

| Suffix Variation | Meaning / Use Case             | Example Component                                     |
| :--------------- | :----------------------------- | :---------------------------------------------------- |
| `Check`          | Success / Done state           | `IconFolderCheck`, `IconUserCheck`, `IconShieldCheck` |
| `X`              | Delete / Cancel / Failed state | `IconFolderX`, `IconUserX`, `IconShieldX`             |
| `Warning`        | Alert / Caution state          | `IconFolderWarning`, `IconShieldWarning`              |
| `Off`            | Disabled / Inactive state      | `IconCalendarOff`, `IconBellOff`, `IconEyeOff`        |
| `Clock`          | Pending / Scheduled state      | `IconFolderClock`, `IconCalendarClock`                |
| `Plus` / `Minus` | Add / Remove actions           | `IconFolderPlus`, `IconUserMinus`                     |
| `Edit`           | Edit / Modify action           | `IconFolderEdit`, `IconUserEdit`                      |
| `Lock`           | Protected / Restricted state   | `IconFolderLock`, `IconUserLock`                      |
| `In` / `Out`     | Import / Export / Direction    | `IconFolderIn`, `IconFolderOut`                       |
| `Star` / `Heart` | Favorite / Saved state         | `IconFolderStar`, `IconFolderHeart`                   |

These are the common ones, but some other icons could have more or less variations.
---

## 4. Flag Group Conventions

Flag icons represent minimal, illustrated, and colored 3:2 aspect ratio flags.

### Country Flags

Named after ISO 3166-1 alpha-2 uppercase country codes:

- `IconFlagGT` (Guatemala)
- `IconFlagUS` (United States)
- `IconFlagMX` (Mexico)
- `IconFlagES` (Spain)

### Exceptions

1. **LGBT Flag**: `IconFlagLGTB`.
2. **Continent Flags**: Prefixed with `C` followed by continent abbreviation:
   - `IconFlagCAF` (Africa)
   - `IconFlagCAS` (Asia)
   - `IconFlagCEU` (Europe)
   - `IconFlagCNA` (North America)
   - `IconFlagCSA` (South America)
   - `IconFlagCOC` (Oceania)
