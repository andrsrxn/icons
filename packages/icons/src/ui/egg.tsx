import type { Icon } from './types'

export const IconEgg: Icon = ({
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
      data-slot='icon-ui-egg'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.95 12.12c0 5.6 0 10.13-7.95 10.13S4.05 17.7 4.05 12.12C4.91 6.48 7.61 1.99 12 1.99s7.2 4.28 7.95 10.13'
        fill='currentColor'
      />
      <path
        d='M20.31 13.75c0 5.66-3.72 8.5-8.31 8.5s-8.31-2.84-8.31-8.5 4.24-12 8.31-12 8.31 6.34 8.31 12'
        stroke='currentColor'
      />
    </svg>
  )
}
