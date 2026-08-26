import type { Icon } from './types'

export const IconSignalEmpty: Icon = ({
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
      data-slot='ui-icon-signal-empty'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m15.07 7.22-6.25 4.22c-4.42 3-6.63 4.49-6.2 5.9.44 1.42 3.1 1.42 8.44 1.42h6.25c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41v-4.23c0-3.3 0-4.97-1.06-5.53s-2.43.36-5.18 2.22M7.3 12.53v6.23m4.7-9v9m4.7-12.58v12.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
