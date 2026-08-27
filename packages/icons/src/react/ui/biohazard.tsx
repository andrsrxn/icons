import type { Icon } from './types'

export const IconBiohazard: Icon = ({
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
      data-slot='ui-icon-biohazard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='11.99' cy='11.11' r='2.5' fill='currentColor' />
      <circle cx='11.99' cy='11.11' r='2.5' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M10.64 5.9h2.7m-7.17 8.33 1.5 2.25m10.1-2.25-1.25 2.26M8.4 3.14a5 5 0 0 0 .84 7.69m6.34-7.69a5 5 0 0 1-.83 7.69'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.04 19.87a4.83 4.83 0 0 0 5.8-6.2m-9.26.2a4.8 4.8 0 0 1 2.24-2.88 4.6 4.6 0 0 1 4.68-.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.11 19.87c-1.18.3-2.48.16-3.62-.5a4.7 4.7 0 0 1-2.12-5.68m9.2.18a4.8 4.8 0 0 0-2.24-2.88 4.5 4.5 0 0 0-4.72 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
