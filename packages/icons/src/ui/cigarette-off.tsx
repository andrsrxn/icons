import type { Icon } from './types'

export const IconCigaretteOff: Icon = ({
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
      data-slot='icon-ui-cigarette-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.85 14.04c0-1.17 0-1.75.3-2.15q.13-.15.3-.29c.4-.3.98-.3 2.14-.3h2.65v5.48H4.59c-1.16 0-1.75 0-2.15-.3a2 2 0 0 1-.28-.3c-.31-.4-.31-.98-.31-2.14'
        fill='currentColor'
      />
      <path
        d='M11.22 11.3H4.48a5 5 0 0 0-1.31.08 2 2 0 0 0-1.34 1.34c-.09.28-.09.63-.09 1.32a5 5 0 0 0 .09 1.31 2 2 0 0 0 1.34 1.34c.28.09.62.09 1.31.09h12.23'
        stroke='currentColor'
      />
      <path
        d='M20.22 16.77q.38 0 .61-.08a2 2 0 0 0 1.34-1.34c.09-.28.09-.62.09-1.31s0-1.04-.09-1.32a2 2 0 0 0-1.34-1.34c-.28-.08-.62-.08-1.31-.08h-4.78'
        stroke='currentColor'
      />
      <path d='M7.24 16.78V11.3' stroke='currentColor' />
      <path
        d='m16.78 3.14.56.66c.48.56.42 1.4-.12 1.9a1.4 1.4 0 0 0 0 2.03l.47.44'
        stroke='currentColor'
      />
      <path
        d='m20.85 3.14.55.66c.48.56.43 1.4-.11 1.9a1.4 1.4 0 0 0 0 2.03l.46.44'
        stroke='currentColor'
      />
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
    </svg>
  )
}
