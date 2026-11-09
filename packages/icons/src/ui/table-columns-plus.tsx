import type { Icon } from './types'

export const IconTableColumnsPlus: Icon = ({
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
      data-slot='icon-ui-table-columns-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v9.5h-2.26v2.98H6.76c-1.89 0-2.83 0-3.41-.59-.6-.58-.6-1.52-.6-3.41V8.76c0-2.83 0-4.24.89-5.12.88-.88 2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path d='M8.78 3v18' stroke='currentColor' />
      <path d='M15.22 3v9.4' stroke='currentColor' />
      <path d='M18.8 15.1v6.14' stroke='currentColor' />
      <path d='M15.71 18.16h6.15' stroke='currentColor' />
      <path
        d='M21.24 12.26v-1.5c0-3.77 0-5.66-1.17-6.83S17 2.76 13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17H13'
        stroke='currentColor'
      />
    </svg>
  )
}
