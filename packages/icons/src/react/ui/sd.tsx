import type { Icon } from './types'

export const IconSd: Icon = ({
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
      data-slot='icon-ui-sd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.52 20.53H2.48' stroke='currentColor' />
      <path d='M21.52 3.5H2.48' stroke='currentColor' />
      <path
        d='M13.8 8.8v6.4c0 .82 0 1.23.32 1.52.31.3.67.28 1.38.24 2-.1 5.03-.93 5.03-4.96s-3.04-4.85-5.03-4.96c-.71-.04-1.07-.06-1.38.24s-.31.7-.31 1.52'
        stroke='currentColor'
      />
      <path
        d='M10.74 8.33a5.3 5.3 0 0 0-3.45-1.3c-1.64 0-3.44.83-3.44 2.59 0 3.77 6.9.76 6.9 4.6 0 1.8-1.77 2.75-3.46 2.75-1.68 0-2.81-.48-3.59-1.52'
        stroke='currentColor'
      />
    </svg>
  )
}
