import type { Icon } from './types'

export const IconCreditCardIn: Icon = ({
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
      data-slot='icon-ui-credit-card-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12.72 19.78H9.44c-3.55 0-5.33 0-6.48-1.05l-.25-.25C1.66 17.33 1.66 15.55 1.66 12s0-5.33 1.05-6.48l.25-.25C4.11 4.22 5.9 4.22 9.44 4.22h5.07c3.6 0 5.4 0 6.55 1.08l.2.2c1.08 1.15 1.08 2.95 1.08 6.55'
        stroke='currentColor'
      />
      <path d='M1.66 9.38H22' stroke='currentColor' />
      <path d='M4.97 12.84H10' stroke='currentColor' />
      <path d='M19.17 21.55v-6.28' stroke='currentColor' />
      <path
        d='M15.78 17.27 17.05 16c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.27 1.27'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.83 8.35v-.22a4 4 0 0 1 3.9-3.9h12.19a4 4 0 0 1 3.9 4.12v.05a1 1 0 0 1-.97.98H2.81a1 1 0 0 1-.98-.98z'
        fill='currentColor'
      />
    </svg>
  )
}
