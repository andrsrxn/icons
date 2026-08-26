import type { Icon } from './types'

export const IconCoordinates: Icon = ({
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
      data-slot='ui-icon-coordinates'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.22 17.72H3.79M6.28 3.86v16.43m11.86.71L20 19.14c.67-.66 1-1 1-1.41 0-.42-.33-.75-1-1.42l-1.86-1.86M9.55 5.94 7.7 4.07c-.66-.66-1-1-1.41-1-.42 0-.75.33-1.42 1L3 5.94'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
