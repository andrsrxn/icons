import type { Icon } from './types'

export const IconAlignBottom: Icon = ({
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
      data-slot='icon-ui-align-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'align-bottom-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'align-bottom-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(1 0 0 -1 4.58 18.28)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.8'
        height='11.62'
        rx='2'
        transform='matrix(1 0 0 -1 13.62 18.28)'
        fill='currentColor'
      />
      <rect
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(1 0 0 -1 4.58 18.28)'
        stroke='currentColor'
      />
      <rect
        width='5.8'
        height='11.62'
        rx='2'
        transform='matrix(1 0 0 -1 13.62 18.28)'
        stroke='currentColor'
      />
      <path d='M3.71 21.32H20.3' stroke='currentColor' />
    </svg>
  )
}
