import type { Icon } from './types'

export const IconCreditCardTransfer: Icon = ({
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
      data-slot='icon-ui-credit-card-transfer'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M11.2 19.78H9.44c-3.55 0-5.33 0-6.48-1.05l-.25-.25C1.66 17.33 1.66 15.55 1.66 12s0-5.33 1.05-6.48l.25-.25C4.11 4.22 5.9 4.22 9.44 4.22h5.07c3.6 0 5.4 0 6.55 1.08l.2.2c1.08 1.15 1.08 2.95 1.08 6.55'
        stroke='currentColor'
      />
      <path d='M1.66 9.38H22' stroke='currentColor' />
      <path d='M4.97 12.84H10' stroke='currentColor' />
      <path d='M15.35 19.78v-5.04' stroke='currentColor' />
      <path d='M20.7 14.93v5.25' stroke='currentColor' />
      <path
        d='M13.23 15.99c1-1 1.49-1.49 2.1-1.5h.02c.62.01 1.12.5 2.11 1.5'
        stroke='currentColor'
      />
      <path
        d='M18.58 18.94c1 .99 1.5 1.49 2.1 1.5h.03c.61-.01 1.1-.5 2.1-1.5'
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
