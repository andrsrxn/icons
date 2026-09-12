import type { Icon } from './types'

export const IconCpu: Icon = ({
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
      data-slot='icon-ui-cpu'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.19 9.81c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.81c-2.83 0-4.24 0-5.12.88S3.8 6.99 3.8 9.8v4.38c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.38c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12zM8.76 11.8v-.42a3 3 0 0 1 2.82-2.81h.84a3 3 0 0 1 2.81 2.8v1.05a3 3 0 0 1-2.8 2.81h-.85a3 3 0 0 1-2.81-2.8z'
        fill='currentColor'
      />
      <rect x='3.81' y='3.81' width='16.38' height='16.38' rx='3' stroke='currentColor' />
      <rect x='8.34' y='8.34' width='7.33' height='7.33' rx='2' stroke='currentColor' />
      <path d='M9.45 1.73v2.08' stroke='currentColor' />
      <path d='M9.45 20.19v2.08' stroke='currentColor' />
      <path d='M14.55 1.73v2.08' stroke='currentColor' />
      <path d='M14.55 20.19v2.08' stroke='currentColor' />
      <path d='M1.73 14.55h2.08' stroke='currentColor' />
      <path d='M20.19 14.55h2.08' stroke='currentColor' />
      <path d='M1.73 9.45h2.08' stroke='currentColor' />
      <path d='M20.19 9.45h2.08' stroke='currentColor' />
    </svg>
  )
}
