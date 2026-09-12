import type { Icon } from './types'

export const IconSignature: Icon = ({
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
      data-slot='icon-ui-signature'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.98 21.43c2.23-2 5.35-8.05 5.32-12.15-.03-5.14-1.88-6.66-3.6-6.7s-4.43 2.9-1.72 9.14c2.66 6.15 6.14 5.92 6.92 5.62s3.1-1.58 2.24-5.62c.28 1.85 1.1 5.32 3.6 4.75 2.03-.46 1.47-3.96.97-5.54.46 2 1.48 5.3 4.01 4.94 2.22-.32 1.61-3.16 1.1-4.15'
        stroke='currentColor'
      />
      <path d='M21.45 19.33 9.8 20.58' stroke='currentColor' />
    </svg>
  )
}
