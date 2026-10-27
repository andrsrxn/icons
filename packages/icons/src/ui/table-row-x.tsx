import type { Icon } from './types'

export const IconTableRowX: Icon = ({
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
      data-slot='icon-ui-table-row-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.94 6.67c0 1.3 0 1.94-.28 2.42a2 2 0 0 1-.68.68c-.48.29-1.13.29-2.42.29H6.18c-1.3 0-1.94 0-2.42-.3a2 2 0 0 1-.68-.67c-.29-.48-.29-1.12-.29-2.42s0-1.95.3-2.42a2 2 0 0 1 .67-.68c.48-.29 1.12-.29 2.42-.29h11.38c1.3 0 1.94 0 2.42.3q.41.24.68.67c.28.47.28 1.12.28 2.42'
        fill='currentColor'
      />
      <path d='m14.77 20.59-6.14-6.15' stroke='currentColor' />
      <path d='m14.78 14.44-6.14 6.15' stroke='currentColor' />
      <rect
        width='18.48'
        height='6.77'
        rx='2'
        transform='matrix(1 0 0 -1 2.46 10.06)'
        stroke='currentColor'
      />
    </svg>
  )
}
