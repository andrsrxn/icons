import type { Icon } from './types'

export const IconGiftCard: Icon = ({
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
      data-slot='icon-ui-gift-card'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.06 12.38c.94 0 1.41 0 1.7-.29.3-.3.3-.76.3-1.7v-3.8c0-.95 0-1.42-.3-1.72-.29-.29-.76-.29-1.7-.29H5.55c-1.8 0-2.69 0-3.26.53l-.11.11c-.54.58-.54 1.47-.54 3.26 0 1.8 0 2.69.54 3.26l.1.11c.58.53 1.48.53 3.27.53z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.3 11.62c-.95 0-1.42 0-1.71.29-.3.3-.3.76-.3 1.7v3.8c0 .95 0 1.42.3 1.72.3.29.76.29 1.7.29h7.16c1.8 0 2.69 0 3.26-.53l.11-.11c.54-.58.54-1.47.54-3.26 0-1.8 0-2.69-.54-3.26l-.1-.11c-.58-.53-1.48-.53-3.27-.53z'
        fill='currentColor'
      />
      <rect
        width='14.84'
        height='20.71'
        rx='3'
        transform='matrix(0 -1 -1 0 22.36 19.42)'
        stroke='currentColor'
      />
      <path d='M9.51 19.42V4.58' stroke='currentColor' />
      <path d='M6.02 15.49 13 8.5' stroke='currentColor' />
      <path d='m13 15.5-6.98-7' stroke='currentColor' />
      <path d='M22.36 12H1.76' stroke='currentColor' />
    </svg>
  )
}
