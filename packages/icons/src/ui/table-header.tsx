import type { Icon } from './types'

export const IconTableHeader: Icon = ({
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
      data-slot='icon-ui-table-header'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.82 2.76c.4 0 .58 0 .75.02a3 3 0 0 1 2.65 2.65c.02.17.02.36.02.75l-.01.5a2 2 0 0 1-1.77 1.76l-.5.01H4.54a2 2 0 0 1-1.77-1.78l-.01-.5c0-.38 0-.57.02-.74a3 3 0 0 1 2.65-2.65c.17-.02.36-.02.75-.02z'
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
