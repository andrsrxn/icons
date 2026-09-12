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
      <path d='m3 15.04 6.05 6.05' stroke='currentColor' />
      <path d='m2.88 8.94 12.27 12.28' stroke='currentColor' />
      <path d='m3.55 3.64 16.9 16.9' stroke='currentColor' />
      <path d='m8.73 2.85 12.51 12.52' stroke='currentColor' />
      <path d='m14.75 2.9 6.44 6.44' stroke='currentColor' />
    </svg>
  )
}
