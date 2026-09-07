import type { Icon } from './types'

export const IconLayout: Icon = ({
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
      data-slot='icon-ui-layout'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'layout-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'layout-title'}>{title}</title> : null}
      <rect opacity='.2' x='2.8' y='2.88' width='7.79' height='10.48' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        width='7.79'
        height='10.48'
        rx='2'
        transform='matrix(1 0 0 -1 13.41 21.12)'
        fill='currentColor'
      />
      <rect opacity='.2' x='2.8' y='16.15' width='7.79' height='4.97' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        width='7.79'
        height='4.96'
        rx='2'
        transform='matrix(1 0 0 -1 13.41 7.84)'
        fill='currentColor'
      />
      <rect x='2.8' y='2.88' width='7.79' height='10.48' rx='2' stroke='currentColor' />
      <rect
        width='7.79'
        height='10.48'
        rx='2'
        transform='matrix(1 0 0 -1 13.41 21.12)'
        stroke='currentColor'
      />
      <rect x='2.8' y='16.15' width='7.79' height='4.97' rx='1.5' stroke='currentColor' />
      <rect
        width='7.79'
        height='4.96'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.41 7.84)'
        stroke='currentColor'
      />
    </svg>
  )
}
