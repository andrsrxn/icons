import type { Icon } from './types'

export const IconContract: Icon = ({
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
      data-slot='ui-icon-contract'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.13 13.78H6.3c1.89 0 2.83 0 3.42.58.59.59.59 1.53.59 3.42v1.19m8.47-8.68h-1c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42v-1M3.58 20.52l5.83-5.83M20.52 3.55l-5.83 5.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
