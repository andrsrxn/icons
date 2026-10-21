import type { Icon } from './types'

export const IconConciergeBell: Icon = ({
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
      data-slot='icon-ui-concierge-bell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.44'
        height='19.85'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.7 20.02)'
        fill='currentColor'
      />
      <path d='M3.5 15.17c0-2.8 2.82-7.63 8.5-7.63s8.5 4.72 8.5 7.63' stroke='currentColor' />
      <rect
        width='4.44'
        height='20.57'
        rx='1.5'
        transform='matrix(0 -1 -1 0 22.29 20.02)'
        stroke='currentColor'
      />
      <path d='M12 7.54V3.98' stroke='currentColor' />
      <path d='M14.95 3.98H9.06' stroke='currentColor' />
    </svg>
  )
}
