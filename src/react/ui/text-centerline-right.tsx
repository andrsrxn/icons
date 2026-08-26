import type { Icon } from './types'

export const IconTextCenterlineRight: Icon = ({
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
      data-slot='ui-icon-text-centerline-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.8'
        height='6.8'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 8.56)'
        fill='currentColor'
      />
      <rect
        width='6.8'
        height='6.8'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 8.56)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.77 9.66h8.19m-8.19 9.68h18.47m-18.47-5h8.19m-8.2-9.68h18.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
