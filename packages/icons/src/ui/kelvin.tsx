import type { Icon } from './types'

export const IconKelvin: Icon = ({
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
      data-slot='icon-ui-kelvin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='5.75' cy='5.97' r='2.51' fill='currentColor' />
      <circle cx='5.75' cy='5.97' r='2.51' stroke='currentColor' />
      <path d='M12.37 3.61V20.4' stroke='currentColor' />
      <path d='m12.37 12 8.34-8.39' stroke='currentColor' />
      <path d='m12.37 12 8.32 8.32' stroke='currentColor' />
    </svg>
  )
}
