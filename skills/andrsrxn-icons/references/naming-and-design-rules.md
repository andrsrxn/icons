# Icon naming and design rules reference

This reference explains the classification, naming logic, and design fill criteria of `andrsrxn/icons`.

---

## 1. Structural classification: groups vs categories

Understanding the difference between groups and categories is essential for correct usage:

```
andrsrxn/icons ecosystem
├── Groups (code exports and components)
│   ├── UI icons (`Icon...`)     --> 1,000+ icons, 1:1 ratio, decorative by default
│   └── Flags (`IconFlag...`)    --> 250+ flags, 3:2 ratio, informational by default
└── Categories (documentation filters only)
    └── UI icon categories, tags, catalog filters (NOT part of code exports)
```

- **Groups**: Represent actual component code exports. UI icons (`Icon...`) and flags (`IconFlag...`) are exported from distinct entry points and receive different default accessibility attributes.
- **Categories**: Category groupings, tags, and catalog listings exist **only in the documentation search interface**. They are not exported as namespaces or module paths in code.

---

## 2. Icon design rules and duotone fill logic

`andrsrxn/icons` follows an intentional design philosophy for duotone fill:

### Duotone by criteria

Unlike icon libraries that apply duotone fill indiscriminately across all icons, `andrsrxn/icons` applies duotone fill **only when semantically meaningful**:

1. **Stroke-only / geometric icons**:
   - Icons composed purely of lines, symbols, or geometric paths (e.g., `+`, `-`, `/`, `×`, `IconX`, arrows) do **not** receive a decorative background layer to avoid visual noise.
2. **Fill represents shadow / background**:
   - The secondary duotone fill layer represents a background surface, shadow, or underlying layer.
3. **Stack icons (layering surface rule)**:
   - For icons depicting stacked or overlapping elements (such as `IconUsers`, `IconBookmarks`, `IconFiles`), the front element is always the **unfilled surface**, while the element behind receives the **duotone fill layer**. The exception is only when the single icon already has a fill layer like `IconImages`.
4. **Continuous line exception**:
   - Icons formed by continuous looping lines—such as `fingerprint` (`IconFingerprint`) or `hashtag` (`IconHashtag`)—enclose interior spaces, but are **not** filled.
5. **Letters and numbers**:
   - Letter and number icons contain **no** duotone fill layers.
6. **Filled variants (`filled`)**:
   - A `filled` variant (e.g., `IconHeartFilled`, `IconBookmarkFilled`, `IconStarFilled`, `IconBellFilled`, `IconLikeFilled`) exists **on demand only** for UI elements with active, toggled, or selected states.

---

## 3. Naming conventions and variations

### File and component naming

- **File names**: `kebab-case` (e.g., `external-link.tsx`, `folder-check.tsx`).
- **Component names**: `PascalCase` with mandatory prefix (`IconExternalLink`, `IconFolderCheck`).
- **Accepted common names**: Widely accepted interface terms are favored over literal object descriptions (e.g., `IconSave` instead of `IconFloppyDisk`, `IconExternalLink` instead of `IconSquareArrowUpRight`).

### Prominent element rule

For icons combining multiple visual concepts, the component name prioritizes the **prominent element** first:

- Correct: `IconHeartScan` (Heart is the primary object, Scan is the modifier).
- Incorrect: `IconScanHeart`.

### Numbers

If an icon includes a number, such as the Heading 1, is represented as letters, such as: `IconHeadingOne`, `IconSortZeroOne`, and so on. The exception is when the object name has a natural numeric representation, such as: `Icon3d` or `Icon4k`.

### Action and state variations

Icons for primary entities (such as `Folder`, `Calendar`, `User`, `Mail`, `File`, `Book`, `CreditCard`, `Globe`, `Pin`, `Message`, `Phone`, `Shield`, `ShoppingBag`, `Signal`) follow consistent action/state suffixes:

| Suffix variation | Meaning / use case             | Example component                                     |
| :--------------- | :----------------------------- | :---------------------------------------------------- |
| `Check`          | Success / done state           | `IconFolderCheck`, `IconUserCheck`, `IconShieldCheck` |
| `X`              | Delete / cancel / failed state | `IconFolderX`, `IconUserX`, `IconShieldX`             |
| `Warning`        | Alert / caution state          | `IconFolderWarning`, `IconShieldWarning`              |
| `Off`            | Disabled / inactive state      | `IconCalendarOff`, `IconBellOff`, `IconEyeOff`        |
| `Clock`          | Pending / scheduled state      | `IconFolderClock`, `IconCalendarClock`                |
| `Plus` / `Minus` | Add / remove actions           | `IconFolderPlus`, `IconUserMinus`                     |
| `Edit`           | Edit / modify action           | `IconFolderEdit`, `IconUserEdit`                      |
| `Lock`           | Protected / restricted state   | `IconFolderLock`, `IconUserLock`                      |
| `In` / `Out`     | Import / export / direction    | `IconFolderIn`, `IconFolderOut`                       |
| `Star` / `Heart` | Favorite / saved state         | `IconFolderStar`, `IconFolderHeart`                   |

---

## 4. Flag group conventions

Flag icons represent minimal, illustrated, and colored 3:2 aspect ratio flags.

### Country flags

Named after ISO 3166-1 alpha-2 uppercase country codes:

- `IconFlagGT` (Guatemala)
- `IconFlagUS` (United States)
- `IconFlagMX` (Mexico)
- `IconFlagES` (Spain)

### Exceptions

1. **LGBT flag**: `IconFlagLGTB`.
2. **Continent flags**: Prefixed with `C` followed by continent abbreviation:
   - `IconFlagCAF` (Africa)
   - `IconFlagCAS` (Asia)
   - `IconFlagCEU` (Europe)
   - `IconFlagCNA` (North America)
   - `IconFlagCSA` (South America)
   - `IconFlagCOC` (Oceania)
