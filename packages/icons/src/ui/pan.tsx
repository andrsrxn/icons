import type { Icon } from './types'

export const IconPan: Icon = ({
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
      data-slot='icon-ui-pan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m3.02 14.46 12.58-3.37a5.04 5.04 0 0 1-3.57 6.17l-2.84.76a5.04 5.04 0 0 1-6.17-3.56'
        fill='currentColor'
      />
      <path d='m1.7 14.8 20.6-5.54' stroke='currentColor' />
      <path
        d='M3.02 14.46a5.1 5.1 0 0 0 6.27 3.62l2.74-.73a5.1 5.1 0 0 0 3.61-6.27'
        stroke='currentColor'
      />
      <path d='m11.67 5.9.66 1.88' stroke='currentColor' />
      <path d='m8.85 8.34-.65 1.89' stroke='currentColor' />
      <path d='m2.4 9.1 1.24 1.57' stroke='currentColor' />
      <path d='M5.63 5.15v2' stroke='currentColor' />
    </svg>
  )
}
