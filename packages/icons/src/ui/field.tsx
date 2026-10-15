import type { Icon } from './types'

export const IconField: Icon = ({
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
      data-slot='icon-ui-field'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='12.42'
        height='20.61'
        rx='3'
        transform='scale(1 -1)rotate(90 20 1.8)'
        fill='currentColor'
      />
      <path d='M5.45 13.93H12' stroke='currentColor' />
      <rect
        width='12.42'
        height='20.61'
        rx='3'
        transform='scale(1 -1)rotate(90 20 1.8)'
        stroke='currentColor'
      />
    </svg>
  )
}
