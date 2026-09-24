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
        width='10.75'
        height='20.61'
        rx='2'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        fill='currentColor'
      />
      <rect
        width='10.75'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        stroke='currentColor'
      />
      <path d='M5.45 13.93H12' stroke='currentColor' />
    </svg>
  )
}
