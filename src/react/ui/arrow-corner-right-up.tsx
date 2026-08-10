import type { Icon } from './types'

export const IconArrowCornerRightUp: Icon = ({
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
      data-slot='arrow-corner-right-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.93 8.4a.75.75 0 0 1-1.06-1.06l.53.53zm.47-1.53.54.53zm6.84 0-.53.52zm1.54.47a.75.75 0 1 1-1.06 1.06l.53-.53zm-4.9-2.9v.75zm-.8 0a.75.75 0 0 1 1.5 0zM4.75 19.49a.75.75 0 0 1 0-1.5zM10.4 7.87l-.53-.53 1-1 .53.53.54.53-1 1zm7.84-1 .53-.54 1.01 1.01-.53.53-.53.53-1-1zm-6.84 0-.53-.53q1.18-1.21 2.05-1.9c.6-.45 1.23-.75 1.96-.75v1.5c-.28 0-.59.1-1.06.46-.5.36-1.07.93-1.88 1.75zm6.84 0-.53.52c-.83-.82-1.37-1.38-1.84-1.75-.45-.36-.73-.45-1-.45v-1.5c.74 0 1.34.3 1.92.77q.82.68 1.98 1.87zm-3.41-2.43h.75v9.25h-1.5V4.44zm0 9.25h.75c0 1.6-.56 3.05-1.59 4.11a5.8 5.8 0 0 1-4.23 1.69v-1.5c1.36 0 2.43-.48 3.15-1.23a4.3 4.3 0 0 0 1.17-3.07zm-5.07 5.05v.75H4.75v-1.5h5.01z'
        fill='currentColor'
      />
    </svg>
  )
}
