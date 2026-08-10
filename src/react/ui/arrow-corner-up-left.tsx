import type { Icon } from './types'

export const IconArrowCornerUpLeft: Icon = ({
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
      data-slot='arrow-corner-up-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.5 13.07a.75.75 0 0 1-1.06 1.06l.53-.53zm-1.54-.47.53-.54zm0-6.84.53.53zm.48-1.54A.75.75 0 0 1 8.5 5.28l-.53-.53zm-2.9 4.9h.74zm0 .8a.75.75 0 1 1 0-1.5zm15.04 9.33a.75.75 0 1 1-1.5 0zM7.97 13.6l-.53.53-1-1 .52-.53.53-.54 1 1zM6.96 5.76l-.53-.53 1-1.01.54.53.53.53-1.01 1zm0 6.84-.53.53a21 21 0 0 1-1.89-2.05 3.2 3.2 0 0 1-.76-1.96h1.5c0 .28.1.59.46 1.06.37.5.93 1.07 1.75 1.88zm0-6.84.53.53c-.83.83-1.4 1.37-1.76 1.84-.35.45-.45.73-.45 1h-1.5c0-.74.31-1.34.77-1.92.44-.56 1.1-1.2 1.88-1.98zM4.53 9.17v-.75h9.25v1.5H4.53zm9.25 0v-.75c1.6 0 3.06.56 4.12 1.59a5.8 5.8 0 0 1 1.68 4.23h-1.5c0-1.36-.48-2.43-1.23-3.15a4.3 4.3 0 0 0-3.07-1.17zm5.05 5.07h.75v5.01h-1.5v-5.01z'
        fill='currentColor'
      />
    </svg>
  )
}
