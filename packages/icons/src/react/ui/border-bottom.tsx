import type { Icon } from './types'

export const IconBorderBottom: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-border-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.76'
        y='21.24'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(-90 2.76 21.24)'
        fill='currentColor'
      />
      <path
        d='M2.76 14.79V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeDasharray='4 4'
      />
      <path
        d='M2.76 18v.43A3 3 0 0 0 6 21.24h12.43a3 3 0 0 0 2.8-2.8l.01-.44M12 15.37V8.63M15.37 12H8.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
