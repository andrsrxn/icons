import type { Icon } from './types'

export const IconMouseOff: Icon = ({
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
      data-slot='icon-ui-mouse-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M5.66 12.32h12.68v3.58a6.34 6.34 0 1 1-12.68 0z' fill='currentColor' />
      <path d='M5.98 6.11q-.31.94-.32 1.99v7.8a6.34 6.34 0 0 0 12.3 2.18' stroke='currentColor' />
      <path d='M18.34 14.84V8.1A6.34 6.34 0 0 0 7.32 3.83' stroke='currentColor' />
      <path d='M5.66 12.48h6.8' stroke='currentColor' />
      <path d='M16.07 12.48h2.27' stroke='currentColor' />
      <path d='M10.3 6.79a1.76 1.76 0 0 1 3.52 0v1.43q-.02.76-.53 1.26' stroke='currentColor' />
      <path d='M12.03 4.98v-3.2' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
