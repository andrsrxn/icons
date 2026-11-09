import type { Icon } from './types'

export const IconBook: Icon = ({
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
      data-slot='icon-ui-book'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.02 9.74c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h1.96c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v.75c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17H3.02z'
        fill='currentColor'
      />
      <path
        d='M3.02 18.5h9.96c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.83v-.75c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.96c-3.77 0-5.66 0-6.83 1.17S3.02 5.97 3.02 9.74z'
        stroke='currentColor'
      />
      <path
        d='M3.02 18.5c0 .7 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.65.06 1.37.06h8.1c1.42 0 2.12 0 2.68-.23a3 3 0 0 0 1.6-1.6c.24-.56.24-1.27.24-2.69'
        stroke='currentColor'
      />
      <path d='M8.03 2.18v7.35' stroke='currentColor' />
    </svg>
  )
}
