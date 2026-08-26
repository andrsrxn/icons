import type { Icon } from './types'

export const IconArrowsDiagonalRight: Icon = ({
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
      data-slot='ui-icon-arrows-diagonal-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19.62 4.47 4.69 19.39m5.53 1.2h-2.8c-1.9 0-2.84 0-3.42-.58-.59-.59-.59-1.53-.59-3.42v-2.81M13.78 3.41h2.8c1.9 0 2.84 0 3.42.58.59.59.59 1.53.59 3.42v2.81'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
