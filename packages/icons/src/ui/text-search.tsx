import type { Icon } from './types'

export const IconTextSearch: Icon = ({
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
      data-slot='icon-ui-text-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.19 14.83a3.84 3.84 0 1 1-7.68 0 3.84 3.84 0 0 1 7.68 0'
        fill='currentColor'
      />
      <path d='M21.32 6H2.6' stroke='currentColor' />
      <path d='M9.32 12H2.6' stroke='currentColor' />
      <path d='M9.32 18H2.6' stroke='currentColor' />
      <path d='m19.52 17.93 2.5 2.51' stroke='currentColor' />
      <path d='M20.3 14.88a3.9 3.9 0 0 1-3.9 3.9 3.9 3.9 0 1 1 3.9-3.9' stroke='currentColor' />
    </svg>
  )
}
