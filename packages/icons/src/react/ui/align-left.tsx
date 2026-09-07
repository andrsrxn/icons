import type { Icon } from './types'

export const IconAlignLeft: Icon = ({
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
      data-slot='ui-icon-align-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'align-left-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'align-left-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(0 1 1 0 5.77 4.63)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.8'
        height='11.62'
        rx='2'
        transform='matrix(0 1 1 0 5.77 13.68)'
        fill='currentColor'
      />
      <rect
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(0 1 1 0 5.77 4.63)'
        stroke='currentColor'
      />
      <rect
        width='5.8'
        height='11.62'
        rx='2'
        transform='matrix(0 1 1 0 5.77 13.68)'
        stroke='currentColor'
      />
      <path d='M2.74 3.76v16.58' stroke='currentColor' />
    </svg>
  )
}
