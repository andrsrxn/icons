import type { Icon } from './types'

export const IconMailStar: Icon = ({
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
      data-slot='icon-ui-mail-star'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='m17.3 15.76-.38.06c-.85.13-1.27.2-1.36.5-.1.28.2.59.81 1.2l.27.26c.17.18.26.26.3.38s.02.24-.02.48l-.06.38c-.13.84-.2 1.27.05 1.45.24.18.63-.02 1.39-.4l.34-.18c.22-.11.33-.17.45-.17s.23.06.45.17l.34.17c.77.4 1.15.59 1.4.4.24-.17.18-.6.04-1.44l-.06-.38c-.03-.24-.05-.37-.02-.48.04-.12.13-.2.3-.38l.27-.27c.6-.6.91-.9.82-1.2s-.52-.36-1.37-.5l-.37-.05c-.25-.04-.37-.06-.47-.13s-.15-.18-.27-.4l-.17-.34c-.39-.77-.58-1.15-.89-1.15-.3 0-.5.38-.89 1.15l-.17.34c-.12.22-.17.33-.27.4s-.22.09-.47.13'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.75 8.55c0-1.87 0-2.81.58-3.08.59-.27 1.3.34 2.72 1.56L10.87 12c.63.54.95.81 1.32.81s.69-.28 1.3-.83l5.43-4.81c1.43-1.28 2.15-1.91 2.74-1.65.59.27.59 1.23.59 3.14v7.49l-1.71-.66h-.04a1 1 0 0 1-.5-.45l-.07-.13a1 1 0 0 0-1.74.14l-.13.21-.09.14a1 1 0 0 1-.67.42l-.08.02q-.32.07-.41.11a1 1 0 0 0-.45 1.47q.05.09.28.33l.08.09a1 1 0 0 1 .22.7v.08c0 .35 0 .53-.04.67a1 1 0 0 1-.66.67c-.15.04-.32.04-.68.04h-5.8c-3.78 0-5.66 0-6.84-1.17S1.75 15.77 1.75 12z'
        fill='currentColor'
      />
      <path
        d='M12.33 20H9.75c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h5.27c3.03 0 4.54 0 5.6.78a4 4 0 0 1 .85.85c.78 1.06.78 2.57.78 5.6'
        stroke='currentColor'
      />
    </svg>
  )
}
