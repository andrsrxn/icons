import type { Icon } from './types'

export const IconTextCaseScreaming: Icon = ({
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
      data-slot='icon-ui-text-case-screaming'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M13.25 16.82H10.7' stroke='currentColor' />
      <path
        d='m15.42 16.82 1.63-5.55h0c.8-2.74 1.2-4.1 1.95-4.1.75.02 1.12 1.4 1.85 4.15l1.47 5.5'
        stroke='currentColor'
      />
      <path
        d='m1.68 16.82 1.63-5.55h0c.8-2.74 1.21-4.1 1.96-4.1.75.02 1.12 1.4 1.85 4.15l1.46 5.5'
        stroke='currentColor'
      />
      <path d='M16.71 13.12h4.45' stroke='currentColor' />
      <path d='M2.98 13.12h4.44' stroke='currentColor' />
    </svg>
  )
}
