import type { Icon } from './types'

export const IconAppleCore: Icon = ({
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
      data-slot='icon-ui-apple-core'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.03 13.59c0 6.71 5.96 10.05-3.03 8.02-9.68 2.03-2.83-2.26-2.83-8.02 0-6.07-6.29-10.7 2.83-8.03 9-2.03 3.03 1.31 3.03 8.03'
        fill='currentColor'
      />
      <path
        d='M12 21.14c-1.15 0-1.5 1.14-3.28 1.14a4.4 4.4 0 0 1-2.32-.86c.62-1.33 2.88-4.22 2.88-7.83S7.21 6.85 6.6 5.53a4.6 4.6 0 0 1 2.13-.63c1.97 0 1.91.84 3.28.84s1.59-.84 3.28-.84c.6 0 1.69.2 2.26.63-.54 1.3-2.76 4.42-2.76 8.06s1.92 6.51 2.45 7.83a2.5 2.5 0 0 1-1.95.86c-2 0-2.13-1.14-3.28-1.14'
        stroke='currentColor'
      />
      <path d='M12 5.5a6 6 0 0 1 .03-2.2c.17-.95 1.03-1.91 2.93-1.5' stroke='currentColor' />
    </svg>
  )
}
