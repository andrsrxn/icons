import type { Icon } from './types'

export const IconListAsterisk: Icon = ({
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
      data-slot='icon-ui-list-asterisk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M5.38 10.32V4.05' stroke='currentColor' />
      <path d='M5.38 19.95v-6.27' stroke='currentColor' />
      <path d='M2.66 5.62 8.1 8.75' stroke='currentColor' />
      <path d='m2.66 15.24 5.44 3.13' stroke='currentColor' />
      <path d='M8.1 5.62 2.66 8.75' stroke='currentColor' />
      <path d='m8.1 15.24-5.44 3.13' stroke='currentColor' />
      <path d='M11 6h10.36' stroke='currentColor' />
      <path d='M11 12h10.36' stroke='currentColor' />
      <path d='M11 18h10.36' stroke='currentColor' />
    </svg>
  )
}
