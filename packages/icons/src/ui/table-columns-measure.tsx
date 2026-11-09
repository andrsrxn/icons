import type { Icon } from './types'

export const IconTableColumnsMeasure: Icon = ({
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
      data-slot='icon-ui-table-columns-measure'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.45 8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.46c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.4v10.49c0 1.89 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59H8.45c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M8.9 21.24h-.45c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h.46c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88'
        stroke='currentColor'
      />
      <path d='M8.48 3v18' stroke='currentColor' />
      <path d='M19.65 20.3V3.7' stroke='currentColor' />
      <path d='M21.55 20.3h-3.69' stroke='currentColor' />
      <path d='M21.55 3.7h-3.69' stroke='currentColor' />
    </svg>
  )
}
