import type { Icon } from './types'

export const IconTextCaseSensitive: Icon = ({
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
      data-slot='icon-ui-text-case-sensitive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.57 18.98 5.4 9.06c.78-2.75 1.18-4.12 1.93-4.12.76 0 1.14 1.38 1.92 4.12l2.8 9.92'
        stroke='currentColor'
      />
      <path d='M10.31 12.9H4.3' stroke='currentColor' />
      <path
        d='M17.7 18.83c-1.61 0-2.92-1.17-2.92-2.63 0-1.92 1.3-2.62 2.92-2.62h2.91v2.62c0 1.46-1.3 2.63-2.91 2.63'
        stroke='currentColor'
      />
      <path
        d='M15.51 9.98c.74-.96 1.72-1.5 2.98-1.27 1.94.36 2.41 1.6 2.41 3.7v5.29c0 .97.4 1.28.4 1.28'
        stroke='currentColor'
      />
    </svg>
  )
}
