import type { Icon } from './types'

export const IconAlignHorizontally: Icon = ({
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
      data-slot='ui-icon-align-horizontally'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'align-horizontally-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'align-horizontally-title'}>{title}</title>
      ) : null}
      <rect
        opacity='.2'
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(1 0 0 -1 9.1 19.75)'
        fill='currentColor'
      />
      <rect
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(1 0 0 -1 9.1 19.75)'
        stroke='currentColor'
      />
      <path d='M5 2.43v19.14M19 2.43v19.14' stroke='currentColor' />
    </svg>
  )
}
