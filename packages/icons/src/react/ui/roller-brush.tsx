import type { Icon } from './types'

export const IconRollerBrush: Icon = ({
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
      data-slot='icon-ui-roller-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='5.5'
        height='16.77'
        rx='2'
        transform='matrix(0 -1 -1 0 18.46 7.5)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.09'
        height='6.05'
        rx='1'
        transform='matrix(-1 0 0 1 14.93 15.94)'
        fill='currentColor'
      />
      <rect
        width='5.5'
        height='16.77'
        rx='2'
        transform='matrix(0 -1 -1 0 18.46 7.5)'
        stroke='currentColor'
      />
      <rect
        width='4.09'
        height='6.05'
        rx='1'
        transform='matrix(-1 0 0 1 14.93 15.94)'
        stroke='currentColor'
      />
      <path
        d='M18.48 4.62h.94a2.88 2.88 0 0 1 .83 5.64l-4.02 1.2c-1.14.34-1.72.5-2.15.84a3 3 0 0 0-1 1.34c-.2.5-.2 1.1-.2 2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
