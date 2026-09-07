import type { Icon } from './types'

export const IconPasscode: Icon = ({
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
      data-slot='ui-icon-passcode'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'passcode-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'passcode-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='8.87'
        height='18.81'
        rx='2'
        transform='matrix(0 -1 -1 0 21.4 16.44)'
        fill='currentColor'
      />
      <rect
        width='8.87'
        height='18.81'
        rx='2'
        transform='matrix(0 -1 -1 0 21.4 16.44)'
        stroke='currentColor'
      />
      <path
        d='M7.4 12a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0m5.16 0a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0m5.16 0a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
