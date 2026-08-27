import type { Icon } from './types'

export const IconSunDim: Icon = ({
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
      data-slot='ui-icon-sun-dim'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='11.97'
        cy='11.99'
        r='4.62'
        transform='rotate(90 11.97 11.99)'
        fill='currentColor'
      />
      <circle
        cx='11.97'
        cy='11.99'
        r='4.62'
        transform='rotate(90 11.97 11.99)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.47 11.99h.83m15.28.01h.93m-8.55 8.62v-1.06m0-15.25V3.5m6.2 2.22.65-.66M5.09 18.8l.68-.7M5.75 5.71l-.45-.46m13.52 13.53-.67-.67'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
