import type { Icon } from './types'

export const IconMouseRight: Icon = ({
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
      data-slot='icon-ui-mouse-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M20.23 16.86H3.62v5.3h16.6z' fill='currentColor' />
      <path
        opacity='.2'
        d='M11.92 17.89v-2.45a5 5 0 0 1 .82-2.75l.2-.32a4.5 4.5 0 0 0-.14-5.11 4.5 4.5 0 0 1-.88-2.67V2.13a8.46 8.46 0 0 1 8.46 8.46v7.3z'
        fill='currentColor'
      />
      <path d='M20.23 22.17V10.14a8.3 8.3 0 0 0-16.61 0v12.03' stroke='currentColor' />
      <path d='M3.62 17.1h16.6' stroke='currentColor' />
      <rect x='9.69' y='6.44' width='4.62' height='7.06' rx='2.31' stroke='currentColor' />
      <path d='M11.97 17.05V13.5' stroke='currentColor' />
      <path d='M11.97 6.38V2.76' stroke='currentColor' />
    </svg>
  )
}
