import type { Icon } from './types'

export const IconFolderStar: Icon = ({
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
      data-slot='icon-ui-folder-star'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.5 14.42a2 2 0 0 1-.6.44l-.06.02a2 2 0 0 0-1.1 2.47l.97 2.83H7.58c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12v-6.8c0-.69 0-1.03.05-1.3A3 3 0 0 1 4.01 3.7c.28-.06.62-.06 1.3-.06h1.08c1.1 0 1.64 0 2.14.19.5.18.92.54 1.75 1.24l.42.36c.83.71 1.25 1.06 1.75 1.25s1.05.18 2.14.18h1.64c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12v2.02l-1.35-.12a1.5 1.5 0 0 1-.99-.5 1.5 1.5 0 0 0-2.24 0z'
        fill='currentColor'
      />
      <path
        d='M12.43 20.18H9.58c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V6.35a2.6 2.6 0 0 1 2.58-2.58h2.21c.66 0 1 0 1.31.05a4 4 0 0 1 1.58.62c.27.18.51.4 1 .86s.73.68 1 .86a4 4 0 0 0 1.58.62c.32.05.65.05 1.31.05h4.26a3.8 3.8 0 0 1 3.82 3.82'
        stroke='currentColor'
      />
      <path
        d='m16.87 15.07-.62.1c-.85.14-1.27.2-1.37.5-.1.29.21.59.82 1.2l.44.44c.18.18.26.26.3.38s.02.23-.02.48l-.1.62c-.13.85-.2 1.27.05 1.45s.63-.01 1.4-.4l.55-.29c.22-.11.33-.17.45-.17s.23.06.46.17l.55.29c.77.39 1.15.58 1.4.4s.18-.6.05-1.45l-.1-.62c-.04-.25-.06-.37-.02-.48.03-.12.12-.2.3-.38l.44-.44c.6-.61.91-.91.81-1.2-.09-.3-.51-.36-1.36-.5l-.62-.1q-.34-.04-.46-.13c-.1-.07-.16-.18-.27-.4l-.29-.56c-.39-.76-.58-1.14-.89-1.14-.3 0-.5.38-.89 1.14l-.28.56c-.11.22-.17.33-.27.4s-.22.1-.46.13'
        stroke='currentColor'
      />
    </svg>
  )
}
