import type { Icon } from './types'

export const IconTubeLotion: Icon = ({
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
      data-slot='icon-ui-tube-lotion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M14.9 18.22v1.31c0 .83 0 1.25-.13 1.58a2 2 0 0 1-1.19 1.2c-.33.12-.75.12-1.58.12s-1.25 0-1.59-.13a2 2 0 0 1-1.18-1.19c-.13-.33-.13-.75-.13-1.58v-1.3'
        stroke='currentColor'
      />
      <path
        d='M16.36 13.34a13 13 0 0 1 .56-4.73 58 58 0 0 1 1.7-4.06q.2-.4.2-.85c0-1.1-.9-1.98-1.99-1.98H7.2a2 2 0 0 0-1.8 2.83c.36.8 1.17 2.62 1.68 4.06.49 1.36.6 3.11.55 4.74-.07 2.44-.1 3.66.48 4.27.59.6 1.69.6 3.88.6 2.2 0 3.3 0 3.89-.6.59-.61.55-1.83.48-4.28'
        stroke='currentColor'
      />
      <path d='M7.57 10.25h8.89' stroke='currentColor' />
      <rect
        opacity='.2'
        width='4.59'
        height='6'
        rx='1.5'
        transform='matrix(0 -1 -1 0 15 22.43)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.09 10.25c.64 0 .95 0 1.2-.17.25-.16.38-.45.63-1.04l1.58-3.63c.08-.19.12-.28.14-.38s.02-.2.02-.41v-.9c0-.95 0-1.42-.3-1.71-.28-.3-.76-.3-1.7-.3H7.34c-.94 0-1.42 0-1.7.3-.3.3-.3.76-.3 1.7v.9c0 .21 0 .32.02.42s.07.2.15.4l1.62 3.63c.25.57.38.86.63 1.02s.56.17 1.2.17z'
        fill='currentColor'
      />
    </svg>
  )
}
