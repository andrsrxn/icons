import type { Icon } from './types'

export const IconAd: Icon = ({
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
      data-slot='ui-icon-ad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.63 6.14H3.37v11.73h17.26z'
        fill='currentColor'
      />
      <rect
        x='2.77'
        y='5.73'
        width='18.46'
        height='12.54'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m5.81 14.9.83-2.43c.8-2.3 1.19-3.44 1.9-3.44.72 0 1.1 1.15 1.89 3.45l.82 2.42m-1.15-1.97H6.96m6.74-2.1v2.4c0 .84 0 1.26.34 1.56s.69.25 1.38.15c1.26-.19 2.77-.84 2.77-2.91s-1.5-2.73-2.77-2.91c-.7-.1-1.04-.15-1.38.15-.35.3-.35.72-.35 1.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
