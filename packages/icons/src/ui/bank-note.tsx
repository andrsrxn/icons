import type { Icon } from './types'

export const IconBankNote: Icon = ({
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
      data-slot='icon-ui-bank-note'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.31 19c3.3 0 4.95 0 5.97-1.03 1.03-1.02 1.03-2.67 1.03-5.97s0-4.95-1.03-5.97C20.26 5 18.61 5 15.31 5H8.69c-3.3 0-4.95 0-5.97 1.03C1.69 7.05 1.69 8.7 1.69 12s0 4.95 1.03 5.97C3.74 19 5.39 19 8.69 19z'
        fill='currentColor'
      />
      <path
        d='M1.69 12c0-3.3 0-4.95 1.03-5.97C3.74 5 5.39 5 8.69 5h6.62c3.3 0 4.95 0 5.97 1.03 1.03 1.02 1.03 2.67 1.03 5.97v0c0 3.3 0 4.95-1.03 5.97C20.26 19 18.61 19 15.31 19H8.69c-3.3 0-4.95 0-5.97-1.03C1.69 16.95 1.69 15.3 1.69 12'
        stroke='currentColor'
      />
      <path d='M7.25 12H5.04' stroke='currentColor' />
      <path d='M19 12h-2.21' stroke='currentColor' />
      <path
        d='M13.11 12a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
