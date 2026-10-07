import type { Icon } from './types'

export const IconCellularNetwork2g: Icon = ({
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
      data-slot='icon-ui-cellular-network-2g'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19.58 12.83a5 5 0 1 0-.02 8.93c.36-.18.53-.27.68-.51s.15-.5.15-1v-2.62h-2.67'
        stroke='currentColor'
      />
      <path d='M7.67 7.53a7.3 7.3 0 0 1 4.35-1.44c1.94 0 3.56.66 4.36 1.44' stroke='currentColor' />
      <path
        d='M4.96 4.27A11.6 11.6 0 0 1 12 1.78c3.13 0 5.31 1.1 7.05 2.49'
        stroke='currentColor'
      />
      <path
        d='M4.2 13.58c.74-.9 1.45-1.58 2.96-1.58 2.66 0 3.1 3.12 1.76 4.68-.93 1.1-3.2 2.84-4.56 4.33-.42.46-.63.68-.5.98s.47.3 1.15.3h4.65'
        stroke='currentColor'
      />
    </svg>
  )
}
