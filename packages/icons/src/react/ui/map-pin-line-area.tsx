import type { Icon } from './types'

export const IconMapPinLineArea: Icon = ({
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
      data-slot='ui-icon-map-pin-line-area'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='6.36'
        r='3.85'
        transform='rotate(90 12 6.36)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='12.15'
        cy='18.09'
        rx='3.09'
        ry='8.14'
        transform='rotate(90 12.15 18.09)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='6.36'
        r='3.85'
        transform='rotate(90 12 6.36)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16 15.55c2.56.52 4.29 1.54 4.29 2.7 0 1.7-3.71 3.09-8.29 3.09s-8.29-1.38-8.29-3.09c0-1.16 1.73-2.18 4.29-2.7m4 1.94V10.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
