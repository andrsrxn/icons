import type { Icon } from './types'

export const IconSuitcase: Icon = ({
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
      data-slot='ui-icon-suitcase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M7.04 8.04h9.91v11.32H7.04z' />
      <rect
        x='2.65'
        y='8.04'
        width='18.69'
        height='11.32'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.87 18.8V8.6m10.26 10.2V8.6M15.41 8c0-2.07-.5-3.71-3.41-3.71S8.59 6.07 8.59 8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
