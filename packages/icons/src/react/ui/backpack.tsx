import type { Icon } from './types'

export const IconBackpack: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-backpack'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.1 9.92c0-2.71 0-4.06.64-5.05a4 4 0 0 1 1.22-1.22c.98-.63 2.33-.63 5.04-.63s4.06 0 5.05.63a4 4 0 0 1 1.22 1.22c.62.99.62 2.34.62 5.05v.37c0 1.9 0 2.87-.52 3.44a2 2 0 0 1-.53.41c-.68.37-1.61.13-3.47-.33l-1.4-.36c-.48-.12-.72-.18-.97-.18s-.5.06-.98.18l-1.4.36c-1.85.46-2.78.7-3.46.33a2 2 0 0 1-.53-.41c-.52-.57-.52-1.53-.52-3.44z'
        fill='currentColor'
      />
      <path
        d='M5.1 9.63c0-2.7 0-4.06.64-5.04a4 4 0 0 1 1.22-1.22c.98-.63 2.33-.63 5.04-.63v0c2.7 0 4.06 0 5.05.63a4 4 0 0 1 1.22 1.22c.62.98.62 2.33.62 5.04v7.63c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H9.11c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        stroke='currentColor'
      />
      <path d='M14.28 6.83A5 5 0 0 0 12 6.4a5 5 0 0 0-2.27.43' stroke='currentColor' />
      <path d='M18.9 14.53a17 17 0 0 0-6.9-1.3 18 18 0 0 0-6.9 1.3' stroke='currentColor' />
      <path
        d='M4.68 8.57c-2.18 1.79-2.7 3.28-2.7 4.95 0 1.52 1.06 2.82 2.43 2.82'
        stroke='currentColor'
      />
      <path
        d='M19.32 8.57c2.16 1.79 2.68 3.28 2.68 4.95 0 1.52-1.06 2.82-2.42 2.82'
        stroke='currentColor'
      />
    </svg>
  )
}
