import type { Icon } from './types'

export const IconBrowser: Icon = ({
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
      data-slot='icon-ui-browser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'browser-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'browser-title'}>{title}</title> : null}
      <rect opacity='.2' x='2.53' y='4.4' width='18.93' height='4.6' rx='1' fill='currentColor' />
      <rect x='2.53' y='4.4' width='18.93' height='15.19' rx='3' stroke='currentColor' />
      <path d='M21.47 9H2.53' stroke='currentColor' />
    </svg>
  )
}
