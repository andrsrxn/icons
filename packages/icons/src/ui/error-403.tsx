import type { Icon } from './types'

export const IconError403: Icon = ({
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
      data-slot='icon-ui-error-403'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.74 16.32V9.75c0-1.35 0-2.02-.36-2.12-.35-.11-.72.45-1.47 1.56L2.2 11.74c-.46.68-.69 1.03-.55 1.3.14.26.56.26 1.38.26h4.13'
        stroke='currentColor'
      />
      <rect x='9.72' y='7.44' width='4.8' height='9.12' rx='2.4' stroke='currentColor' />
      <path
        d='M17.29 8.54a3.3 3.3 0 0 1 2.55-1.08c2.3 0 2.98 2.64 1.82 3.7-1.15 1.07-2.84.83-2.84.83'
        stroke='currentColor'
      />
      <path
        d='M17.29 15.5c.64.6 1.25 1.07 2.55 1.07 2.3 0 2.98-2.64 1.82-3.7-1.15-1.07-2.84-.83-2.84-.83'
        stroke='currentColor'
      />
    </svg>
  )
}
