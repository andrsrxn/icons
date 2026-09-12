import type { Icon } from './types'

export const IconSortAsc: Icon = ({
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
      data-slot='icon-ui-sort-asc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m14.56 8 .56-.56c1.33-1.33 2-2 2.82-2 .83 0 1.5.67 2.84 2l.56.56'
        stroke='currentColor'
      />
      <path d='M17.95 14.2V6' stroke='currentColor' />
      <path d='M2.74 6.12h7.13' stroke='currentColor' />
      <path d='M2.74 12h10.22' stroke='currentColor' />
      <path d='M2.74 17.87h15.2' stroke='currentColor' />
    </svg>
  )
}
