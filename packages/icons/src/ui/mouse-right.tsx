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
        d='M11.92 17.06v-1.62c0-.94.43-1.84 1.17-2.43q.73-.61 1.03-1.52l.16-.55c.24-.77.23-1.59-.02-2.34l-.14-.42a2.6 2.6 0 0 0-1.03-1.34 2.6 2.6 0 0 1-1.17-2.17V2.13a8.46 8.46 0 0 1 8.46 8.46v6.47z'
        fill='currentColor'
      />
      <path d='M20.23 22.17V10.14a8.3 8.3 0 0 0-16.61 0v12.03' stroke='currentColor' />
      <path d='M3.62 17.1h16.6' stroke='currentColor' />
      <rect x='9.69' y='6.44' width='4.62' height='7.06' rx='2.31' stroke='currentColor' />
      <path d='M11.97 17.05V13.5' stroke='currentColor' />
      <path d='M11.97 6.38V2.13' stroke='currentColor' />
    </svg>
  )
}
