import type { Icon } from './types'

export const IconBorderEnd: Icon = ({
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
      data-slot='icon-ui-border-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='21.24'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(-180 21.24 21.24)'
        fill='currentColor'
      />
      <path d='M12 15.37V8.63' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
      <path
        d='M18.68 2.76a2.57 2.57 0 0 1 2.56 2.56v13.36a2.57 2.57 0 0 1-2.56 2.56'
        stroke='currentColor'
      />
      <path d='M5.39 2.7h-.06a2.6 2.6 0 0 0-2.61 2.62' stroke='currentColor' />
      <path d='M5.25 21.3h-.06a2.47 2.47 0 0 1-2.47-2.48' stroke='currentColor' />
      <path d='M2.78 10.85v2.25' stroke='currentColor' />
      <path d='M10.9 21.2h2.24' stroke='currentColor' />
      <path d='M10.9 2.72h2.24' stroke='currentColor' />
    </svg>
  )
}
