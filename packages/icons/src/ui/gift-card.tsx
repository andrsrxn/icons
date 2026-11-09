import type { Icon } from './types'

export const IconGiftCard: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-gift-card'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.02 12.38c.95 0 1.42 0 1.71-.29.3-.3.3-.76.3-1.7v-3.8c0-.95 0-1.42-.3-1.72-.3-.29-.76-.29-1.7-.29H5.54c-1.8 0-2.69 0-3.26.53l-.11.11c-.54.58-.54 1.47-.54 3.26 0 1.8 0 2.69.54 3.26l.1.11c.58.53 1.48.53 3.27.53z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.3 11.62c-.95 0-1.42 0-1.71.29-.3.3-.3.76-.3 1.7v3.8c0 .95 0 1.42.3 1.72.3.29.76.29 1.7.29h7.16c1.8 0 2.69 0 3.26-.53l.11-.11c.54-.58.54-1.47.54-3.26 0-1.8 0-2.69-.54-3.26l-.1-.11c-.58-.53-1.48-.53-3.27-.53z'
        fill='currentColor'
      />
      <path
        d='M1.64 12c0-3.21 0-4.81.87-5.9a4 4 0 0 1 .65-.65c1.09-.87 2.7-.87 5.9-.87h5.88c3.2 0 4.81 0 5.9.87a4 4 0 0 1 .65.64c.87 1.1.87 2.7.87 5.91v0c0 3.21 0 4.81-.87 5.9a4 4 0 0 1-.65.65c-1.09.87-2.7.87-5.9.87H9.06c-3.2 0-4.81 0-5.9-.87a4 4 0 0 1-.65-.64c-.87-1.1-.87-2.7-.87-5.91'
        stroke='currentColor'
      />
      <path d='M10.02 19.42V4.58' stroke='currentColor' />
      <path d='m6.53 15.49 6.98-6.99' stroke='currentColor' />
      <path d='m13.51 15.5-6.98-7' stroke='currentColor' />
      <path d='M22.36 12H1.76' stroke='currentColor' />
    </svg>
  )
}
