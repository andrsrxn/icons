import type { Icon } from './types'

export const IconLighthouse: Icon = ({
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
      data-slot='icon-ui-lighthouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M9.1 13.29h5.81v4.61H9.1z' />
      <path opacity='.2' fill='currentColor' d='M9.28 2.3h5.45v5.38H9.28z' />
      <path d='M7.24 8.33h9.52' stroke='currentColor' />
      <path d='M9.27 13.04h5.46' stroke='currentColor' />
      <path d='m5.9 2.05-1.45-.6' stroke='currentColor' />
      <path d='m18.1 2.05 1.45-.6' stroke='currentColor' />
      <path d='m5.52 5.3-1.6.18' stroke='currentColor' />
      <path d='m18.48 5.3 1.6.18' stroke='currentColor' />
      <path d='M8.76 17.9h6.48' stroke='currentColor' />
      <path d='M4.73 22.28h14.54' stroke='currentColor' />
      <circle cx='12' cy='5.1' r='3.23' stroke='currentColor' />
      <path d='M9.68 8.33h4.77l1.68 13.95H7.87z' stroke='currentColor' />
    </svg>
  )
}
