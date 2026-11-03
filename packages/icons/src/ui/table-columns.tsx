import type { Icon } from './types'

export const IconTableColumns: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-table-columns'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.15c0 1.89 0 2.83-.59 3.41-.58.6-1.52.6-3.4.6H6.74c-1.88 0-2.82 0-3.4-.6-.6-.58-.6-1.52-.6-3.4V8.75c0-2.83 0-4.24.89-5.12.88-.88 2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path d='M8.78 3v18' stroke='currentColor' />
      <path d='M15.22 3v18' stroke='currentColor' />
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
