import type { Icon } from './types'

export const IconFloorPlan: Icon = ({
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
      data-slot='icon-ui-floor-plan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.77'
        height='18.77'
        rx='3'
        transform='scale(1 -1)rotate(90 21.38 0)'
        fill='currentColor'
      />
      <path
        d='M9.35 21.38h-.74c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V8.62c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h6.77c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v6.76c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87h-.72'
        stroke='currentColor'
      />
      <path d='M21.38 10.67h-7.26' stroke='currentColor' />
      <path d='M9.19 9.5V2.62' stroke='currentColor' />
      <path d='M11.18 15.54H2.6' stroke='currentColor' />
    </svg>
  )
}
