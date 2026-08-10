import type { Icon } from './types'

export const IconSortAsc: Icon = ({
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
      data-slot='sort-asc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4 18.25a.75.75 0 0 0 0 1.5zm13.13 1.5a.75.75 0 0 0 0-1.5zM4 12.25a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zm5.88-8.37a.75.75 0 0 0-1.5 0zM16.38 15a.75.75 0 0 0 1.5 0zM4 6.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm9.73.79a.75.75 0 0 0 1.04-1.09l-.52.55zm-1.22-2.21.52-.55zm-2.76 0-.52-.55zm-2.27 1.12a.75.75 0 0 0 1.04 1.09L14 8zm3.65-2.07v.75zM4 19v.75h13.13v-1.5H4zm0-6v.75h8v-1.5H4zm13.13-7.62h-.75V15h1.5V5.38zM4 7v.75h6v-1.5H4zm16.25 1 .52-.55-1.74-1.67-.52.55-.52.54 1.74 1.67zm-4.5-1.68-.52-.54-1.75 1.67L14 8l.52.54 1.74-1.67zm2.76 0 .52-.54q-.47-.46-.86-.76a2 2 0 0 0-1.04-.39v1.5h.01l.14.1c.17.12.37.3.71.64zm-2.76 0 .51.55a8 8 0 0 1 .86-.73h.01V4.62c-.42 0-.76.18-1.04.38q-.4.31-.86.77z'
        fill='currentColor'
      />
    </svg>
  )
}
