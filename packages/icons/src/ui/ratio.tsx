import type { Icon } from './types'

export const IconRatio: Icon = ({
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
      data-slot='icon-ui-ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='6.32'
        y='6.32'
        width='11.36'
        height='11.36'
        rx='3'
        fill='currentColor'
      />
      <rect x='2.62' y='6.32' width='18.76' height='11.36' rx='3' stroke='currentColor' />
      <rect
        x='6.32'
        y='21.38'
        width='18.76'
        height='11.36'
        rx='3'
        transform='rotate(-90 6.32 21.38)'
        stroke='currentColor'
      />
    </svg>
  )
}
