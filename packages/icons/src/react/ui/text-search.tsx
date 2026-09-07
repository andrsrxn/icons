import type { Icon } from './types'

export const IconTextSearch: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      aria-labelledby={isLabelled && title && !ariaLabel ? 'text-search-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'text-search-title'}>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.19 14.83a3.84 3.84 0 1 1-7.68 0 3.84 3.84 0 0 1 7.68 0'
        fill='currentColor'
      />
      <path
        d='M21.32 6H2.6m6.72 6H2.6m6.72 6H2.6m16.92-.07 2.5 2.51m-1.72-5.56a3.9 3.9 0 0 1-3.9 3.9 3.9 3.9 0 1 1 3.9-3.9'
        stroke='currentColor'
      />
    </svg>
  )
}
