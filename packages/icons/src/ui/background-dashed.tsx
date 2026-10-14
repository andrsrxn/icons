import type { Icon } from './types'

export const IconBackgroundDashed: Icon = ({
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
      data-slot='icon-ui-background-dashed'
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
      <path d='m2.68 12.1 9.23 9.24' stroke='currentColor' />
      <path d='M3.52 3.96 20.1 20.54' stroke='currentColor' />
      <path d='m11.4 3.05 9.2 9.2' stroke='currentColor' />
      <path d='M5.67 2.85h-.53a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M17.62 2.85h.52a3 3 0 0 1 2.8 3.25' stroke='currentColor' />
      <path d='M5.67 21.43h-.53a3 3 0 0 1-2.8-2.8v-.45' stroke='currentColor' />
      <path d='M17.62 21.43h.52a3 3 0 0 0 2.8-2.8v-.45' stroke='currentColor' />
      <path d='M2.4 10.32v3.57' stroke='currentColor' />
      <path d='M20.88 10.32v3.57' stroke='currentColor' />
      <path d='M9.86 21.33h3.57' stroke='currentColor' />
      <path d='M9.86 2.85h3.57' stroke='currentColor' />
    </svg>
  )
}
