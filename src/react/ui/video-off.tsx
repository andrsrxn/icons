import type { Icon } from './types'

export const IconVideoOff: Icon = ({
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
      data-slot='ui-icon-video-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.7' y='6' width='13.3' height='12' rx='3' fill='currentColor' />
      <rect
        x='2.7'
        y='6'
        width='13.3'
        height='12'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16 9.38.58-.3c1.69-.85 2.53-1.28 3.21-1.14a2 2 0 0 1 1.17.72c.43.54.43 1.49.43 3.38 0 1.87 0 2.8-.43 3.35a2 2 0 0 1-1.15.71c-.67.15-1.51-.26-3.19-1.08l-.62-.3M3.3 3.3l17.4 17.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
