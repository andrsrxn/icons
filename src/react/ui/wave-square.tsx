import type { Icon } from './types'

export const IconWaveSquare: Icon = ({
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
      data-slot='ui-icon-wave-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.82 9V7c0-1.89 0-2.83.59-3.41C3.99 3 4.94 3 6.82 3H8c1.89 0 2.83 0 3.41.59C12 4.17 12 5.1 12 7v10c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h1.19c1.88 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-2.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
