import type { Icon } from './types'

export const IconCalendarStar: Icon = ({
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
      data-slot='icon-ui-calendar-star'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.93 14.95c.39-.76.58-1.14.89-1.14.3 0 .5.38.89 1.14l.38.74q.14.33.26.4c.1.08.22.1.47.14l.82.13c.85.13 1.27.2 1.37.5.09.28-.21.59-.82 1.2l-.59.58c-.17.18-.26.27-.3.38s-.02.24.02.48l.13.83c.14.84.2 1.27-.04 1.45s-.63-.02-1.4-.4l-.74-.38c-.22-.12-.33-.17-.45-.17s-.23.05-.46.17l-.74.37c-.76.4-1.14.59-1.4.4-.24-.17-.17-.6-.04-1.44l.13-.83c.04-.24.06-.37.02-.48s-.12-.2-.3-.38l-.59-.59c-.6-.6-.9-.9-.81-1.2.1-.29.52-.36 1.36-.5l.82-.12c.25-.04.37-.06.47-.13s.15-.18.27-.4z'
        fill='currentColor'
      />
      <path
        d='m15.81 16.23-.82.13c-.84.13-1.27.2-1.36.5-.1.28.2.59.81 1.2l.59.58c.18.18.26.27.3.38s.02.24-.02.48l-.13.83c-.13.84-.2 1.27.05 1.45s.63-.02 1.4-.4l.73-.38c.23-.12.34-.17.46-.17s.23.05.45.17l.74.37c.77.4 1.15.59 1.4.4.24-.17.18-.6.04-1.44l-.13-.83c-.04-.24-.06-.37-.02-.48s.13-.2.3-.38l.6-.59c.6-.6.9-.9.8-1.2s-.51-.36-1.36-.5l-.82-.12c-.25-.04-.37-.06-.47-.13s-.15-.18-.26-.4l-.38-.75c-.4-.76-.59-1.14-.9-1.14-.3 0-.5.38-.88 1.14l-.38.74c-.12.23-.17.34-.27.4-.1.08-.22.1-.47.14'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M2.99 7.64v-.36a4 4 0 0 1 3.84-3.84h10.29a4 4 0 0 1 3.84 3.84v.45a1 1 0 0 1-.96.96H3.95a1 1 0 0 1-.96-.96z'
        fill='currentColor'
      />
      <path
        d='M20.97 12.08v-.64c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-1.98c-3.77 0-5.66 0-6.83 1.17S3 7.67 3 11.44v1.97c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h.96'
        stroke='currentColor'
      />
      <path d='M7.67 1.74v3.4' stroke='currentColor' />
      <path d='M16.34 1.74v3.4' stroke='currentColor' />
      <path d='M20.54 8.69H3.81' stroke='currentColor' />
    </svg>
  )
}
