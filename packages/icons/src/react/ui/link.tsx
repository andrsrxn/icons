import type { Icon } from './types'

export const IconLink: Icon = ({
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
      data-slot='icon-ui-link'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='16.88'
        y='-.35'
        width='10.57'
        height='24.37'
        rx='5.29'
        transform='rotate(45 16.88 -.35)'
        fill='currentColor'
      />
      <path d='M9.11 14.89 15.5 8.5' stroke='currentColor' />
      <path d='m6.38 10.14-3.09 3.1a5.29 5.29 0 1 0 7.47 7.47l3.02-3.02' stroke='currentColor' />
      <path d='m10.15 6.37 3.09-3.08a5.29 5.29 0 0 1 7.47 7.47l-3.08 3.09' stroke='currentColor' />
    </svg>
  )
}
