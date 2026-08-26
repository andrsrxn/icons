import type { Icon } from './types'

export const IconChatOff: Icon = ({
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
      data-slot='ui-icon-chat-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.37 20.53a8.82 8.82 0 1 0-8.82-8.83q0 1.11.12 1.82c.1.66.15 1 .15 1.16l-.02.22c-.02.16-.08.37-.21.8l-.07.22c-.55 1.86-.83 2.8-.55 3.45a2 2 0 0 0 .85.96c.63.36 1.58.19 3.5-.14l.5-.08h.23a23 23 0 0 0 4.32.41'
        fill='currentColor'
      />
      <path
        d='M12.37 20.53a8.82 8.82 0 1 0-8.82-8.83q0 1.11.12 1.82c.1.66.15 1 .15 1.16l-.02.22c-.02.16-.08.37-.21.8l-.07.22c-.55 1.86-.83 2.8-.55 3.45a2 2 0 0 0 .85.96c.63.36 1.58.19 3.5-.14h0l.5-.08h.23a23 23 0 0 0 4.32.41M3.3 3.3l17.4 17.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
