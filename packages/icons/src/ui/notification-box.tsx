import type { Icon } from './types'

export const IconNotificationBox: Icon = ({
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
      data-slot='icon-ui-notification-box'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.05 12.95v-1.7c0-3.77 0-5.66 1.17-6.83 1.18-1.17 3.06-1.17 6.83-1.17h5.28l-1.6 2.2 1.35 2.89 2.76.63 1.91-1.3v5.28c0 3.77 0 5.66-1.17 6.83s-3.05 1.17-6.83 1.17h-1.7c-3.77 0-5.65 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        fill='currentColor'
      />
      <path
        d='M20.75 12.27v.98c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17h-2c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h1.06'
        stroke='currentColor'
      />
      <circle cx='18.14' cy='5.83' r='3.47' stroke='currentColor' />
    </svg>
  )
}
