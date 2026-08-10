import type { Icon } from './types'

export const IconArrowCornerUpRight: Icon = ({
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
      data-slot='arrow-corner-up-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.58 13.07a.75.75 0 1 0 1.06 1.06l-.53-.53zm1.53-.47-.53-.54zm0-6.84-.52.53zm-.47-1.54a.75.75 0 1 0-1.06 1.06l.53-.53zm2.9 4.9h-.75zm0 .8a.75.75 0 1 0 0-1.5zM4.5 19.25a.75.75 0 1 0 1.5 0zm11.62-5.65.53.53 1-1-.53-.53-.53-.54-1 1zm1-7.84.54-.53-1.01-1.01-.53.53-.53.53 1 1zm0 6.84.53.53q1.21-1.18 1.9-2.05c.45-.6.75-1.23.75-1.96h-1.5c0 .28-.1.59-.46 1.06a20 20 0 0 1-1.75 1.88zm0-6.84-.52.53c.82.83 1.39 1.37 1.76 1.84.35.45.44.73.44 1h1.5c0-.74-.3-1.34-.77-1.92q-.68-.83-1.87-1.98zm2.43 3.41v-.75H10.3v1.5h9.25zm-9.25 0v-.75c-1.6 0-3.05.56-4.11 1.59a5.8 5.8 0 0 0-1.69 4.23H6c0-1.36.48-2.43 1.23-3.15a4.3 4.3 0 0 1 3.07-1.17zm-5.05 5.07H4.5v5.01H6v-5.01z'
        fill='currentColor'
      />
    </svg>
  )
}
