import type { Icon } from './types'

export const IconTableHeader: Icon = ({
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
      data-slot='icon-ui-table-header'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.82 2.76c.4 0 .58 0 .75.02a3 3 0 0 1 2.65 2.65c.02.17.02.36.02.75l-.01.5a2 2 0 0 1-1.77 1.76l-.5.01H4.54a2 2 0 0 1-1.77-1.78l-.01-.5c0-.38 0-.57.02-.74a3 3 0 0 1 2.65-2.65c.17-.02.36-.02.75-.02z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path d='M21 8.78H3' stroke='currentColor' />
      <path d='M21 15.22H3' stroke='currentColor' />
    </svg>
  )
}
