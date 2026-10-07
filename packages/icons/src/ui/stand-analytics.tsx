import type { Icon } from './types'

export const IconStandAnalytics: Icon = ({
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
      data-slot='icon-ui-stand-analytics'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.76'
        y='4.16'
        width='20.48'
        height='13.12'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.76' y='4.16' width='20.48' height='13.12' rx='3' stroke='currentColor' />
      <path d='M12 1.73v2.43' stroke='currentColor' />
      <path d='M12 17.29v5.1' stroke='currentColor' />
      <path d='M12 17.29 6.98 22.3' stroke='currentColor' />
      <path d='m12 17.29 5.02 5.02' stroke='currentColor' />
      <path d='m12 7.3-.02 6.84' stroke='currentColor' />
      <path d='M7.81 10.66v3.48' stroke='currentColor' />
      <path d='M16.19 9.68v4.46' stroke='currentColor' />
    </svg>
  )
}
