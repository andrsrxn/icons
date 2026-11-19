import type { Icon } from './types'

export const IconFireworks: Icon = ({
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
      data-slot='icon-ui-fireworks'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m4.98 7.75 5.17 1.39' stroke='currentColor' />
      <path d='m16.52 10.84 5.06 1.36' stroke='currentColor' />
      <path d='M2.47 22.3S2.14 19.04 4.2 16a8.3 8.3 0 0 1 5.25-3.57' stroke='currentColor' />
      <path d='m16.5 8.15 3.19-1.83' stroke='currentColor' />
      <path d='m17.02 16.4-1.87-3.23' stroke='currentColor' />
      <path d='M11.49 6.8 9.64 3.6' stroke='currentColor' />
      <path d='m11.1 18.27 1.38-5.14' stroke='currentColor' />
      <path d='m14.18 6.8 1.36-5.1' stroke='currentColor' />
    </svg>
  )
}
