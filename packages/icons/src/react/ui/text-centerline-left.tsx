import type { Icon } from './types'

export const IconTextCenterlineLeft: Icon = ({
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
      data-slot='ui-icon-text-centerline-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.3' y='8.56' width='6.8' height='6.8' rx='2' fill='currentColor' />
      <rect
        x='3.3'
        y='8.56'
        width='6.8'
        height='6.8'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.23 9.66h-8.19m8.19 9.68H2.77m18.46-5h-8.19m8.19-9.68H2.77'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
