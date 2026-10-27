import type { Icon } from './types'

export const IconWindow: Icon = ({
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
      data-slot='icon-ui-window'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.93 22.23q.04 0 .04-.04V8.74a6.97 6.97 0 0 0-13.94 0V22.2q0 .03.04.04z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M18.97 22.23V8.74a6.97 6.97 0 0 0-13.94 0v13.49' stroke='currentColor' />
      <path d='M3.2 22.23h17.6' stroke='currentColor' />
      <path d='M5.03 12.72h13.94' stroke='currentColor' />
      <path d='M12 22.23V1.77' stroke='currentColor' />
    </svg>
  )
}
