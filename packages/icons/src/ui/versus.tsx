import type { Icon } from './types'

export const IconVersus: Icon = ({
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
      data-slot='icon-ui-versus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m16.7 3.95-4.74 8.21-4.75 8.22' stroke='currentColor' />
      <path
        d='m3.27 3.39 1.86 5.5c.75 2.18 1.12 3.28 1.82 3.3.7 0 1.12-1.07 1.95-3.23l2.14-5.57'
        stroke='currentColor'
      />
      <path
        d='M20.76 12.88a4 4 0 0 0-2.81-1.17c-1.34 0-2.81.75-2.81 2.32 0 3.39 5.62.69 5.62 4.13 0 1.61-1.44 2.47-2.81 2.47s-2.3-.43-2.93-1.37'
        stroke='currentColor'
      />
    </svg>
  )
}
