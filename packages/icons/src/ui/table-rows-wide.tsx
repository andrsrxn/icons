import type { Icon } from './types'

export const IconTableRowsWide: Icon = ({
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
      data-slot='icon-ui-table-rows-wide'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15 2.93c2.82 0 4.24 0 5.12.88S21 6.1 21 8.93v8.15c0 1.89 0 2.83-.6 3.41-.58.6-1.52.6-3.4.6H6.5c-1.88 0-2.82 0-3.41-.6-.59-.58-.59-1.52-.59-3.4V8.92c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path d='M21 12H3' stroke='currentColor' />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
    </svg>
  )
}
