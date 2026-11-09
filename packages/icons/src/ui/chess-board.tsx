import type { Icon } from './types'

export const IconChessBoard: Icon = ({
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
      data-slot='icon-ui-chess-board'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M15.07 15.07V8.93H8.92v6.14z' fill='currentColor' />
      <path
        opacity='.2'
        d='M19.68 8.93c.5 0 .74 0 .94-.09a1 1 0 0 0 .5-.5c.1-.2.1-.45.1-.95 0-1.5 0-2.25-.27-2.83a3 3 0 0 0-1.51-1.51c-.59-.27-1.34-.27-2.84-.27-.5 0-.75 0-.94.1a1 1 0 0 0-.5.5c-.1.2-.1.44-.1.94v2.6c0 .95 0 1.42.3 1.72.3.29.76.29 1.7.29z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.68 15.25c.5 0 .74 0 .94.09q.34.16.5.5c.1.2.1.44.1.94 0 1.5 0 2.25-.27 2.84a3 3 0 0 1-1.51 1.51c-.59.26-1.34.26-2.84.26-.5 0-.75 0-.94-.09a1 1 0 0 1-.5-.5c-.1-.2-.1-.44-.1-.94v-2.61c0-.94 0-1.42.3-1.7.3-.3.76-.3 1.7-.3z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.32 8.93c-.5 0-.75 0-.95-.09a1 1 0 0 1-.5-.5c-.1-.2-.1-.45-.1-.95 0-1.5 0-2.25.27-2.83a3 3 0 0 1 1.51-1.51c.59-.27 1.34-.27 2.84-.27.5 0 .75 0 .94.1q.35.15.5.5c.1.2.1.44.1.94v2.6c0 .95 0 1.42-.3 1.72-.3.29-.76.29-1.7.29z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.32 15.25c-.5 0-.75 0-.95.09a1 1 0 0 0-.5.5c-.1.2-.1.44-.1.94 0 1.5 0 2.25.27 2.84a3 3 0 0 0 1.51 1.51c.59.26 1.34.26 2.84.26.5 0 .75 0 .94-.09a1 1 0 0 0 .5-.5c.1-.2.1-.44.1-.94v-2.61c0-.94 0-1.42-.3-1.7-.3-.3-.76-.3-1.7-.3z'
        fill='currentColor'
      />
      <path
        d='M2.6 13.4v-2.8c0-3.76 0-5.65 1.18-6.82 1.17-1.17 3.06-1.17 6.83-1.17h2.78c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path d='M8.75 2.6v18.8' stroke='currentColor' />
      <path d='M15.24 2.6v18.8' stroke='currentColor' />
      <path d='M2.6 15.25h18.8' stroke='currentColor' />
      <path d='M2.6 8.75h18.8' stroke='currentColor' />
    </svg>
  )
}
