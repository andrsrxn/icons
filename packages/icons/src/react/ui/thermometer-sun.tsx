import type { Icon } from './types'

export const IconThermometerSun: Icon = ({
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
      data-slot='ui-icon-thermometer-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.7 14.18V4.5a1.88 1.88 0 1 1 3.77 0v9.68s1.64 1.79 1.64 3.32a3.52 3.52 0 1 1-7.04 0c0-1.53 1.63-3.32 1.63-3.32'
        fill='currentColor'
      />
      <path
        d='M14.54 14.53a3.8 3.8 0 1 0 4.09 0m-.06-.09v-10a1.98 1.98 0 0 0-3.96 0v10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.05 17.64a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.63 5.8 10.35 4M6.8 8.26 5.32 7.17m.35 5.74-1.81.28m3.22 5.3L8.17 17m6.43-6.69a3.2 3.2 0 1 0-.23 3.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
