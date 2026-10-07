import type { Icon } from './types'

export const IconSine: Icon = ({
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
      data-slot='icon-ui-sine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.05 7.78c.2-2.32 1.71-4.54 4.66-4.14 6.72.89.74 16.07 7.63 16.74 3.06.3 4.3-2.12 4.5-4.26'
        stroke='currentColor'
      />
      <path d='M20.27 12h1.4' stroke='currentColor' />
      <path d='M15.5 12H17' stroke='currentColor' />
      <path d='M7.7 12h1.76' stroke='currentColor' />
      <path d='M2.33 12h2.06' stroke='currentColor' />
    </svg>
  )
}
