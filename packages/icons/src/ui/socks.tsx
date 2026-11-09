import type { Icon } from './types'

export const IconSocks: Icon = ({
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
      data-slot='icon-ui-socks'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.42 19.75a4.4 4.4 0 0 0 5.54-.58l3.22-3.43-1.2-2.3 1.2-2.84 3.03-.34c0-1.89-.16-5.15-.16-5.15h-6.51v8.98z'
        fill='currentColor'
      />
      <path
        d='M9.3 20.87a4.42 4.42 0 0 1-6.25-6.25l2.03-2.03c.57-.57.86-.86 1.01-1.23s.16-.78.16-1.6V7.44c0-1.88 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59h1.3c1.88 0 2.82 0 3.4.59.6.58.6 1.53.6 3.41v3.87c0 1.64 0 2.45-.31 3.19-.3.73-.88 1.31-2.04 2.47h0z'
        stroke='currentColor'
      />
      <path
        d='M10.45 19.74a4.3 4.3 0 0 0 5.5-.57l3.91-3.91c1.16-1.16 1.74-1.74 2.04-2.47s.3-1.55.3-3.19V5.73c0-1.88 0-2.83-.58-3.41-.59-.59-1.53-.59-3.41-.59h-3.65c-.91 0-1.65.74-1.65 1.66'
        stroke='currentColor'
      />
      <path d='M6.32 6.84h9.12' stroke='currentColor' />
      <path d='M15.57 5.13h6.62' stroke='currentColor' />
      <path d='M12.43 17c-1.13-.65-1.43-2.26-.67-3.58s2.3-1.86 3.44-1.2' stroke='currentColor' />
      <path
        d='M19.21 15.47c-1.14-.66-1.44-2.28-.67-3.6.77-1.34 2.32-1.89 3.46-1.23'
        stroke='currentColor'
      />
    </svg>
  )
}
