import type { Icon } from './types'

export const IconBarricade: Icon = ({
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
      data-slot='ui-icon-barricade'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m3.22 14.94 3.16-7.41a1 1 0 0 0-.96-1.4l-1.44.06a1 1 0 0 0-.96 1.02l.14 8.02q0-.15.06-.29m17.33-8.01-3.17 7.4a1 1 0 0 0 .96 1.4l1.44-.05a1 1 0 0 0 .96-1.02l-.14-8.03q0 .15-.05.3M12.74 15l3.2-7.76a1 1 0 0 0-.92-1.38h-2.98a1 1 0 0 0-.93.63l-3.08 7.76a1 1 0 0 0 .93 1.37h2.86a1 1 0 0 0 .92-.62'
        fill='currentColor'
      />
      <rect
        x='2.76'
        y='6'
        width='18.47'
        height='9.79'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7 15.88v2.6m10-2.6v2.6m-10.2-12L3.2 15m8.16-8.52-3.6 9.14M16 6.48l-3.6 9.14M20.76 7l-3.55 8.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
