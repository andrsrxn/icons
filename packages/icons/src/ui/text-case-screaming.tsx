import type { Icon } from './types'

export const IconTextCaseScreaming: Icon = ({
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
      data-slot='icon-ui-text-case-screaming'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.6 16.63 1.5-5.22c.78-2.75 1.18-4.12 1.93-4.12.76 0 1.14 1.37 1.92 4.12l1.47 5.22'
        stroke='currentColor'
      />
      <path
        d='m15.58 16.63 1.5-5.22c.78-2.75 1.17-4.12 1.92-4.12.76 0 1.15 1.37 1.92 4.12l1.47 5.22'
        stroke='currentColor'
      />
      <path d='M7.18 12.26H2.85' stroke='currentColor' />
      <path d='M21.15 12.26h-4.33' stroke='currentColor' />
      <path d='M13.24 16.63h-2.57' stroke='currentColor' />
    </svg>
  )
}
