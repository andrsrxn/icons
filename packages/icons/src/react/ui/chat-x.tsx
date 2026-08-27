import type { Icon } from './types'

export const IconChatX: Icon = ({
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
      data-slot='ui-icon-chat-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.4 20.4a8.82 8.82 0 1 0-8.83-8.81q.01 1.11.13 1.82c.1.66.15.99.14 1.15l-.01.22c-.02.16-.09.38-.21.8l-.07.22C3 17.66 2.72 18.6 3 19.26a2 2 0 0 0 .85.95c.62.36 1.58.2 3.5-.14a5 5 0 0 1 .72-.07c.12 0 .27.03.58.08.79.13 2.2.33 3.74.33'
        fill='currentColor'
      />
      <path
        d='M12.4 20.4a8.82 8.82 0 1 0-8.83-8.81q.01 1.11.13 1.82c.1.66.15.99.14 1.15l-.01.22c-.02.16-.09.38-.21.8l-.07.22C3 17.66 2.72 18.6 3 19.26a2 2 0 0 0 .85.95c.62.36 1.58.2 3.5-.14h0a5 5 0 0 1 .72-.07c.12 0 .27.03.58.08.79.13 2.2.33 3.74.33m3.23-11.45-6.09 6.08m0-6.09 6.09 6.08'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
