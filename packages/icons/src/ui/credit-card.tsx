import type { Icon } from './types'

export const IconCreditCard: Icon = ({
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
      data-slot='icon-ui-credit-card'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M9.44 19.78h5.12c3.55 0 5.33 0 6.48-1.05l.25-.25c1.05-1.15 1.05-2.93 1.05-6.48v0c0-3.55 0-5.33-1.05-6.48l-.25-.25c-1.15-1.05-2.93-1.05-6.48-1.05H9.44c-3.55 0-5.33 0-6.48 1.05l-.25.25C1.66 6.67 1.66 8.45 1.66 12v0c0 3.55 0 5.33 1.05 6.48l.25.25c1.15 1.05 2.93 1.05 6.48 1.05'
        stroke='currentColor'
      />
      <path d='M1.66 9.38H22' stroke='currentColor' />
      <path d='M4.97 12.84H10' stroke='currentColor' />
      <path
        opacity='.2'
        d='M1.83 9.38c0-1.07 0-1.6.1-2.05a4 4 0 0 1 3-3c.45-.1.98-.1 2.05-.1h9.87c1.07 0 1.6 0 2.04.1a4 4 0 0 1 3 3c.1.44.1.98.1 2.05z'
        fill='currentColor'
      />
    </svg>
  )
}
