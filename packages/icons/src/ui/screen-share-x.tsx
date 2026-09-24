import type { Icon } from './types'

export const IconScreenShareX: Icon = ({
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
      data-slot='icon-ui-screen-share-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.74'
        y='4.63'
        width='19.01'
        height='12.73'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M12.9 4.63H7.74c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v.73c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h8.23c1.66 0 2.49 0 3.12-.31a3 3 0 0 0 1.34-1.34c.32-.64.32-1.46.32-3.12'
        stroke='currentColor'
      />
      <path d='M7.2 21.18h8.06' stroke='currentColor' />
      <path d='M11.24 21.18v-3.7' stroke='currentColor' />
      <path d='M16.99 8.85 22 3.83' stroke='currentColor' />
      <path d='m22 8.85-5-5.02' stroke='currentColor' />
    </svg>
  )
}
