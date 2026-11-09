import type { Icon } from './types'

export const IconSelectionCursor: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-selection-cursor'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.3 2.7c3.78 0 5.66 0 6.83 1.17 1.18 1.17 1.18 3.05 1.18 6.82v5.2l-4.34-1.22c-1.48-.42-2.21-.63-2.63-.22-.41.4-.23 1.14.14 2.63l1.06 4.23h-4.85c-3.77 0-5.65 0-6.82-1.18-1.18-1.17-1.18-3.05-1.18-6.82v-2.62c0-3.77 0-5.65 1.18-6.82 1.17-1.18 3.05-1.18 6.82-1.18h2.62'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08A3.25 3.25 0 0 0 2.7 5.92' stroke='currentColor' />
      <path d='M17.98 2.66h.07c1.8 0 3.25 1.46 3.25 3.26' stroke='currentColor' />
      <path d='M6.03 21.24h-.08A3.25 3.25 0 0 1 2.7 18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.3 10.14v2.14' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path d='M10.22 21.3H12' stroke='currentColor' />
      <path
        d='m14.04 16.8 1.15 3.47h0c.46 1.4.69 2.09 1.06 2.27a1 1 0 0 0 .85.03c.38-.17.65-.85 1.18-2.22h0c.2-.52.3-.77.45-.99a2 2 0 0 1 .42-.42c.22-.16.47-.26.99-.46h0c1.38-.54 2.07-.81 2.24-1.2a1 1 0 0 0-.03-.84c-.19-.37-.9-.6-2.3-1.06l-3.5-1.12c-1.63-.53-2.45-.79-2.88-.35-.43.43-.16 1.25.37 2.88'
        stroke='currentColor'
      />
    </svg>
  )
}
