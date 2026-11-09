import type { Icon } from './types'

export const IconTableRows: Icon = ({
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
      data-slot='icon-ui-table-rows'
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
      <path
        d='M2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24'
        stroke='currentColor'
      />
      <path d='M21 8.78H3' stroke='currentColor' />
      <path d='M21 15.22H3' stroke='currentColor' />
    </svg>
  )
}
