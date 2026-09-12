import type { Icon } from './types'

export const IconRuler: Icon = ({
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
      data-slot='icon-ui-ruler'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='21.07'
        height='10.04'
        rx='2'
        transform='scale(1 -1)rotate(45 31.81 -1.72)'
        fill='currentColor'
      />
      <rect
        width='21.07'
        height='10.04'
        rx='2'
        transform='scale(1 -1)rotate(45 31.81 -1.72)'
        stroke='currentColor'
      />
      <path d='m8.73 8.27 2.83 2.82' stroke='currentColor' />
      <path d='m5.22 11.68 2.87 2.88' stroke='currentColor' />
      <path d='m12.15 4.75 2.88 2.87' stroke='currentColor' />
    </svg>
  )
}
