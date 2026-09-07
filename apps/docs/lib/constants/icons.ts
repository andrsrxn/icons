export const ICON_CATEGORIES = [
  'accessibility',
  'ai',
  'animals',
  'arrows',
  'buildings',
  'business',
  'charts',
  'code',
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
] as const

export type IconCategory = (typeof ICON_CATEGORIES)[number]

export const ICON_PROPS = {
  ui: {
    size: {
      type: 'number | string',
      default: '24',
      description: 'Size in pixels or any valid css length unit',
    },
    strokeWidth: { type: 'number', default: '1.5', description: 'Stroke width in pixels' },
    color: { type: 'string', default: 'currentColor', description: 'Stroke and fill colors' },
    title: {
      type: 'string',
      default: 'undefined',
      description: 'Removes aria-hidden and add img role',
    },
    'aria-label': {
      type: 'string',
      default: 'undefined',
      description: 'Overrides title prop, keeps same behavior',
    },
    className: {
      type: 'string',
      default: 'icon-ui',
      description: 'Class to style globally the icon',
    },
    'data-slot': {
      type: 'string',
      default: (iconName: string) => `icon-ui-${iconName}`,
      description: 'Specific attribute to identify the icon',
    },
  },
  flags: {
    size: {
      type: 'number | string',
      default: '24',
      description: 'Size in pixels or any valid css length unit',
    },
    color: { type: 'string', default: 'currentColor', description: 'Stroke and fill colors' },
    title: {
      type: 'string',
      default: (countryCode: string) => countryCode,
      description: 'Country code in uppercase',
    },
    role: { type: 'string', default: 'img', description: 'Treated as image' },
    'aria-label': {
      type: 'string',
      default: 'undefined',
      description: 'Overrides title prop, keeps same behavior',
    },
    className: {
      type: 'string',
      default: 'icon-flag',
      description: 'Class to style globally the icon',
    },
    'data-slot': {
      type: 'string',
      default: (iconName: string) => `icon-flag-${iconName}`,
      description: 'Specific attribute to identify the icon',
    },
    'aria-hidden': {
      type: 'boolean',
      default: 'true',
      description: 'Set true to hide it from screen readers',
    },
  },
} as const

export const ICON_PAGE_SIZE = 84

export const MAX_RELATED_ICONS = 28

export const ICON_STROKE_WIDTH = 1.5
