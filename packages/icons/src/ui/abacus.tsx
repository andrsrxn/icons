import type { Icon } from './types'

export const IconAbacus: Icon = ({
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
      data-slot='icon-ui-abacus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path d='M17.7 8.57H13' stroke='currentColor' />
      <path d='M11.16 14.08v2.7' stroke='currentColor' />
      <path d='M14.01 14.08v2.7' stroke='currentColor' />
      <path d='M9.99 7.16v2.83' stroke='currentColor' />
      <path d='M8.28 15.43H6.3' stroke='currentColor' />
      <path d='M17.7 15.43h-1.02' stroke='currentColor' />
      <path d='M6.3 8.57h.92' stroke='currentColor' />
    </svg>
  )
}
