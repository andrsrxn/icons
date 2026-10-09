import type { Icon } from './types'

export const IconTableRowsPlus: Icon = ({
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
      data-slot='icon-ui-table-rows-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v9.5h-2.26v2.98H6.76c-1.89 0-2.83 0-3.41-.59-.6-.58-.6-1.52-.6-3.4v-8.5c0-2.82 0-4.23.89-5.11.88-.88 2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path
        d='M21.24 12V8.76c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.76c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.48c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.14'
        stroke='currentColor'
      />
      <path d='M21 8.78H3' stroke='currentColor' />
      <path d='M12.86 15.22H3' stroke='currentColor' />
      <path d='M18.8 15.1v6.14' stroke='currentColor' />
      <path d='M15.71 18.16h6.15' stroke='currentColor' />
    </svg>
  )
}
