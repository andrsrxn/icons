import type { Icon } from './types'

export const IconArrowCornerDownRight: Icon = ({
  size = 24,
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
      data-slot='arrow-corner-down-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.54 10.93a.75.75 0 1 1 1.06-1.06l-.53.53zm1.54.47-.53.54zm0 6.84-.53-.53zm-.48 1.54a.75.75 0 1 1-1.06-1.06l.53.53zm2.9-4.9h-.74zm0-.8a.75.75 0 0 1 0 1.5zM4.47 4.75a.75.75 0 0 1 1.5 0zm11.61 5.65.53-.53 1 1-.52.53-.53.54-1-1zm1.01 7.84.53.53-1 1.01-.54-.53-.53-.53 1.01-1zm0-6.84.53-.53q1.2 1.18 1.89 2.05c.45.6.76 1.23.76 1.96h-1.5c0-.28-.1-.59-.46-1.06a20 20 0 0 0-1.75-1.88zm0 6.84-.53-.53c.83-.83 1.39-1.37 1.76-1.84.35-.45.45-.73.45-1h1.5c0 .74-.31 1.34-.77 1.92-.44.56-1.1 1.2-1.88 1.98zm2.43-3.41v.75h-9.26v-1.5h9.26zm-9.26 0v.75c-1.6 0-3.05-.56-4.1-1.59a5.8 5.8 0 0 1-1.7-4.23h1.51c0 1.36.48 2.43 1.23 3.15a4.3 4.3 0 0 0 3.06 1.17zM5.21 9.76h-.75V4.75h1.5v5.01z'
        fill='currentColor'
      />
    </svg>
  )
}
