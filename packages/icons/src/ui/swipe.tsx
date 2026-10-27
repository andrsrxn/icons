import type { Icon } from './types'

export const IconSwipe: Icon = ({
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
      data-slot='icon-ui-swipe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.74 15.84c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h5.54a2.53 2.53 0 0 0 .73-4.96l-5.1-1.53-.32-.1a3 3 0 0 1-1.9-3.62l.16-.75a2.58 2.58 0 1 0-5.11-.53z'
        fill='currentColor'
      />
      <rect
        width='14.07'
        height='14.07'
        rx='3'
        transform='scale(-1 1)rotate(-15 6.92 89.84)'
        stroke='currentColor'
      />
      <path
        d='M15.82 17.67c0 1.26 0 1.9-.2 2.4a3 3 0 0 1-1.76 1.77c-.5.19-1.14.19-2.4.19H7.74c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-2.3c0-2.61 0-3.92.76-4.78l.24-.24c.86-.76 2.17-.76 4.78-.76'
        stroke='currentColor'
      />
    </svg>
  )
}
