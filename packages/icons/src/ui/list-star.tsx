import type { Icon } from './types'

export const IconListStar: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-list-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.19 6H2.8' stroke='currentColor' />
      <path d='M11.12 12h-8.3' stroke='currentColor' />
      <path d='M11.12 18h-8.3' stroke='currentColor' />
      <path
        opacity='.2'
        d='M17.54 11.81c.39-.76.58-1.14.89-1.14.3 0 .5.38.89 1.14l.3.59c.11.22.17.33.27.4s.22.1.46.13l.66.1c.84.14 1.27.2 1.36.5.1.29-.2.6-.81 1.2l-.47.47c-.18.17-.26.26-.3.38s-.02.23.02.48l.1.65c.14.85.2 1.27-.05 1.45-.24.18-.62-.01-1.39-.4l-.59-.3c-.22-.11-.33-.17-.45-.17s-.23.06-.45.17l-.6.3c-.76.39-1.14.58-1.39.4-.24-.18-.18-.6-.04-1.45l.1-.65c.04-.25.06-.37.02-.48-.04-.12-.12-.2-.3-.38l-.47-.47c-.6-.6-.9-.91-.81-1.2.1-.3.52-.36 1.36-.5l.66-.1q.34-.04.46-.13c.1-.07.16-.18.27-.4z'
        fill='currentColor'
      />
      <path
        d='M17.54 11.81c.39-.76.58-1.14.89-1.14.3 0 .5.38.89 1.14l.3.59c.11.22.17.33.27.4s.22.1.46.13l.66.1c.84.14 1.27.2 1.36.5.1.29-.2.6-.81 1.2l-.47.47c-.18.17-.26.26-.3.38s-.02.23.02.48l.1.65c.14.85.2 1.27-.05 1.45-.24.18-.62-.01-1.39-.4l-.59-.3c-.22-.11-.33-.17-.45-.17s-.23.06-.45.17l-.6.3c-.76.39-1.14.58-1.39.4-.24-.18-.18-.6-.04-1.45l.1-.65c.04-.25.06-.37.02-.48-.04-.12-.12-.2-.3-.38l-.47-.47c-.6-.6-.9-.91-.81-1.2.1-.3.52-.36 1.36-.5l.66-.1q.34-.04.46-.13c.1-.07.16-.18.27-.4z'
        stroke='currentColor'
      />
    </svg>
  )
}
