import type { Icon } from './types'

export const IconArrowCornerRightDown: Icon = ({
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
      data-slot='arrow-corner-right-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.93 15.58a.75.75 0 1 0-1.06 1.06l.53-.53zm.47 1.54.54-.53zm6.84 0-.53-.53zm1.54-.48a.75.75 0 0 0-1.06-1.06l.53.53zm-4.9 2.9v-.74zm-.8 0a.75.75 0 0 0 1.5 0zM4.75 4.5a.75.75 0 0 0 0 1.5zm5.65 11.6-.53.53 1 1 .53-.52.54-.53-1-1zm7.84 1.01.53.53 1.01-1-.53-.54-.53-.53-1 1.01zm-6.84 0-.53.53q1.18 1.2 2.05 1.89c.6.45 1.23.76 1.96.76v-1.5c-.28 0-.59-.1-1.06-.46-.5-.37-1.07-.93-1.88-1.75zm6.84 0-.53-.53c-.83.83-1.37 1.4-1.84 1.76-.45.35-.73.45-1 .45v1.5c.74 0 1.34-.31 1.92-.77.56-.44 1.2-1.1 1.98-1.88zm-3.41 2.43h.75V10.3h-1.5v9.25zm0-9.25h.75c0-1.6-.56-3.06-1.59-4.12A5.8 5.8 0 0 0 9.76 4.5V6c1.36 0 2.43.48 3.15 1.23a4.3 4.3 0 0 1 1.17 3.07zM9.76 5.25V4.5H4.75V6h5.01z'
        fill='currentColor'
      />
    </svg>
  )
}
