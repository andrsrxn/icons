import type { Icon } from './types'

export const IconWheelchair: Icon = ({
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
      data-slot='ui-icon-wheelchair'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='7.34' cy='16.46' r='4.93' fill='currentColor' />
      <circle opacity='.2' cx='18.9' cy='18.87' r='2.52' fill='currentColor' />
      <circle cx='7.34' cy='16.46' r='4.93' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='18.9' cy='18.87' r='2.52' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M7.92 11.53V5.04c0-.4 0-.6-.03-.77a2 2 0 0 0-1.64-1.63C6.1 2.6 5.9 2.6 5.5 2.6m12.79 4.47H7.92m10.98 8.85v-.23c0-.55 0-.83-.06-1.06a2 2 0 0 0-1.48-1.48c-.23-.05-.5-.05-1.05-.05h-5.19m4.61-6.03v6.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
