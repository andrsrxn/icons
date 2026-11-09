import type { Icon } from './types'

export const IconKelvin: Icon = ({
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
      data-slot='icon-ui-kelvin'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='5.75' cy='5.97' r='2.51' fill='currentColor' />
      <circle cx='5.75' cy='5.97' r='2.51' stroke='currentColor' />
      <path d='M13.04 3.56v17.1' stroke='currentColor' />
      <path
        d='m20 3.6-5.93 7.24c-.49.6-.74.9-.74 1.26s.25.66.74 1.27L20 20.63'
        stroke='currentColor'
      />
    </svg>
  )
}
