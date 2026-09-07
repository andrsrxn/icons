import type { Icon } from './types'

export const IconBubbles: Icon = ({
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
      data-slot='ui-icon-bubbles'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'bubbles-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'bubbles-title'}>{title}</title> : null}
      <circle opacity='.2' cx='8.25' cy='8.2' r='5.69' fill='currentColor' />
      <circle opacity='.2' cx='15.23' cy='18.23' r='3.26' fill='currentColor' />
      <circle opacity='.2' cx='19.55' cy='10.92' r='1.9' fill='currentColor' />
      <circle cx='8.25' cy='8.2' r='5.69' stroke='currentColor' />
      <circle cx='15.23' cy='18.23' r='3.26' stroke='currentColor' />
      <circle cx='19.55' cy='10.92' r='1.9' stroke='currentColor' />
      <path d='M7.98 5.6a2 2 0 0 0-1.44.66 2 2 0 0 0-.66 1.44' stroke='currentColor' />
    </svg>
  )
}
