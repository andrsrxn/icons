import type { Icon } from './types'

export const IconPills: Icon = ({
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
      data-slot='ui-icon-pills'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.03'
        height='6.82'
        rx='1'
        transform='matrix(.96098 -.27661 .27239 .96219 3.86 14.95)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.03'
        height='6.7'
        rx='1'
        transform='matrix(-.96098 -.27661 -.27239 .96219 20.2 10.06)'
        fill='currentColor'
      />
      <rect
        width='6.03'
        height='13.97'
        rx='3.02'
        transform='matrix(.96098 -.27661 .27239 .96219 2.05 8.56)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='6.03'
        height='13.97'
        rx='3.02'
        transform='matrix(-.96098 -.27661 -.27239 .96219 22 3.67)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m4 15.35 5.71-1.8m10.34-3.1-5.7-1.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
