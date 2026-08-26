import type { Icon } from './types'

export const IconStarCircle: Icon = ({
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
      data-slot='ui-icon-star-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0m12.98 1.5L16 17l-3.72-1L9 17l-.39-3.5-1.85-3.14 3.57-1.15L12 6.25l2 2.96 3.44 1.15z'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.55 8.54c.66-1.29 1-1.94 1.5-2.02a1 1 0 0 1 .32 0c.5.08.83.73 1.49 2.02v0c.19.38.29.57.44.7l.11.08c.18.11.39.14.8.21v0c1.44.23 2.16.34 2.39.8q.07.14.1.3c.07.5-.44 1.01-1.47 2.04v0c-.3.3-.45.45-.52.64l-.04.13c-.05.2-.02.4.05.83v0c.22 1.43.33 2.15-.02 2.5a1 1 0 0 1-.26.2c-.45.23-1.1-.1-2.4-.76v0c-.37-.2-.56-.3-.77-.3h-.13c-.2 0-.4.1-.78.3v0c-1.29.66-1.94.99-2.39.76a1 1 0 0 1-.26-.2c-.35-.35-.24-1.07-.02-2.5v0c.07-.42.1-.63.05-.83l-.04-.13a2 2 0 0 0-.52-.64v0c-1.03-1.03-1.54-1.54-1.47-2.04a1 1 0 0 1 .1-.3c.23-.46.95-.57 2.39-.8v0c.41-.07.62-.1.8-.2l.1-.09c.17-.13.26-.32.45-.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
