import type { Icon } from './types'

export const IconFridge: Icon = ({
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
      data-slot='icon-ui-fridge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.24 22.27c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12v-6.22H4.76v6.22c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88z'
        fill='currentColor'
      />
      <path d='M4.75 10.05h14.5' stroke='currentColor' />
      <path d='M8.22 6.84h2.4' stroke='currentColor' />
      <path d='M8.22 13.27h2.4' stroke='currentColor' />
      <rect
        width='20.53'
        height='14.49'
        rx='3'
        transform='matrix(0 -1 -1 0 19.24 22.27)'
        stroke='currentColor'
      />
    </svg>
  )
}
