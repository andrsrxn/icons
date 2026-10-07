import type { Icon } from './types'

export const IconTableCellsSplit: Icon = ({
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
      data-slot='icon-ui-table-cells-split'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='3'
        width='6.14'
        height='18.48'
        rx='1.5'
        transform='rotate(90 21.24 3)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='21.24'
        y='15.1'
        width='6.14'
        height='18.48'
        rx='1.5'
        transform='rotate(90 21.24 15.1)'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path d='M21 9.14H3' stroke='currentColor' />
      <path d='M21 15.1H3' stroke='currentColor' />
      <path d='M12 9.14v5.96' stroke='currentColor' />
    </svg>
  )
}
