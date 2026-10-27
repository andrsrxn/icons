import type { Icon } from './types'

export const IconLockScan: Icon = ({
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
      data-slot='icon-ui-lock-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.6 17.42c1.4 0 2.11 0 2.55-.44s.44-1.14.44-2.56v-.85c0-1.41 0-2.12-.44-2.56s-1.14-.44-2.56-.44h-3.18c-1.42 0-2.12 0-2.56.44s-.44 1.15-.44 2.56v.85c0 1.42 0 2.12.44 2.56s1.14.44 2.56.44z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect x='7.41' y='10.57' width='9.18' height='6.85' rx='1.5' stroke='currentColor' />
      <path d='m9.47 10.57.24-1.95a2.34 2.34 0 0 1 4.65.02l.23 1.93' stroke='currentColor' />
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
      />
    </svg>
  )
}
