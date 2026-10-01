---
name: raw-icons-metadata
description: Generate and audit metadata (.meta.json) files for raw SVG icons in the raw-icons package. Detects new SVGs via git status, assigns categories and high-quality tags following taxonomy rules, and validates existing icon metadata.
license: MIT
metadata:
  author: icon-library
  version: "1.0.0"
---

# Raw Icons Metadata Generator & Auditor

Workflow and taxonomy guidelines to create and audit `.meta.json` files for SVG icons located in `packages/raw-icons/src/ui/`.

---

## 1. Allowed Categories

Every icon MUST only use categories from `ICON_CATEGORIES` below:

```ts
export const ICON_CATEGORIES = [
  'accessibility',
  'ai',
  'animals',
  'arrows',
  'buildings',
  'business',
  'charts',
  'communication',
  'cursor',
  'design',
  'development',
  'devices',
  'documents',
  'editor',
  'energy',
  'emoji',
  'finance',
  'food',
  'gaming',
  'home',
  'layout',
  'mail',
  'media',
  'medical',
  'messages',
  'nature',
  'navigation',
  'people',
  'science',
  'security',
  'shopping',
  'social',
  'sports',
  'symbols',
  'time',
  'tools',
  'transport',
  'travel',
  'typography',
  'weather',
] as const;
```

### Category Constraints:
- **Quantity:** Minimum `1`, Maximum `5` categories per icon.
- **Precision:** Choose only accurate and directly relevant categories. Never add categories just to fill space.

---

## 2. Tagging Rules & Guidelines

### Length & Quality Constraints:
- **Quantity:** Minimum `1`, Maximum `10` tags per icon.
- **Relevance:** Tags must be meaningful, common, widely understood terms representing realistic UI use cases.
- **No Filler:** Only include applicable tags; do not pad tags.

### Non-Redundancy Rules:
1. **Never repeat the icon name or direct sub-words:**
   - E.g., for `plus.svg`: do **not** include `"plus"`.
   - E.g., for `plus-square.svg`: `"plus"` and `"square"` are in the file name, so do not add them to `tags`.
   - E.g., for `plus-circle.svg`: `"circle"` is in the name, but shape descriptor `"round"` is valid.
2. **Never repeat assigned categories:**
   - E.g., if category is `["finance"]`, do **not** include `"finance"` in tags (use `"money"`, `"currency"`, `"payment"`, etc.).

### Abbreviations & Numbers:
- **Abbreviations:** Expand acronyms and abbreviations into full words (e.g., `3d` → `"three"`, `"dimension"`, `"spatial"`).
- **Numbers to words & digits:**
  - E.g., `heading-1` → include `"1"`, `"first"`, `"primary"`, `"title"`.
  - E.g., `dice-one` → include `"1"`, `"single"`, `"roll"`.
- **States & Percentages:** Express quantifiable UI states when relevant (e.g., `battery-full` → `"100%"`, `"charged"`).

### Multi-use & Contextual Breadth:
- Ensure tags cover secondary common UI metaphors without being obscure:
  - E.g., `flower` → `"blossom"`, `"nature"`, `"spring"`, `"wallpaper"`, `"decoration"`.
  - E.g., `bug` → `"insect"`, `"issue"`, `"debug"`.

---

## 3. Base Icons, Variants & Series

### A. Base Icon Reference:
When generating metadata for a variant (e.g., `folder-plus`, `folder-lock`):
1. Locate the base icon metadata (e.g., `folder.meta.json`).
2. Inherit the base categories and the 3–5 core tags from the base icon.
3. Append standard suffix tags at the **end** of the `tags` array.

### B. Standard Suffixes & Prescribed Tags:
When an icon ends with a standard suffix, append up to 3–4 standard suffix tags at the **end** of its tag list:

