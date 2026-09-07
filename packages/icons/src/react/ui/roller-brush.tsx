import type { Icon } from './types'

export const IconRollerBrush: Icon = ({
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
      data-slot='icon-ui-roller-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'roller-brush-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'roller-brush-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='4.97'
        height='15.15'
        rx='2'
        transform='matrix(0 -1 -1 0 17.94 8.12)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.69'
        height='5.47'
        rx='1'
        transform='matrix(-1 0 0 1 14.75 15.73)'
        fill='currentColor'
      />
      <rect
        width='4.97'
        height='15.15'
        rx='2'
        transform='matrix(0 -1 -1 0 17.94 8.12)'
        stroke='currentColor'
      />
      <rect
        width='3.69'
        height='5.47'
        rx='1'
        transform='matrix(-1 0 0 1 14.75 15.73)'
        stroke='currentColor'
      />
      <path
        d='M17.96 5.5h.85a2.6 2.6 0 0 1 .75 5.1l-3.63 1.08c-.84.25-1.26.38-1.6.58a3 3 0 0 0-1.32 1.78c-.1.39-.1.82-.1 1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
