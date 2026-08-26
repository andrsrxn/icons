import type { Icon } from './types'

export const IconHistory: Icon = ({
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
      data-slot='ui-icon-history'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5 5.36a10.4 10.4 0 0 1 9.4-2.06A9.01 9.01 0 1 1 3.74 16.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.3 7.15c-1.73-.33-2.59-.5-3.05-1.1l-.12-.18c-.4-.66-.23-1.52.1-3.25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle opacity='.2' cx='11.67' cy='11.6' r='9.32' fill='currentColor' />
      <path
        d='m15.38 15.72-2.3-1.55c-.88-.58-1.32-.87-1.55-1.31-.24-.44-.24-.97-.24-2.01V7.49'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
