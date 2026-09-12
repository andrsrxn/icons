import type { Icon } from './types'

export const IconHourglass: Icon = ({
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
      data-slot='icon-ui-hourglass'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m6.55 15.86-1.37 6h13.5l-1.15-6L15.21 13l-3.4-1.68L8.86 13z'
        fill='currentColor'
      />
      <path d='M5.22 21.69c0-5.46 3.04-9.88 6.78-9.88s6.78 4.42 6.78 9.88' stroke='currentColor' />
      <path d='M5.22 2.3c0 5.25 3.04 9.5 6.78 9.5s6.78-4.25 6.78-9.5' stroke='currentColor' />
      <path d='M20.04 21.69H3.96' stroke='currentColor' />
      <path d='M20.04 2.3H3.96' stroke='currentColor' />
    </svg>
  )
}
