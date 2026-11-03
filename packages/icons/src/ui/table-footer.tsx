import type { Icon } from './types'

export const IconTableFooter: Icon = ({
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
      data-slot='icon-ui-table-footer'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m17.82 15.22.75.01a3 3 0 0 1 2.65 2.66c.02.16.02.36.02.74l-.01.5a2 2 0 0 1-1.77 1.77l-.5.01H5.04l-.5-.01a2 2 0 0 1-1.77-1.77l-.01-.5c0-.38 0-.58.02-.74a3 3 0 0 1 2.65-2.66l.75-.01z'
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
