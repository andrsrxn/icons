import type { Icon } from './types'

export const IconBackground: Icon = ({
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
      data-slot='icon-ui-background'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
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
      <path d='m3.04 11.92 9.23 9.24' stroke='currentColor' />
      <path d='m3.88 3.78 16.57 16.57' stroke='currentColor' />
      <path d='m11.75 2.86 9.2 9.2' stroke='currentColor' />
    </svg>
  )
}
