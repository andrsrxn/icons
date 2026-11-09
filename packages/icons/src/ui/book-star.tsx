import type { Icon } from './types'

export const IconBookStar: Icon = ({
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
      data-slot='icon-ui-book-star'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m9.98 8.55-.87.14c-.85.14-1.27.2-1.37.5-.09.29.21.59.82 1.2l.62.62c.18.17.26.26.3.38s.02.23-.02.48l-.14.87c-.13.84-.2 1.27.05 1.45s.63-.02 1.4-.4l.78-.4c.22-.12.33-.17.45-.17s.23.05.45.17l.79.4c.76.38 1.14.58 1.39.4s.18-.6.05-1.45l-.14-.87c-.04-.25-.06-.37-.02-.48.04-.12.12-.2.3-.38l.62-.62c.6-.61.91-.91.82-1.2-.1-.3-.52-.36-1.37-.5l-.87-.14q-.34-.04-.46-.13c-.1-.07-.16-.18-.27-.4l-.4-.78c-.39-.77-.58-1.15-.89-1.15-.3 0-.5.38-.9 1.15l-.39.78c-.11.22-.17.33-.27.4s-.22.1-.46.13'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21 9.74c0-3.77 0-5.66-1.17-6.83S16.77 1.74 13 1.74h-1.96c-3.77 0-5.65 0-6.83 1.17S3.04 5.97 3.04 9.74v8.75H13c3.77 0 5.66 0 6.83-1.17S21 14.27 21 10.5zM10.74 7.9c.4-.67.6-1 .85-1.13a1 1 0 0 1 .88-.02c.26.12.47.44.9 1.09l.07.1q.1.18.17.24a1 1 0 0 0 .42.28l.28.07c.5.1.76.15.92.25a1 1 0 0 1 .42 1.15c-.06.17-.22.37-.54.78l-.27.34q-.14.15-.17.23a1 1 0 0 0-.14.5l.02.28c.07.55.1.82.06 1a1 1 0 0 1-1.02.75 3 3 0 0 1-.94-.35l-.08-.03q-.22-.11-.32-.13a1 1 0 0 0-.48-.01q-.12.02-.32.12l-.29.12c-.48.2-.72.3-.9.3a1 1 0 0 1-1.03-.82c-.03-.17.02-.43.11-.95q.04-.18.04-.27a1 1 0 0 0-.12-.53l-.16-.23-.06-.07c-.4-.54-.61-.81-.65-1.07a1 1 0 0 1 .3-.85c.18-.18.5-.28 1.16-.46.2-.05.29-.08.38-.12a1 1 0 0 0 .29-.22z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.04 18.5H13c3.77 0 5.66 0 6.83-1.18C21 16.15 21 14.27 21 10.5v-.75c0-3.77 0-5.66-1.17-6.83S16.77 1.74 13 1.74h-1.96c-3.77 0-5.65 0-6.83 1.17S3.04 5.97 3.04 9.74z'
        stroke='currentColor'
      />
      <path
        d='M3.04 18.5c0 .7 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.66.06 1.37.06h8.1c1.42 0 2.13 0 2.68-.23a3 3 0 0 0 1.6-1.6c.24-.56.24-1.27.24-2.69'
        stroke='currentColor'
      />
    </svg>
  )
}
