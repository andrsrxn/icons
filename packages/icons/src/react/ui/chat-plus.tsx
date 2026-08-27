import type { Icon } from './types'

export const IconChatPlus: Icon = ({
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
      data-slot='ui-icon-chat-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.4 20.53a8.82 8.82 0 1 0-8.83-8.83q.01 1.11.13 1.82c.1.66.15 1 .14 1.16l-.01.22c-.02.16-.09.37-.21.8l-.07.22c-.55 1.86-.83 2.8-.55 3.45a2 2 0 0 0 .85.96c.62.36 1.58.19 3.5-.14l.5-.08h.22c.12 0 .27.03.58.09.79.13 2.2.33 3.74.33'
        fill='currentColor'
      />
      <path
        d='M12.4 20.53a8.82 8.82 0 1 0-8.83-8.83q.01 1.11.13 1.82c.1.66.15 1 .14 1.16l-.01.22c-.02.16-.09.37-.21.8l-.07.22c-.55 1.86-.83 2.8-.55 3.45a2 2 0 0 0 .85.96c.62.36 1.58.19 3.5-.14h0l.5-.08h.22c.12 0 .27.03.58.09.79.13 2.2.33 3.74.33m4.42-8.41H8.34m4.24-4.25v8.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
