import type { Icon } from './types'

export const IconUserStar: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-user-star'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.93a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.47 21.84H1.77a8.4 8.4 0 0 1 8.3-8.46c2.9 0 5.44 1.5 6.93 3.8-3-.4-1 1.52-.53 4.66'
        fill='currentColor'
      />
      <path d='M15.47 7.93a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path
        d='m16.51 16.48-.7.11c-.85.14-1.27.2-1.37.5-.1.29.2.59.82 1.2l.5.5c.18.18.27.27.3.38.04.12.02.24-.02.49l-.11.7c-.13.85-.2 1.27.05 1.45s.63-.01 1.4-.4l.63-.32c.22-.12.33-.17.45-.17s.23.05.46.17l.64.32c.76.39 1.14.58 1.39.4s.18-.6.05-1.45l-.11-.7c-.04-.25-.06-.37-.03-.49.04-.11.13-.2.3-.38l.51-.5c.6-.61.91-.91.82-1.2-.1-.3-.52-.36-1.37-.5l-.7-.11q-.35-.04-.47-.13c-.1-.07-.16-.18-.27-.4l-.33-.64c-.39-.77-.58-1.15-.89-1.15-.3 0-.5.38-.89 1.15l-.32.64c-.12.22-.17.33-.27.4s-.22.09-.47.13'
        stroke='currentColor'
      />
      <path d='M1.78 21.62a8.3 8.3 0 0 1 11.28-7.74' stroke='currentColor' />
    </svg>
  )
}
