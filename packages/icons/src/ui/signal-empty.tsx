import type { Icon } from './types'

export const IconSignalEmpty: Icon = ({
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
      data-slot='icon-ui-signal-empty'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m15.97 6.62-8.04 5.43c-4.42 2.99-6.63 4.48-6.2 5.9.43 1.41 3.1 1.41 8.44 1.41h8.04c1.88 0 2.82 0 3.41-.58.59-.59.59-1.53.59-3.42V9.93c0-3.31 0-4.97-1.07-5.53-1.06-.57-2.43.36-5.18 2.22'
        stroke='currentColor'
      />
      <path d='M7.11 12.66v6.7' stroke='currentColor' />
      <path d='M12.18 9.68v9.68' stroke='currentColor' />
      <path d='M17.25 5.82v13.54' stroke='currentColor' />
    </svg>
  )
}
