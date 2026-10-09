import type { Icon } from './types'

export const IconBackground: Icon = ({
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
      data-slot='icon-ui-background'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.68'
        y='2.68'
        width='18.64'
        height='18.64'
        rx='3'
        fill='currentColor'
      />
      <rect x='2.68' y='2.68' width='18.64' height='18.64' rx='3' stroke='currentColor' />
      <path d='M2.7 11.14 12.76 21.2' stroke='currentColor' />
      <path d='m3.88 3.57 16.58 16.57' stroke='currentColor' />
      <path d='M11.94 2.74 21.21 12' stroke='currentColor' />
    </svg>
  )
}
