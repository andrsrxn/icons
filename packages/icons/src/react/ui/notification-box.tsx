import type { Icon } from './types'

export const IconNotificationBox: Icon = ({
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
      data-slot='icon-ui-notification-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.05 16.95v-9.7c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58h9.28l-1.6 2.2 1.35 2.89 2.76.63 1.91-1.3v9.28c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-9.7c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41'
        fill='currentColor'
      />
      <path
        d='M20.75 12.27v2.98c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-6c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-6c0-2.83 0-4.25.88-5.12s2.29-.88 5.12-.88h3.06'
        stroke='currentColor'
      />
      <circle
        cx='18.14'
        cy='5.83'
        r='3.47'
        transform='rotate(90 18.14 5.83)'
        stroke='currentColor'
      />
    </svg>
  )
}
