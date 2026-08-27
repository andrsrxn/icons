import type { Icon } from './types'

export const IconBandage: Icon = ({
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
      data-slot='ui-icon-bandage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='12.15'
        y='4.82'
        width='9.94'
        height='10.36'
        rx='2'
        transform='rotate(45 12.15 4.82)'
        fill='currentColor'
      />
      <rect
        x='15.3'
        y='1.67'
        width='9.94'
        height='19.28'
        rx='3'
        transform='rotate(45 15.3 1.67)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.03 12 12 4.97m-.4 14.46-6.61-6.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.16 14.78a.48.48 0 1 1-.68-.68.48.48 0 0 1 .68.68m.36-4.88a.48.48 0 1 1-.68-.68.48.48 0 0 1 .68.68'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
