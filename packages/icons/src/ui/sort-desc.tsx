import type { Icon } from './types'

export const IconSortDesc: Icon = ({
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
      data-slot='icon-ui-sort-desc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m14.56 16.16.56.55c1.33 1.34 2 2 2.82 2 .83 0 1.5-.66 2.84-2l.56-.55'
        stroke='currentColor'
      />
      <path d='M17.95 9.77V18' stroke='currentColor' />
      <path d='M2.74 17.85h7.13' stroke='currentColor' />
      <path d='M2.74 11.98h10.22' stroke='currentColor' />
      <path d='M2.74 6.1h15.2' stroke='currentColor' />
    </svg>
  )
}