| Suffix | Standard Tags (at the end) |
|---|---|
| `-check` | `"approved"`, `"success"`, `"done"`, `"confirm"` |
| `-x` | `"remove"`, `"delete"`, `"cancel"`, `"close"` |
| `-plus` | `"add"`, `"new"`, `"create"`, `"append"` |
| `-minus` | `"remove"`, `"reduce"`, `"decrease"`, `"delete"` |
| `-lock` | `"secure"`, `"protected"`, `"private"`, `"restricted"` |
| `-edit` | `"modify"`, `"change"`, `"write"`, `"update"` |
| `-warning` | `"alert"`, `"caution"`, `"danger"`, `"notice"` |
| `-heart` | `"like"`, `"favorite"`, `"love"` |
| `-star` | `"favorite"`, `"rate"`, `"bookmark"`, `"featured"` |
| `-sparkle` | `"magic"`, `"ai"`, `"generated"`, `"intelligent"` |
| `-currency` | `"money"`, `"payment"`, `"price"`, `"cash"` |
| `-off` | `"disabled"`, `"inactive"`, `"hidden"` |
| `-in` | `"import"`, `"enter"`, `"inside"`, `"upload"` |
| `-out` | `"export"`, `"leave"`, `"outside"`, `"download"` |
| `-move` | `"relocate"`, `"transfer"`, `"send"`, `"shift"` |
| `-clock` | `"pending"`, `"schedule"`, `"history"`, `"timer"` |
| `-prohibit` | `"blocked"`, `"forbidden"`, `"banned"`, `"restricted"` |
| `-filled` | `"active"`, `"solid"`, `"selected"` |
| `-settings` | `"preferences"`, `"options"`, `"configure"`, `"customize"` |
| `-search` | `"find"`, `"lookup"`, `"explore"`, `"scan"` |

### C. Non-Standard Modifier Icons (e.g. `file-cube`):
- Take 2–4 of the most representative tags from the modifier icon (`cube` → `"3d"`, `"three"`, `"dimension"`, `"solid"`) and append them after the base icon's core tags.

### D. Icon Series (e.g., `ball-*`):
- All icons in a series (such as `ball-baseball`, `ball-basketball`, `ball-football`, `ball-volley`, etc. usually with same prefix) must share identical core tags (e.g., `"game"`, `"match"`, `"play"`) followed by the specific item descriptors.
- 
---

## 4. Execution Workflow

### Mode 1: Create Metadata for New SVGs

1. **Detect new SVGs via Git Status:**
   - Inspect untracked or newly added `.svg` files in `packages/raw-icons/src/ui/`:
     ```powershell
     git status -s packages/raw-icons/src/ui/*.svg
     ```
2. **Filter out existing `.meta.json`:**
   - For each newly added `packages/raw-icons/src/ui/<name>.svg`, check if `packages/raw-icons/src/ui/<name>.meta.json` already exists.
3. **Analyze SVG & Icon Name:**
   - Identify base icon or series relationship.
   - Select 1–5 valid categories from `ICON_CATEGORIES`.
   - Build 3–10 non-redundant tags (base tags first, standard suffix tags last).
4. **Write `.meta.json` File:**
   - Format with 2-space JSON indentation:
     ```json
     {
       "categories": [
         "ai",
         "people"
       ],
       "tags": [
         "bot",
         "assistant",
         "autonomous",
         "intelligence",
         "robot",
         "automation",
         "llm"
       ]
     }
     ```

### Mode 2: Audit Existing Metadata

1. **Verify if all svg files have a .meta.json file, if not, create one.**
2. **Verify Schema & Categories:**
   - Ensure all categories belong to `ICON_CATEGORIES`.
   - Ensure `categories.length >= 1 && categories.length <= 5`.
3. **Verify Tag Quality & Constraints:**
   - Ensure `tags.length >= 1 && tags.length <= 10`.
   - Verify no tags duplicate category names or file name parts.
   - Verify standard suffix tags are placed at the end.
   - Verify RTL icons maintain `"rtl": true` if present.

it could be a dry-run, when only should return the hyperlink to the metadata file with its file name, or it could be a fix run, when it should directly replace the .meta.json file with the fixes.

---

## 5. Critical Constraints

- **Strict Sandbox / Command Scope:**
  - DO NOT run build scripts, bundling, or icon generation commands (such as `npm run generate-icons`, `npm run build`, `turbo run build`, or type-checks).
  - ONLY inspect git status / files, read SVG contents, and write `.meta.json` files.
  - Return the amount of files changed, and if its necessary a note about something important, mention it.
