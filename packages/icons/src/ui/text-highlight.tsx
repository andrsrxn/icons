import type { Icon } from './types'

export const IconTextHighlight: Icon = ({
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
      data-slot='icon-ui-text-highlight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m7.76 14.62 2.33-8.19c.79-2.74 1.18-4.11 1.93-4.11.76 0 1.15 1.37 1.92 4.12l2.3 8.18'
        stroke='currentColor'
      />
      <path d='M14.7 9.6H9.3' stroke='currentColor' />
      <rect
        opacity='.2'
        width='3.51'
        height='18.26'
        rx='1'
        transform='matrix(0 -1 -1 0 21.13 21.35)'
        fill='currentColor'
      />
      <rect
        width='3.51'
        height='18.26'
        rx='1'
        transform='matrix(0 -1 -1 0 21.13 21.35)'
        stroke='currentColor'
      />
    </svg>
  )
}
