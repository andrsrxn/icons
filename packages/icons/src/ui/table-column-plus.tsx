import type { Icon } from './types'

export const IconTableColumnPlus: Icon = ({
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
      data-slot='icon-ui-table-column-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.37 2.76c1.3 0 1.95 0 2.43.29q.41.26.67.67c.29.48.29 1.13.29 2.43v11.37c0 1.3 0 1.95-.29 2.43a2 2 0 0 1-.67.67c-.48.3-1.13.3-2.43.3s-1.94 0-2.42-.3a2 2 0 0 1-.67-.67c-.3-.48-.3-1.13-.3-2.43V6.15c0-1.3 0-1.95.3-2.43a2 2 0 0 1 .67-.67c.48-.29 1.13-.29 2.42-.29'
        fill='currentColor'
      />
      <path d='M17.22 8.2v7.6' stroke='currentColor' />
      <path d='M13.41 12h7.6' stroke='currentColor' />
      <rect
        width='18.48'
        height='6.77'
        rx='2'
        transform='matrix(0 -1 -1 0 9.76 21.24)'
        stroke='currentColor'
      />
    </svg>
  )
}
