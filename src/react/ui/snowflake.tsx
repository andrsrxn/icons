import type { Icon } from './types'

export const IconSnowflake: Icon = ({
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
      data-slot='ui-icon-snowflake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='11.95' r='3.47' fill='currentColor' />
      <path
        d='M9.8 2.76 9.46 4.1c-.25.9-.37 1.36-.73 1.57s-.81.09-1.72-.16l-1.35-.36M9.8 21.2l-.35-1.35c-.25-.91-.37-1.37-.73-1.58s-.81-.08-1.72.16l-1.35.36m8.43-16.03.36 1.35c.24.9.36 1.36.72 1.57s.81.09 1.73-.16l1.35-.36M14.08 21.2l.36-1.35c.24-.91.36-1.37.72-1.58s.81-.08 1.73.16l1.35.36m-9.8-6.72H2.28m13.28 0h6.16M7.24 2.98l3.2 5.56m-3.2 12.43 3.2-5.55m6.32-12.44-3.2 5.56m3.2 12.43-3.2-5.55M3.33 9.76l.9.9c.67.66 1 1 1 1.4 0 .42-.33.75-1 1.42l-.9.9m17.34-4.62-.9.9c-.67.66-1 1-1 1.4 0 .42.33.75 1 1.42l.9.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='12' cy='11.95' r='3.47' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
