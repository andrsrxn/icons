import type { Icon } from './types'

export const IconTableCellsMerge: Icon = ({
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
      data-slot='icon-ui-table-cells-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='9.14'
        width='5.96'
        height='18.48'
        rx='1.5'
        transform='rotate(90 21.24 9.14)'
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
      <path d='M12 3v6.14' stroke='currentColor' />
      <path d='M12 15.1v6.14' stroke='currentColor' />
    </svg>
  )
}
