import type { Icon } from './types'

export const IconListAsterisk: Icon = ({
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
      data-slot='ui-icon-list-asterisk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.38 10.32V4.05m0 15.9v-6.27M2.66 5.62 8.1 8.75m-5.44 6.49 5.44 3.13m0-12.75L2.66 8.75m5.44 6.49-5.44 3.13M11 6h10.36M11 12h10.36M11 18h10.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
