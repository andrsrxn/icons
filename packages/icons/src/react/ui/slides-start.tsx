import type { Icon } from './types'

export const IconSlidesStart: Icon = ({
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
      data-slot='icon-ui-slides-start'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.71'
        y='20.43'
        width='16.87'
        height='13.21'
        rx='3'
        transform='rotate(-90 1.71 20.43)'
        fill='currentColor'
      />
      <rect
        x='1.71'
        y='20.43'
        width='16.87'
        height='13.21'
        rx='3'
        transform='rotate(-90 1.71 20.43)'
        stroke='currentColor'
      />
      <path d='M22.23 18.66V5.34' stroke='currentColor' />
      <path d='M18.34 18.66V5.34' stroke='currentColor' />
    </svg>
  )
}
