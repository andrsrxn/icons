import type { Icon } from './types'

export const IconSocks: Icon = ({
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
      data-slot='icon-ui-socks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.42 19.75a4.4 4.4 0 0 0 5.54-.58l5.07-5.08c.58-.58.87-.87 1.02-1.24s.16-.77.16-1.6V9.12c0-1.89.43-3.41-.16-4h-6.51v8.98z'
        fill='currentColor'
      />
      <path
        d='M3.05 20.87a4.4 4.4 0 0 0 6.25 0l5.07-5.08c.58-.57.87-.86 1.02-1.23s.15-.78.15-1.6V7.45c0-1.88 0-2.83-.58-3.41-.59-.59-1.53-.59-3.42-.59h-1.3c-1.88 0-2.82 0-3.4.59-.6.58-.6 1.53-.6 3.41v2.32c0 .82 0 1.23-.15 1.6s-.44.65-1.01 1.23l-2.03 2.03a4.4 4.4 0 0 0 0 6.25'
        stroke='currentColor'
      />
      <path
        d='M12.9 3.38c0-.9.75-1.65 1.66-1.65h3.65c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v5.53c0 .82 0 1.22-.16 1.6-.15.36-.44.65-1.02 1.23l-5.07 5.08a4.3 4.3 0 0 1-5.51.57'
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
