import type { Icon } from './types'

export const IconMagnet: Icon = ({
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
      data-slot='ui-icon-magnet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fill='currentColor'
        d='M3.44 3.46h4.08v4.08H3.44zm13.26 0h4.08v4.08H16.7z'
      />
      <path
        d='M7.82 11.9V5.17c0-.95 0-1.42-.3-1.71-.28-.3-.76-.3-1.7-.3H4.77c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7V13c0 2.19.96 7.81 9.23 7.81s9.23-5.85 9.23-7.8V5.17c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-1.06c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v6.72s0 4.06-4.17 4.06-4.18-4.06-4.18-4.06m-5.05-4h4.75m8.74 0h4.97'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
