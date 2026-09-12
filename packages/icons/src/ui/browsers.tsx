import type { Icon } from './types'

export const IconBrowsers: Icon = ({
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
      data-slot='icon-ui-browsers'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.76' y='7.5' width='16.07' height='3.9' rx='1' fill='currentColor' />
      <rect opacity='.2' x='6.17' y='3.6' width='16.07' height='3.9' rx='1' fill='currentColor' />
      <rect x='1.76' y='7.5' width='16.07' height='12.9' rx='2' stroke='currentColor' />
      <path
        d='M18.06 16.5h.18c1.88 0 2.83 0 3.41-.6.59-.58.59-1.52.59-3.4V7.6c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H9.12a5 5 0 0 0-1.68.14A2 2 0 0 0 6.3 4.87c-.13.35-.13.8-.13 1.68'
        stroke='currentColor'
      />
      <path d='M17.83 11.4H1.76' stroke='currentColor' />
      <path d='M22.24 7.5h-8.45' stroke='currentColor' />
    </svg>
  )
}
