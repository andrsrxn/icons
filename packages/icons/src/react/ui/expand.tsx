import type { Icon } from './types'

export const IconExpand: Icon = ({
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
      data-slot='ui-icon-expand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.12 3.86h1.1c1.9 0 2.84 0 3.42.58s.59 1.53.59 3.42v1.1M9.32 20.18h-1.5c-1.88 0-2.82 0-3.4-.58-.6-.59-.6-1.53-.6-3.42v-1.5m10.51-4.93 5.02-5.01m-9.63 9.54L4.71 19.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
