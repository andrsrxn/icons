import type { Icon } from './types'

export const IconFolderHeart: Icon = ({
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
      data-slot='ui-icon-folder-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.28 14.17a1.96 1.96 0 0 0-1.43 2.98l1.42 2.3H8.7c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12V7.27a3 3 0 0 1 2.71-2.7c.14-.02.31-.02.65-.02h.75c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.05.04c.83.7 1.24 1.06 1.75 1.25.5.18 1.04.18 2.14.18h.66c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12V14h-2.52z'
        fill='currentColor'
      />
      <path
        d='M21.3 11.04c0-.58 0-.86-.04-1.1a3 3 0 0 0-2.47-2.48c-.24-.04-.53-.04-1.1-.04h-3.67c-.83 0-1.25 0-1.64-.1a3 3 0 0 1-.59-.24 6 6 0 0 1-1.27-1.04c-.61-.56-.92-.85-1.28-1.03a3 3 0 0 0-.59-.24c-.39-.1-.8-.1-1.64-.1H5.02A2.33 2.33 0 0 0 2.7 6.99v6.46c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h4.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.33 13.8c-.9 0-1.54.66-1.75 1-.2-.34-.85-1-1.74-1-1.11 0-1.95 1.26-1.59 2.6s2.49 2.44 3.33 3.4c.85-.96 2.98-2.06 3.34-3.4s-.48-2.6-1.6-2.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
